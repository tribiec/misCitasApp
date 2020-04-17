import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { Icon } from "react-native-elements";
import { useStateValue } from "../../providers/ContextProvider";
import Fetch from "../../providers/Fetch";
import CheckToken from "../../providers/checkToken";
import getLocation from "../../helpers/getLocation";
import PicturesContainer from "../../components/PicturesContainer";
import MessageComponent from "../../components/Message";
import Button from "../../components/Button";

const Perfil = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [enableLoc, setEnableLoc] = useState(false);
  const [context, dispatch] = useStateValue();

  const sendLocation = async ({ coords }, token) => {
    const _data = { latitud: coords.latitude, longitud: coords.longitude};
    const resp = await Fetch.post('user/loc',_data,token).then(e=> e).catch(e => console.log(e));
    console.log(resp);
  }

  useEffect(() => {
    CheckToken(navigation).then(data => {
      dispatch({type: "SET_NOMBRE", value: data.fullNombre});
      dispatch({type: "SET_ID", value: data._id})
      dispatch({type: "SET_TOKEN", value: data.token});
      getLocation().then((loc) => {
        setLocation(loc);
        setEnableLoc(true);
        sendLocation(loc, data.token);
      });
    });
  }, []);

  if (!enableLoc)
    return (
      <MessageComponent style={instruccionesStyle}>
        <Text style={[Styles.text]}>
          Debes permitir o activar la ubicacion para poder usar el buscador
        </Text>
      </MessageComponent>
    );

  return (
    <View style={Styles.container}>
      <View style={Styles.perfil}></View>
      <View style={Styles.header}>
        <View style={{ width: "33%" }}></View>
        <View style={{ width: "33%" }}>
          <TouchableOpacity
            key={1}
            onPress={() => AsyncStorage.clear()}
            style={{
              alignSelf: "center",
            }}
          >
            <Icon
              name="user"
              type="font-awesome"
              size={35}
              color="#C52233"
              iconStyle={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 2.0,
              }}
            />
            <Text>Mi Perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "33%" }}>
          <TouchableOpacity
            key={2}
            onPress={() => {
              navigation.navigate("Buscador");
            }}
            style={{
              alignSelf: "flex-end",
              marginRight: 20,
            }}
          >
            <Icon
              name="heart"
              type="font-awesome"
              size={35}
              color="#C52233"
              iconStyle={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 2.0,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <View
          style={{
            height: 120,
            width: 120,
            backgroundColor: "#DDDDDF",
            borderRadius: 60,
            marginTop: 20,
          }}
        />
        <Text style={{ fontSize: 22, fontWeight: "300", marginTop: 10 }}>
          {context.fullNombre}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: 80,
          flexDirection: "row",
          marginTop: 10,
          marginBottom: 50,
        }}
      >
        <View
          style={{
            width: "33.33%",
            height: 40,
            alignItems: "flex-end",
          }}
        >
          <Button
            style={{ alignItems: "center", top: -15, marginRight: 20 }}
            name="cog"
            text="Ajustes"
          />
        </View>
        <View
          style={{
            width: "33.33%",
            height: 40,
            alignItems: "center",
          }}
        >
          <Button
            style={{ alignItems: "center", top: 15 }}
            name="camera"
            text="Subir Foto"
          />
        </View>
        <View style={{ width: "33.33%", height: 40 }}>
          <Button
            style={{ alignItems: "flex-start", top: -15, marginLeft: 20 }}
            name="pencil"
            text="Editar Info"
          />
        </View>
      </View>
      <PicturesContainer />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FBFBFC",
    flex: 1,
  },
  header: {
    paddingTop: 40,
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  perfil: {
    width: 665,
    height: 665,
    position: "absolute",
    borderRadius: 1000,
    left: -145,
    top: -300,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.0,
    zIndex: -1,
  },
});

const instruccionesStyle = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
  justifyContent: "center",
  alignItems: "center",
};

export default Perfil;
