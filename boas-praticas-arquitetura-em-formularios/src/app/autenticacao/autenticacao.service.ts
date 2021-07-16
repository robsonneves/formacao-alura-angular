import { UsuarioService } from './usuario/usuario.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient,
              private service: UsuarioService) { }

  /*autenticar(usuario: string, senha: string): Observable<any>{

    return this.httpClient.get('http://localhost:3000/usuarios/')
  }*/

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {

    //return this.httpClient.get('http://localhost:3000/usuarios/')
    return this.httpClient.post(
      'http://localhost:3000/usuarios/',
      {
        userName: usuario,
        password: senha,
      },
      { observe: 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.service.salvarToken(authToken);
      })
    );
  }
}
