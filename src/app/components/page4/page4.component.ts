import { Component, OnInit } from '@angular/core';

// import { MessageService } from '../messageService';

// 观察者模式   
import { Observable,Subject } from 'rxjs';

@Component({
    templateUrl: './page4.component.html',
    styleUrls: ['./page4.component.scss']
})
export class Page4Component {

    
    ngOnInit(){
        /*
            例1：
                let a1 = Observable.interval(300);
                let a2 = Observable.interval(400);

                let b1 = a1.subscribe( x => console.info( 'first：' + x));
                let b2 = a2.subscribe( x => console.info( 'last：' + x));

                b1.add(b2);

                setTimeout( () => { b1.unsubscribe() }, 1000)

            例2：
                let subject = new Subject();

                subject.subscribe( x => console.info('观察者A：' + x));
                subject.subscribe( x => console.info('观察者B：' + x));

                subject.next(1);    


            例3：
                let subject = new Subject();
        
                // 它有2个观察者
                subject.subscribe( x => console.info('观察者A：' + x));
                subject.subscribe( x => console.info('观察者B：' + x));

                // 再创建一个可观察对象
                let observable = Observable.from([1,2,3]);
                
                // 观察者订阅它
                observable.subscribe(subject);
                    
        */

        // let source = Observable.from([1,2,3]);

        // let subject = new Subject();

        // let multicasted = source.multicast(subject);

        // multicasted.subscribe({ next: v => console.info('观察者A：' + v)});

        // multicasted.subscribe({ next: v => console.info('观察者B：' + v)});

        // multicasted.connect();
    }




    str1: string = `
        function foo() {
            console.info('hello');
            return 'end';
        }

        let a = foo.call();
        console.info(a);

        输出： 
            hello
            end
    `;

    str2: string = `
        // 创建一个可观察对象 foo
        let foo = Observable.create( (observer) => {
            observer.next('hello');
            observer.next('end');
            observer.next('restart');
        });

        // 观察者订阅执行
        foo.subscribe( (x) => console.info(x));

        输出：
            hello
            end
            restart
    `;

    str3: string = `
        // 创建一个可观察对象 foo
        let foo = Observable.create( (observer) => {
            observer.next('hello');
            observer.next('end');
            observer.next('restart');
            setTimeout( () => { observer.next('end again') }, 1000);
        });

        // 观察者订阅执行
        console.info('开始');
        foo.subscribe( (x) => console.info(x));
        console.info('结束');

        输出：
            开始
            hello
            end
            restart
            结束
            end again
    `;
}   
