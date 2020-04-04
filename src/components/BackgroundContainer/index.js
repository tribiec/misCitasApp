import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const BackgroundContainer = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/drink.jpg")}
        style={styles.image}
        resizeMode="cover"
      >
        {props.children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 2,
  },
  image: {
    flex: 1,
  },
});

export default BackgroundContainer;
