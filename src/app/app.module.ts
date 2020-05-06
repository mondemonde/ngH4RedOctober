import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NgVarDirective } from './ng-var.directive';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { RadarComponent } from './radar/radar.component';
import { H4TerminalComponent} from './h4-terminal/h4-terminal.component';
import { GameCycleComponent } from './game-cycle/game-cycle.component';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import {NgxTypedJsModule} from 'ngx-typed-js';


//import(TerminalModule) from '@henry781/ngx-terminal';


@NgModule({  declarations: [
    AppComponent,
    NgVarDirective,
    SquareComponent,
    BoardComponent,
    RadarComponent,    
    H4TerminalComponent, GameCycleComponent, HomeComponent, MissionComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,      
    AppRoutingModule, //  AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
    ToastrModule.forRoot()   

  ],
  //providers: [BoardService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
