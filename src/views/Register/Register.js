import React from "react";
import { View } from "react-native";
import { ContextProvider } from "../../providers/StepsContext";
import Steps from "../../components/Steps"

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
        <View style={registerBox}>
          <ContextProvider>
            <Steps/>
          </ContextProvider>
        </View>
    </View>
  );
};

const registerBox = {
  minHeight: "100%",
  marginHorizontal: 15
}

export default Login;
