import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estaAprobado= false;
  alumnos: Array<any> = [
    {nombre:"Enrique",apellido: "Rodriguez",edad: 15,nota: "Aprobado"},
  {nombre:"Ricardo",apellido: "Monzon",edad: 5,nota: "Aprobado"},
  {nombre:"Fabian",apellido: "Alderete",edad: 1,nota: "Desaprobado"},
  {nombre:"Juan",apellido: "Gutierrez",edad: 6,nota: "Desaprobado"},
  {nombre:"Ariel",apellido: "Monzon",edad: 1,nota: "Aprobado"},
  {nombre:"Jeremias",apellido: "Bauer",edad: 1,nota: "Desaprobado"}
]
mostrar=true;
mostrarNoMostrar()
{
  this.mostrar=!this.mostrar;
}
}
