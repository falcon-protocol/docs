# Core concepts

In order to best use Falcon, it is recommended to first understand the core data model and lifecycle of an app bundle. 

::: tip What you will learn on this page
- Entities within an app bundle
- Relationships between entities
:::

## Entities
The following are the core entities within a bundle system

### Customer
The end consumer of the bundle. The customer needs to be able to purchase a
bundle, manage their subscription and access the apps within the bundle. 

Falcon provides the customer mapping bridge between all applications in a bundle
facilitating seamless access to all apps in the bundle. 

### Merchant
The merchant is a subscription business that is offering their app as part of a
bundle. 

::: info 
The primary responsibility of the merchant is to provision access to their app
via the entitlement API when prompted by the Falcon Protocol.
:::
### Reseller
The reseller is a subscription business that is offering a bundle of apps to an
end customer.

::: info 
The primary responsibility of the resller is to present the bundle to the end
customer and in the case of a [super bundle](/super) collect revenue for
the entire bundle and remit commission to the Falcon Protocol for further
distribution.
:::
### Smart escrow
The smart escrow is a programmatic contract that encodes the terms of the
partnership agreement between the reseller and the merchant.
### Falcon broker
The Falcon broker is an agentic instance of the Falcon Protocol which provides
the bridge between the reseller and the merchant.

It is responsible for:
1. Offering communication to the reseller 
2. Entitlemenet management to the merchant
3. Smart escrow management between reseller and merchant

## Entity relationship
![Image](../images/entity-diagram.jpg)
