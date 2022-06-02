import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Gestión de los socios de un gimnasio';
  msg: string = '';
  msg2: string = '';

  socios = [
    {'nombre': 'Sheila', 'apellido': 'Lopez Murillo', 'socio': '2376', 'dni': '47676767K', 'telf': '66766766',  'sexo': 'Mujer'},
    {'nombre': 'Marc', 'apellido': 'Alvarez Murillo', 'socio': '3009', 'dni': '67676767G', 'telf': '662554323',  'sexo': 'Hombre'},
    {'nombre': 'Pilar', 'apellido': 'Lopez Murillo', 'socio': '5413', 'dni': '78787878E', 'telf': '687090876', 'sexo': 'Mujer'}
  ];

  

  //Modelo que vaya actualizando nuestros datos
  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true; //lo inicializamos en true para que se oculte al ejecutarse 
  
   

  
  //meotodo agregar persona
  addPerson(): void {
    console.log('aaaaaaaaaaaa')
    console.log(this.model.nombre)
    var find = false;

    
    if(this.model.nombre==undefined){
      this.msg2 = 'El nombre es obligatorio'
      return
    }
    if(this.model.nombre.length<3){
      this.msg2 = 'El nombre tiene que ser de 3 caracteres como mínimo'
      return
    }
    if(this.model.apellido==undefined){
      this.msg2 = 'El Apellido es obligatorio'
      return
    }
    if(this.model.apellido.length<3){
      this.msg2 = 'Los Apellido tienen que tener 3 caracteres como mínimo'
      return
    }
    if(this.model.socio==undefined){
      this.msg2 = 'El nº de socio es obligatorio'
      return
    }
    if(this.model.dni==undefined){
      this.msg2 = 'El DNI es obligatorio'
      return
    }
    if(this.model.dni.length<9){
      this.msg2 = 'El dni tiene que contener 9 caracteres'
      return
    }
    if(this.model.telf==undefined){
      this.msg2 = 'El teléfono es obligatorio'
      return
    }
    if(this.model.sexo==undefined){
      this.msg2 = 'El sexo es obligatorio'
      return
    }

    for (let registro of this.socios) {
      if(registro.socio==this.model.socio) {
        find = true;
      }
    }

    if(!find) {
      this.socios.push(this.model);
          this.msg = 'Agregado correctamente'
    }else{
      this.msg2 = 'El numero de socio ya existe'
    }
  }

  //borrar persona
  deletePerson(i):void{
    //this.model.splice(i, 1);
  var answer = confirm('Estar seguro de eliminarlo?')
  if (answer){
    this.socios.splice(i,1);
  }
  this.msg = 'Has eliminado correctamente';
  }

  myValue : any;
  //modificar persona pero no actualiza los cambios
  editPerson(i:number):void{
    this.hideUpdate = false;
    this.model2.nombre = this.socios[i].nombre;
    this.model2.apellido = this.socios[i].apellido;
    this.model2.socio = this.socios[i].socio;
    this.model2.dni = this.socios[i].dni;
    this.model2.telf = this.socios[i].telf;
    this.model2.sexo = this.socios[i].sexo;
    this.myValue = i; 

   
    
  }

  //actualizar cambios de lo que se ha editado anteriormente
  updatePerson(){
    let i = this.myValue; //indice que quiero remplazar
    for (let j = 0; j < this.socios.length; j++){
      if (i == j){
        this.socios[i] = this.model2;
        this.msg = 'Campo actualizado correctamente'
        this.model2 = {};

      }
    }

  }

  closeAlert():void{
    this.msg = '';
  }


}
