var krunkerapi_initcors;function krunkerapistart(){return krunkerapi_initcors?"https://hoodgail.github.io/krunker_assets":"https://assets.krunker.io"}function krunkerapibuild(){return"?build=mWa2r"}function krunkerapierrmsg(){return"Enable to get the requested item"}function krunkerapialert(e){var n=`\n<style>\n .krunkerapislideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  }\n  @-webkit-keyframes slideInDown {\n  0% {\n  -webkit-transform: translateY(-200%);\n  transform:translateY(-200%);\n  visibility: visible;\n  }\n  100% {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  }\n  }\n  @keyframes slideInDown {\n  0% {\n  -webkit-transform: translateY(-250%);\n  transform: translateY(-250%);\n  visibility: visible;\n  }\n  100% {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  }\n  } \n</style>\n <div style="display:inline-block;" id="krunkerapialertbox">${e}</div>\n <a style="    display: inline-block;\n    background: #d6ae44;\n    padding: 6px;\n    border-radius: 50px;\n    color: white;display:inline-block;" class=".krunkerapislideInDown" onclick="\n \n    document.querySelector('#krunkerapialertholder').remove()\n\n " id="krunkerapialertclosebutton">OK</a>\n`,t=document.createElement("div");t.id="krunkerapialertholder",t.style="\n    position: fixed;\n    top: 37px;\n    left: 50%;\n    background: #ffd155;\n    transform: translate(0%, -50%);\n    z-index: 999999;\n    padding: 7px;\n    border-radius: 50px;\n-webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n\n";var r=document.querySelector("body"),i=document.getElementById(t.id);void 0!==i&&null!=i&&document.getElementById(t.id).remove(),r.appendChild(t),t.innerHTML=n}function getPrev(e){const n=krunkerapi_items[function(){if(null!=e&&null!=e&&"undefined"!=e&&""!=e)return e;console.error(krunkerapierrmsg()),krunkerapialert(krunkerapierrmsg())}()];return krunkerapistart()+"/textures/previews/"+(n.type&&3>n.type?"cosmetics/"+n.type+"_"+n.id+(n.tex?"_"+n.tex:""):["weapons/weapon_","hats/hat_","body/body_","melee/melee_"][n.type||0]+(n.type&&3==n.type?n.id+(null==n.tex?"":"_"+n.tex):(n.weapon||0)+"_"+(null==n.mid?null==n.pat?n.tex?n.tex:n.id:"c"+n.pat:"m"+n.mid+(null==n.midT?"":"_"+n.midT.split("_").slice(-1)[0]))))+".png"+krunkerapibuild()}function getTex(e){const n=krunkerapi_items[function(){if(null!=e&&null!=e&&"undefined"!=e&&""!=e)return e;console.error(krunkerapierrmsg()),krunkerapialert(krunkerapierrmsg())}()];function t(){return null==n.mid||null==n.mid?"/skins/":"/"}const r=["weapons"+t()+"weapon_","hats/hat_","body/body_","melee/melee_"];return console.log(t()),n.pat?krunkerapistart()+"/textures/"+n.tex+".png":n.midT?krunkerapistart()+"/textures/"+n.midT+".png":krunkerapistart()+"/textures/"+(n.type&&3>n.type?r[n.type||0]+n.id+""+(n.tex?"_"+n.tex:""):r[n.type||0]+(n.type&&3==n.type?n.id+(null==n.tex?"":"_"+n.tex):(n.weapon||0)+"_"+(null==n.mid?null==n.pat?n.tex?n.tex:n.id:"c"+n.pat:n.mid+(null==n.midT?"":"_"+n.midT.split("_").slice(-1)[0]))))+".png"+krunkerapibuild()}function getTexGlow(e){const n=krunkerapi_items[function(){if(null!=e&&null!=e&&"undefined"!=e&&""!=e)return e;console.error(krunkerapierrmsg()),krunkerapialert(krunkerapierrmsg())}()],t=["weapons"+(null==n.mid||null==n.mid?"/skins/":"/")+"weapon_","hats/hat_","body/body_","melee/melee_"];function r(){return n.glow?"_e":""}return n.sameGlow?getTex(e):n.midT?krunkerapistart()+"/textures/"+n.midT+r()+".png":krunkerapistart()+"/textures/"+(n.type&&3>n.type?t[n.type||0]+n.id+""+(n.tex?"_"+n.tex:""):t[n.type||0]+(n.type&&3==n.type?n.id+(null==n.tex?"":"_"+n.tex):(n.weapon||0)+"_"+(null==n.mid?null==n.pat?n.tex?n.tex:n.id:"c"+n.pat:n.mid+(null==n.midT?"":"_"+n.midT.split("_").slice(-1)[0]))))+r()+".png"+krunkerapibuild()}function getItemId(e){const n=["weapons/skins/weapon_","hats/hat_","body/body_","melee/melee_"],t=krunkerapi_items[function(){if(null!=e&&null!=e&&"undefined"!=e&&""!=e)return e;console.error(krunkerapierrmsg()),krunkerapialert(krunkerapierrmsg())}()];return t.type&&3>t.type?n[t.type||0]+t.id+""+(t.tex?"_"+t.tex:""):n[t.type||0]+(t.type&&3==t.type?t.id+(null==t.tex?"":"_"+t.tex):(t.weapon||0)+"_"+(null==t.mid?null==t.pat?t.tex?t.tex:t.id:"c"+t.pat:"m"+t.mid+(null==t.midT?"":"_"+t.midT.split("_").slice(-1)[0])))}function getskinModel(e){const n=["weapons/weapon_","hats/hat_","body/body_","melee/melee_"],t=krunkerapi_items[function(){if(null!=e&&null!=e&&"undefined"!=e&&""!=e)return e;console.error(krunkerapierrmsg()),krunkerapialert(krunkerapierrmsg())}()];return t.midT?krunkerapistart()+"/models/"+n[t.type||0]+t.weapon+"_"+ +t.mid+".obj":krunkerapistart()+"/models/"+(t.type&&3>t.type?n[t.type||0]+t.id+"":n[t.type||0]+(t.type&&3==t.type?t.id+"":(t.weapon||0)+""+(null==t.mid?null==t.pat&&t.tex?t.tex:"":"_"+t.mid+(null==t.midT?"":"_"+t.midT.split("_").slice(-1)[0]))))+".obj"+krunkerapibuild()}function getModelViewerURL(e,n){function t(){return n||"default"}var r=krunkerapi_classes,i=krunkerapi_loadoutsett,o="https://hoodgail.github.io/krunker.api/viewer2/index.html",a=krunkerapi_items[e];function l(){return a.movT?`&frt=999999&frt&movT=${a.movT}`:""}function d(){return a.frames?`&fr=${a.frames}&frt=${a.frameT+90}`:"&frt=999999"}function u(){return a.sameGlow||a.glow?"&glow=1":""}if(a){if(1==a.type)return o+"?class="+e+"&skinp="+e+"&s="+a.sclMlt+l()+d()+u()+`&backgroundcol=${t()}`;if(2==a.type)return o+"?class="+e+"&skinp="+e+"&s="+a.sclMlt+l()+d()+u()+`&backgroundcol=${t()}`;if(3==a.type)return o+"?class="+e+"&skinp="+e+"&s="+a.sclMlt+l()+d()+u()+`&backgroundcol=${t()}`;if(null!=a.weapon){for(var s=null,p=0;p<r.length;p++)if(r[p]==a.weapon-1){s=p;break}if(null!=s)return o+"?class="+e+"&skinp="+e+"&s="+function(){if(a.weapon)return i[a.weapon].scale}()+l()+d()+u()+u()+`&backgroundcol=${t()}`}}}function getIframe3d(e,n){function t(e){return document.querySelector(e)}krunkerapi_classes;const r=krunkerapi_items[function(){if(null!=e&&null!=e&&"undefined"!=e&&""!=e)return e;console.error(krunkerapierrmsg()),krunkerapialert(krunkerapierrmsg())}()];var i=`\n <div\n  class="_3dmodals"\n  style=" \n    position: fixed;\n    bottom: 50%;\n    left: 50%;\n    transform: translate(-50%, 50%);\n    border: none;\n    background: #ffffff00;\n    width: min-content;\n    padding: 10px;\n    z-index: 2;\n   "\n  id="_3dmodals"\n>\n  \x3c!-- 3d item previews here --\x3e\n  <a\n    style="  color: white;\n    border-bottom: solid 5px white;\n    padding-bottom: 7px;"\n    id="_3diname"\n    >${r.name} </a>\n    <a style="color:gold;border-bottom: solid 5px gold;\n    padding-bottom: 7px;"> - ${r.movT||r.frames?"Animated!":""}</a>\n  <iframe\n    src="${getModelViewerURL(e,n||"default")}"\n    id="_3diframe"\n    style=" border:none;height: 451px;\n    width: 805px;\n    margin-top: 20px;"\n  ></iframe>\n  <a\n    style="  color: white;\n    border-bottom: solid 5px white;\n    padding-bottom: 7px"\n    id="_3dicreator"\n    >By: ${r.creator?r.creator:"Krunker.io"}</a\n  >\n</div>\n<input\n  id="krunkerapi3dmodalclosebutton"\n  value="×"\n  type="button"\n  style="position: fixed;\n    border: none;\n    font-size: 28px;\n    padding: 10px;\n    margin: 10px;\n    right: 0;\n    background: #ff6666;"\n/>\n`,o=document.createElement("div"),a=document.createElement("div");a.style="\nposition: fixed;\n    height: 100%;\n    width: 100%;\n    background: #00000070;\n    z-index: 9;\n    top: 0;\n    left:0;\n    z-index: 999998;\n",o.id="krunkerapi3dholder",o.style="\nposition: fixed;\n    top: 0%;\n    left: 0%;\n    z-index: 999999;\n",a.id="krunkerapi3dbackground";var l=t("body"),d=document.getElementById(a.id);l.appendChild(a),l.appendChild(o),void 0!==d&&null!=d&&(a.remove(),o.remove(),alert("You must close the current popup before opening a new one.")),a.addEventListener("click",function(){a.remove(),o.remove()}),o.innerHTML=i,t("#krunkerapi3dmodalclosebutton").addEventListener("click",function(){a.remove(),o.remove()})}function getWeaponByname(e){var n=krunkerapi_loadouts,t=e.toLowerCase();return n.find(e=>e.name.toLowerCase()===t).loadout+1}function getWeaponById(e){return krunkerapi_loadouts.find(n=>n.loadout===e-1).name}function getRaritiesCol(e){var n=krunkerapi_rarities,t=e.toLowerCase();return n.find(e=>e.name.toLowerCase()===t).color}function getWeaponSett(e,n){var t=krunkerapi_loadouts,r=e.toLowerCase(),i=n.toLowerCase();return t.find(e=>e.name.toLowerCase()===r)[i]}function getLoadoutSett(e,n){var t=krunkerapi_loadoutsett;return i2=e.toLowerCase(),a2=n.toLowerCase(),t.find(e=>e.name.toLowerCase()===i2)[a2]}function hrefTo3durl(e){location.href=getModelViewerURL(e)}