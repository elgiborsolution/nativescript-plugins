export interface SignaturePlaceholderProperties {
  /**
   * Height value of signature placeholder in dp.
   */
  height: number;

  /**
   * Border color of signature box placeholder.
   */
  borderColor: string;

  /**
   * Border radius of signature box placeholder in dp.
   */
  borderRadius: number;

  /**
   * Placeholder text shown inside box before signature has been captured yet.
   */
  placeholder: string;
}

export interface SignatureButtonProperties {
  /**
   * Background color of signature button. You should choose a color that contrasts with white,
   * because the pencil icon inside the button uses white. The value can use color name, hex, or rgb.
   */
  backgroundColor: string;
}

export interface SignatureDrawingPadProperties {
  /**
   * Title text of drawing pad
   */
  signatureTitle: string;

  /**
   * Background color of negative button (clear signature). You should choose a color that contrasts with
   * negative button text. The value can use color name, hex, or rgb.
   */
  negativeButtonBgColor: string;

  /**
   * Border color of negative button (clear signature). You should choose a color that contrasts with
   * negative button background. The value can use color name, hex, or rgb.
   */
  negativeButtonBorderColor: string;

  /**
   * Text color of negative button (clear signature). You should choose a color that contrasts with
   * negative button background. The value can use color name, hex, or rgb.
   */
  negativeButtonTextColor: string;

  /**
   * Text of negative button (clear signature)
   */
  negativeButtonText: string;

  /**
   * Background color of positive button (save signature). You should choose a color that contrasts with
   * positive button text. The value can use color name, hex, or rgb.
   */
  positiveButtonBgColor: string;

  /**
   * Border color of positive button (save signature). You should choose a color that contrasts with
   * positive button background. The value can use color name, hex, or rgb.
   */
  positiveButtonBorderColor: string;

  /**
   * Text color of positive button (save signature). You should choose a color that contrasts with
   * positive button background. The value can use color name, hex, or rgb.
   */
  positiveButtonTextColor: string;

  /**
   * Text of positive button (save signature)
   */
  positiveButtonText: string;
}
