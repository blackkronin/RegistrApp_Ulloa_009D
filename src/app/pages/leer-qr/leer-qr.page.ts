import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})
export class LeerQRPage implements OnInit {

  constructor(private menu: MenuController,
              private msj : ToastController) { }

  ngOnInit() {
  }

  desplegarMenu(){
    this.menu.open('first');
  }

  async MensajeListo(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.msj.create({
      message: 'Usted ha quedado Presente!',
      duration: 1000,
      position: position,
      color:"success"
    });

    await toast.present();
  }

}
