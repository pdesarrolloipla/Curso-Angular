import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent   {

  heroes: string[] = ['Spiderman','Superman','Batman','Homelander','goatlander'];
  heroeBorrado: string = '';

  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';
    
  }
}
