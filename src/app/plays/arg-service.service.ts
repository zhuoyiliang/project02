import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArgServiceService {

  params: any = '';
  argService = new BehaviorSubject<any>(this.params);

  argInitValue(arg: any) {
    this.params = arg;
    this.argService.next(this.params);
  }
}
