import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { ImageSource } from '@nativescript/core';
import { ModalDialogService } from '@nativescript/angular';
import { SignatureButtonProperties, SignatureDrawingPadProperties, SignaturePlaceholderProperties } from './../../index';
import { SignatureDrawingPadComponent } from './signature-drawing-pad.component';

@Component({
  selector: 'SignatureDrawingPad',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignatureComponent implements OnInit {
  @Input() heightSignaturePlaceholder: number;
  @Input() borderColorSignaturePlaceholder: string;
  @Input() borderRadiusSignaturePlaceholder: number;
  @Input() placeholder: string;
  @Input() signatureButtonColor: string;
  @Input() signatureTitle: string;
  @Input() negativeButtonBgColor: string;
  @Input() negativeButtonBorderColor: string;
  @Input() negativeButtonTextColor: string;
  @Input() negativeButtonText: string;
  @Input() positiveButtonBgColor: string;
  @Input() positiveButtonBorderColor: string;
  @Input() positiveButtonTextColor: string;
  @Input() positiveButtonText: string;

  @Output() onValueChange = new EventEmitter();

  public signaturePlaceholderOptions: SignaturePlaceholderProperties;
  public signatureButtonOptions: SignatureButtonProperties;
  public signatureImage: any;
  public modalContext: SignatureDrawingPadProperties;

  constructor(private _changeDetectorRef: ChangeDetectorRef, private _modalDialogService: ModalDialogService, private _viewContainerRef: ViewContainerRef) {}

  /**
   * A callback method that is invoked immediately after the
   * default change detector has checked the directive's
   * data-bound properties for the first time,
   * and before any of the view or content children have been checked.
   * It is invoked only once when the directive is instantiated.
   *
   * @return void
   */
  ngOnInit(): void {
    this.signaturePlaceholderOptions = {
      height: this.heightSignaturePlaceholder || 179,
      borderColor: this.borderColorSignaturePlaceholder || '#E8E8E8',
      borderRadius: this.borderRadiusSignaturePlaceholder || 10,
      placeholder: this.placeholder || 'Tambah Tanda Tangan',
    };

    this.signatureButtonOptions = {
      backgroundColor: this.signatureButtonColor || '#FFB800',
    };

    this.modalContext = {
      signatureTitle: this.signatureTitle || 'Tambah Tanda Tangan',
      negativeButtonBgColor: this.negativeButtonBgColor || '#FFFFFF',
      negativeButtonBorderColor: this.negativeButtonBorderColor || '#FFB800',
      negativeButtonTextColor: this.negativeButtonTextColor || '#FFB800',
      negativeButtonText: this.negativeButtonText || 'Hapus',
      positiveButtonBgColor: this.positiveButtonBgColor || '#FFB800',
      positiveButtonBorderColor: this.positiveButtonBorderColor || '#FFB800',
      positiveButtonTextColor: this.positiveButtonTextColor || '#FFFFFF',
      positiveButtonText: this.positiveButtonText || 'Simpan',
    };
  }

  /**
   * Open modal page to draw signature use drawing pad
   *
   * @return void
   */
  openModal(): void {
    this._modalDialogService
      .showModal(SignatureDrawingPadComponent, {
        context: this.modalContext,
        fullscreen: false,
        viewContainerRef: this._viewContainerRef,
      })
      .then((resp) => {
        if (resp && typeof resp.image !== 'undefined') {
          ImageSource.fromBase64(resp.image).then((image) => {
            this.signatureImage = image;
            this._changeDetectorRef.detectChanges();
            this.onValueChange.emit({ base64Image: resp.image });
          });
        } else {
          this.onValueChange.emit(null);
        }
      })
      .catch((e) => {
        console.error('Error open modal', e);
        this.onValueChange.emit(null);
      });
  }
}
