import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: NovoUsuarioService) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      userName: [''],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['']
    });
  }

  cadastrar(){
    const novoUser = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUser);
  }
}