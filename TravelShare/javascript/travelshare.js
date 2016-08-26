// compatibility.js


function test_compatible_animation()

// interdipendenza.js


function valida_tempo_passaggio(){
// partenza min 1h nel futuro. arrivo dopo partenza.
// Pre: data e ora corretti ed esistenti
var dataA = document.getElementById("dataA").value;
var dataP = document.getElementById("dataP").value;
var oraA = document.getElementById("oraA").value;
var oraP = document.getElementById("oraP").value;
//new Date(year, month, day, hours, minutes, seconds, milliseconds);
//$.datepicker.parseDate( "yy-mm-dd", "2007-01-26" );
var hA = oraA.split(":");
var hP = oraP.split(":");
var dA = dataA.split("-");
var dP = dataP.split("-");
var part = new Date(dP[2], dP[1], dP[0], hP[0], hP[1], 0, 0);
var arr= new Date(dA[2], dA[1], dA[0], hA[0], hA[1], 0, 0);
var now = new Date();
//--------
if(part.getTime()<arr.getTime()){
  if(part.getTime()>now.getTime()+(1000*3600)){
    document.getElementById("dataP_err").innerHTML = "";
    document.getElementById("oraP_err").innerHTML = "";
    return true;
  }
  else {
    document.getElementById("dataP_err").innerHTML = "La partenza non può essere prima di un'ora da adesso.";
    document.getElementById("oraP_err").innerHTML = "La partenza non può essere prima di un'ora da adesso.";
    return false;
  }
}
else {
  document.getElementById("dataP_err").innerHTML = "La partenza non può essere dopo l'arrivo.";
  document.getElementById("oraP_err").innerHTML = "La partenza non può essere dopo l'arrivo.";
  return false;
}
}

////////////////////////////////////////////////////////////////////////////

function compilazione_tappe(id){
  if(id=="tappa2"){
    if(document.getElementById("tappa1").value ==""){
    document.getElementById("tappa2_err").value = "Per poter inserire questa tappa, inserire prima le precedenti.";
  }
  else {
        document.getElementById("tappa2_err").value = "";
  }
  }
  else if (id=="tappa3") {
    if(document.getElementById("tappa1").value ==""){
    document.getElementById("tappa3_err").value = "Per poter inserire questa tappa, inserire prima le precedenti.";
  }
  else if(document.getElementById("tappa2").value ==""){
  document.getElementById("tappa3_err").value = "Per poter inserire questa tappa, inserire prima le precedenti.";
}
  else {
        document.getElementById("tappa3_err").value = "";
  }
  }
}

function valida_tappe(){
  var tappa1 = document.getElementById("tappa1").value;
  var tappa2 = document.getElementById("tappa2").value;
  var tappa3 = document.getElementById("tappa3").value;
  if(tappa1==''){
    document.getElementById("tappa2").value = "Per poter inserire questa tappa, inserire prima le precedenti.";
    document.getElementById("tappa3").value = "Per poter inserire questa tappa, inserire prima le precedenti.";
    document.getElementById("tappa2").disabled = true;
    document.getElementById("tappa3").disabled = true;
  }
  else if (tappa2=='') {
    // document.getElementById("tappa2").value = "Per poter inserire questa tappa, inserire prima le precedenti.";
    document.getElementById("tappa3").value = "Per poter inserire questa tappa, inserire prima le precedenti.";
    document.getElementById("tappa2").disabled = false;
    document.getElementById("tappa3").disabled = true;
  }
  else{
    document.getElementById("tappa3").disabled = false;
  }
}




////////////////////////////////////////
// Disattivazione submit per campi non completi
 /*
function disattiva_submit_at_start() {//
    document.getElementById('submitbutton').disabled = true;
    //document.getElementById('submitbutton').disabled = false;
}
*/
//ritorna bool per evento onsubmit
function verifica_submit_possibile_nomePag(){
    console.log("ecce");
    var elements = document.getElementsByTagName("input");
    console.log(elements.length);
    for(var i = 0; i < elements.length; i++)
    {
        console.log(elements[i].name);
        /* do whatever you need to do with each input */
    }
}


///////////////////////////////////////////////////////////////////
// FUNZIONI PER ONLOAD

function preparazione_tappe(){
// verifica non siano compilate
    document.getElementById("tappa2").value = "Per poter inserire questa tappa, inserire prima le precedenti.";
    document.getElementById("tappa3").value = "Per poter inserire questa tappa, inserire prima le precedenti.";
    document.getElementById("tappa2").disabled = true;
    document.getElementById("tappa3").disabled = true;
}

// merge_js.sh

#!/bin/bash

rm -f travelshare_script.js

for FILE1 in `ls | grep js | grep -v js~` ; do
echo "// "$FILE1 >> travelshare.js
printf "\n"  >> travelshare.js
cat $FILE1 >> travelshare.js
printf "\n"  >> travelshare.js
done

// validazione.js

// Funzioni di  validazione dei campi dati

function valida_username(){
    var input = document.getElementById('username').innerHTML;
    var patt = new RegExp("/^[A-Za-z0-9_-]{5,18}$/");
    var sol = patt.test(input);
    if(!sol){
        document.getElementById('username_err').innerHTML = "Username non valido. Caratteri ammessi lettere, numeri, trattino e underscore.";
        return false;
    }
    else{
        if(n==0){
            document.getElementById('username_err').innerHTML = "Username obbligatorio";
            return false;
        }
        else if(n > 18){
            document.getElementById('username_err').innerHTML = "Username al massimo di 18 caratteri";
            return false;
        }
        else if(n < 5){
            document.getElementById('username_err').innerHTML = "Username minimo di 5 caratteri";
            return false;
        }
        else{
            document.getElementById('username_err').innerHTML = '';
            return true;
        }
    }
}


