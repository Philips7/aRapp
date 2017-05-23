import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, RequestOptionsArgs, ConnectionBackend, Headers, Request} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpService extends Http {
  headers;
  token;

  constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions) {
    super(_backend, _defaultOptions);
    this.token = localStorage.getItem('token');
    if (this.token){
      _defaultOptions.headers.set('Authorization', `Bearer ${this.token}`);
    }
  }

  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', `Bearer ${this.token}`);
    } else {
      url.headers.set('Authorization', `Bearer ${this.token}`);
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }

  private catchAuthError (self: HttpService) {
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        console.log(res);
      }
      return Observable.throw(res);
    };
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, options)
      .catch(this.handleError);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(url, body, new RequestOptions({ headers: this.headers }))
      .catch(this.handleError);
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(url, body, options)
      .catch(this.handleError);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(url, options)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.log(error['status'], error['_body']);
    return Observable.throw(error);
  }
}
