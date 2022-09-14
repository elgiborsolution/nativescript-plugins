import { Component, OnInit } from '@angular/core';
import { DrawingPad } from '@nativescript-community/drawingpad';
import { ModalDialogParams } from '@nativescript/angular';
import { SignatureDrawingPadProperties } from './../../index';

@Component({
  templateUrl: './signature-drawing-pad.component.html',
})
export class SignatureDrawingPadComponent implements OnInit {
  public drawingPadProperties: SignatureDrawingPadProperties;

  private _drawingPad: DrawingPad;

  constructor(private _modalDialogParams: ModalDialogParams) {
    this.drawingPadProperties = this._modalDialogParams.context;
  }

  /**
   * A callback method that is invoked immediately after the
   * default change detector has checked the directive's
   * data-bound properties for the first time,
   * and before any of the view or content children have been checked.
   * It is invoked only once when the directive is instantiated.
   */
  ngOnInit(): void {
    // this.drawingPadProperties = this._modalDialogParams.context
  }

  /**
   * Cancel proccess and close modal
   *
   * @return void
   */
  closeModal(args?: any): void {
    this._modalDialogParams.closeCallback(args);
  }

  /**
   * Handle event on drawing pad is loaded
   *
   * @param args any
   * @return void
   */
  onDrawingPadLoad(args: any): void {
    this._drawingPad = args.object;
  }

  /**
   * Clear drawing pad
   *
   * @return void
   */
  clearSignature(): void {
    if (!this._drawingPad) {
      console.error('Drawing pad container are not fully loaded');
      return;
    }

    try {
      this._drawingPad.clearDrawing();
    } catch (e: any) {
      // EAAAAA ....
    }
  }

  /**
   * Save image of signature from drawing pad
   *
   * @return void
   */
  save(): void {
    if (!this._drawingPad) {
      console.error('Drawing pad container are not fully loaded');
      return;
    }

    this._drawingPad
      .getDrawingAsBase64('jpg')
      .then((image: any) => {
        setTimeout(() => this.closeModal({ image }), 100);
      })
      .catch((e) => {
        console.error('Error to create image', e);
      });
  }
}
