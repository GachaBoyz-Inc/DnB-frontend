import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.API_URL,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 15000,
});

instance.interceptors.response.use(undefined, async (err) => {
    if (err.response.status === 500) {
        console.error("Erro interno no servidor");
    }
})