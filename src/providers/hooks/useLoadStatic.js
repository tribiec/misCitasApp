import { useState, useEffect } from 'react';
import { Asset } from "expo-asset";
import { AsyncStorage } from 'react-native';

const useLoadStatic = (_resources) => {
    const [loading, setLoading] = useState(true);
    const [logged, setLogged] = useState(false);

    const cacheResourcesAsync = async (resources) => {
      const cacheImages = resources.map((image) =>
        Asset.fromModule(image).downloadAsync()
      );
      return Promise.all(cacheImages);
    };

    const checkLogin = async () => {
      let token;
      try{
        token = await AsyncStorage.getItem('misCitasToken');
        if(token != null){
          setLogged(true);
        }else{
          console.log("ERROR, NO SE ENCONTRO TOKEN");
        }
        //Enviar Token al Back para ver si es valido o no, desde Perfil...
      }catch(err){
        console.log(err);
      }
    }

    useEffect(() => {
        cacheResourcesAsync(_resources)
          .then(() => setTimeout(() => setLoading(false), 2000))
          .catch((error) =>
            console.error(`Unexpected error thrown when loading: ${error.stack}`)
          );
          checkLogin();
      }, []);
      return [loading, logged, setLogged];
}

export default useLoadStatic;