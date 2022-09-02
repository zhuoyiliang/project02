import {RouterModule, Routes} from "@angular/router";
import {OriginalComponent} from "./original/original.component";
import {NgModule} from "@angular/core";
import {PlayComponent} from "./play.component";

const routes: Routes = [
  {
    path: '', component: PlayComponent, children: [
      {path: '', component: OriginalComponent},
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule {

}
