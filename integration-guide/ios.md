# iOS Bundle Integration

## Download the Falcon Labs SDK
The falcon labs SDK provides everything your app needs to surfae bundle
offerings natively in your iOS application.

[coming soon]


### Add the SDK Key
1. Create an account with Falcon labs [coming soon]
2. Navigate to account -> API / SDK Keys 
3. You will find your SDK Key there.


## Initialize the Falcon SDK
```swift
import FalconSDK

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate
{
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool
  {
    FLSdk.shared().initializeSdk { (configuration: FLSdkConfiguration) in
    }
  }
}
```


Once the SDK is loaded you are ready to call any of its method to surface bundle
offerings in your application.

## Display a bundle offering

```swift
@UIApplicationMain
class AppDelegate: UIApplicationDelegate
{
  private lazy var appOpenAd = FLappOpenBundle(placementIdentifier: "«placement-ID»")

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool
  {
    FLSdk.shared().initializeSdk { (configuration: FLSdkConfiguration) in
      appOpenBundle.delegate = self
      appOpenAd.load()
    }

    return true
  }

  private func showBundle()
  {
    if FLSdk.shared().isInitialized
    {
      return
    }

    if appOpenBundle.isReady
    {
      appOpenBundle.show(forPlacement: "«placement-ID»")
    }
    else
    {
      appOpenBundle.load()
    }
  }
}

extension AppDelegate : FLBundleDelegate
{
  func didLoad(_ bundle: FLBundle) {}
  func didFailToLoadBundle(forPlacementIdentifier placementIdentifier: String, withError error: FLError) {}
  func didDisplay(_ bundle: FLBundle) {}
  func didClick(_ bundle: FLBundle) {}

  func didHide(_ bundle: FLBundle)
  {
    appOpenBundle.load()
  }

  func didFail(toDisplay bundle: FLBundle, withError error: FLError)
  {
    appOpenBundle.load()
  }
}
```
