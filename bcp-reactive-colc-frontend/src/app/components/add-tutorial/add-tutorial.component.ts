import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorialRequest.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = {
    montoEnviado: 0,
    tipoOperacion: '',
    monedaOrigen: '',
    monedaDestino: ''
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      montoEnviado: this.tutorial.montoEnviado,
      tipoOperacion: this.tutorial.tipoOperacion,
      monedaOrigen: this.tutorial.monedaOrigen,
      monedaDestino: this.tutorial.monedaDestino,

    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      montoEnviado: 0,
      tipoOperacion: '',
      monedaOrigen: '',
      monedaDestino: ''
    };
  }

}