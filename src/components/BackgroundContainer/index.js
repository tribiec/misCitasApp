import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

const BackgroundContainer = ({ children, image }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} imageStyle={{borderRadius: 16}} resizeMode="cover">
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 2,
    height: "100%",
    width: "100%"
  },
  image: {
    flex: 1
  },
});

export default BackgroundContainer;
