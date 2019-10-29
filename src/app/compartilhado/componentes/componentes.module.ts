import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const componentes = [HeaderComponent];
const declarations = [...componentes];

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
    ],
    declarations,
    exports: declarations
})
export class ComponentesModule { }
