import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contar3()
      .then((mje) => console.log('Termino', mje))
      .catch((err) => console.error('Error', err));

  }

  ngOnInit() {
  }

  contar3(): Promise<any> {
    return new Promise((resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval(() => {
        contador++;
        console.log(contador);

        if (contador === 3) {
          resolve('OK');
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
