
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


function caricamento_modifica_profilo(){
  if(Modernizr.csstransitions){
    alert("fuck now!!!");
  }
  else{
        alert("fuck maybe a day!!!");
  }
}

function caricamento_risultati(){
  $('.risultato').click(function(){
         window.location=$(this).find("a").attr("href");
         $(this).find("a").attr("href").style.cursor = 'pointer';
         return false;
    });
}
