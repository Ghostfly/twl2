// TWL2.0 ONLINE Bookmarklet
// v3.0
// By Zeraw (zerawmaster@gmail.com)
// Description :
// Bookmarklet intelligent cryptant et décryptant en fonction de la position (dans une zone de texte ou non) du curseur et de la sélection (avec ou sans texte sélectionné)

function ActionSelectionHorsInput(e){"success"==e.status&&"decode"==e.action?(resultat='<form action="http://twl2.fr.nf/decrypte.php" name="FormDecryptage" method="post" target="_blank" style="display:none;"><textarea name="crypte" cols="1" rows="1">'+selection+'</textarea></form><p id="panneau_nav_bar"><a href="javascript:selectionner(\'resultat\');" title="S&eacute;lectionner le r&eacute;sultat">S&eacute;lectionner</a> - <a href="javascript:document.FormDecryptage.submit();" title="D&eacute;crypter dans une autre interface (utilisateurs de gestionnaires de t&eacute;l&eacute;chargement)">Autre Interface</a> - <a href="javascript:fermerDiv(\'panneau_bookmarklet_twl2\');" title="Fermer le cadre">Fermer</a></p><p id="resultat">'+e.message.html+"</p>",ajouteElement("div",resultat,"panneau_bookmarklet_twl2")):"success"==e.status&&"code"==e.action?(resultat='<form action="http://twl2.fr.nf/crypte.php" name="FormCryptage" method="post" target="_blank" style="display:none;"><textarea name="clair" cols="1" rows="1">'+selection+'</textarea></form><p id="panneau_nav_bar"><a href="javascript:selectTextarea(\'panneau_textarea_result_crypte\');" title="S&eacute;lectionner le r&eacute;sultat">S&eacute;lectionner</a> - <a href="javascript:document.FormCryptage.submit();" title="Crypter dans une autre interface">Autre Interface</a> - <a href="javascript:fermerDiv(\'panneau_bookmarklet_twl2\');" title="Fermer le cadre">Fermer</a></p><p id="resultat"><textarea id="panneau_textarea_result_crypte" cols="1" rows="1">'+e.message+"</textarea></p>",ajouteElement("div",resultat,"panneau_bookmarklet_twl2")):(resultat='<p id="panneau_nav_bar"><a href="javascript:fermerDiv(\'panneau_bookmarklet_twl2\');" title="Supprimer">Fermer</a></p><p id="resultat">'+e.message+"</p>",ajouteElement("div",resultat,"panneau_bookmarklet_twl2"))}function ActionDansInputTransformationSelection(e,t){return"undefined"!=typeof t?"success"==t.status&&"decode"==t.action?(resultat='<form action="http://twl2.fr.nf/decrypte.php" name="FormDecryptage" method="post" target="_blank" style="display:none;"><textarea name="crypte" cols="1" rows="1">'+e+'</textarea></form><p id="panneau_nav_bar"><a href="javascript:selectionner(\'resultat\');" title="S&eacute;lectionner le r&eacute;sultat">S&eacute;lectionner</a> - <a href="javascript:document.FormDecryptage.submit();" title="D&eacute;crypter dans une autre interface (utilisateurs de gestionnaires de t&eacute;l&eacute;chargement)">Autre Interface</a> - <a href="javascript:fermerDiv(\'panneau_bookmarklet_twl2\');" title="Fermer le cadre">Fermer</a></p><p id="resultat">'+t.message.html+"</p>",ajouteElement("div",resultat,"panneau_bookmarklet_twl2"),t.message.raw):"success"==t.status&&"code"==t.action?(resultat='<p id="panneau_nav_bar"><a href="javascript:fermerDiv(\'panneau_bookmarklet_twl2\');" title="Fermer le cadre">Fermer</a></p><p id="resultat">Faites d&eacute;couvrir le site et son bookmarklet en rajoutant &agrave; votre message une userbarre ! <br />Il vous suffit de placer votre curseur &agrave; l\'endroit o&ugrave; vous voulez l\'ajouter - sans faire de s&eacute;lection - puis de cliquer sur le <acronym title="Favoris Intelligent">bookmarklet</acronym> !<br />C\'est tout, mais &ccedil;a aide beaucoup !<br />Merci<br />Zeraw</p>',ajouteElement("div",resultat,"panneau_bookmarklet_twl2"),"[code]"+t.message+"[/code]"):(resultat='<p id="panneau_nav_bar"><a href="javascript:fermerDiv(\'panneau_bookmarklet_twl2\');" title="Supprimer">Fermer</a></p><p id="resultat">'+t.message+"</p>",ajouteElement("div",resultat,"panneau_bookmarklet_twl2"),e):($("panneau_bookmarklet_twl2")&&fermerDiv("panneau_bookmarklet_twl2"),"[url=http://twl2.fr.nf/][img]http://twl2.fr.nf/ub/?ub=userbar_3.gif[/img][/url][url=http://twl2.fr.nf/divers.php][img]http://twl2.fr.nf/ub/?npc&ub=bouton_bookmarklet.gif[/img][/url][url=http://twl2.fr.nf/][img]http://twl2.fr.nf/ub/?npc&ub=bouton_site.gif[/img][/url][url=http://forum.thiweb.com/viewtopic.php?f=9&t=1242][img]http://twl2.fr.nf/ub/?npc&ub=bouton_tuto.gif[/img][/url]")}function getSelectionFromInput(){var e=objFocused(),t=null;if(e)if(e.focus(),"undefined"!=typeof e.selectionStart){var a=e.selectionStart,n=e.selectionEnd,r=e.value;t=r.substring(a,n)}else t=document.selection.createRange().text;return t}function ActionDansInput(e){var t=objFocused();if(t)if(t.focus(),"undefined"!=typeof t.selectionStart){var a=t.selectionStart,n=t.selectionEnd,r=t.scrollTop,o=t.value,i=o.substring(0,a),l=o.substring(n,t.textLength),s=o.substring(a,n),c=ActionDansInputTransformationSelection(s,e);t.value=i+c+l,t.setSelectionRange(i.length+c.length,i.length+c.length),t.scrollTop=r,t.focus()}else{var s=document.selection.createRange().text,c=ActionDansInputTransformationSelection(s,e);if(s.length>0){var o=document.selection.createRange();o.text=c,o.collapse(),o.select()}else{var o=t.value,u="~~",d=document.selection.createRange().duplicate();d.text=u;var a=t.value.search(u),i=o.substring(0,a),l=o.substring(a,t.textLength);t.value=i+c+s+l,a+=c.length,a-=Get_NbrCR(i),o=t.createTextRange(),o.moveStart("character",a),o.collapse(),o.select()}}}function ajouteElement(e,t,a){$(a)&&document.body.removeChild($(a)),nouvelElement=document.createElement(e),nouvelElement.innerHTML=t,nouvelElement.id=a,document.body.appendChild(nouvelElement)}function fermerDiv(e,t){if(acth=act_height(e),maxh=max_height(e),t||(t=10*acth),acth==maxh){$(e).style.display="block";var a;for(a=Math.ceil(t/acth),STO("document.body.removeChild($('"+e+"'));",a*acth),i=0;acth>=i;i++)newPosition=i,STO("$('"+e+"').style.top='-"+newPosition+"px'",a*i)}}function selectTextarea(e){document.getElementById(e).select()}function selectionner(e){var t=document.getElementById(e);if(window.getSelection){var a=window.getSelection();if(a.setBaseAndExtent)a.setBaseAndExtent(t,0,t,t.innerText.length-1);else{var n=document.createRange();n.selectNodeContents(t),a.removeAllRanges(),a.addRange(n)}}else if(document.getSelection){var a=document.getSelection(),n=document.createRange();n.selectNodeContents(t),a.removeAllRanges(),a.addRange(n)}else if(document.selection){var n=document.body.createTextRange();n.moveToElementText(t),n.select()}}function tagFocused(){return tagFocused=document.activeElement.tagName}function objFocused(){return document.activeElement?document.activeElement:(idFocused="message",document.getElementById(idFocused))}function idFocused(){return idFocused=document.activeElement?document.activeElement.id:"message"}function Get_NbrCR(e){for(var t=0,a=e.indexOf("\r\n");a>-1;)a=e.indexOf("\r\n",a+2),t++;return t}function $(e){return document.getElementById(e)}function STO(e,t){return window.setTimeout(e,t)}function act_height(e){return height=$(e).clientHeight,0==height&&(height=$(e).offsetHeight),height}function max_height(e){var t=$(e).style;return t.overflow="hidden",0!=act_height(e)?act_height(e):(origdisp=t.display,origheight=t.height,origpos=t.position,origvis=t.visibility,t.visibility="hidden",t.height="",t.display="block",t.position="absolute",height=act_height(e),t.display=origdisp,t.height=origheight,t.position=origpos,t.visibility=origvis,height)}var ajax={};ajax.x=function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(var e,t=["MSXML2.XmlHttp.6.0","MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],a=0;a<t.length;a++)try{e=new ActiveXObject(t[a]);break}catch(n){}return e},ajax.send=function(e,t,a,n,r){var o=ajax.x();o.open(a,e,r),o.onreadystatechange=function(){4==o.readyState&&t(JSON.parse(o.responseText))},"POST"==a&&o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.send(n)},ajax.get=function(e,t,a,n){var r=[];for(var o in t)r.push(encodeURIComponent(o)+"="+encodeURIComponent(t[o]));ajax.send(e+(r.length?"?"+r.join("&"):""),a,"GET",null,n)},ajax.post=function(e,t,a,n){var r=[];for(var o in t)r.push(encodeURIComponent(o)+"="+encodeURIComponent(t[o]));ajax.send(e,a,"POST",r.join("&"),n)};var tag=tagFocused();if("INPUT"==tag||"TEXTAREA"==tag)selection=getSelectionFromInput(),selection&&selection.length>0?ajax.post("http://twl2.fr.nf/api.php",{str:selection},function(e){ActionDansInput(e)},!0):ActionDansInput();else{var selection;window.getSelection?selection=window.getSelection().toString():document.selection&&(selection=document.selection.createRange().text),selection&&selection.length>0?ajax.post("http://twl2.fr.nf/api.php",{str:selection},function(e){ActionSelectionHorsInput(e)},!0):location.href="http://twl2.fr.nf/"}var styles="#panneau_bookmarklet_twl2{color:#939393;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:11px;background-color:#1d1d1d;border:solid 3px #007ebf;border-top:0;padding:0;margin:0;margin-right:10px;position:fixed;top:0;right:0;max-width:600px;overflow:hidden;z-index:200;-webkit-border-bottom-right-radius:5px;-webkit-border-bottom-left-radius:5px;-moz-border-radius-bottomright:5px;-moz-border-radius-bottomleft:5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;scrollbar-arrow-color:#007ebf;scrollbar-3dlight-color:#1d1d1d;scrollbar-highlight-color:#1d1d1d;scrollbar-face-color:#1d1d1d;scrollbar-shadow-color:#1d1d1d;scrollbar-darkshadow-color:#1d1d1d;scrollbar-track-color:#1d1d1d}#panneau_bookmarklet_twl2 p{margin:0;padding:0}#panneau_bookmarklet_twl2 a{text-decoration:none;color:#007ebf}#panneau_bookmarklet_twl2 a:hover{color:#35a6e0}#panneau_bookmarklet_twl2 a:visited{text-decoration:line-through}#panneau_bookmarklet_twl2 #panneau_nav_bar{font-weight:700;text-align:right;margin:0;padding:3px}#panneau_bookmarklet_twl2 #resultat{margin:0;padding:10px;border-top:1px solid #007ebf;overflow-x:hidden;overflow-y:auto;max-height:400px}#panneau_bookmarklet_twl2 #panneau_textarea_result_crypte{font-family:Courier New,Lucida Console,Monaco,sans-serif;margin:0;width:450px;height:150px;border:1px solid #007ebf;background:transparent;font-size:10px;overflow-x:hidden;overflow-y:auto;color:#939393}",styleTag=document.createElement("style");styleTag.setAttribute("type","text/css"),styleTag.setAttribute("media","screen"),document.all&&!window.opera?styleTag.styleSheet.cssText=styles:styleTag.appendChild(document.createTextNode(styles)),document.getElementsByTagName("HEAD").item(0).appendChild(styleTag);