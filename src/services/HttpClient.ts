import axios from "axios";
import MessageUtil from "../util/MessageUtil";

class HttpClient {
    private instance;

    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.API_URL,
            headers: {
                "Content-Type": "application/json"
            },
            timeout: 15000,
        });

        this.initInterceptors()
    }

    initInterceptors() {
        this.instance.interceptors.response.use(undefined, async (err) => {
            if (err.response.status === 500) {
                MessageUtil.error("Erro interno no servidor", "Não foi possível se conectar com os servidores da aplicação.");
                console.error("Erro interno no servidor");
            }
        })
    }
}

export default new HttpClient();