class Fetch {
  inicial({ method, body = null, endpoint, token = null }) {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    if (token != null)
      headers = { ...headers, Authorization: "Bearer " + token };
    return new Promise((resolve, reject) => {
      fetch(`http://192.168.1.3:5000/${endpoint}`, {
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

  get(endpoint) {
    return new Promise((resolve, reject) => {
      this.inicial({ method: "GET", endpoint })
        .then((e) => resolve(e))
        .catch((err) => reject(err));
    });
  }

  post(endpoint, body, token = null) {
    return new Promise((resolve, reject) => {
      let params = { method: "POST", endpoint, body: JSON.stringify(body)};
      if (token != null) params = { ...params, token };
      this.inicial(params)
        .then((e) => resolve(e))
        .catch((err) => reject(err));
    });
  }
}

export default new Fetch();
