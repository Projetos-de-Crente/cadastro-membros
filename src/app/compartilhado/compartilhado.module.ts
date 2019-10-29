import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from './componentes/componentes.module';
import { StatusDirective } from './diretivas/status.directive';

@NgModule({
    declarations: [StatusDirective],
    imports: [
        CommonModule,
        ComponentesModule
    ],
    providers: [
    ],
    exports: [
        ComponentesModule,
        StatusDirective
    ]
})
export class CompartilhadoModule { }
