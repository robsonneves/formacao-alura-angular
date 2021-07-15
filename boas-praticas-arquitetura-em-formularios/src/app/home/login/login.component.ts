import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string ='';
  senha: string ='';

  constructor(private service: AutenticacaoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.service.autenticar(this.usuario, this.senha).subscribe(() => {

        console.log('Autenticado');
        this.router.navigate(['animais']);
    },(error)=> console.log(error));
  }

}
