import {ChangeDetectorRef, Component, EventEmitter, HostListener, inject, Input, Output} from '@angular/core';
import {ImageView} from '../../../../../components/image-view/image-view';
import {
  MenstruationArchiveDataViewPositionData
} from '../../../../../models/menstruation-archive-data-view-position-data';
import {NgClass} from '@angular/common';
import {TextView} from '../../../../../components/text-view/text-view';

@Component({
  selector: 'bb-menstruation-archive-data-view-editor',
  imports: [
    ImageView,
    NgClass,
    TextView
  ],
  templateUrl: './menstruation-archive-data-view-editor.html',
  styleUrl: './menstruation-archive-data-view-editor.scss',
})
export class MenstruationArchiveDataViewEditor {

  cdk = inject(ChangeDetectorRef)

  @Input({required: true})
  positionData!: MenstruationArchiveDataViewPositionData

  @Output()
  positionDataChange: EventEmitter<MenstruationArchiveDataViewPositionData> = new EventEmitter()

  selected = false
  private isDragging = false
  private dragStartX = 0
  private dragStartY = 0
  private dragStartLeft = 0
  private dragStartTop = 0

  getImageUrl() {
    return "lissabon/F7." + (this.positionData.image) + ".png"
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.selected) {
      event.preventDefault()
      const newPositionData = {...this.positionData}

      switch (event.key) {
        case 'ArrowUp':
        case 'w':
          newPositionData.top -= 1
          break;
        case 'ArrowDown':
        case 's':
          newPositionData.top += 1
          break;
        case 'ArrowLeft':
        case 'a':
          newPositionData.left -= 1
          break;
        case 'ArrowRight':
        case 'd':
          newPositionData.left += 1
          break;
        case 'Escape':
          this.selected = false
          return
      }

      this.positionData = newPositionData
      this.positionDataChange.emit(newPositionData)
      this.cdk.detectChanges()
    }
  }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    if (this.selected) {
      event.preventDefault()
      const newPositionData = {...this.positionData}
      newPositionData.rotation += event.deltaY > 0 ? 2 : -2
      this.positionData = newPositionData
      this.positionDataChange.emit(newPositionData)
      this.cdk.detectChanges()
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    // Mittlere Maustaste (Button 1) für Bildwechsel
    if (event.button === 1) {
      event.preventDefault()
      const newPositionData = {...this.positionData}
      newPositionData.image = (newPositionData.image % 4) + 1
      this.positionData = newPositionData
      this.positionDataChange.emit(newPositionData)
      this.cdk.detectChanges()
      return
    }

    // Linke Maustaste (Button 0) für Drag oder Selektion
    if (event.button === 0) {
      this.selected = true

      // Starte Drag, wenn bereits selektiert
      if (this.selected) {
        event.preventDefault()
        this.isDragging = true

        // Speichere Start-Positionen (in Pixeln für Mouse-Event)
        this.dragStartX = event.clientX
        this.dragStartY = event.clientY
        this.dragStartLeft = this.positionData.left
        this.dragStartTop = this.positionData.top
      }
    }
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    if (this.isDragging) {
      this.isDragging = false
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return

    event.preventDefault()

    // Berechne die Differenz in Pixeln
    const deltaX = event.clientX - this.dragStartX
    const deltaY = event.clientY - this.dragStartY

    // Konvertiere Pixel zu vw (1vw = viewport width / 100)
    // Annahme: viewport width in Pixeln
    const vwInPixels = window.innerWidth / 100
    const deltaXvw = deltaX / vwInPixels
    const deltaYvw = deltaY / vwInPixels

    // Erstelle neues Objekt mit aktualisierten Positionen
    const newPositionData = {
      ...this.positionData,
      left: this.dragStartLeft + deltaXvw,
      top: this.dragStartTop + deltaYvw
    }

    this.positionData = newPositionData
    this.positionDataChange.emit(newPositionData)
    this.cdk.detectChanges()
  }
}
