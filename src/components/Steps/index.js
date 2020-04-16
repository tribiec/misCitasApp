import React, { useState } from "react";
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
  const [errors, setErrors] = useState({
    pasoA: false,
    pasoB: false,
    pasoC: false
  });

  const generarAlerta = (titulo, msg) =>
    Alert.alert(
      titulo,
      msg,
      [{ text: "Ok", onPress: () => {}}],
      { cancelable: false }
    );

  const validarPasoA = () => {
    if(context.estudia && context.universidad.length === 0){
      setErrors({...errors, pasoA: true});
      generarAlerta("Faltan Campos","Si estudias, debes colocar el nombre de la universidad o escuela");
    }else{
      if(errors.pasoA) setErrors({...errors, pasoA: false});
    }
  }

  const validarPasoB = () => {
    if(context.fullNombre.length < 5 || context.ciudad.length === 0 || context.preferencia === null || context.sexo === null){
      setErrors({...errors, pasoB: true});
      generarAlerta("Faltan Campos","Debes llenar todos los campos obligatorios")
    }else{
      if(errors.pasoB) setErrors({...errors,pasoB: false});
    }
  }

  const validarPasoC = () => {
    if(!(/^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,6}?\.[a-zA-Z]{2,6}$/.test(context.correo))){
      setErrors({...errors, pasoC: true});
      generarAlerta("Campos Invalidos","Porfavor ingrese un correo valido")
    }else if(context.clave !== context.clave_conf){
      setErrors({...errors, pasoC: true});
      generarAlerta("Campos Invalidos","Las contraseñas no coinciden...")
    }else if(context.clave.length < 7){
      setErrors({...errors, pasoC: true});
      generarAlerta("Campos Invalidos","La contraseña debe tener minimo 7 digitos...")
    }else{
      if(errors.pasoC) setErrors({...errors,pasoC: false});
    }
  }

  return (
    <Pasos>
      <Paso
        nextBtnText="Siguiente"
        nextBtnTextStyle={buttonStyle}
        onNext={validarPasoA}
        errors={errors.pasoA}
      >
        <PasoA />
      </Paso>
      <Paso
        label="Mas sobre ti"
        nextBtnText="Siguiente"
        nextBtnTextStyle={buttonStyle}
        previousBtnText="Atras"
        previousBtnTextStyle={buttonStyle}
        onNext={validarPasoB}
        errors={errors.pasoB}
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
        onSubmit={validarPasoC}
        errors={errors.pasoC}
      >
        <PasoC />
      </Paso>
    </Pasos>
  );
};

const buttonStyle = { color: "#797A7A" };

export default Steps;
