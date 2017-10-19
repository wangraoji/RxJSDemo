import { Component, OnInit } from '@angular/core';

// 观察者模式
import { Observable } from 'rxjs';


@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    // 文章标题（要推送的）
    inputBtText: any = "";

    // 推送执行的事件
    push: any;


    // 用户1的处理
    use1: any;
    user1Mes: any;
    // 用户2关注 和 关注消息
    user1Attention: boolean = true;
    user1AttentionMes: any;

    // 用户2的处理
    use2: any;
    user2Mes: any;
    user2Attention: boolean = true;
    user2AttentionMes: any;

    // 用户3的处理
    use3: any;
    user3Mes: any;
    user3Attention: boolean = true;
    user3AttentionMes: any;


    // 被观察者推送事件
    toPush() {
        // 创建一个被观察者。
        this.push = Observable.create((observer)=>{
            observer.next(`${this.inputBtText}`);
        })
        
        // 并且推送消息
        this.push.subscribe( value => {
            if(this.user1Attention){
                this.user1AttentionMes = value;
            }
            if(this.user2Attention){
                this.user2AttentionMes = value;
            }
            if(this.user3Attention){
                this.user3AttentionMes = value;
            }
        });
    }

   
    // 观察者 用户 接到推送后处理事件。 接收/拒绝
    user1Yes() {
        // 点关注 
        this.user1Attention = true;
        this.use1 = this.push
            // 确定是关注了再做处理
            .takeWhile( () => this.user1Attention )
            .subscribe( value => this.user1Mes = `接收成功！`);
    }
    user1No() {
        this.user1Mes = `取消关注`;
        this.user1Attention = false;
    }

    user2Yes() {
        this.user2Attention = true;
        this.use2 = this.push
            .takeWhile( () => this.user2Attention )
            .subscribe( value => this.user2Mes = `接收成功！`);
    }
    user2No() {
        this.user2Mes = `取消关注`;
        this.user2Attention = false;
    }

    user3Yes() {
        this.user3Attention = true;
        this.use3 = this.push
            .takeWhile( () => this.user3Attention )
            .subscribe( value => this.user3Mes = `接收成功！`);
    }
    user3No() {
        this.user3Mes = `取消关注`;
        this.user3Attention = false;
    }
}
