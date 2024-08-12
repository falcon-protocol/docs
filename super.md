
# Super bundles 

Super bundles are a tighly coupled packaging of subscription apps, that bring
additional value propositions for app businesses beyond soft bundles.

::: tip What you will learn on this page
- What a super bundle is 
- How they work on the Falcon protocol
:::


## What is a super bundle
A super bundle is where a customer is offered a bundle of subscription apps for
a single price and payment. The customer makes one payment for the entire bundle
through the reseller app and is provided access to all apps in the bundle. The
subscription offer here is _**contingent**_ meaning; should the user unsubscribe
from the bundle they will lose priviledged access to all apps in the bundle and
must subscribe to each app individually to maintain access.

### Lifecycle sequence
- Merchant apps in the bundle define special deal pricing only available to the
  resller
- The reseller merchandises this special pricing as part of a subscription
  bundle in their app. The customer will make one subscription payment to the
  reseller application. 
- When the customer subscribes to the bundle, the reseller will report this
  subscription event to the Falcon protocol. 
- The Falcon protocol will instruct each merchant app in the
  bundle to provision access via an entitlement to the customer. The merchant
  app will continue to validate entitlements with the Falcon protocol to
  maintain the correct state.

  
