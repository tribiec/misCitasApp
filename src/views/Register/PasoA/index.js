import React from "react";
import { View, Text } from "react-native";
import { textStyles, styles } from "../Styles";
import RNPickerSelect from "react-native-picker-select";
import TagInput from "../../../components/TagInput";
import { useStateValue } from "../../../providers/StepsContext";

const PasoA = () => {
  const [context, dispatch] = useStateValue();
  return (
    <>
      <Text style={[textStyles.general, textStyles.boxInfo]}>
        Necesitamos saber de ti para encontrar tu pareja perfecta
      </Text>
      <Text style={[textStyles.general, textStyles.questionTitle]}>
        Estudias actualmente?
      </Text>
      <View style={[textStyles.general, styles.picker]}>
        <RNPickerSelect
          placeholder={{ label: "Selecciona una opcion", value: "" }}
          placeholderTextColor="white"
          onValueChange={(value) => dispatch({action: "SET_SELECTED", value: value.value})}
          items={[
            { label: "Si", value: "si" },
            { label: "No", value: "no" },
            { label: "Pronto", value: "pronto" },
          ]}
          style={{
            borderColor: "black",
            borderRadius: 2,
          }}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text
          style={[
            textStyles.general,
            textStyles.questionTitle,
            textStyles.titleInputGroup,
          ]}
        >
          Te dedicas a:
        </Text>
        <Text style={textStyles.inputLabel}>Mis Actividades:</Text>
        <TagInput
          placeholder="Ej: Deportista, Filósofo, Astronauta, Fisico Nuclear..."
          data={context.tags}
          setData={dispatch}
          tipo="TAGS"
        />
        <Text style={[textStyles.general]}>
          Escribe tu actividad y separalas con comas (,)
        </Text>
      </View>
      <View style={styles.inputGroup}>
        <Text
          style={[
            textStyles.general,
            textStyles.questionTitle,
            textStyles.titleInputGroup,
          ]}
        >
          Cuales son tus gustos o Hobbies?
        </Text>
        <Text style={textStyles.inputLabel}>Gustos:</Text>
        <TagInput
          placeholder="Ej: Beber, Comer"
          data={context.gustos}
          setData={dispatch}
          tipo="GUSTOS"
        />
        <Text style={[textStyles.general]}>
          Escribe tu gusto/hobbie y separalas con comas (,)
        </Text>
      </View>
    </>
  );
};

export default PasoA;
