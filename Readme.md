
# Loading the KRUNKER.API librady

   
## You need to load items.ob.js before krunkerapi.js

    
## Do not donwload items.ob.js unless you want to update it yourself each time krunker has an update

```html
<script type="text/javascript" src="https://hoodgail.github.io/krunker.api/build/items.ob.js"></script>
    <script type="text/javascript" src="https://hoodgail.github.io/krunker.api/build/krunkerapi.js" defer></script>  
```
    
#   If you are using this library for 3d perpuses

 
   
## You need to load items.obfuscated.js before krunkerapi.js

     
Then i suggest you to add  var krunkerapi_initcors = true before you load krunkerapi.js to avoid any cors policy issues
But note that it will not get the assets from ``assets.krunker.io/`` it will get them from ``hoodgail.github.io/krunker_assets/``
```html   
    <script>var krunkerapi_initcors = true;</script>
 ```
    
    
