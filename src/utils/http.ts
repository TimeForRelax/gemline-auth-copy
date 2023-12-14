import { SsValueType } from '@enums/index';
import axios from 'axios';
import { ss } from '@utils/index';

export enum ApiCallType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export class HttpService {
  static source = axios.CancelToken.source();
  static token = ss.get(SsValueType.token);

  static getToken() {
    return ss.get(SsValueType.token);
  }

  static setToken(token: string) {
    ss.set(SsValueType.token, token);
    HttpService.token = token;
  }

  static removeToken() {
    ss.remove(SsValueType.token);
    HttpService.token = null;
  }

  static get(url: string, options?: any) {
    return HttpService.makeRequest({
      url,
      method: 'get',
      ...options,
    });
  }

  static post(url: string, data: any, options?: any) {
    return HttpService.makeRequest({
      url,
      method: 'post',
      data,
      ...options,
    });
  }

  static put(url: string, data: any, options?: any) {
    return HttpService.makeRequest({
      url,
      method: 'put',
      data,
      ...options,
    });
  }

  static patch(url: string, data: any, options?: any) {
    return HttpService.makeRequest({
      url,
      method: 'patch',
      data,
      ...options,
    });
  }

  static delete(url: string, data: any, options?: any) {
    return HttpService.makeRequest({
      url,
      method: 'delete',
      data,
      ...options,
    });
  }

  static makeRequest(config: any) {
    const cancelToken = this.source.token;
    const token = HttpService.getToken();

    if (token) {
      config.headers = Object.assign(config.headers || {}, {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      });
    }

    return axios
      .request({ ...config, cancelToken })
      .then((res) => {
        return res;
      })
      .catch((er) => {
        throw er;
      });
  }
}
