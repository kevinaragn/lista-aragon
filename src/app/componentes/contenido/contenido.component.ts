import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

    public ALUMNOS : Array <Alumno> = [  {
      id: 1,
      nombre: "Juan",
      apellido: "Souza",
      habilidades: ["Matematicas","Sociales"],
      estado: "Promocionado"
    },
    {
      id: 2,
      nombre: "Ramon",
      apellido: "Monzon",
      habilidades: ["Literatura","Arte"],
      estado: "Promocionado"
    },
    {
      id: 3,
      nombre: "Ariel",
      apellido: "Ramirez",
      habilidades: ["Naturales"],
      estado: "Recursante"
    },
    {
      id: 4,
      nombre: "Ernesto",
      apellido: "Rodriguez",
      habilidades: ["Matematicas","Ed.Fisica"],
      estado: "Regular" 
    },
    {
      id: 5,
      nombre: "German",
      apellido: "Rivarola",
      habilidades: ["Sociales","Ed.Fisica"],
      estado: "Recursante"
    },
    {
      id: 6,
      nombre: "Fausto",
      apellido: "Gauna",
      habilidades: ["Historia"],
      estado: "Promocionado"
    },]


  constructor() { }

  ngOnInit(): void {
  }

}
