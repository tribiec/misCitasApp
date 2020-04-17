import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const Header = ({ navigation }) => {
  return (
    <View style={Styles.header}>
      <View style={{ width: "33%" }}>
        <TouchableOpacity
          key={1}
          onPress={() => {
            navigation.navigate("Perfil");
          }}
          style={{ alignSelf: "flex-start", marginLeft: 20 }}
        >
          <Icon
            name="user"
            type="font-awesome"
            size={35}
            color="#C52233"
            iconStyle={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 2.0,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ width: "33%" }}>
        <TouchableOpacity
          key={1}
          onPress={() => {}}
          style={{
            alignSelf: "center",
          }}
        >
          <Icon
            name="heart"
            type="font-awesome"
            size={35}
            color="#C52233"
            iconStyle={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 2.0,
            }}
          />
          <Text>Buscador</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "33%" }}>
        <TouchableOpacity
          key={2}
          onPress={() => {
            /*navigation.navigate("Mensajes")*/
          }}
          style={{
            alignSelf: "flex-end",
            marginRight: 20,
          }}
        >
          <Icon
            name="comments"
            type="font-awesome"
            size={35}
            color="#C52233"
            iconStyle={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 2.0,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Header;
