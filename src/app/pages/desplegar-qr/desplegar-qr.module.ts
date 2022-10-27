import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesplegarQrPageRoutingModule } from './desplegar-qr-routing.module';

import { DesplegarQrPage } from './desplegar-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesplegarQrPageRoutingModule
  ],
  declarations: [DesplegarQrPage]
})
export class DesplegarQrPageModule {}
