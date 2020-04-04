import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MisCitas.com</Text>
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    minWidth: "100%",
    backgroundColor: "#C52233",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  logo: {
    color: "white",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 28,
    lineHeight:40
  },
  text: {
    marginTop: 1,
    fontStyle: "italic",
    color: "white"
  }
});

export default SplashScreen;
