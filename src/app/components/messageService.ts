import { Injectable }  from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();

    send(message: any) {
        this.subject.next(message);
    }

    get(): Observable<any> {
        return this.subject.asObservable();
    }
}