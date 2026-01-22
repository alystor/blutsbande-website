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
  dialog = inject(Dialog)

  constructor(@Inject(DIALOG_DATA) public data: {
    record: MenstruationArchiveDataRecord,
    position: MenstruationArchiveDataViewPositionData,
    currentIndex: number,
    allRecords: MenstruationArchiveDataRecord[],
    allPositions: MenstruationArchiveDataViewPositionData[],
  }) {}

  navigateToPrevious() {
    if (this.data.currentIndex > 0) {
      const newIndex = this.data.currentIndex - 1;
      this.navigateToIndex(newIndex);
    }
  }

  navigateToNext() {
    if (this.data.currentIndex < this.data.allRecords.length - 1) {
      const newIndex = this.data.currentIndex + 1;
      this.navigateToIndex(newIndex);
    }
  }

  private navigateToIndex(index: number) {
    const newRecord = this.data.allRecords[index];
    const newPosition = this.data.allPositions.find(pos => pos.index === index) ??
      this.data.allPositions[index] ??
      this.data.position;

    this.dialogRef.close();

    this.dialog.open(MenstruationArchiveDataViewPopup, {
      data: {
        record: newRecord,
        position: newPosition,
        currentIndex: index,
        allRecords: this.data.allRecords,
        allPositions: this.data.allPositions
      }
    });
  }

  canNavigatePrevious(): boolean {
    return this.data.currentIndex > 0;
  }

  canNavigateNext(): boolean {
    return this.data.currentIndex < this.data.allRecords.length - 1;
  }

}
