import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";

const Button = ({ style, name, text, size = 25, color = "#DDDDDF", iconColor = "white" }) => {
  return (
    <TouchableOpacity style={style}>
      <Icon
        reverse
        name={name}
        type="font-awesome"
        color={color}
        iconStyle={{
          shadowColor: "black",
          shadowOffset: { height: 2, width: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 2,
          color: iconColor
        }}
        containerStyle={{
          shadowColor: "black",
          shadowOffset: { height: 1, width: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}
        size={size}
      />
      {text ? <Text>{text}</Text> : null}
    </TouchableOpacity>
  );
};

export default Button;
