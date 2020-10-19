import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { SocioFormComponent } from './components/socio-form/socio-form.component';
import { SocioViewsComponent } from './components/socio-views/socio-views.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatronFormComponent } from './components/patron-form/patron-form.component';
import { PatronViewsComponent } from './components/patron-views/patron-views.component';
import { BarcoFormComponent } from './components/barco-form/barco-form.component';
import { BarcoAllViewsComponent } from './components/barco-all-views/barco-all-views.component';
import { SalidaViewsComponent } from './components/salida-views/salida-views.component';
import { SalidaFormComponent } from './components/salida-form/salida-form.component';

const routes: Route[]=[
  {path: '', component: SocioViewsComponent},
  {path: 'socioForm', component: SocioFormComponent},
  {path: 'patronForm', component: PatronFormComponent},
  {path: 'patronViews', component: PatronViewsComponent},
  {path: 'barcoForm', component: BarcoFormComponent},
  {path: 'barcoAllViews', component: BarcoAllViewsComponent},
  {path: 'salidaViews', component: SalidaViewsComponent},
  {path: 'salidaForm', component: SalidaFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SocioFormComponent,
    SocioViewsComponent,
    NavbarComponent,
    PatronFormComponent,
    PatronViewsComponent,
    BarcoFormComponent,
    BarcoAllViewsComponent,
    SalidaViewsComponent,
    SalidaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
