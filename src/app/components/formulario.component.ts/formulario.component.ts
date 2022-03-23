import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from "rxjs";


@Component({
    selector: 'formulario',
    templateUrl: './formulario.component.html',
})
export class InicioFormulario implements OnInit {
    form: FormGroup
    
    constructor(

        private formBuilder: FormBuilder
    ) {
        this.buildForm();
    }
    ngOnInit(): void {
    }

    private buildForm() {
        this.form = this.formBuilder.group({
            name: ['',  [Validators.required]],
            date: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            text: ['', [Validators.required, Validators.maxLength(200)]],
            category: ['', [Validators.required]],
            gender: ['', [Validators.required]],
          });
    }

    save(event: Event) {
        event.preventDefault();
        if (this.form.valid) {
          const value = this.form.value;
          console.log(value);
        } 
      }

}

