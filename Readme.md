# Loading the KRUNKER.API librady

   
## You need to load items.ob.js before krunkerapi.js

    
## Do not donwload items.ob.js unless you want to update it yourself each time krunker has an update

```html
  <!-- External resources -->
    <script type="text/javascript" src="https://hoodgail.github.io/krunker.api/build/items.ob.js"></script>
    <script type="text/javascript" src="https://hoodgail.github.io/krunker.api/build/krunkerapi.js" defer></script>
    ```   
    
#   If you are using this library for 3d perpuses

  
   
## You need to load items.obfuscated.js before krunkerapi.js

     
Then i suggest you to add  <script>var krunkerapi_initcors = true;</script> before you load krunkerapi.js to avoid any cors policy issues
But note that it will not get the assets from ``assets.krunker.io/`` it will get them from ``hoodgail.github.io/krunker_assets/``
```html
    <!-- add this before you load krunkerapi.js-->
    <script>var krunkerapi_initcors = true;</script>
    ```
