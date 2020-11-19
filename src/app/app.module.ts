import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';
import { ComponentThreeComponent } from './components/component-three/component-three.component';
import { ComponentFourComponent } from './components/component-four/component-four.component';
import { ComponentFiveComponent } from './components/component-five/component-five.component';
import { ComponentSixComponent } from './components/component-six/component-six.component';
import { ComponentSevenComponent } from './components/component-seven/component-seven.component';
import { ComponentEightComponent } from './components/component-eight/component-eight.component';
import { ComponentNineComponent } from './components/component-nine/component-nine.component';
import { ComponentTenComponent } from './components/component-ten/component-ten.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent,
    ComponentFiveComponent,
    ComponentSixComponent,
    ComponentSevenComponent,
    ComponentEightComponent,
    ComponentNineComponent,
    ComponentTenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
