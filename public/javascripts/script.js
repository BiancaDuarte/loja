var server="http://localhost:3000/dados";
var dados, j;
var troca=0;
function tudo(){
	$('#tabela').empty(); //Limpando a tabela
    $.get(server, function(data) {
        for (i in data){
        	$('#tabela').append('<tr><td class="tamanho"><img src='+data[i].imagem+'></td><td>'+data[i].nome+'</td><td>'+data[i].categoria+'</td><td>'+data[i].estoque+'</td><td>'+data[i].material+'</td><td>'+data[i].tamanho+'</td><td>'+data[i].cor+'</td><td>'+data[i].preco+'</td></tr>')
        }
    });

}


$(document).ready(function(){
        tudo();
        $('.modal').modal();
});
