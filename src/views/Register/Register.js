import React from "react";
import { View } from "react-native";
import { ContextProvider as FormContext } from "../../providers/StepsContext";
import Steps from "../../components/Steps"

const Register = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
        <View style={registerBox}>
          <FormContext>
            <Steps navigation={navigation}/>
          </FormContext>
        </View>
    </View>
  );
};

const registerBox = {
  minHeight: "100%",
  marginHorizontal: 15
}

export default Register;
