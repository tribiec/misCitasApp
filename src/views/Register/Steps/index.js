import React from "react";
import { View, Alert } from "react-native";
import {
  ProgressSteps as Pasos,
  ProgressStep as Paso,
} from "../../../../temp/libs/react-native-progress-step-mod";
import { useStateValue } from "../../../providers/StepsContext";
import PasoA from "../PasoA";
import PasoB from "../PasoB";
import PasoC from "../PasoC";
const Steps = () => {
  const [context, dispatch] = useStateValue();

  const generarAlerta = () =>
  Alert.alert(
    "Faltan Campos",
    "Porfavor llene todos los campos obligatorios marcados con (*)",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );

  return (
      <Pasos>
        <Paso
          label="Informacion Personal"
          nextBtnText="Siguiente"
          nextBtnTextStyle={{ color: "white" }}
        >
          <PasoA />
        </Paso>
        <Paso
          label="Mas sobre ti"
          nextBtnText="Siguiente"
          nextBtnTextStyle={{ color: "white" }}
          previousBtnText="Atras"
          previousBtnTextStyle={{ color: "white" }}
        >
          <View style={{ alignItems: "center" }}>
            <PasoB />
          </View>
        </Paso>
        <Paso
          label="Datos de Acceso"
          finishBtnText="Finalizar Registro"
          nextBtnTextStyle={{ color: "white" }}
          previousBtnText="Atras"
          previousBtnTextStyle={{ color: "white" }}
          onSubmit={() => {
           console.log(context);
           if(context.correo == "" && context.clave == "" && context.fullName == "" && context.gender == null){
            generarAlerta();
          }else{
            Alert.alert(
              "Formulario",
              "Campos Ok...Haciendo peticion al API... (disponible proxima entrega)",
              [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: false }
            );
            console.log(context);
          }
          }}
        >
          <View style={{ alignItems: "center" }}>
            <PasoC />
          </View>
        </Paso>
      </Pasos>
  );
};

export default Steps;
