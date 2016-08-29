// caricamento.js


function caricamento_home(){
  $(function() {
		//$.datepicker.setDefaults($.datepicker.regional['it']);
		$("#data").datepicker({ dateFormat: 'dd-mm-yy', minDate: 0/*, maxDate: +30 */});
    //$("#oraP").timeEntry();
	});
}

function caricamento_offerta(){
  		$("#dataA").datepicker({ dateFormat: 'dd-mm-yy', minDate: 0/*, maxDate: +30 */});
      $("#dataP").datepicker({ dateFormat: 'dd-mm-yy', minDate: 0/*, maxDate: +30 */});
}

function caricamento_messaggi(){
  $('.conversazione').click(function(){
         window.location=$(this).find("a").attr("href");
         $(this).find("a").attr("href").style.cursor = 'pointer';
         return false;
    });
}

// compatibility.js


function test_compatible_animation(){
  return true;
}

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

// valida_submits.js

function valida_submit_modifica_profilo(){
  var v1 = valida_nome('nome','Nome');
    var v2 = valida_nome('cognome','Cognome');
      var v3 = valida_email('email');
        var v4 = valida_password('vecchiaPassword');
          var v5 = valida_password('nuovaPassword');
          var v6 = valida_anno_nasc();
  var v7 = verifica_blocco_modifica_profilo();
        debugger;
  if(!v7){
    document.getElementById('submitbutton_err').innerHTML = "La sezione dei dati per guidatori va compilata in ogni sua parte o in nessuna (per i non guidatori)."
    return false;
  }
  else{
    if(v1 && v2 && v3 && v4 && v5 && v6 && v7){
      return true;
    }
    else{
      document.getElementById('submitbutton_err').innerHTML = "&Egrave; necessario compilare tutti i campi dati.";
      return false;
    }
  }
}



// controlla che i campi dati elencati tra gli argomenti siano compilati. per onsubmit senza dettagli ---- generico
function valida_tutto_compilato(){
  var numberOfMiss = 0;
  var i;
  for (i = 0; i < arguments.length; i++) {
    var itemID = arguments[i];
    var input = document.getElementById(itemID).value;
    if(!input.length){
      document.getElementById(itemID + '_err').innerHTML = "Compilare il campo.";
      numberOfMiss = numberOfMiss + 1;
    }
    else{
      document.getElementById(itemID + '_err').innerHTML = "";
    }
  }
  if(numberOfMiss==0){
    return true;
  }
  else{
    document.getElementById('submitbutton_err').innerHTML = "&Egrave; necessario compilare tutti i campi dati.";
    return false;
  }
}

function valida_submit_home(){
  var res1 = valida_data('data');
  var res2 = valida_nome('arrivo','Luogo di arrivo');
  var res3 = valida_nome('partenza','Luogo di partenza');
  if(!res1 || !res2 || !res3){
    document.getElementById('submitbutton_err').innerHTML = "&Egrave; necessario compilare tutti i campi dati.";
    return false;
  }
  else{
    return true;
  }
}

function valida_submit_iscrizione(){
  var r1 = valida_nome('nome','Nome');
  var r2 = valida_nome('cognome','Cognome');
  var r3 = valida_username();
  var r4 = valida_email('email');
  var r5 = valida_password('password');
  var r6 = valida_password('conferma');
  var r7 = valida_anno_nasc();
  if(!r1 || !r2 || !r3 || !r4  || !r5 || !r6 || !r7){
    document.getElementById('submitbutton_err').innerHTML = "&Egrave; necessario compilare tutti i campi dati.";
    return false;
  }
  else{
    return true;
  }
}



function valida_submit_offerta(){
  var r1 = valida_nome('partenza','Partenza');
  var r2 = valida_nome('arrivo','Arrivo');
  var r3 = valida_tappa(1);
  var r4 = valida_tappa(2);
  var r5 = valida_tappa(3);
  var r6 = valida_data('dataA');
  var r7 = valida_data('dataP');
  var r8 = valida_ora('oraA');
  var r9 = valida_ora('oraP');
  var r10 = valida_soldi('prezzo');
  var r11 = valida_posti('posti');
  if(!r1 || !r2 || !r3 || !r4  || !r5 || !r6 || !r7 || !r8 || !r9 || !r10 || !r11){
    //debugger;
    document.getElementById('submitbutton_err').innerHTML = "&Egrave; necessario compilare tutti i campi dati a parte la descrizione del viaggio che è opzionale.";
    return false;
  }
  else{
    if(verifica_ordine_tappe()){
      document.getElementById('submitbutton_err').innerHTML = "";
      document.getElementById('tappa1_err').innerHTML = "";
      document.getElementById('tappa2_err').innerHTML = "";
      document.getElementById('tappa3_err').innerHTML = "";
      if(verifica_ordine_orari()){
        return true;
      }
      else{
        document.getElementById('submitbutton_err').innerHTML = "La partenza deve avvenire prima dell'arrivo.";
        document.getElementById('oraA_err').innerHTML = "La partenza deve avvenire prima dell'arrivo.";
        document.getElementById('oraP_err').innerHTML = "La partenza deve avvenire prima dell'arrivo.";
        document.getElementById('dataA_err').innerHTML = "La partenza deve avvenire prima dell'arrivo.";
        document.getElementById('dataP_err').innerHTML = "La partenza deve avvenire prima dell'arrivo.";
        return false;
      }
    }
    else{
      return false;
    }
  }
}



