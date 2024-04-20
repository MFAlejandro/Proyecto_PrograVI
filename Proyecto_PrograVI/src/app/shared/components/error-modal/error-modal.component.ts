import { Component } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [],
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css'], // Fix: Changed 'styleUrl' to 'styleUrls'
})
export class ErrorModalComponent {
  errorMessage: string;

  constructor(/* Aquí van los inyectables u otras dependencias */) {
    this.errorMessage = ''; // Inicialización en el constructor
  }
}
