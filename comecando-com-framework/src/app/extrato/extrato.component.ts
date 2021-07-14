import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit{

  //@Input() transferencias: any[];
  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(){
    //this.transferencias = this.service.transferencias;
    this.service.todas().subscribe((tranferencias: Transferencia[]) => {
      this.transferencias =  tranferencias;
    })
  }
}
