import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  nossoBackend = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg:string, isError:boolean = false):void {
      this.snackBar.open(msg, 'X', {
        duration:3000,
        horizontalPosition:"right",
        verticalPosition:"top",
        panelClass:  ['msg-success']
      });
    }

    insereNoBackend(product: Product):Observable<Product>{ // Essa função receberá um observable
        return this.http.post<Product>(this.nossoBackend, product).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
          );
          
        // post é um método de uma requisição 'http' que insere dados
    };                        // esse arg é a url pra onde enviaremos os dados
                              // o segundo arg é o tipo de dado que enviaremos

    errorHandler(e: any):Observable<any>{
      this.showMessage('Ocorreu um erro', true);
      return EMPTY
    }


    read():Observable<Product[]>{
      return this.http.get<Product[]>(this.nossoBackend)
    }

    readById(id:string):Observable<Product>{
      const url = `${this.nossoBackend}/${id}`;
      return this.http.get<Product>(url)
    }

    update(product:Product): Observable<Product>{
      const url = `${this.nossoBackend}/${product.id}`
      return this.http.put<Product>(url, product);
    }
    

    delete(id:string):Observable<Product>{
      const url = `${this.nossoBackend}/${id}`;
      return this.http.delete<Product>(url);
    }
   
}
