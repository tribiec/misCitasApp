import Constants from "expo-constants";
class Fetch {
  inicial({ method, body = null, endpoint, token = null }) {
    const { manifest } = Constants;
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    if (token != null)
      headers = { ...headers, Authorization: "Bearer " + token };
    return new Promise((resolve, reject) => {
      fetch(`${manifest.extra.API_ENDPOINT}/${endpoint}`, {
        method,
        headers,
        mode: "cors",
        body,
      })
        .then((e) => resolve(e.json()))
        .catch((err) => {
          console.error("Problema en Fetch...", err);
        });
    });
  }

  get(endpoint, token = null) {
    return new Promise((resolve, reject) => {
      this.inicial({ method: "GET", endpoint, token})
        .then((e) => resolve(e))
        .catch((err) => reject(err));
    });
  }

  post(endpoint, body, token = null) {
    return new Promise((resolve, reject) => {
      let params = { method: "POST", endpoint, body: (body == null) ? null : JSON.stringify(body)}
      if (token != null) params = { ...params, token };
      this.inicial(params)
        .then((e) => resolve(e))
        .catch((err) => reject(err));
    });
  }
}

export default new Fetch();
