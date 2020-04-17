import Fetch from "./Fetch";
import { AsyncStorage } from "react-native";

export default (navigation) => {
  return new Promise((resolve, reject) => {
    let token;
    try {
      AsyncStorage.getItem("misCitasToken").then((token) => {
        if (token != null) {
            Fetch.post("user/check",{token: JSON.parse(token).token}).then((resp) => {
            if(resp.status === 401){
                AsyncStorage.clear().then(()=> {
                    navigation.navigate('Login');
                });
            }else{
                resolve({...resp.message, token: JSON.parse(token).token});
            }
          }).catch(e => reject("Error desde Catch checkToken"));
        } else {
          reject("No se encontro Token...");
        }
      });
    } catch (err) {
      reject(err);
      console.log("ERROR DESDE CHECKTOKEN" + err);
    }
  });
};
