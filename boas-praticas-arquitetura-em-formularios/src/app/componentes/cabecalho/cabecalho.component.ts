import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent{

  user$ = this.service.retornaUsuario();

  constructor(private service: UsuarioService,
              private router: Router) { }

  logout() {
    this.service.logout();
    this.router.navigate(['']);
  }

}
