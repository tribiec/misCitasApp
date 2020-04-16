import React from "react";
import { View, Text } from "react-native";
import Button from "../Button";

const PicturesContainer = () => {
  const Picture = () => {
    return (
      <View
        style={{
          backgroundColor: "#C52233",
          height: 150,
          width: 100,
          marginBottom: 30,
          borderRadius: 7,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          shadowColor: "black",
          shadowOffset: { height: 1, width: 0},
          shadowOpacity: 0.25,
          shadowRadius: 1
        }}
      >
        <Button size={10} name="plus" color="white" iconColor="#C52233" ></Button>
      </View>
    );
  };

  return (
    <View
      style={{
        marginHorizontal: 10,
        height: 500,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <Picture />
      <Picture />
      <Picture />
      <Picture />
      <Picture />
      <Picture />
    </View>
  );
};

export default PicturesContainer;
