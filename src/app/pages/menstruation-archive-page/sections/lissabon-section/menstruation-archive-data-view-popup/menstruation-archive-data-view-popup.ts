import {Component, inject, Inject} from '@angular/core';
import {Dialog, DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import {MenstruationArchiveDataRecord} from '../../../../../models/menstruation-archive-data-record';
import {
  MenstruationArchiveDataViewPositionData
} from '../../../../../models/menstruation-archive-data-view-position-data';
import {ImageView} from '../../../../../components/image-view/image-view';
import {TextView} from '../../../../../components/text-view/text-view';
import {
  OrientationLayoutContainer
} from '../../../../../components/orientation-layout-container/orientation-layout-container';

@Component({
  selector: 'bb-menstruation-archive-data-view-popup',
  imports: [
    ImageView,
    TextView,
    OrientationLayoutContainer
  ],
  templateUrl: './menstruation-archive-data-view-popup.html',
  styleUrl: './menstruation-archive-data-view-popup.scss',
})
export class MenstruationArchiveDataViewPopup {

  dialogRef: DialogRef = inject(DialogRef)

  constructor(@Inject(DIALOG_DATA) public data: {
    record: MenstruationArchiveDataRecord,
    position: MenstruationArchiveDataViewPositionData,
  }) {}

}
