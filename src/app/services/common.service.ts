import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams, HttpErrorResponse } from '@angular/common/http';
import { constants } from '../utils/constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  constructor(private _http:HttpClient) 
  {
     
  }

  callinggetapi(url,TokenHeader?:any):Observable<any>
    {
     let headers:HttpHeaders = new HttpHeaders();
      headers=  headers.append('Content-Type', 'application/x-www-form-urlencoded');
    console.log('TokenHeader',TokenHeader)  
    if(TokenHeader)
      {
        Object.keys(TokenHeader).forEach(function(key) {
          headers= headers.append(key, TokenHeader[key]);
         });
      }
      console.log('headers',headers)  
      return this._http.get(constants.apiBaseURL + url,{
        headers: headers
      }).map((res: Response) => res).catch(this.errorHandler);

   }

callingpostapi(url,value:any,TokenHeader?:any):Observable<any>
  {
    let body:HttpParams = new HttpParams();
    let headers:HttpHeaders = new HttpHeaders();
      if(value)
      {
        Object.keys(value).forEach(function(key) {
         body= body.append(key, value[key]);
        });
      }
      if(TokenHeader)
      {
        Object.keys(TokenHeader).forEach(function(key) {
          headers= headers.append(key, value[key]);
         });
      }
    
    headers= headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(constants.apiBaseURL + url,body, {
      headers: headers,
      withCredentials: true
    }).map((res: Response) => res).catch(this.errorHandler);;

  }

  callingpatchapi(url,value:any,TokenHeader?:any):Observable<any>
    {
      let body:HttpParams = new HttpParams();
      if(value)
      {
        Object.keys(value).forEach(function(key) {
        body= body.append(key, value[key]);
        });
      }
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.patch(constants.apiBaseURL + url,body, {
          headers: headers
        }).map((res: Response) => res).catch(this.errorHandler);

    }

  callingdeleteapi(url,id:any):Observable<any>
    {
        return this._http.delete(constants.apiBaseURL + url+"/"+id).map((res: Response) => res).catch(this.errorHandler);;
    }

    errorHandler(error:HttpErrorResponse)
    {
        return Observable.throw(error.message||"Server Error")
    }

  uploadImage(url,file,TokenHeader?:any):Observable<any>
  {
    var formData: any = new FormData();
    formData.append("filetoupload", file.file, file.file.name);
    formData.append("caption", file.textField);
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    if(TokenHeader)
      {
        Object.keys(TokenHeader).forEach(function(key) {
          headers= headers.append(key, TokenHeader[key]);
         });
      }

    return this._http.post(constants.apiBaseURL + url, formData, {
      reportProgress: true,
      headers: headers,
      observe: 'events',
      withCredentials: true
    }).pipe(
      catchError(this.errorMgmt)
    )
  }
    errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    } 
}
