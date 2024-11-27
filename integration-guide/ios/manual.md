# Manual iOS SDK Integration

## Prerequisites

Before integrating FalconSDK, ensure the following:
- Xcode Version: Xcode 15.0 or later.
- Supported Platforms: FalconSDK supports iOS 13.0 and later.
- Framework Type: FalconSDK is a static framework packaged as an .xcframework.


## Download SDK
[Click here to download the file](./FalconSDK.zip)\
The downloaded zip file contains the FalconSDK.xcframework file

## Adding FalconSDK to Your Xcode Project

1.	Drag and drop the FalconSDK.xcframework file into your Xcode project’s **Project Navigator**.
2. In the dialog that appears, ensure the following options are selected:
   - **“Copy files to destination”**: Checked (this ensures the framework is copied into your project directory).
   - **Add to targets**: Select the target(s) where you will use FalconSDK.
3.  Ensure that FalconSDK.xcframework is included in the **Frameworks, Libraries, and Embedded Content** section of your Xcode project target’s settings.


## Using FalconSDK

### Import the Framework

To use FalconSDK, import it into your code:

```swift
import FalconSDK
```

### Start Using FalconSDK
Once you have imported the framework, you can start using it in your code.\
Here’s an example of how to initialize and use FalconSDK:
```swift
FLSdk.initSDK(key: "YOUR_SDK_KEY") { result in
}
```