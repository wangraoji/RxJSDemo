import { Component } from '@angular/core';

import { MessageService } from '../messageService';

@Component({
    selector: 'A1',
    template: `
        <div>
            <input type="text" [(ngModel)]="inputText" name="text"> 
            <input type="button" value="发送" (click)="toSend()">
        </div> 
    `,
})

export class AComponent { 
    inputText: any = "";

    constructor(public srv: MessageService) { }


    toSend(){
        this.srv.send(this.inputText);
    }
}