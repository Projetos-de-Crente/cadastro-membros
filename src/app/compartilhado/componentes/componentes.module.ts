import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

const componentes = [HeaderComponent, FooterComponent];
const declarations = [...componentes];

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations,
  exports: declarations
})
export class ComponentesModule {}
