import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSignatureDrawingPad } from '@demo/shared';
import {} from '@elgiborsolution/signature-drawing-pad';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSignatureDrawingPad {}
