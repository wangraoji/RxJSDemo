import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routes } from './message.routes';

import { MessageComponent } from './message.component';

import { AComponent } from './A.component';
import { BComponent } from './B.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    MessageComponent,
    AComponent,
    BComponent
  ],
})
export class MessageModule { }
