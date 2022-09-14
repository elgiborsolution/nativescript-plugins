# Nativescript Drawing Pad Signature
Shared component to show modal page to write digital signature as a photo.

## Installation
```javascript
ns plugin add @elgiborsolution/signature-drawing-pad
```

## Angular NativeScript
- Add the `SignatureDrawingPadModule` to your module imports where you will use the plugin.

```typescript
import { SignatureDrawingPadModule } from '@elgiborsolution/signature-drawing-pad/angular'
imports: [SignatureDrawingPadModule];
```

## Usage
#### app.component.html
```xml
<SignatureDrawingPad
    height="170"
    borderColor="#D1CECE"
    borderRadius="8"
    placeholder="Add signature"
    backgroundColor="#FFB800"
    signatureTitle="Add Signature"
    negativeButtonBgColor="#FFFFFF"
    negativeButtonBorderColor="#FFB800"
    negativeButtonTextColor="#FFB800"
    negativeButtonText="Clear"
    positiveButtonBgColor="#FFB800"
    positiveButtonBorderColor="#FFB800"
    positiveButtonTextColor="#FFFFFF"
    positiveButtonText="Save"
    (onValueChange)="onSignatureCapture($event)"
    >
</SignatureDrawingPad>
```

#### app.component.ts
```xml
/**
 * Handle event on captured signature
 *
 * @params args any
 * @return void
 */
onSignatureCapture(args: any): void {
    console.log(args)
}
```

## API
### Available Methods
| Property                  | Type     | Default             | Description |
| ------------------------- | -------- | ------------------- | ----------- |
| height                    | `number` | 179                 | Height value of signature placeholder in dp. |
| borderColor               | `string` | #E8E8E8             | Border color of signature box placeholder. |
| borderRadius              | `number` | 10                  | Border radius of signature box placeholder in dp. |
| placeholder               | `string` | Tambah Tanda Tangan | Placeholder text shown inside box before signature has been captured yet. |
| backgroundColor           | `string` | #FFB800             | Background color of signature button. You should choose a color that contrasts with white, because the pencil icon inside the button uses white. The value can use color name, hex, or rgb. |
| signatureTitle            | `string` | Tambah Tanda Tangan | Title text of drawing pad |
| negativeButtonBgColor     | `string` | #FFFFFF             | Background color of negative button (clear signature). You should choose a color that contrasts with negative button text. The value can use color name, hex, or rgb. |
| negativeButtonBorderColor | `string` | #FFB800             | Border color of negative button (clear signature). You should choose a color that contrasts with negative button background. The value can use color name, hex, or rgb. |
| negativeButtonTextColor   | `string` | #FFB800             | Text color of negative button (clear signature). You should choose a color that contrasts with negative button background. The value can use color name, hex, or rgb. |
| negativeButtonText        | `string` | Hapus               | Text of negative button (clear signature) |
| positiveButtonBgColor     | `string` | #FFB800             | Background color of positive button (save signature). You should choose a color that contrasts with positive button text. The value can use color name, hex, or rgb. |
| positiveButtonBorderColor | `string` | #FFB800             | Border color of positive button (save signature). You should choose a color that contrasts with positive button background. The value can use color name, hex, or rgb. |
| positiveButtonTextColor   | `string` | #FFFFFF             | Text color of positive button (save signature). You should choose a color that contrasts with positive button background. The value can use color name, hex, or rgb. |
| positiveButtonText        | `string` | Simpan              | Text of positive button (save signature) |

### Response
| Property        | Type               |
| --------------- | ------------------ |
| (onValueChange) | base64 image (jpg) |

## Authors
- [@febriarief](https://www.github.com/febriarief)

## License
Apache License Version 2.0
