import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class EmailValidator implements AsyncValidator {
  http: any;

  // validate(control: AbstractControl ): Observable<ValidationErrors | null> {

  //   const email = control.value;
  //   console.log({ email });

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay(2000)
  //   );

  // }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    const httpCallobservable = new Observable<ValidationErrors | null>((suscriber) => {
      console.log({ email });
      if( email === 'carlos@gmail.com' ){
        suscriber.next({ emailTaken: true });
        suscriber.complete();
        // return;
      }
      suscriber.next(null);
      suscriber.complete();

    }).pipe(
      delay(2000)
    );
    return httpCallobservable;
  }

  isFieldOneEqualFieldTwo( field1: string, field2: string ) {

  }

}



// return this.http.get<any[]>(`http://localhost:3000/users?q=${ email }`)
// .pipe(
//   // delay(3000),
//   map( resp => {
//     return ( resp.length === 0 )
//         ? null
//         : { emailTaken: true }
//   })
// );
