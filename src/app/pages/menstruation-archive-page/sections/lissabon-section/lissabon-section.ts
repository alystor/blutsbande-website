import {Component, inject} from '@angular/core';
import {MenstruationArchiveDataService} from '../../../../service/menstruation-archive-data-service';
import {MenstruationArchiveDataRecord} from '../../../../models/menstruation-archive-data-record';
import {
  MenstruationArchiveDataViewEditor
} from './menstruation-archive-data-view-editor/menstruation-archive-data-view-editor';
import {MenstruationArchiveDataViewPositionData} from '../../../../models/menstruation-archive-data-view-position-data';
import {MenstruationArchiveDataView} from './menstruation-archive-data-view/menstruation-archive-data-view';
import {
  OrientationLayoutContainer
} from '../../../../components/orientation-layout-container/orientation-layout-container';

@Component({
  selector: 'bb-lissabon-section',
  imports: [
    MenstruationArchiveDataViewEditor,
    MenstruationArchiveDataView,
    OrientationLayoutContainer
  ],
  templateUrl: './lissabon-section.html',
  styleUrl: './lissabon-section.scss',
})
export class LissabonSection {

  menstruationArchiveDataService = inject(MenstruationArchiveDataService)

  records: MenstruationArchiveDataRecord[] | undefined
  positionsP: MenstruationArchiveDataViewPositionData[] | undefined
  positions: MenstruationArchiveDataViewPositionData[] | undefined

  editorMode = false

  constructor() {
    this.menstruationArchiveDataService.getMenstruationArchiveDataRecords().subscribe(records => {
      this.records = records
    });
    this.menstruationArchiveDataService.getPositionData().subscribe(positions => {
      this.positions = positions
    })

    this.menstruationArchiveDataService.getPositionDataP().subscribe(positions => {
      this.positionsP = positions
    })
  }

  copyToClipboard() {
    if (!this.positions) {
      return
    }

    const jsonString = JSON.stringify(this.positions, null, 2)
    navigator.clipboard.writeText(jsonString).then(() => {
      console.log('Position data copied to clipboard')
    }).catch(err => {
      console.error('Could not copy position data: ', err)
    })
  }

  getPositionDataForIndex(index: number): MenstruationArchiveDataViewPositionData {
    if (!this.positions) {
      throw new Error("Position data not loaded yet")
    }
    return this.positions.find(pos => pos.index === index) ??
      {
        index: index,
        top: Math.floor(index / 3) * 10,
        left: ((index % 3) + 1) * 25,
        rotation: 0,
        image: 1
      }
  }

  getPositionDataForIndexP(index: number): MenstruationArchiveDataViewPositionData {
    if (!this.positionsP) {
      throw new Error("Position data not loaded yet")
    }
    return this.positionsP.find(pos => pos.index === index) ??
      {
        index: index,
        top: Math.floor(index / 3) * 20,
        left: ((index % 3) + 1) * 25,
        rotation: 0,
        image: 1
      }
  }

  updatePositionData(index: number, newPositionData: MenstruationArchiveDataViewPositionData) {
    if (!this.positions) {
      return
    }

    // Finde und aktualisiere die Position im Array
    const positionIndex = this.positions.findIndex(pos => pos.index === index)
    if (positionIndex !== -1) {
      this.positions[positionIndex] = newPositionData
    } else {
      // Falls nicht gefunden, füge es hinzu
      this.positions.push(newPositionData)
    }
  }

  protected readonly JSON = JSON;
}
