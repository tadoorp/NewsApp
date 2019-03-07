import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RoutingModule } from '../routing/routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class NewsModule { }
