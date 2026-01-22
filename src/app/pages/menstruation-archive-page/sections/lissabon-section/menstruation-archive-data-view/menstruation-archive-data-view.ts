import {Component, inject, Input} from '@angular/core';
import {ImageView} from '../../../../../components/image-view/image-view';
import {
  MenstruationArchiveDataViewPositionData
} from '../../../../../models/menstruation-archive-data-view-position-data';
import {MenstruationArchiveDataRecord} from '../../../../../models/menstruation-archive-data-record';
import {Dialog} from '@angular/cdk/dialog';
import {
  MenstruationArchiveDataViewPopup
} from '../menstruation-archive-data-view-popup/menstruation-archive-data-view-popup';
import {
  OrientationLayoutContainer
} from '../../../../../components/orientation-layout-container/orientation-layout-container';

@Component({
  selector: 'bb-menstruation-archive-data-view',
  imports: [
    ImageView,
    OrientationLayoutContainer,
  ],
  templateUrl: './menstruation-archive-data-view.html',
  styleUrl: './menstruation-archive-data-view.scss',
})
export class MenstruationArchiveDataView {

  dialog = inject(Dialog)

  @Input({required: true})
  recordData!: MenstruationArchiveDataRecord

  @Input({required: true})
  positionData!: MenstruationArchiveDataViewPositionData

  @Input({required: true})
  currentIndex!: number

  @Input({required: true})
  allRecords!: MenstruationArchiveDataRecord[]

  @Input({required: true})
  allPositions!: MenstruationArchiveDataViewPositionData[]

  getImageUrl() {
    return "lissabon/F7." + (this.positionData.image) + ".png"
  }

  openPopup() {
    this.dialog.open(MenstruationArchiveDataViewPopup, {
      data: {
        record: this.recordData,
        position: this.positionData,
        currentIndex: this.currentIndex,
        allRecords: this.allRecords,
        allPositions: this.allPositions
      }
    })
  }

}
