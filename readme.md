# UNOBTRUSIVE DATALAYER INTERCEPTION

By: Sandeep Shah @ Webtrends Optimize

This snippet polls datalayer, lifts new values, and transfers events of interest into Optimize.

It's less obtrusive than monkey-patching datalayer.push. 

This is not suitable for events which immediately redirect, except in SPAs where the window & document stays mounted even though content may change drastically.

## Usage

### Specifying events

eventsToListenFor is an Array - add your event names into it. 

### Specifying other variables to look in 

You'll see an example of this here:
``` javascript
 else if(o.othervariable && eventsToListenFor.includes(o.othervariable)){

    opt_data.push({
        event: o.othervariable
    });

}
```

Pick any variable name that makes sense to look in. 

## Placement 

We would expect this code to be added anywhere in pre-init.
