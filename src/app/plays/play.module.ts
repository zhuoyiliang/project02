import {NgModule} from "@angular/core";
import {OriginalComponent} from "./original/original.component";
import {CommonModule} from "@angular/common";
import {PlayRoutingModule} from "./play.routing.module";
import {PlayComponent} from "./play.component";

@NgModule({
  declarations: [
    PlayComponent,
    OriginalComponent,
  ],
  imports: [
    CommonModule,
    PlayRoutingModule
  ]
})
export class PlayModule {

}
