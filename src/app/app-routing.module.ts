import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'c1', component: ComponentOneComponent },
  { path: 'c2', component: ComponentTwoComponent },
  { path: 'c3', component: ComponentThreeComponent },
  { path: 'c4', component: ComponentFourComponent },
  { path: 'c5', component: ComponentFiveComponent },
  { path: 'c6', component: ComponentSixComponent },
  { path: 'c7', component: ComponentSevenComponent },
  { path: 'c8', component: ComponentEightComponent },
  { path: 'c9', component: ComponentNineComponent },
  { path: 'c10', component: ComponentTenComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
