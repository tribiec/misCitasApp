import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useLoadStatic from "./src/providers/hooks/useLoadStatic";
import Login from "./src/views/Login/Login";
import Register from "./src/views/Register/Register";
import Perfil from "./src/views/Perfil/Perfil";
import Buscador from "./src/views/Buscador/Buscador";
import SplashScreen from "./src/components/SplashScreen";

const Stack = createStackNavigator();

const App = () => {
  const [loading, logged, setLogged] = useLoadStatic([
    require("./assets/1.jpg"),
    require("./assets/2.png"),
    require("./assets/3.png"),
    require("./assets/4.jpg"),
    require("./assets/5.jpg"),
  ]);
  const Mensajes = () => <></>;

  return loading ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!logged ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              initialParams={{set: setLogged}}
              options={{
                title: "Ingresar a Mis Citas",
                headerStyle: styles.header,
                headerTitleStyle: { color: "white" },
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                title: "Registrarme",
                headerStyle: styles.header,
                headerTitleStyle: { color: "white" },
                headerBackTitleStyle: { color: "white" },
                headerBackTitle: "Volver",
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Perfil"
              component={Perfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Buscador"
              component={Buscador}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mensajes"
              component={Mensajes}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#C52233",
  },
});

export default App;
