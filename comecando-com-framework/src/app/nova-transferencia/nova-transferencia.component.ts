import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  title: string = 'Nova transferencia';
  valor: number;
  destino: number;

  constructor(private service: TransferenciaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  transferir(){

    console.log("Solicitação de nova transferencia.");
    console.log("valor:" , this.valor);
    console.log("destino:", this.destino);
    //const valorEmitter = { valor: this.valor, destino: this.destino};
    const valorEmitter: Transferencia = { valor: this.valor, destino: this.destino};
    //this.aoTransferir.emit(valorEmitter);
    this.service.adicionar(valorEmitter).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      //this.router.navigate(['extrato'])
      this.router.navigateByUrl('extrato');
    }, error => console.log(error));
  }

  limparCampos(){

    this.valor = 0;
    this.destino = 0;
  }
}
