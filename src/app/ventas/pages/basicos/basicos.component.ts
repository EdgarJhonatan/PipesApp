import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  
  nombreLower: string = 'Edgar';
  nombreUpper: string = 'eDgarD';
  nombreCompleto: string = 'EdgarD dElgadILLo';
  
  fecha: Date = new Date(); // el día de hoy

}
