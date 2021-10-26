import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { FormsModule } from '@angular/forms';
import { DualaxeComponent } from './dualaxe/dualaxe.component';
import { ColumnComparisionComponent } from './column-comparision/column-comparision.component';
import { VariablepieComponent } from './variablepie/variablepie.component';




@NgModule({
  declarations: [
    ChartsComponent,
    DualaxeComponent,
    ColumnComparisionComponent,
    VariablepieComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    FormsModule
  ]
})
export class ChartsModule { }
