/* 
    UNOBTRUSIVE DATALAYER INTERCEPTION
    By: Sandeep Shah @ Webtrends Optimize

    This snippet polls datalayer, lifts new values, and transfers events of interest into Optimize.

    It's less obtrusive than monkey-patching datalayer.push. 

    This is not suitable for events which immediately redirect, except in SPAs where the window & document stays mounted even though content may change drastically.
*/

;(function(){

    var eventsToListenFor = [
        "event name 1",
        "event name 2",
        // ...
    ];

    window.opt_data = window.opt_data || [];

    var last = -1;

    WT.pollDataLayer = setInterval(function(){

        if(!window.dataLayer || (window.dataLayer.length-1) <= last) return;

        // new datalayer items found 

        var newitems = dataLayer.slice(last+1);
        // if(document.cookieconsole.log("New items found ", last+1, newitems);

        last = dataLayer.length -1;

        newitems.forEach(function(o){
            
            if(o.event && eventsToListenFor.includes(o.event)){

                opt_data.push({
                    event: o.event
                });

            } else if(o.othervariable && eventsToListenFor.includes(o.othervariable)){

                opt_data.push({
                    event: o.othervariable
                });

            }

        });
        
    }, 1000);

})();
