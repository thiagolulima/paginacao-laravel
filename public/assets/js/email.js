function enviaEmail(id, email , idCadastro)
{
    $('#resposta').html('');
    if(validaEmail(email) == false)
    {
      $('#idCadastro').val(idCadastro);
      $('#idPesquisa').val(id);
      $('#email').val('');
      $('#retorno').html('');
      $('#modalEmail').trigger('click');  
    }
    else
    {
         $('#resposta').html('<div class="loader"></div>Enviando, aguarde !');
         $('#modalEmailOk').trigger('click');  
         $.getJSON('/envia.pesquisa/'+idCadastro + '/' + email + '/' +  id, function(data){
                  $('#resposta').html('<div class="alert alert-success" role="alert">' + data + '</div');
                  $('#retorno').html('');
               });
    }
}
function validaEmail(email) {
      var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return regex.test(email);
}
function salvaEnvia()
{
  email = $('#email').val();
  idCadastro = $('#idCadastro').val();
  idPesquisa = $('#idPesquisa').val();
  if(validaEmail(email) == false)
    {
       $('#retorno').html('<div class="alert alert-danger" role="alert">Email Inválido</div>');
    }
  else
   {
       $('#retorno').html('<div class="loader"></div>');
       $.getJSON('/valida.email/'+ idCadastro + '/' + email , function(data){

           if(data == 'invalido')
            {
              $('#retorno').html('<div class="alert alert-danger" role="alert">Email já utilizado.</div');
               return false;
            }
            else
            {
               $.getJSON('/envia.pesquisa/'+idCadastro + '/' + email + '/' +  idPesquisa , function(data){
                  $('#retorno').html('<div class="alert alert-success" role="alert">' + data + '</div');
               });
            }
             
       });
   }

}
function geraLink(idPesquisa) {

  $.getJSON('/gera.link/' + idPesquisa , function(data){
   
       let linkPesquisa = document.createElement("input");
       linkPesquisa.value = data;
       document.body.appendChild(linkPesquisa);
       linkPesquisa.select();
       document.execCommand("Copy");  

       document.body.removeChild(linkPesquisa);
       $('#msg-ok').on('click', function () {
                 Swal.fire({
                 title: 'Link Copiado Para Área de Transferencia',
                 confirmButtonClass: 'btn btn-confirm mt-2'
               })
          });
       $('#msg-ok').trigger('click');  
  });
  
}