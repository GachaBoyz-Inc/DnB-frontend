import HttpClient from "./HttpClient";

abstract class AbstractApiService<T> {
    private instance: typeof HttpClient = HttpClient;
    private endpoint: string = "";
};

export default AbstractApiService;