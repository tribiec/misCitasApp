import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/components/SplashScreen";
import Login from "./src/views/Login/Login";
import Register from "./src/views/Register/Register";
import useLoadStatic from "./src/providers/hooks/useLoadStatic";

const Stack = createStackNavigator();

const App = () => {
  const loading = useLoadStatic([
    require("./assets/drink.jpg"),
    require("./assets/date.jpg"),
  ]);
  const Dashboard = () => (<></>);
  const Mensajes = () => (<></>);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {loading ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
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
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
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
