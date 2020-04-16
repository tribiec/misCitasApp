import React, { useState } from "react";
import { View, Text } from "react-native";
import { textStyles, styles } from "../Styles";
import { CheckBox } from "react-native-elements";
import { TextInput } from "react-native-paper";
import TagInput from "../../../components/TagInput";
import { useStateValue } from "../../../providers/StepsContext";

const PasoA = () => {
  const [context, dispatch] = useStateValue();
  const [universidad, setUniversidad] = useState("");

  return (
    <>
      <Text style={[textStyles.general, textStyles.boxInfo]}>
        Necesitamos saber de ti para encontrar tu pareja perfecta
      </Text>
      <Text style={[textStyles.general, textStyles.questionTitle]}>
        Estudias actualmente?
      </Text>
      <View style={styles.checkBox}>
        <CheckBox
          center
          title="Si"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={context.estudia}
          containerStyle={{
            backgroundColor: null,
            borderRadius: null,
            borderWidth: null,
            color: "blue",
          }}
          checkedColor="#C4C4C4"
          titleProps={{ color: "blue" }}
          onPress={() => dispatch({ type: "SET_ESTUDIA" })}
        />
        <CheckBox
          center
          title="No"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={!context.estudia}
          containerStyle={{
            backgroundColor: null,
            borderRadius: null,
            borderWidth: null,
          }}
          onPress={() => dispatch({ type: "SET_ESTUDIA" })}
        />
      </View>
      {context.estudia ? <>
      <View>
      <Text
          style={[
            textStyles.questionTitle,
            {
              marginLeft: 10,
              color: "#797A7A"
            }
          ]}
        >
          Donde estudias?
        </Text>
        <TextInput
          underlineColor="#C52233"
          label="Universidad:"
          mode="flat"
          theme={paperTheme.input}
          value={context.universidad}
          style={{width: "100%", marginBottom: 50}}
          onChangeText={(_universidad) => dispatch({type: "SET_UNIVERSIDAD", value: _universidad})}
        />
      </View>
      </> : null}
      <View style={styles.inputGroup}>
        <Text
          style={[
            textStyles.general,
            textStyles.questionTitle,
            textStyles.titleInputGroup
          ]}
        >
          Cuales son tus gustos o Hobbies?
        </Text>
        <Text style={[textStyles.inputLabel,textStyles.titleInputGroup]}>Gustos:</Text>
        <TagInput
          placeholder="Ej: Beber, Comer"
          data={context.gustos}
          setData={dispatch}
          tipo="GUSTOS"
        />
        <Text style={{ marginHorizontal: 20, color: "#C52233", textAlign: "center"}}>
          Escribe tu gusto/hobbie y separalas con comas (,)
        </Text>
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

export default PasoA;
