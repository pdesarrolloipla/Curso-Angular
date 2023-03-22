
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ContadorComponent } from "./contador/contador.component";


@NgModule({

    declarations:[
    ContadorComponent,
    
    ],

    //Cosas publicas fuera del modulo
    exports: [
        ContadorComponent

    ],

    //aqui van los modulos
    imports:[
CommonModule
    ]
})

export class ContadorModule {}
