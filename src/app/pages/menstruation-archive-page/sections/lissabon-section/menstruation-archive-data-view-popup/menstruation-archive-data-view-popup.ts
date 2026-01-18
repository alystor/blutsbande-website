import {Component, Inject} from '@angular/core';
import {DIALOG_DATA} from '@angular/cdk/dialog';
import {MenstruationArchiveDataRecord} from '../../../../../models/menstruation-archive-data-record';
import {
  MenstruationArchiveDataViewPositionData
} from '../../../../../models/menstruation-archive-data-view-position-data';
import {ImageView} from '../../../../../components/image-view/image-view';
import {TextView} from '../../../../../components/text-view/text-view';

@Component({
  selector: 'bb-menstruation-archive-data-view-popup',
  imports: [
    ImageView,
    TextView
  ],
  templateUrl: './menstruation-archive-data-view-popup.html',
  styleUrl: './menstruation-archive-data-view-popup.scss',
})
export class MenstruationArchiveDataViewPopup {

  constructor(@Inject(DIALOG_DATA) public data: {
    record: MenstruationArchiveDataRecord,
    position: MenstruationArchiveDataViewPositionData,
  }) {}

}
