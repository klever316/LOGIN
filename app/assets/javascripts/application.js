// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require rails-ujs
//= require jquery/jquery-3.1.1.min.js
//= require bootstrap-sprockets
//= require metisMenu/jquery.metisMenu.js
//= require pace/pace.min.js
//= require slimscroll/jquery.slimscroll.min.js
//= require bootstrap/bootstrap.min.js
//= require bootstrap/popper.min.js
//= require bootstrap/popover.js
//= require select2/select2.min.js
//= require tilt/tilt.jquery.min.js
//= require main.js
// require turbolinks
//= require_tree .

var time = 10; // Tempo de digitação em mili segundos
var atual = 0; // indice atual do bloco de texto
var qtd; //Definimos uma variavel

$(function(){
    $('.textosTroca .item').hide();
    qtd = $('.textosTroca .item').length;
    setTimeout('digitaTexto('+atual+')',500);
});

function digitaTexto(item){
    $('.areaTexto').html('');
    objItem = $('.textosTroca .item').eq(item);
    texto = ($.trim(objItem.html()));
    if(!objItem.attr('texto')){
        objItem.attr('texto',texto);
        objItem.html('');
    }
    stringItem = new String(objItem.attr('texto'));
    setTimeout('efeitoDigita(stringItem,0)',time);
}

function efeitoDigita(stringItem,n){
    qtdLetras = stringItem.length;
    str = '<span>'+stringItem[n]+'</span>';
    $('.areaTexto').append(str).find('span:last').hide().fadeIn('normal',function(){
        if((n+1) < qtdLetras){
            setTimeout('efeitoDigita(stringItem,'+(n+1)+')',time);
        }else{
            if((atual+1) < qtd){
                atual++
            }else{
                atual = 0;
            }
            setTimeout('digitaTexto('+atual+')',3000);
        }
    });
}
