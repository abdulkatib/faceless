import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import CheckBox from "react-native-check-box";
import * as Yup from "yup";

import Screen from "../components/Screen";
import Text from "../components/Text";
import ErrorMessage from "../components/forms/ErrorMessage";
import { Form, FormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email").trim(),
  password: Yup.string().required().min(4).label("Password"),
  images: Yup.array().min(1, "Please select at least one image."),
});

function RegisterScreen() {
  //TODO ===> if !acceptedTerms DO NOT submit the from//
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const location = useLocation();

  const CheckBoxComponent = () => {
    return (
      <View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            name="terms"
            isChecked={acceptedTerms}
            onClick={() => setAcceptedTerms(!acceptedTerms)}
            style={styles.checkbox}
          />
          <Text onPress={() => setAcceptedTerms(!acceptedTerms)}>
            I accept the Terms of Faceless
            {acceptedTerms && "👍"}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.logoTitle}>Faceless</Text>
      <Form
        initialValues={{
          name: "",
          username: "",
          email: "",
          password: "",
          terms: "",
          images: [],
        }}
        onSubmit={(values) => {
          values.terms = acceptedTerms;
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Full Name"
        />
        <FormField
          autoCorrect={false}
          icon="mail-ru"
          name="username"
          placeholder="Username"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <FormImagePicker name="images" />
        <CheckBoxComponent name="terms" />
        <ErrorMessage
          error="You should accept Faceless terms 😅"
          visible={!acceptedTerms}
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // backgroundColor: colors.main,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  logoTitle: {
    alignSelf: "center",
    marginBottom: 30,
    color: colors.primary,
    fontSize: 30,
  },
});

export default RegisterScreen;
