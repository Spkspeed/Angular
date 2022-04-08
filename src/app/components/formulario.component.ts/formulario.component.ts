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
            email: ['', [Validators.required, Validators.email]],
            codigo: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            codigoCliente: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            contrato: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            categoryPuerto: ['', [Validators.required]],
            categoryCompraVenta: ['', [Validators.required]],
            producto: ['', [Validators.required]],
            toneladas: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            posicion: ['', [Validators.required]],
            precioBase: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            precioDeEjercicio: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            prima: ['', [Validators.required]],
            categoryCombinada: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            observaciones: ['', [Validators.required, Validators.maxLength(150)]],
            categoryCancela: ['', [Validators.required]],
            liquidaRegistros: ['', [Validators.required]],
            categoryOfertaDeEntrega: ['', [Validators.required]],
            procedencia: ['', [Validators.required]],
            categoryRealizado: ['', [Validators.required]],
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

    // ---------------------------------------------------------------------------------
    get emailField() {
        return this.form.get('email');
    }

    get emailFieldIsValid() {
        return (this.emailField?.touched || this.emailField?.dirty)  && this.emailField.valid;
    }

    get emailFieldIsInvalid() {
        return  (this.emailField?.touched || this.emailField?.dirty) && this.emailField.invalid;
    }

    // ---------------------------------------------------------------------------------
    get codigoField() {
        return this.form.get('codigo');
    }

    get codigoFieldIsValid() {
        return (this.codigoField?.touched || this.codigoField?.dirty) && this.codigoField.valid;
    }

    get codigoFieldIsInvalid() {
        return (this.codigoField?.touched || this.codigoField?.dirty)&& this.codigoField.invalid;
    }

    // -----------------------------------------------------------------------------------
    get codigoClienteField() {
        return this.form.get('codigoCliente');
    }

    get codigoClienteFieldIsValid() {
        return (this.codigoClienteField?.touched || this.codigoClienteField?.dirty) && this.codigoClienteField.valid;
    }

    get codigoClienteFieldIsInvalid() {
        return (this.codigoClienteField?.touched || this.codigoClienteField?.dirty) && this.codigoClienteField.invalid;
    }

    // -----------------------------------------------------------------------------------

    get contratoField() {
        return this.form.get('contrato');
    }

    get contratoFieldIsValid() {
        return (this.contratoField?.touched || this.contratoField?.dirty)  && this.contratoField.valid;
    }

    get contratoFieldIsInvalid() {
        return  (this.contratoField?.touched || this.contratoField?.dirty) && this.contratoField.invalid;
    }

    // ---------------------------------------------------------------------------------

    get productoField() {
        return this.form.get('producto');
    }

    get productoFieldIsValid() {
        return (this.productoField?.touched || this.productoField?.dirty)  && this.productoField.valid;
    }

    get productoFieldIsInvalid() {
        return (this.productoField?.touched || this.productoField?.dirty) && this.productoField.invalid;
    }

    // ---------------------------------------------------------------------------------

    get toneladasField() {
        return this.form.get('toneladas');
    }

    get toneladasFieldIsValid() {
        return (this.toneladasField?.touched || this.toneladasField?.dirty)  && this.toneladasField.valid;
    }

    get toneladasFieldIsInvalid() {
        return (this.toneladasField?.touched || this.toneladasField?.dirty) && this.toneladasField.invalid;
    }

    // ---------------------------------------------------------------------------------

    get posicionField() {
        return this.form.get('posicion');
    }

    get posicionFieldIsValid() {
        return (this.posicionField?.touched || this.posicionField?.dirty)  && this.posicionField.valid;
    }

    get posicionFieldIsInvalid() {
        return (this.posicionField?.touched || this.posicionField?.dirty) && this.posicionField.invalid;
    }

    // ---------------------------------------------------------------------------------

    get precioBaseField() {
        return this.form.get('precioBase');
    }

    get precioBaseFieldIsValid() {
        return (this.precioBaseField?.touched || this.precioBaseField?.dirty)  && this.precioBaseField.valid;
    }

    get precioBaseFieldIsInvalid() {
        return (this.precioBaseField?.touched || this.precioBaseField?.dirty) && this.precioBaseField.invalid;
    }

    // ---------------------------------------------------------------------------------

    get precioDeEjercicioField() {
        return this.form.get('precioDeEjercicio');
    }

    get precioDeEjercicioFieldIsValid() {
        return (this.precioDeEjercicioField?.touched || this.precioDeEjercicioField?.dirty)  && this.precioDeEjercicioField.valid;
    }

    get precioDeEjercicioFieldIsInvalid() {
        return (this.precioDeEjercicioField?.touched || this.precioDeEjercicioField?.dirty) && this.precioDeEjercicioField.invalid;
    }

    // ---------------------------------------------------------------------------------
    get primaField() {
        return this.form.get('prima');
    }

    get primaFieldIsValid() {
        return (this.primaField?.touched || this.primaField?.dirty)  && this.primaField.valid;
    }

    get primaFieldIsInvalid() {
        return (this.primaField?.touched || this.primaField?.dirty) && this.primaField.invalid;
    }

    // ---------------------------------------------------------------------------------

    get observacionesField() {
        return this.form.get('observaciones');
    }

    get observacionesFieldIsValid() {
        return (this.observacionesField?.touched || this.observacionesField?.dirty)  && this.observacionesField.valid;
    }

    get observacionesFieldIsInvalid() {
        return (this.observacionesField?.touched || this.observacionesField?.dirty) && this.observacionesField.invalid;
    }

    // ---------------------------------------------------------------------------------

    doSomething() {
        console.log('click');
    }



}

