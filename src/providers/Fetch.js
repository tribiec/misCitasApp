class Fetch {
    inicial({ method, body = null, endpoint }) {
        return new Promise((resolve, reject) => {
            fetch(`/api/${endpoint}`, {
                method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: "cors",
                body
            }).then(e => resolve(e.json())).catch(err => {
                console.error("Problema en Fetch...", err);
            });
        })
    };

    get(endpoint) {
        return new Promise((resolve, reject) => {
            this.inicial({ method: "GET", endpoint }).then(e => resolve(e)).catch(err => reject(err));
        })
    };

    post(endpoint, body) {
        return new Promise((resolve, reject) => {
            this.inicial({ method: "POST", endpoint, body: JSON.stringify(body) }).then(e => resolve(e)).catch(err => reject(err));;
        })
    }
};

export default new Fetch();