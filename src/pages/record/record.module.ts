import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Record } from './record';

@NgModule({
  declarations: [
    Record,
  ],
  imports: [
    IonicModule.forChild(Record),
  ],
  exports: [
    Record
  ]
})
export class RecordModule {}
