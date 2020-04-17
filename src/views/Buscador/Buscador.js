import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useStateValue } from "../../providers/ContextProvider";
import Swipe from "../../components/Swipe";
import Header from "../../components/Header";
import Instrucciones from "../../components/Message";
import Fetch from "../../providers/Fetch";

const Buscador = ({ navigation }) => {
  const [leido, setLeido] = useState(false);
  const [cards, setCards] = useState([]);
  const [context, dispatch] = useStateValue();

  useEffect(() => {
    const cargarCards = async () => {
      try{
        const resp = await Fetch.get('user/swipes', context.token);
        if(resp.status === 200 && resp.message.lenght === 0){
          setCards([
            {
              fullNombre: "Margot Robbie",
              bio: "Bendecida x dios",
              universidad: "Universidad Rafael Urdaneta",
              distancia: 6,
              image: require("../../../assets/1.jpg"),
            },
            {
              fullNombre: "Megan Fox",
              bio: "Haciendo peliculas",
              universidad: null,
              distancia: 6,
              image: require("../../../assets/2.png"),
            },
            {
              fullNombre: "Megan Fox",
              bio: "Haciendo peliculas",
              universidad: null,
              distancia: 6,
              image: require("../../../assets/3.png"),
            },
            {
              fullNombre: "Megan Fox",
              bio: "Haciendo peliculas",
              universidad: null,
              distancia: 6,
              image: require("../../../assets/4.jpg"),
            },
            {
              fullNombre: "Megan Fox",
              bio: "Haciendo peliculas",
              universidad: null,
              distancia: 6,
              image: require("../../../assets/5.jpg"),
            },
          ]);
        }else{
          setCards(resp.message);
        }
      }catch(err){
        console.log("Error en cargar Cards");
      }
    }
    cargarCards();
  }, []);

  return (
    <View>
      <Header navigation={navigation} />
      {!leido ? (
        <Instrucciones style={instruccionesStyle}>
          <Text style={[Styles.text, { marginBottom: 40 }]}>
            Desliza hacia la Izquierda para dar Like y hacia la Derecha para
            Descartar
          </Text>
          <TouchableOpacity onPress={() => setLeido(true)}>
            <Text style={[Styles.text, { marginBottom: 80 }]}>Continuar</Text>
          </TouchableOpacity>
        </Instrucciones>
      ) : (
        <Swipe cards={cards}/>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FBFBFC",
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "300",
    color: "#797A7A",
    textTransform: "uppercase",
    textShadowColor: "#DDDDDF",
    textShadowRadius: 2,
    textShadowOffset: {
      height: 2,
      width: 0,
    },
  },
});

const instruccionesStyle = {
  height: Dimensions.get("window").height - 100,
  width: Dimensions.get("window").width,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 10,
};

export default Buscador;
