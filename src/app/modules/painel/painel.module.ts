import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { MenuComponent } from './menu/menu.component';
import { QuartoComponent } from './quarto/quarto.component';


@NgModule({
  declarations: [PainelComponent, MenuComponent, QuartoComponent],
  imports: [
    CommonModule,
    PainelRoutingModule
  ]
})
export class PainelModule { }
