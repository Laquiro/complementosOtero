import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentComponent } from './student/student.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { NotaFormatPipe } from './nota-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    NotaFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
