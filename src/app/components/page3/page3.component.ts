import { Component, OnInit } from '@angular/core';

// import { MessageService } from '../messageService';

// 观察者模式   
import { Observable } from 'rxjs';

@Component({
    templateUrl: './page3.component.html',
    styleUrls: ['./page3.component.scss']
})
export class Page3Component {
    sum: number = 0;
    clientX: number = 0;

    jlfCode: string = `
        Operators 中的 throttleTime 节流时间

        let sum = 0;
        let sumBtn = document.querySelectorAll('button.clickSum');
        Observable.fromEvent(sumBtn, 'click')    
            .throttleTime(3000)                 // 节流时间， 3000ms = 3s
            .subscribe(() => sum++);        
    `

    mapCode: string = `
        Operators 中的 map 操作符
        let mapBtn = document.querySelectorAll('button.clickMap');
        Observable.fromEvent(mapBtn, 'click')
            .throttleTime(1000)
            .map( event => event['clientX'])
            .subscribe((event) => this.clientX = event);

        这里可以看到 map() 需要传1个参数，这里处理完成后再传给 订阅者就是直接处理后的结果。
    `

    ngOnInit() {
        let sumBtn = document.querySelectorAll('button.clickSum');
        Observable.fromEvent(sumBtn, 'click')
            .throttleTime(3000)
            .subscribe(() => this.sum++);

        let mapBtn = document.querySelectorAll('button.clickMap');
        Observable.fromEvent(mapBtn, 'click')
            .throttleTime(1000)
            .map( event => event['clientX'])
            .subscribe((event) => this.clientX = event);
    }


    
}   
