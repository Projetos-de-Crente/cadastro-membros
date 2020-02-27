import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MembrosModule } from "./paginas/membros/membros.module";
import { CompartilhadoModule } from "./compartilhado/compartilhado.module";
import { ComponentesModule } from "./compartilhado/componentes/componentes.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MembrosModule,
    ComponentesModule,
    CompartilhadoModule
  ],
  providers: [],
  exports: [CompartilhadoModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
