import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { textStyles, styles } from "../Styles";
import { TextInput } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import { useStateValue } from "../../../providers/StepsContext";

const PasoB = () => {
  const [context, dispatch] = useStateValue();
  const [sexo, setSexo] = useState("");
  const [preferencia, setPreferencia] = useState("");

  const sexOpciones = [
    { label: "Hombre", value: "Hombre" },
    { label: "Mujer", value: "Mujer" },
    { label: "No Binario", value: "No" },
  ];
  return (
    <>
      <View>
        <Text style={[textStyles.general, textStyles.boxInfo]}>
          Necesitamos saber de ti para encontrar tu pareja perfecta
        </Text>
        <Text
          style={[
            textStyles.general,
            textStyles.questionTitle,
            { marginVertical: 10 },
          ]}
        >
          Más sobre ti...
        </Text>
        <View style={styles.inputGroup}>
          <TextInput
            underlineColor="#C52233"
            label="Nombre y Apellido (*):"
            mode="flat"
            theme={paperTheme.input}
            style={styles.input}
            value={context.fullNombre}
            onChangeText={(_fullName) =>
              dispatch({ type: "SET_NOMBRE", value: _fullName })
            }
          />
          <TextInput
            underlineColor="#C52233"
            label="Fecha de Nacimiento:"
            mode="flat"
            theme={paperTheme.input}
            style={styles.input}
            value={context.fechaNacimiento}
            onChangeText={(_fechaNacimiento) =>
              dispatch({ type: "SET_NACIMIENTO", value: _fechaNacimiento })
            }
          />
          <TextInput
            underlineColor="#C52233"
            label="Donde vivo actualmente  (*):"
            mode="flat"
            theme={paperTheme.input}
            style={styles.input}
            value={context.ciudad}
            onChangeText={(_ciudad) =>
              dispatch({ type: "SET_CIUDAD", value: _ciudad })
            }
          />
          <View>
            <Text style={[textStyles.general, { marginVertical: 10 }]}>
              Sexo (*):
            </Text>
            <RNPickerSelect
              onValueChange={(value) => dispatch({type: "SET_SEXO", value})}
              items={sexOpciones}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={true}
              value={context.sexo}
            />
          </View>

          <View>
            <Text style={[textStyles.general, { marginVertical: 10 }]}>
              Busco salir con (*):
            </Text>
            <RNPickerSelect
              onValueChange={(value) => dispatch({type: "SET_PREFERENCIA", value})}
              items={[{ label: "Mujeres", value: "Mujeres" },
              { label: "Hombres", value: "Hombres" }]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={true}
              value={context.preferencia}
            />
          </View>

          <Text style={[textStyles.general, { marginTop: 10 }]}>
            Los campos con (*) son obligatorios
          </Text>
          <Text
            style={{
              marginVertical: 40,
              color: "#797A7A",
              fontSize: 16,
              textAlign: "center",
              letterSpacing: 1,
            }}
          >
            Por ahora con estos datos básicos de ti bastará, luego podrás
            personalizar más preferencias
          </Text>
        </View>
      </View>
    </>
  );
};

const paperTheme = {
  input: {
    colors: {
      primary: "#C52233",
      text: "#797A7A",
      placeholder: "#797A7A",
      background: "rgba(250,250,250,0)",
    },
  },
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "rgba(197, 34, 51, 0.2)",
    borderRadius: 4,
    color: "#797A7A",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "rgba(197, 34, 51, 0.2)",
    borderRadius: 8,
    color: "#797A7A",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default PasoB;
