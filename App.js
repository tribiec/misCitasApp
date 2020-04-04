import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/components/SplashScreen';
import Login from './src/views/Login/Login';
import Register from './src/views/Register/Register';
import { Asset } from 'expo-asset';

const Stack = createStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);
  const cacheResourcesAsync = async (resources) => {
    const cacheImages = resources.map((image) =>
      Asset.fromModule(image).downloadAsync()
    );
    return Promise.all(cacheImages);
  };
  
  useEffect(() => {
    cacheResourcesAsync([
      require("./assets/drink.jpg"),
      require("./assets/date.jpg"),
    ])
      .then(() => setTimeout(() => setLoading(false), 2000))
      .catch((error) =>
        console.error(`Unexpected error thrown when loading: ${error.stack}`)
      );
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        {
          (loading) ? 
          (
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false}}/>  
          )
          :
          (
          <>
          <Stack.Screen name="Login" component={Login} options={{ title: 'Ingresar a Mis Citas', headerStyle: styles.header, headerTitleStyle: { color: "white"}}}/>
          <Stack.Screen name="Register" component={Register} options={{ title: 'Registrarme', headerStyle: styles.header, headerTitleStyle: { color: "white"}, headerBackTitleStyle: {color: "white"}, headerBackTitle: "Volver"}}/>
          </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
      color: "white",
      backgroundColor: "#C52233"
    }
});

export default App;
