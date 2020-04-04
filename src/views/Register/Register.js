import React from "react";
import { View, Text } from "react-native";
import { ContextProvider } from "../../providers/StepsContext";
import BackgroundContainer from "../../components/BackgroundContainer";
import { textStyles, styles } from "./Styles";
import Steps from "./Steps"

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <BackgroundContainer>
        <Text style={textStyles.infoPersonal}>Informacion Personal</Text>
        <View style={styles.registerBox}>
          <ContextProvider>
            <Steps/>
          </ContextProvider>
        </View>
      </BackgroundContainer>
    </View>
  );
};

export default Login;
