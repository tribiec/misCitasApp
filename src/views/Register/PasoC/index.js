import React from "react";
import { View, Text } from "react-native";
import { textStyles, styles } from "../Styles";
import { useStateValue } from "../../../providers/StepsContext";
import { TextInput } from 'react-native-paper';

const PasoC = () => {
    const [context, dispatch] = useStateValue();
  return (
    <View>
      <Text style={[textStyles.general, textStyles.boxInfo]}>
          Ya casi terminamos, solo a un paso de lograr tu cita
      </Text>
      <View style={styles.ingresoBox}>
        <Text style={textStyles.titleDatosIngreso}>Datos de Ingreso</Text>
        <View style={styles.inputGroup}>
        <TextInput
            underlineColor="white"
            label="Correo Electronico (*)"
            mode="flat"
            theme={paperTheme.input}
            style={styles.input}
            value={context.correo}
            onChangeText={(_correo) =>
              dispatch({ type: "SET_CORREO", value: _correo })
            }
          />
          <TextInput
            underlineColor="white"
            label="Contraseña (*)"
            mode="flat"
            theme={paperTheme.input}
            style={styles.input}
            value={context.clave}
            onChangeText={(_clave) =>
              dispatch({ type: "SET_CLAVE", value: _clave })
            }
            secureTextEntry
          />
          <Text style={[textStyles.general, {marginTop: 10}]}>Los campos con (*) son obligatorios</Text>
      </View>
        </View>
    </View>
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

export default PasoC;
