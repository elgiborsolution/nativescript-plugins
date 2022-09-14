import { Component, NgZone } from '@angular/core';
import { DemoSharedSignatureDrawingPad } from '@demo/shared';
import {} from '@elgiborsolution/signature-drawing-pad';

@Component({
  selector: 'demo-signature-drawing-pad',
  templateUrl: 'signature-drawing-pad.component.html',
})
export class SignatureDrawingPadComponent {
  demoShared: DemoSharedSignatureDrawingPad;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSignatureDrawingPad();
  }
}
