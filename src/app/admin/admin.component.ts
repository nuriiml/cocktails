import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  platosForm: FormGroup 

  isError = false
  arrPlatos: any[] = []

  constructor(private fb: FormBuilder) {
    this.platosForm = this.fb.group({
      'name': ['', Validators.required],
      'ingrediente': ['', Validators.required],
      'precio': ['', Validators.required],
    })

  }

  sendData() {
    let platoName = this.platosForm.value.name
    let platoIngrediente = this.platosForm.value.ingrediente
    let platoPrecio = this.platosForm.value.ingrediente

    if (platoName.length == 0 || platoIngrediente.length == 0 || platoPrecio.length == 0) {
      this.isError = true
      return
    } else {
      this.isError = false
    }

    this.arrPlatos.push({ id: this.arrPlatos.length, name: platoName, ingrediente: platoIngrediente, precio: platoPrecio })

    this.platosForm.patchValue({ name: "", raza: "" })
  }

  deleteGato(id: number) {
    this.arrPlatos= this.arrPlatos.filter(g => g.id != id)
  }

}
