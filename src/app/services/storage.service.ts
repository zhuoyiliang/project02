import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  get(key: string) {
    //console.log("调用storage中的get方法成功");
    let i = localStorage.getItem(key)
    return i === null ? '' : i;
  }

  set(key: string, value: any) {
    localStorage.setItem(key, value);
    console.log(localStorage)
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
