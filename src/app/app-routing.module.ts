import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BodyComponent} from "./body/body.component";


const routes: Routes = [
  {path: '', redirectTo: 'body', pathMatch: 'full'},
  {path: 'body', component: BodyComponent},
  {
    path: 'play',
    loadChildren: () => import('./plays/play.module').then(x => x.PlayModule)
  },
  {path: '**', redirectTo: 'body', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
