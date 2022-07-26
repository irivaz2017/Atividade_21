var qde=0;
function formulario(){
    var camp1 = document.getElementById('nome').value;
    var camp2 = document.getElementById('comentario').value;
    
 document.getElementById('result1').innerHTML += '<div id="cor'+qde+'"><strong>'+camp1+'</strong><br /><div><hr class="barra" /></div>'+ camp2 + '<br/><div><hr class="barra_2" /></div></div>';
    
    //Limpar o campo
    // document.getElementById('nome').value='';
    // document.getElementById('comentario').value='';

//}
//  function alterarF(){
//         var estilo = document.getElementsByClassName('corFundo');
//         estilo.setAttribute('style', 'background-color:'+document.getElementById('cor-fundo').value);
// }
//function enfeito(){
    
    var estilo = document.getElementById('cor'+qde);
    var corTexto = document.getElementById('cor-texto').value;
    var corFundo = document.getElementById('cor-fundo').value;
    var tamanhoTexto = document.getElementById('tamanho-texto').value;
    estilo.style = 'color: ' + corTexto +';background-color:'+
    corFundo+';font-size'+tamanhoTexto+ 'px;';

    document.getElementById('nome').value='';
    document.getElementById('comentario').value='';
    qde++;
}