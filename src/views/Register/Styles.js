import { StyleSheet } from "react-native";

const textStyles = StyleSheet.create({
  general: {
    color: "white",
    textAlign: "center",
  },
  infoPersonal: {
    color: "white",
    marginTop: 30,
    fontSize: 24,
    fontStyle: "italic",
    paddingLeft: 4,
  },
  boxInfo: {
    padding: 20,
    fontSize: 16,
    fontWeight: "300",
  },
  questionTitle: {
    fontSize: 23,
  },
  question: {
    color: "white",
    fontSize: 17,
    paddingLeft: 15,
    marginTop: 20,
  },
  masInfo: {
    color: "white",
    paddingLeft: 10,
  },
  inputLabel: {
    color: "white",
    fontSize: 15,
  },
  inputBottom: {
    color: "white",
    textAlign: "center",
  },
  titleInputGroup: {
    marginBottom: 20,
  },
  titleDatosIngreso:{
    color: "white",
    fontSize: 24,
    marginTop: 40
  }
});

const styles = StyleSheet.create({
  registerBox: {
    marginTop: 20,
    backgroundColor: "#C52233",
    minHeight: 550,
  },
  picker: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
  inputGroup: {
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  input: {
    marginTop: 5,
  },
  inputsSelect: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  ingresoBox: {
    paddingHorizontal: "8%"
  }
});

export { textStyles, styles };
