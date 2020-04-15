import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // agrego la fecha en el html
  anio: number = new Date().getFullYear();

  // para leer mi servicio, mi json con data
  constructor( public _servicio: InfoPaginaService ) { }

  ngOnInit() {
  }

}
