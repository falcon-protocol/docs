# Android Bundle Integration

## Download the Falcon Labs SDK
The falcon labs SDK provides everything your app needs to surfae bundle
offerings natively in your Android application.

[coming soon]


### Add the SDK Key
1. Create an account with Falcon labs [coming soon]
2. Navigate to account -> API / SDK Keys 
3. You will find your SDK Key there.


## Initialize the Falcon SDK
```kotlin
class MainActivity : Activity()
{
  override fun onCreate(savedInstanceState: Bundle?)
  {
    FalconSdk.getInstance( context ).initializeSdk({ configuration: FalconSdkConfiguration ->
      // Falcon SDK is initialized, start loading bundle offerings
    })
  }
}
```


Once the SDK is loaded you are ready to call any of its method to surface bundle
offerings in your application.

## Display a bundle offering

```kotlin
class MyApplication : Application()
{
  private lateinit var bundleOpenManager: ExampleBundleOpenManager

  override fun onCreate()
  {
    super.onCreate()

    FalconSdk.getInstance( this ).initializeSdk({ configuration: FalconSdkConfiguration ->
    {
      bundleOpenManager = ExampleBundleOpenManager(applicationContext)
    })
  }
}

class ExampleBundleOpenManager(applicationContext: Context?) : LifecycleObserver, FLListener
{
  private lateinit var appOpenBundle: FLAppOpenBundle
  private lateinit var context: Context

  init
  {
    ProcessLifecycleOwner.get().lifecycle.addObserver(this)

    context = applicationContext

    appOpenBundle = FLAppOpenBundle("«placement-ID»", applicationContext!!)
    appOpenBundle.setListener(this)
    appOpenBundle.loadBundle()
  }

  private fun showBundleIfReady()
  {
    if (appOpenBundle == null || !FalconSdk.getInstance(context).isInitialized) return

    if (appOpenBundle.isReady)
    {
      appOpenBundle.showBundle("«placement-ID»")
    }
    else
    {
      appOpenBundle.loadBundle()
    }
  }

  @OnLifecycleEvent(Lifecycle.Event.ON_START)
  fun onStart()
  {
    showBundleIfReady()
  }

  override fun onBundleLoaded(bundle: FLBundle) {}
  override fun onBundleLoadFailed(bundleId: String, error: FLError) {}
  override fun onBundleDisplayed(bundle: FLBundle) {}
  override fun onBundleClicked(bundle: FLBundle) {}

  override fun onBundleHidden(bundle: FLBundle)
  {
    appOpenBundle.loadBundle()
  }

  override fun onBundleDisplayFailed(bundle: FLBundle, error: FLError)
  {
    appOpenBundle.loadBundle()
  }
}
```