function verifica_ordine_tappe(){
  var t1 = document.getElementById('tappa1').value.length;
  var t2 = document.getElementById('tappa2').value.length;
  var t3 = document.getElementById('tappa3').value.length;
  if(t1 && t2 && t3){
    return true;
  }
  else if (!t1 && !t2 && !t3) {
    return true;
  }
  else if(!t1 && ( t2 || t3)){
    document.getElementById('submitbutton_err').innerHTML = "Le tappe possono essere inserite solo nell'ordine corretto.";
    document.getElementById('tappa1_err').innerHTML = "Le tappe possono essere inserite solo nell'ordine corretto.";
    document.getElementById('tappa2_err').innerHTML = "Le tappe possono essere inserite solo nell'ordine corretto.";
    document.getElementById('tappa3_err').innerHTML = "Le tappe possono essere inserite solo nell'ordine corretto.";
    return false;
  }
  else if((!t1 || !t2)&& t3){
    document.getElementById('submitbutton_err').innerHTML = "Le tappe possono essere inserite solo nell'ordine corretto.";
    document.getElementById('tappa1_err').innerHTML = "Le tappe possono essere inserite solo nell'ordine corretto.";
    document.getElementById('tappa2_err').innerHTML = "Le tappe possono essere inserite solo nell'ordine corretto.";
    document.getElementById('tappa3_err').innerHTML = "Le tappe possono essere inserite solo nell'ordine corretto.";
    return false;
  }
  else{
    return true;
  }
}

/*
    try{
        $.datepicker.parseDate( "dd-mm-yy", stringdate );
        return true;
    }
    catch(err){
        return false;
    }
*/

// new Date(year, month, day, hours, minutes, seconds, milliseconds)

function verifica_ordine_orari(){
  var ha = document.getElementById('oraA').value.split(':');
  var hp = document.getElementById('oraP').value.split(':');
  var da = document.getElementById('dataA').value.split('-');
  var dp = document.getElementById('dataP').value.split('-');
  var part = new Date(dp[2],dp[1],dp[0],hp[1],hp[0],0,0);
  var arr = new Date(da[2],da[1],da[0],ha[1],ha[0],0,0);
  var diff = arr.getTime() - part.getTime();
  return diff>0;
}

function verifica_radio3(id){
  var v1 = document.getElementById(id + 0).checked;
  var v2 = document.getElementById(id + 1).checked;
  var v3 = document.getElementById(id + 2).checked;
  return v1 || v2 || v3;
}

function verifica_radio2(id){
  var v1 = document.getElementById(id + 0).checked;
  var v2 = document.getElementById(id + 1).checked;
  return v1 || v2;
}

function verifica_blocco_modifica_profilo(){
  var v1 = valida_anno_pat();
  var v2 = valida_nome('auto','Automobile');
  var v3 = verifica_radio3('musica');
  var v4 = verifica_radio3('chiacchiere');
  var v5 = verifica_radio2('animali');
  var v6 = verifica_radio2('fumatori');
  debugger;
  return v1 && v2 && v3 && v4 && v5 && v6;
}

// validazione.js

// Funzioni di  validazione dei campi dati

