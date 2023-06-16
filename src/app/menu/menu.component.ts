import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  arrMenu: any[] = []

  constructor() {
   this.arrMenu.push({ nombre: "Secreto iberico", ingredientes: "carne muyyy buena", precio:" 18 euros" })
   this.arrMenu.push({ nombre: "Humus", ingredientes: "remolacha, garbanzos, etc", precio:" 12 euros" })
   this.arrMenu.push({ nombre: "Patatas revolconas", ingredientes: "patatas, huevo, pimenton ", precio:"14 euros" })
   this.arrMenu.push({ nombre: "Lubina", ingredientes: "pescado de calidad", precio:" 18 euros" })
   this.arrMenu.push({ nombre: "Sorbete de limon", ingredientes: "limon exprimido a mano", precio:" 5 euros" })
  }

}
