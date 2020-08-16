import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CheckBox from "react-native-check-box";
import * as Yup from "yup";

import Screen from "../components/Screen";
import Text from "../components/Text";
import Button from "../components/Button";

import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [isSelected, setSelection] = useState(false);

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
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
        <View
          onClick={() => setSelection(!isSelected)}
          style={styles.container}
        >
          <View style={styles.checkboxContainer}>
            <CheckBox
              name="terms"
              isChecked={isSelected}
              onClick={() => setSelection(!isSelected)}
              style={styles.checkbox}
            />
            <Text>
              I have read and agree to the Terms: {isSelected ? "👍" : "👎"}
            </Text>
          </View>
        </View>
        {isSelected ? (
          <SubmitButton title="Register" />
        ) : (
          <Button title="Register" color="medium" />
        )}
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
