import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentesModule } from "./componentes/componentes.module";
import { StatusDirective } from "./diretivas/status.directive";
import { ParticlesModule } from "angular-particle";

@NgModule({
  declarations: [StatusDirective],
  imports: [CommonModule, ComponentesModule, ParticlesModule],
  providers: [ParticlesModule],
  exports: [ComponentesModule, StatusDirective, ParticlesModule]
})
export class CompartilhadoModule {}
