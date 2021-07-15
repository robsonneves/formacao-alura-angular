import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaDeAnimaisComponent } from './lista-de-animais/lista-de-animais.component';


@NgModule({
  declarations: [ListaDeAnimaisComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ]
})
export class AnimaisModule { }
