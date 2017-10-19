import { Component } from '@angular/core';

import { MessageService } from '../messageService';

@Component({
    selector: 'B1',
    template: `
        <div>
            {{ message }}
        </div> 
    `,
})

export class BComponent {
    constructor(public srv: MessageService) { }

    message: any;

    ngOnInit() {
        this.srv.get().subscribe((result) => {
            this.message = result;
        })
    }
    
}