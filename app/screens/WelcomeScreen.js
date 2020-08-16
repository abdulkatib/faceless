import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import Button from "../components/Button";
import Text from "../components/Text";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>faceless</Text>
        <Text style={styles.slogan}> Say it as you feel it</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" />
        <Button title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 50,
    fontWeight: "600",
    paddingTop: 15,
    color: colors.primary,
  },
  slogan: {
    fontSize: 20,
    fontWeight: "600",
    // paddingVertical: 20,
    color: colors.primary,
  },
});

export default WelcomeScreen;
