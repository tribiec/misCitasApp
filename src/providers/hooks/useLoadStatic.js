import { useState, useEffect } from 'react';
import { Asset } from "expo-asset";
const useLoadStatic = (_resources) => {
    const [loading, setLoading] = useState(true);
    const cacheResourcesAsync = async (resources) => {
      const cacheImages = resources.map((image) =>
        Asset.fromModule(image).downloadAsync()
      );
      return Promise.all(cacheImages);
    };
    useEffect(() => {
        cacheResourcesAsync(_resources)
          .then(() => setTimeout(() => setLoading(false), 2000))
          .catch((error) =>
            console.error(`Unexpected error thrown when loading: ${error.stack}`)
          );
      }, []);
      return loading;
}

export default useLoadStatic;