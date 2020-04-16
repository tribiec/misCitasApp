import { Alert } from "react-native";

const Alerta = (titulo, msg) =>
  Alert.alert(
    titulo,
    msg,
    [{ text: "OK", onPress: () => {} }],
    { cancelable: false }
  );

export default Alerta;
