> **Loading the KRUNKER.API librady**
> You need to load items.ob.js before krunkerapi.js    
>  Do not donwload items.ob.js unless you want to update it yourself each time krunker has an update
```html
<script type="text/javascript" src="https://hoodgail.github.io/krunker.api/build/items.ob.js"></script>
    <script type="text/javascript" src="https://hoodgail.github.io/krunker.api/build/krunkerapi.js" defer></script> 
```
> **If you are using this library for 3d perpuses**                                
> You need to load items.obfuscated.js before krunkerapi.js     
> Then i suggest you to add  var krunkerapi_initcors = true before you load krunkerapi.js to avoid any cors policy issues
> But note that it will not get the assets from ``assets.krunker.io/`` it will get them from ``hoodgail.github.io/krunker_assets/``
```html
<script>var krunkerapi_initcors = true;</script>
```
 --------------------------------------------------------------------------
 ----
--------------------------------------------------------------------------
 
 **We will be using this skins as an exaple**
**Leing, made by:Hoodgail** 
 >  Getting Preview url
```js
getPrev( 302 );
//it will return the preview image of it
"https://assets.krunker.io/textures/previews/weapons/weapon_1_43.png"
```
 > Getting Preview by skin name urlREMOVED
```js
 getPrevByName( leine );
//it will return the preview image of it
"https://assets.krunker.io/textures/previews/weapons/weapon_1_43.png"
```
> Getting texture skin url
```js
getTex( 302 );
//it will return the priview image of it
"https://assets.krunker.io/textures/weapons/skins/weapon_1_43.png"
```
> Getting model url
```js
getskinModel( 302 );
//it will return the 3d model url of the requested item
"https://assets.krunker.io/models/weapons/weapon_1.obj"
```
> Displaying an item in 3dTRY IT
```js
getIframe3d(302,'010401')
//it will popup the 3d model of the item, just like the viewer but better
//click the try it button to see
//u can also pick background color the one i chose was #010401 dont accually add the # before the hex
```
> Getting rarities color
```js
getRaritiesCol('relic')
//it will return the color of the rarity which is #ed4242
"#ed4242"
```
