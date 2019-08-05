import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    // Operador Pipe
    // this.regresaObservable().pipe(
    //   retry(2)    // Reintenta la operacion n cantidad de veces
    // )

    this.subscription = this.regresaObservable()
      .pipe(
        map(resp => resp.valor),
        filter((value, index) => !(value % 2 === 0) ? true : false)
      )
      .subscribe(
        numero => console.log('Sub', numero),
        error => console.log('Ups algo paso', error),
        () => console.log('El Observador termino')
      );
  }

  ngOnInit() {
  }

  regresaObservable(): Observable<any> {
    return new Observable(observer => {

      let contador = 0;
      const intervalo = setInterval(() => {

        contador++;

        const salida = {
          valor: contador
        };
        observer.next(salida);

        /*  if (contador === 3) {
           clearInterval(intervalo);
           observer.complete();
         } */

      }, 1000);

    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
