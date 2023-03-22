import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({

    declarations:[
    HeroeComponent,
    ListadoComponent
    ],

    //Cosas publicas fuera del modulo
    exports: [
        ListadoComponent

    ],

    //aqui van los modulos
    imports:[
CommonModule
    ]
})

export class HeroesModule {}
