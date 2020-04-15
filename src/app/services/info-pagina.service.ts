import { Injectable } from '@angular/core';
// con esto puedo hacer peticiones a servicios
import { HttpClient } from '@angular/common/http';
import { Infopagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: Infopagina = {};
  cargada = false;
  equipo: any[] = [];

  // constructor() {
    constructor( private http: HttpClient) {
    // lo llamo desde el constructor de app.module.ts
    // se inicia automaticamente cuando se carga la pagina
    // console.log('Servicio de Infopagina listo');

    this.cargarInfo();
    this.cargarEquipo();
   }

    private cargarInfo() {
      // leer el archivo json
      // igualo mi variable res como tipo interface para leer los campos de la misma
      this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: Infopagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
        // console.log(res['twitter']);
      });
    }

    private cargarEquipo(){
      this.http.get('https://angular-html-501a9.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
        // this.cargada = true;
        this.equipo = resp;
      });
    }


}
