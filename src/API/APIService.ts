import axios, { AxiosInstance } from 'axios';

class APIService {
  service: AxiosInstance = axios.create({
    baseURL: 'http://192.168.8.5:3333',
    timeout: 30000,
  });

  constructor() {
    this.setInterceptor();
  }

  setHeaderToken(token: string) {
    this.service.defaults.headers.authorization = `Bearer ${token}`;
  }

  async get<T>(resource: string, params?: object) {
    return this.service.get<T>(resource, params);
  }

  async post<T, U>(resource: string, params: object) {
    return this.service.post<T, U>(resource, params);
  }

  async put<T>(resource: string, params: object) {
    return this.service.put<T>(resource, params);
  }

  async delete<T>(resource: string, params?: object) {
    return this.service.delete<T>(resource, params);
  }

  async patch<T>(resource: string, params?: object) {
    return this.service.patch<T>(resource, params);
  }

  private setInterceptor() {
    this.service.interceptors.request.use(
      req => {
        return req;
      },
      error => {
        return Promise.reject(error);
      },
    );
    this.service.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }
}

export default new APIService();
