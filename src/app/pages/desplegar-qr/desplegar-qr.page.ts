import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-desplegar-qr',
  templateUrl: './desplegar-qr.page.html',
  styleUrls: ['./desplegar-qr.page.scss'],
})
export class DesplegarQrPage implements OnInit {

  constructor(private menu:MenuController,
              private msj :ToastController) { }

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
