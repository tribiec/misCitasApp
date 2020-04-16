import { StyleSheet } from "react-native";

const textStyles = StyleSheet.create({
  general: {
    color: "#797A7A",
    textAlign: "center",
  },
  infoPersonal: {
    color: "#797A7A",
    marginTop: 30,
    fontSize: 2,
    fontStyle: "italic",
    paddingLeft: 4,
  },
  boxInfo: {
    padding: 20,
    fontSize: 16,
    fontWeight: "300"
  },
  questionTitle: {
    fontSize: 23,
    marginVertical: 5
  },
  question: {
    color: "#797A7A",
    fontSize: 17,
    paddingLeft: 15,
    marginTop: 20,
  },
  inputLabel: {
    color: "#797A7A",
    fontSize: 15,
  },
  inputBottom: {
    color: "white",
    textAlign: "center",
  },
  titleInputGroup: {
    marginBottom: 20,
  }
});

const styles = StyleSheet.create({
  registerBox: {
    minHeight: "100%",
    marginHorizontal: 15
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 30
  },
  inputGroup: {
    marginBottom: 0,
    paddingHorizontal: 20,
  },
  input: {
    marginVertical: 5
  },
  inputsSelect: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#C52233",
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  ingresoBox: {
    paddingHorizontal: "8%"
  }
});

export { textStyles, styles };
