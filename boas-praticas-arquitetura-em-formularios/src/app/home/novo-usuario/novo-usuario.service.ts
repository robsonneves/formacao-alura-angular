import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  cadastrarNovoUser(novoUsuario: NovoUsuario){
    return this.http.post("http://localhost:3000/usuarios", novoUsuario);
  }
}
