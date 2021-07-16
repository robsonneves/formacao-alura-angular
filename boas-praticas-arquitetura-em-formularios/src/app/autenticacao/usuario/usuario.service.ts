import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSub = new BehaviorSubject<Usuario>({})
  constructor(private service: TokenService) { }

  private decodificarJWT(){
    const token = this.service.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
  }

  retornaUsuario(){
    return this.usuarioSub.asObservable();
  }

  salvarToken(token:string){
    this.service.salvarToken(token);
    this.decodificarJWT();
  }

  logout(){
    this.service.excluiToken();
    this.usuarioSub.next({});
  }
}
