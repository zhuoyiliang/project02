import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {navbarData} from "./nav-data";
import {HttpClient} from "@angular/common/http";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  navbar = navbarData;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  testProxy() {
    this.http.get<any>("/python_flask/test/")
      .subscribe(data => {
      });
  }
}
