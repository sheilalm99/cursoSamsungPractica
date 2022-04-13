import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Formulario con Angular';
  msg: string = '';
 

  persons = [
    {'nombre': 'Sheila', 'apellido': 'Lopez Murillo', 'edad': '23', 'dni': '47676767K', 'cumple': '04/03/1999', 'colorFavorito': 'lila', 'sexo': 'Mujer'},
    {'nombre': 'Marc', 'apellido': 'Alvarez Murillo', 'edad': '30', 'dni': '67676767G', 'cumple': '04/03/1991', 'colorFavorito': 'azul', 'sexo': 'Hombre'},
    {'nombre': 'Pilar', 'apellido': 'Lopez Murillo', 'edad': '54', 'dni': '78787878E', 'cumple': '04/03/1967', 'colorFavorito': 'rojo', 'sexo': 'Mujer'}
  ];

  //Modelo que vaya actualizando nuestros datos
  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true; //lo inicializamos en true para que se oculte al ejecutarse 
  
   
  //meotodo agregar persona
  addPerson(): void {
    this.persons.push(this.model);
    this.msg = 'Agregado correctamente'

  }

  //borrar persona
  deletePerson(i):void{
    //this.model.splice(i, 1);
  var answer = confirm('Estar seguro de eliminarlo?')
  if (answer){
    this.persons.splice(i,1);
  }
  this.msg = 'Has eliminado correctamente';
  }

  myValue : any;
  //modificar persona pero no actualiza los cambios
  editPerson(i:number):void{
    this.hideUpdate = false;
    this.model2.nombre = this.persons[i].nombre;
    this.model2.apellido = this.persons[i].apellido;
    this.model2.edad = this.persons[i].edad;
    let ageNum = parseInt(this.persons[i].edad);
    this.model2.dni = this.persons[i].dni;
    this.model2.cumple = this.persons[i].cumple;
    this.model2.colorFavorito = this.persons[i].colorFavorito;
    this.model2.sexo = this.persons[i].sexo;
    this.myValue = i; 

   
    if(ageNum >= 0 && ageNum <= 125){
      this.persons.push()
    }

    
  }

  //actualizar cambios de lo que se ha editado anteriormente
  updatePerson(){
    let i = this.myValue; //indice que quiero remplazar
    for (let j = 0; j < this.persons.length; j++){
      if (i == j){
        this.persons[i] = this.model2;
        this.msg = 'Campo actualizado correctamente'
        this.model2 = {};

      }
    }

  }

  closeAlert():void{
    this.msg = '';
  }

}
