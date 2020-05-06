import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
// import { AboutComponent } from './about/about.component';

import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}
   ,{ path: 'home', component: HomeComponent },
   { path: 'mission', component: MissionComponent },
];

@NgModule({
  //imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  // {
  //   preloadingStrategy: PreloadAllModules
  // })],
  //config:{onSameNavigationUrl:'reload'},

  imports: [RouterModule.forRoot(routes,
  {
    preloadingStrategy: PreloadAllModules
  })],
  


  exports: [RouterModule]
})
export class AppRoutingModule { }