function valida_username(){
    var input = document.getElementById('username').value;
    //var patt = new RegExp("/^[A-Za-z0-9_-]$/"); //{5,18}
    var sol = /^[A-Za-z0-9_-]+$/.test(input);
    if(!sol){
        document.getElementById('username_err').innerHTML = "Username non valido. Caratteri ammessi lettere, numeri, trattino e underscore.";
        return false;
    }
    else{
      var n = input.length;
        if(n==0){
            document.getElementById('username_err').innerHTML = "Username obbligatorio";
            return false;
        }
        else if(n > 18){
            document.getElementById('username_err').innerHTML = "Username al massimo di 18 caratteri";// NON QUI!!!!!
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
    var input = document.getElementById(id).value;
    var sol = /^([a-z]|[A-Z]|[àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\ \,\.\-\'])+$/.test(input);
    //debugger;
    if(!sol){
        document.getElementById(id + '_err').innerHTML = parola + " non valido, inserire solo lettere, trattini, apostrofi, punti e spazi.";
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


function valida_area_testo(id,obbl){
  var input = document.getElementById(id).innerHTML;
  var sol = /^([a-z]|[A-Z]|[àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\ \,\.\-\'])+$/.test(input);
  if(!sol){
      document.getElementById(id + '_err').innerHTML =  "Testo non valido, inserire solo lettere, trattini, apostrofi, punti e spazi.";
      return false;
  }
  else if(!input.length && obbl){
      document.getElementById(id + '_err').innerHTML = "Testo obbligatorio";
      return false;
  }
  else{
      document.getElementById(id + '_err').innerHTML = "";
      return true;
  }
}

function valida_tappa(num){
  console.log('tappa'+num);
    var input = document.getElementById('tappa'+num).value;
    var sol = /^([a-z]|[A-Z]|[àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\ \,\.\-\'])*$/.test(input);
    if(!sol){
        document.getElementById('tappa'+num+ '_err').innerHTML = "Nome tappa non valido, inserire solo lettere, trattini, apostrofi, punti e spazi.";
        return false;
    }
    else{
        document.getElementById('tappa'+num + '_err').innerHTML = "";
        return true;
    }
}

function valida_anno_nasc(){
    var input = document.getElementById('anno').value;
    //var patt = new RegExp("");
    var sol = /^[1-2][0-9][0-9][0-9]$/.test(input);
    if(!sol){
        document.getElementById('anno_err').innerHTML = "Anno di nascita non valida, inserire l anno in formato 'aaaa'";
        return false;
    }
    else{
        var d = new Date();
        var n = d.getFullYear();
        if((Number(n)-(Number(input)+18))<0){
            document.getElementById('anno_err').innerHTML = "Possono registrarsi solo utenti maggiorenni";
            return false;
        }else{
            document.getElementById('anno_err').innerHTML = '';
            return true;
        }
    }
}


function valida_password(id){ // da riscrivere per conferma di uguaglianza
    var input = document.getElementById(id).value;
    //var patt = new RegExp("/^[A-Za-z0-9_\.-]{8,16}$/");
    var sol = /^[A-Za-z0-9_\.-]{8,16}$/.test(input);
    if(!sol){
      if(input.length>16 || input.length <8){
          document.getElementById(id + '_err').innerHTML = " La password deve comprendere da 8 a 16 caratteri.";
        }
        else{
          document.getElementById(id + '_err').innerHTML = "Password non valida, sono permesse lettere maiuscole o minuscole, e i caratteri underscore, hyphen o punto.";
        }
        return false;
    }
    else{
          if(id=='conferma'){
            if(document.getElementById(id).value == document.getElementById('password').value){
              document.getElementById(id + '_err').innerHTML = '';
              return true;
            }
            else{
              document.getElementById(id + '_err').innerHTML = 'La password e la conferma devono essere uguali.';
              return false;
            }
          }
          else{
            document.getElementById(id + '_err').innerHTML = '';
            return true;
          }
        }
    }


// function valida_tappa(num)
// più complicato.....

function valida_ora(id) {
    var input = document.getElementById(id).value;
    //var patt = new RegExp("/^\d\d\:\d\d$/");
    var sol = /^\d\d\:\d\d$/.test(input);
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
    var input = document.getElementById(id).value;
  //  var patt = new RegExp("/^\d{1,}$/");
    var sol = /^\d{1,}$/.test(input);
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
    var input = document.getElementById(id).value;
  //  var patt = new RegExp("/^\d{1,}(\.|\,)(\d|\d\d)$/");
    var sol = /^\d{1,}(\.|\,)(\d|\d\d)$/.test(input);
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
    var input = document.getElementById(id).value;
    //var patt = new RegExp("/^([a-z0-9_\.-]+)@([a-z]+)\.([a-z]{2,6})$/");
    var sol = /^([a-z0-9_\.-]+)@([a-z]+)\.([a-z]{2,6})$/.test(input);
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
    var input = document.getElementById('annoPatente').value;
    //var patt = new RegExp("/^[1-2][0-9][0-9][0-9]$/");
    var sol = /^[1-2][0-9][0-9][0-9]$/.test(input);
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
        $.datepicker.parseDate( "dd-mm-yy", stringdate );
        return true;
    }
    catch(err){
        return false;
    }
}

function valida_data(id){
    var input = document.getElementById(id).value;/*
                                                    var patt = new RegExp("/^[0-9][0-9]\-[0-9][0-9]\-[0-9][0-9][0-9][0-9]$/");
                                                    var sol = patt.test(input);*/
    if(!test_data(input) || !input.length){
        //debugger;
        document.getElementById(id + '_err').innerHTML = "Inserire una data in formato gg-mm-aaaa.";
        return false;
    }
    else {
        document.getElementById(id + '_err').innerHTML = "";
        return true;
    }
}

