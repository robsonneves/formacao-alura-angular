import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validator';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: NovoUsuarioService,
              private route: Router) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      userName: ['', [ minusculoValidator ]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['']
    },{
      validators: [ usuarioSenhaIguaisValidator ]
    });
  }

  cadastrar(){

    if(this.novoUsuarioForm.valid){

      const novoUser = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.service.cadastrarNovoUser(novoUser).subscribe(() => {
        this.route.navigate(['']);
      }, (error) => console.log(error));
    }
  }
}
