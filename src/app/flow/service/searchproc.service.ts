import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { urlDigestoConfig } from 'src/assets/urlDigesto.config';

@Injectable({
  providedIn: 'root'
})
export class SearchprocService {

  constructor(
    private http: HttpClient,
   
  ) { }

  searchProcessWithCNJ(numprocess: string, type: string): Observable<any>{
    return new Observable(observableProcessCNPJ => {
      let credentials = {}; 
      let urlFull =  urlDigestoConfig.url_search_process.replace('{num_process}',numprocess).replace('{typeprocess}',type)
      this.http.get(urlFull).subscribe({

        next(res:any){
          if(res && res.status_op){
            observableProcessCNPJ.error(res);
            observableProcessCNPJ.complete();
          }
          observableProcessCNPJ.next(res);
          observableProcessCNPJ.complete();
        },
        error(error: HttpErrorResponse){
          //observableProcessCNPJ.next(error);
          observableProcessCNPJ.error(error);
          observableProcessCNPJ.complete();
        },
        complete: () => {
          
        }
      })
    });
  };
}
