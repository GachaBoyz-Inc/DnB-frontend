import type { AxiosRequestConfig, AxiosResponse } from "axios";
import HttpClient from "./HttpClient";

abstract class AbstractApiService<T> {
    private httpClient: HttpClient = new HttpClient();
    private endpoint: string = "";

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    private getAxiosInstance() {
        return this.httpClient.getAxiosInstance();
    }

    public getAll(options?: AxiosRequestConfig): Promise<AxiosResponse<T[]>> {
        return this.getAxiosInstance().get<T[]>(`${this.endpoint}/getAll`, options);
    }

    public getById(id: string | number, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.getAxiosInstance().get<T>(`${this.endpoint}/getById/${id}`, options);
    }

    public create(data: T, options?: AxiosRequestConfig): void {
        this.getAxiosInstance().post<T>(`${this.endpoint}/create`, data, options);
    }

    public update(id: string | number, data: T, options?: AxiosRequestConfig): void {
        this.getAxiosInstance().patch<T>(`${this.endpoint}/update/${id}`, data, options);
    }

    public delete(id: string | number, options?: AxiosRequestConfig): void {
        this.getAxiosInstance().delete<T>(`${this.endpoint}/delete/${id}`, options);
    }
};

export default AbstractApiService;