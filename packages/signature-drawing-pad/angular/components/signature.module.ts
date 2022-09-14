import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { ModalStack, overrideModalViewMethod } from 'nativescript-windowed-modal';
import { DrawingPad } from '@nativescript-community/drawingpad';
import { SignatureComponent } from './signature.component';
import { SignatureDrawingPadComponent } from './signature-drawing-pad.component';

overrideModalViewMethod();
registerElement('ModalStack', () => ModalStack);
registerElement('DrawingPad', () => DrawingPad);

@NgModule({
  exports: [SignatureComponent, SignatureDrawingPadComponent],

  declarations: [SignatureComponent, SignatureDrawingPadComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SignatureDrawingPadModule {}
