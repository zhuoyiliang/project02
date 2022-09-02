import {Component, OnInit} from '@angular/core';
import {ArgServiceService} from "../plays/arg-service.service";
import {HttpClient} from "@angular/common/http";
import {parseJson} from "@angular/cli/src/utilities/json-file";
import {Card} from "./card";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // items: string[] = [
  //   'https://images.pexels.com/photos/1548274/pexels-photo-1548274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   'https://images.pexels.com/photos/13270364/pexels-photo-13270364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  // ];
  items: Array<string> | undefined;


  constructor(private arg_service: ArgServiceService, private http: HttpClient, private storage: StorageService) {
  }

  ngOnInit(): void {
    this.getCard();
  }

  sentValue(i: any) {
    // this.arg_service.argInitValue(i);
    this.storage.set("temp", i);
  }


  getCard() {
    this.http.get('/python_flask/home')
      .subscribe((data: any) => {
        this.items = data.imageUrl
      });
  }
}
