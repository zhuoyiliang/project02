import {Component, Input, OnInit} from '@angular/core';
import {ArgServiceService} from "../arg-service.service";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-original',
  templateUrl: './original.component.html',
  styleUrls: ['./original.component.css']
})
export class OriginalComponent implements OnInit {
  imageUrl: string = ''

  constructor(public arg_service: ArgServiceService, private storage: StorageService) {
    this.imageUrl = this.storage.get('temp');
  }

  ngOnInit(): void {
  }
}
