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
            name: ['', [Validators.required]],
            date: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            text: ['', [Validators.required, Validators.maxLength(80)]],
            codigo: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            category: ['', [Validators.required]],
            gender: ['', [Validators.required]],
        });
    }

    save(event: Event) {
        event.preventDefault();
        console.log('save');
        if (this.form.valid) {
            const value = this.form.value;
            console.log(value);
        } else[
            this.form.markAllAsTouched(),
        ]
    }
    get emailField(){
        return this.form.get('email');
    }

    get emailFieldIsValid(){
        return this.emailField?.touched && this.emailField.valid;   
    }

    get emailFieldIsInvalid(){
        return this.emailField?.touched && this.emailField.invalid;   
    }

    get codigoField(){
        return this.form.get('codigo');
    }

    get codigoFieldIsValid(){
        return this.codigoField?.touched && this.codigoField.valid;   
    }

    get codigoFieldIsInvalid(){
        return this.codigoField?.touched && this.codigoField.invalid;   
    }



    doSomething() {
        console.log('click');
    }



}

