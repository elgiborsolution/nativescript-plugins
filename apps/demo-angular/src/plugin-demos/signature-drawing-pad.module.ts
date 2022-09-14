import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SignatureDrawingPadComponent } from './signature-drawing-pad.component';
import { SignatureDrawingPadModule as SignatureDrawingPad } from '@elgiborsolution/signature-drawing-pad/angular';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SignatureDrawingPadComponent }]), SignatureDrawingPad],
  declarations: [SignatureDrawingPadComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SignatureDrawingPadModule {}
