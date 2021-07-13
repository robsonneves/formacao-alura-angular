import { Component, OnInit, Output, EventEmitter} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  transferir(){

    console.log("Solicitação de nova transferencia.");
    console.log("valor:" , this.valor);
    console.log("destino:", this.destino);
    const valorEmitter = { valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitter);
  }
}
