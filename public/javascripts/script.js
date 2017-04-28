var server="http://localhost:3000/dados";
var dados, j;
var troca=0;
function tudo(){
	$('#tabela').empty(); //Limpando a tabela
    $.get(server, function(data) {
        for (i in data){
        	$('#tabela').append('<tr><td class="tamanho"><img src='+data[i].imagem+'></td><td>'+data[i].nome+'</td><td>'+data[i].categoria+'</td><td>'+data[i].estoque+'</td><td>'+data[i].material+'</td><td>'+data[i].tamanho+'</td><td>'+data[i].cor+'</td><td>'+data[i].preco+'</td><td><a class="waves-effect waves-light btn"><i class="material-icons ">mode_edit</i></a></td><td><a class="waves-effect waves-light btn red"><i class="material-icons ">delete</i></a></td></tr>')
        }
    });

}

function verificaNumeroEstoque(e) {
    if ((e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) || e.which ==32 )   {
         return false;
    }
}

$(document).ready(function(){
        tudo();
        $('.modal').modal();
        $('select').material_select();
        $('#estoque').keypress(verificaNumeroEstoque);
});
