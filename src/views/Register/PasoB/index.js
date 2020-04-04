import React from "react";
import { View, Text } from "react-native";
import { textStyles, styles } from "../Styles";
import { TextInput } from "react-native-paper";
import { useStateValue } from "../../../providers/StepsContext";
import RNPickerSelect from "react-native-picker-select";

const PasoB = () => {
  const [context, dispatch] = useStateValue();
  return (
    <>
      <View>
        <Text style={[textStyles.general, textStyles.boxInfo]}>
          Necesitamos saber de ti para encontrar tu pareja perfecta
        </Text>
        <Text style={[textStyles.questionTitle, textStyles.masInfo]}>
          Más sobre ti...
        </Text>
        <View style={styles.inputGroup}>
          <TextInput
            underlineColor="white"
            label="Nombre y Apellido (*)"
            mode="flat"
            theme={paperTheme.input}
            style={styles.input}
            value={context.fullName}
            onChangeText={(_fullName) =>
              dispatch({ type: "SET_NAME", value: _fullName })
            }
          />
          <TextInput
            underlineColor="white"
            label="Fecha de Nacimiento"
            mode="flat"
            theme={paperTheme.input}
            style={styles.input}
            value={context.birthDate}
            onChangeText={(_birthDate) =>
              dispatch({ type: "SET_BIRTH", value: _birthDate })
            }
          />
          <TextInput
            underlineColor="white"
            label="Donde vivo actualmente:"
            mode="flat"
            theme={paperTheme.input}
            style={styles.input}
            value={context.location}
            onChangeText={(_location) =>
              dispatch({ type: "SET_LOCATION", value: _location })
            }
          />
          <View
            style={styles.inputsSelect}
          >
            <Text style={textStyles.question}>Sexo (*):</Text>
            <View style={{ paddingTop: 22, paddingLeft: 20 }}>
              <RNPickerSelect
                placeholder={{ label: "Seleccione sexo", value: "" }}
                placeholderTextColor="white"
                onValueChange={(gender) =>
                  dispatch({ type: "SET_GENDER", value: gender.value })
                }
                items={[
                  { label: "Hombre", value: "male" },
                  { label: "Mujer", value: "female" },
                  { label: "No Binario", value: "nonbinary" },
                ]}
              />
            </View>
          </View>
          <View
            style={styles.inputsSelect}
          >
            <Text style={textStyles.question}>Busco salir con:</Text>
            <View style={{ paddingTop: 22, paddingLeft: 20 }}>
              <RNPickerSelect
                placeholder={{ label: "Sin Preferencia", value: "" }}
                placeholderTextColor="white"
                onValueChange={(preferencia) =>
                  dispatch({
                    type: "SET_PREFERENCIA",
                    value: preferencia.value,
                  })
                }
                items={[
                  { label: "Hombre", value: "male" },
                  { label: "Mujer", value: "female" },
                  { label: "No Binario", value: "nonbinary" },
                ]}
              />
            </View>
          </View>
        <Text style={[textStyles.general, {marginTop: 10}]}>Los campos con (*) son obligatorios</Text>
        </View>
      </View>
    </>
  );
};

const paperTheme = {
  input: {
    colors: {
      primary: "white",
      text: "white",
      placeholder: "white",
      background: "rgba(250,250,250,0)",
    },
  },
};

export default PasoB;
