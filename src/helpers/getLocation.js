import * as loc from "expo-location";
export default async () => {
    return new Promise((resolve, reject) => {
      try {
        loc.requestPermissionsAsync().then(({ status }) => {
          if (status !== "granted") reject(status);
        });
        loc.getCurrentPositionAsync({}).then((location) => {
          resolve(location);
        });
      } catch (err) {
        console.log("Error... ->" + err);
        reject(err);
      }
    });
  };