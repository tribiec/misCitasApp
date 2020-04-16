import React from "react";
import { View, Alert } from "react-native";
import {
    ProgressSteps as Pasos,
    ProgressStep as Paso,
  } from "../../../temp/libs/react-native-progress-step-mod";
import { useStateValue } from "../../providers/StepsContext";
import PasoA from "./PasoA"
import PasoB from "./PasoB";
import PasoC from "./PasoC";
const Steps = () => {
  const [context, dispatch] = useStateValue();

  const generarAlerta = (titulo, msg) =>
    Alert.alert(
      titulo,
      msg,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  const buttonStyle = { color: "#797A7A" };

  return (
    <Pasos>
      <Paso
        nextBtnText="Siguiente"
        nextBtnTextStyle={buttonStyle}
        onNext={() => {
          alert(1);
        }}
      >
        <PasoA />
      </Paso>
      <Paso
        label="Mas sobre ti"
        nextBtnText="Siguiente"
        nextBtnTextStyle={buttonStyle}
        previousBtnText="Atras"
        previousBtnTextStyle={buttonStyle}
      >
        <View style={{ alignItems: "center" }}>
          <PasoB />
        </View>
      </Paso>
      <Paso
        finishBtnText="Finalizar Registro"
        nextBtnTextStyle={buttonStyle}
        previousBtnText="Atras"
        previousBtnTextStyle={buttonStyle}
        onSubmit={() => {}}
      >
        <PasoC />
      </Paso>
    </Pasos>
  );
};

export default Steps;
