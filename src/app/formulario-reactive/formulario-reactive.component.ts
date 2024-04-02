import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.scss']
})
export class FormularioReactiveComponent implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(18), Validators.pattern(/^\d{0,2}$/)]]
    });
  }

  ngOnInit(): void {
  }

  get f() { return this.formulario.controls; }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulario válido');
      console.log(this.formulario.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  limitarDigitos(event: any) {
    const inputValue: string = event.target.value;
    if (inputValue.length > 2) {
      event.target.value = inputValue.slice(0, 2);
      this.formulario.patchValue({ edad: event.target.value });
    }
  }
}