function valida_nome(id, parola){
    var input = document.getElementById(id).innerHTML;
    var patt = new RegExp("/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.-']+$/");
    var sol = patt.test(input);
    if(!sol){
        document.getElementById(id + '_err').innerHTML = parola + " non valido, inserire solo lettere, di cui, al più la prima lettera può essere mauiscola";
        return false;
    }
    else if(!input.length){
        document.getElementById(id + '_err').innerHTML = "Campo dati " + parola + " obbligatorio";
        return false;
    }
    else{
        document.getElementById(id + '_err').innerHTML = "";
        return true;
    }
}

function valida_anno_nasc(){
    var input = document.getElementById('anno').innerHTML;
    var patt = new RegExp("/^[1-2][0-9][0-9][0-9]$/");
    var sol = patt.test(input);
    if(!sol){
        document.getElementById('anno_err').innerHTML = "Anno di nascita non valida, inserire l anno in formato 'aaaa'";
    }else{
        var d = new Date();
        var n = d.getFullYear();
        if(n-(input+18)){
            document.getElementById('anno_err').innerHTML = "Possono registrarsi solo utenti maggiorenni";
        }else{
            document.getElementById('anno_err').innerHTML = '';
        }
    }
}


function valida_password(){
    var input = document.getElementById('password').innerHTML;
    var patt = new RegExp("/^[A-Za-z0-9_\.-]{8,16}$/");
    var sol = patt.test(input);
    if(!sol){
        document.getElementById('password_err').innerHTML = "Password non valida, sono permesse lettere maiuscole o minuscole, e i caratteri underscore, hyphen o punto.";
        return false;
    }
    else if(input.length>16 || input.length <8){
        document.getElementById('password_err').innerHTML = " La password deve comprendere da 8 a 16 caratteri.";
	return false;
    }
    else{
        document.getElementById('password_err').innerHTML = '';
        return true;
    }
}

// function valida_tappa(num)
// più complicato.....

function valida_ora(id) {
    var input = document.getElementById(id).innerHTML;
    var patt = new RegExp("/^\d\d\:\d\d$/");
    var sol = patt.test(input);
    if(!sol){
        document.getElementById(id + '_err').innerHTML = "Inserire un orario nel formato hh:mm.";
        return false;
    }else{
        var p = input.split(':');
        var h = p.shift();
        var m = p.shift();
        if(h<0 ||h>=24 || m<0 || m>=60){
            document.getElementById(id + '_err').innerHTML = "Inserire un orario corretto.";
            return false;
        }
        else {
            document.getElementById(id + '_err').innerHTML = ""; // per rimuovere eventuali segnalazioni precendenti
            return true;
        }
    }
}

function valida_posti(id) {
    var input = document.getElementById(id).innerHTML;
    var patt = new RegExp("/^\d{1,}$/");
    var sol = patt.test(input);
    if(!sol){
        document.getElementById(id + '_err').innerHTML = "Inserire un numero.";
	return false;
    }
    else {
        document.getElementById(id + '_err').innerHTML = ""; // per rimuovere eventuali segnalazioni precendenti
	return true;
    }
}

function valida_soldi(id) {
    var input = document.getElementById(id).innerHTML;
    var patt = new RegExp("/^\d{1,}(\.|\,)(\d|\d\d)$/");
    var sol = patt.test(input);
    if(!sol){
        document.getElementById(id + '_err').innerHTML = "Inserire una cifra con al massimo due cifre decimali.";
        return false;
    }
    else {
        //document.getElementById(id).innerHTML = input.replace(',','.'); //non importa lo fa perl in ogni caso
        document.getElementById(id + '_err').innerHTML = ""; // per rimuovere eventuali segnalazioni precendenti
        return true;
    }
}

function valida_email(id) {
    var input = document.getElementById(id).innerHTML;
    var patt = new RegExp("/^([a-z0-9_\.-]+)@([a-z]+)\.([a-z]{2,6})$/");
    var sol = patt.test(input);
    if(!sol){
        document.getElementById(id + '_err').innerHTML = "Inserire un indirizzo email.";
        return false;
    }
    else {
        document.getElementById(id + '_err').innerHTML = ""; // per rimuovere eventuali segnalazioni precendenti
        return true;
    }
}

function valida_anno_pat() {
    var input = document.getElementById('annoPatente').innerHTML;
    var patt = new RegExp("/^[1-2][0-9][0-9][0-9]$/");
    var sol = patt.test(input);
    if(!sol){
        document.getElementById('annoPatente_err').innerHTML = "Anno di conseguimento della patente non valido, inserire l\' anno in formato 'aaaa'";
        return false;
    }
    else{
        document.getElementById('annoPatente_err').innerHTML = '';
        return true;
    }
}

function test_data(stringdate){
  try{
    $.datepicker.parseDate( "dd-mm-yy", stringdate ) && return true;
  }
  catch(err){
    return false;
  }
}

function valida_data(id){
  var input = document.getElementById(id).innerHTML;
  var patt = new RegExp("/^[0-9][0-9]\-[0-9][0-9]\-[0-9][0-9]$/");
  var sol = patt.test(input);
  if(!sol || !test_data(input)){
      document.getElementById(id + '_err').innerHTML = "Inserire una data in formato gg-mm-aaaa.";
      return false;
  }
  else {
      document.getElementById(id + '_err').innerHTML = "";
      return true;
  }
}

