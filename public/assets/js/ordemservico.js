function pesquisaEquipamento()
     {
         area = $('#idArea').val();
         $('#resultado').html('');
        if(area == '')
         {
            $('#resultado').html('<div class="alert alert-danger" role="alert">Por favor informe a área do equipamento primeiro!</div>');
         }
         else
         {
            $("#datatable-equipamento").dataTable().fnDestroy();
            $('#datatable-equipamento').DataTable({
              "language": {
              "lengthMenu": "Mostrar _MENU_ registros por página",
              "zeroRecords": "Registro não encontrado - desculpe",
              "info": "Mostrando página _PAGE_ de _PAGES_",
              "infoEmpty": "Registros não encontrados",
              "sLoadingRecords": "Carregando...<div class='spinner-border text-primary m-2' role='status'> <span class='sr-only'>Carregando...</span> </div>",
              "sProcessing": "Processando...<div class='spinner-border text-primary m-2' role='status'> <span class='sr-only'>Carregando...</span> </div>",
              "search" : 'Pesquisar',
              "decimal": ",",
              "thousands": ".",
              "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
               }
             },
            "drawCallback": function () {
               $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
              },     
              "processing":true,
              "serverSide":true,
              "ajax": "equipamentoPorArea/"+area+"",
              "columns" : [
                  {"data":"btn" , orderable: false, searchable: false},
                  {"data":"action" , orderable: false, searchable: false} ,
                  {"data":"Descricao"},
                  {"data":"descMarca"},
                  {"data":"descModelo"},
                  {"data":"codigoBem"},
                  {"data":"itemBem"},
                  {"data":"numeroSerie"}
                 ]

            });

         }
     }

     function adicionaEquipamento(id)
     {
           $.getJSON('/consultaEquipamento/'+id , function(data){
                  $('#idEquipamento').val(data.idEquipamento);
                  $('#descequipamento').val(data.Descricao);
                  $('#suces-adicionado').click(function () {
                    Swal.fire(
                     {
                      title: 'Tudo Certo!',
                      text: 'Equipamento Adicionado com Sucesso! :' + data.Descricao,
                      type: 'success',
                      confirmButtonClass: 'btn btn-confirm mt-2'
                     }
                   )
                 })
                 $("#suces-adicionado").trigger('click');   
                 $("#fechaEquipamento").trigger('click'); 
           });
     }
     function visualizaOS(id)
     {
          $('#idOrdem').val(id);

          $('#formVisualiza').submit();  
     }
     function editaOS(id)
     {
          $('#idOrdemEdit').val(id);

          $('#formEdita').submit();  
     }
     function enviaFiltroStatus()
     {
        $('#atrasadas').val('1');
        $('#filtraStatus').submit();  
     }
     function buscaFuncionario()
        {
             var filtro = $('#descricaofunc').val();
             if(filtro == '')
             {
                 return false;
             }
             $('#resultadoFunc').html('');
             $('#resultadoFunc').append(' <thead>'
                                     + '<tr>'
                                     +    '<td style="max-width: 50px;">Ação</td>'
                                     +    '<td>Funcionario</td>'
                                     +    '<td>Função</td> '
                                     +   '</tr>'
                                     +  '</thead>');
             $('#load').html('<div class="spinner-border text-primary m-2" role="status"> <span class="sr-only">Carregando...</span> </div>');
             $.getJSON('/consulta.tecnicos/'+ filtro , function(data){

                for(i=0; i < data.length ; i++)
                  {
                    $('#resultadoFunc').append('<tr><td><a style="color:#ffffff;"  class="btn btn-primary waves-effect waves-light"  href"#!" onclick="incluiRequerente('+data[i].idCadastro+')">Incluir</a></td><td>'+data[i].NmPessoa+'</td><td>'+data[i].NmFuncao+'</td></tr>');
                  }
                  $('#load').html('');
             }) ;
        }
        function incluiRequerente(id)
        {
            $.getJSON('/insere.funcionario/'+ id, function(data){
                
                $('#idCadastro').val(data.idCadastro);
                $('#nmrequerente').val(data.NmPessoa);
                $('#funcionario-add').click(function () {
                 Swal.fire(
                   {
                   title: 'Tudo Certo!',
                   text: 'Requerente Adicionado com sucesso! :' + data.NmPessoa,
                   type: 'success',
                   confirmButtonClass: 'btn btn-confirm mt-2'
                   }
                 )
               });
               $('#funcionario-add').trigger('click'); 
               $('#fechaRequerente').trigger('click'); 

             });
         }
       /*  function insereFalha()
         {
            var tipoOs = $('#idTipo').val();
            if(tipoOs == '1')
             {
               $('#incluiFalha')
               .html('<label for="idFalha">Falha</label><div class="input-group">  '
                      +   '<select class="form-control" id="idFalha"  name="idFalha" required>'
                      +      '<option value="">Selecione</option>'
                      +         ' @foreach($falhas as $falha)'
                      +            '<option value="{{$falha->idFalha}}"> {{$falha->Descricao}}</option>'
                      +          ' @endforeach'
                      +     '</select>'
                      +     '<div class="invalid-feedback">'
                      +      'Selecione a fallha, caso não tenha solicite para que o responsável cadastre.'
                      +     '</div>'
                      +       ' <div class="input-group-prepend">'
                      +          ' <span class="input-group-text" >'
                      +             '<a  data-toggle="modal" data-target="#modalFalha"  href="#!">'
                      +               ' <i class="feather-plus-square "></i>' 
                      +                  '  </a>'
                      +             '</span>'
                      +        '</div>');
             }
             else
             {
                $('#incluiFalha')
               .html('');
             }
         }*/
         function buscaTecnico()
        {
             var filtro = $('#descricaotec').val();
             if(filtro == '')
             {
                 return false;
             }
             $('#resultadoTec').html('');
             $('#resultadoTec').append(' <thead>'
                                     + '<tr>'
                                     +    '<td style="max-width: 50px;">Ação</td>'
                                     +    '<td>Funcionario</td>'
                                     +    '<td>Função</td> '
                                     +   '</tr>'
                                     +  '</thead>');
             $('#load2').html('<div class="spinner-border text-primary m-2" role="status"> <span class="sr-only">Carregando...</span> </div>');
             $.getJSON('/consulta.tecnicosAtivos/'+ filtro , function(data){

                for(i=0; i < data.length ; i++)
                  {
                    $('#resultadoTec').append('<tr><td><a style="color:#ffffff;"  class="btn btn-primary waves-effect waves-light"  href"#!" onclick="incluiTecnico('+data[i].idCadastro+')">Incluir</a></td><td>'+data[i].NmPessoa+'</td><td>'+data[i].NmFuncao+'</td></tr>');
                  }
                  $('#load2').html('');
             }) ;
        }
        function incluiTecnico(id)
        {
            $.getJSON('/insere.funcionario/'+ id , function(data){
                
                $('#novosTecnicos')
                .append(' <div class="input-group" id="tec'+data.idCadastro+'" >'
                        +   '<input style="margin-top: 5px; margin-bottom:5px;" disabled type="text" value="'+data.NmPessoa+'" class="form-control" >'
                        +     '<input type="hidden"  name="tecnicos[]" value="'+data.idCadastro+'">'
                        +     ' <div class="input-group-prepend">'
                        +         '<span class="input-group-text" >'
                        +         ' <a  style="color:red;"  onclick="removeTecnico('+data.idCadastro+')" href="#!">'
                        +             ' <i class="fas fa-times-circle "></i> '
                        +          ' </a>'
                        +        '</span>'
                        +    '</div>');

                $('#ok-add').click(function () {
                  Swal.fire(
                    {
                    title: 'Tudo Certo!',
                    text: 'Técnico Adicionado com sucesso! :' + data.NmPessoa,
                    type: 'success',
                    confirmButtonClass: 'btn btn-confirm mt-2'
                    }
                  )
               });
               $('#ok-add').trigger('click'); 

             }).fail(function() {
                $('#erro-add').click(function () {
                  Swal.fire({
                  type: 'error',
                  title: 'Desculpe...',
                  text: 'O técnico selecionado já foi adicionado!',
                  confirmButtonClass: 'btn btn-confirm mt-2'
                 })
                });
                 $("#erro-add").trigger('click');   
           });
      }
      function removeTecnico(id)
        {
            $('#tec'+id).remove();
        }
      function recarregaFalhas(id)
      {
         $('#incluiFalha')
               .html('<label for="idFalha">Falha</label><div class="input-group">  '
                      +   '<select class="form-control" id="idFalha"  name="idFalha" required>'
                      +      '<option value="">Selecione</option>'
                      +     '</select>'
                      +     '<div class="invalid-feedback">'
                      +      'Selecione a fallha, caso não tenha solicite para que o responsável cadastre.'
                      +     '</div>'
                      +       ' <div class="input-group-prepend">'
                      +          ' <span class="input-group-text" >'
                      +             '<a  data-toggle="modal" data-target="#modalFalha"  href="#!">'
                      +               ' <i class="feather-plus-square "></i>' 
                      +                  '  </a>'
                      +             '</span>'
                      +        '</div>');

            $.getJSON('/lista.todas.falhas/' , function(data){
                for(i=0; i < data.length ; i++)
                 {
                   $('#idFalha').append('<option value="'+data[i].idFalha+'" > '+data[i].Descricao+' </option>');
                 }
                   $('#idFalha').val(id);
            });
      }
      function salvaFalha()
         {
             descricao = $('#descricaofalha').val().trim();
          
             if(descricao == '')
             {
                $('#erro-add').click(function () {
                  Swal.fire({
                  type: 'error',
                  title: 'Desculpe...',
                  text: 'Informe a Descrição da Falha!',
                  confirmButtonClass: 'btn btn-confirm mt-2'
                   })
                 });
                 $("#erro-add").trigger('click');   
                 return false;
             }
            else
            {
             $.ajax({
                    url: "{{route('salva.falha')}}",
                    type: 'post',
                    data : 
                    {
                      descricao : $('#descricaofalha').val(),
                      retorno:    2 ,
                      _token:   $('#tokenFalha').val()
                    }

             }).done(function(data){

                    $('#descricaofalha').val('');
                    $('#ok-add').click(function () {
                     Swal.fire(
                     {
                      title: 'Tudo Certo!',
                      text: 'Falha adicionada com sucesso! :' + data.Descricao,
                      type: 'success',
                      confirmButtonClass: 'btn btn-confirm mt-2'
                     }
                    )
                  });
                  recarregaFalhas(data.idFalha);
                  $('#fechaFalha').trigger('click'); 
                  $('#ok-add').trigger('click');
                  
               });
            }
         }
         jQuery( document ).ready(function( $ ) {
            var status = $('#status').val();
            var atradadas = $('#atrasadas').val();
        
            $("#datatable-ordens").dataTable().fnDestroy();
                 $('#datatable-ordens').DataTable({
                    responsive: true,
                  "language": {
                    "lengthMenu": "Mostrar _MENU_ registros por página",
                    "zeroRecords": "Registro não encontrado - desculpe",
                    "info": "Mostrando página _PAGE_ de _PAGES_",
                    "infoEmpty": "Registros não encontrados",
                    "sLoadingRecords": "Carregando...<div class='spinner-border text-primary m-2' role='status'> <span class='sr-only'>Carregando...</span> </div>",
                     "sProcessing": "Processando...<div class='spinner-border text-primary m-2' role='status'> <span class='sr-only'>Carregando...</span> </div>",
                    "search" : 'Pesquisar',
                    "decimal": ",",
                    "thousands": ".",
                    "paginate": {
                        "previous": "<i class='mdi mdi-chevron-left'>",
                        "next": "<i class='mdi mdi-chevron-right'>"
                    }
                },
                "drawCallback": function () {
                    $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
                },  
                 
                    "processing":true,
                    "serverSide":true,
                    "ajax": "consultaOrdens.adm/"+status+'/'+atradadas,
                    "columns" : [
                          {"data":"btn" , orderable: false, searchable: false},
                          {"data":"action" , orderable: false, searchable: false} ,
                          {"data":"idOs"},
                          {"data":"NmPessoa"},
                          {"data":"descStatus"},
                          {"data":"descTipoManu"},
                          {"data":"descArea"},
                          {"data":"descEquipamento"},
                          {"data":"descPrioridade"},
                          {"data":"DataAbertura"},
                          {"data":"DataPrevistaFechamento"},
                          {"data":"DataFechamento"},
                          {"data":"Descricao"}
                       
                      ]
        
                  });
             });
        
          
             function validaForm()
             {
                 var equipamento = $('#descequipamento').val();
                 if(equipamento == '')
                 {
                   $('#sa-errorEquipamento').click(function () {
                      Swal.fire({
                        type: 'error',
                        title: 'Desculpe...',
                        text: 'Por favor informe o equipamento!',
                        confirmButtonClass: 'btn btn-confirm mt-2'
                        })
                     });
                     $("#sa-errorEquipamento").trigger('click');   
        
                     return false;
                 }
                 else if ($('#nmrequerente').val() == '')
                 {
                    $('#sa-errorRequerente').click(function () {
                      Swal.fire({
                        type: 'error',
                        title: 'Desculpe...',
                        text: 'Por favor informe o requerente!',
                        confirmButtonClass: 'btn btn-confirm mt-2'
                        })
                     });
                     $("#sa-errorRequerente").trigger('click');   
        
                     return false;
                 }
                 else
                 {
                    return true;
                 }
             }
            function mudaBotaoImpressao(id)
            {
                $('#imp'+id).addClass( "edit btn btn-secondary btn-sm" );
            }
            function buscaObservador()
                {
                     var filtro = $('#descricaoobs').val();
                     if(filtro == '')
                     {
                         return false;
                     }
                     $('#resultadoObs').html('');
                     $('#resultadoObs').append(' <thead>'
                                             + '<tr>'
                                             +    '<td style="max-width: 50px;">Ação</td>'
                                             +    '<td>Funcionario</td>'
                                             +   '</tr>'
                                             +  '</thead>');
                     $('#load3').html('<div class="spinner-border text-primary m-2" role="status"> <span class="sr-only">Carregando...</span> </div>');
                     $.getJSON('/consulta.tecnicos/'+ filtro , function(data){
        
                        for(i=0; i < data.length ; i++)
                          {
                            $('#resultadoObs').append('<tr><td><a style="color:#ffffff;"  class="btn btn-primary waves-effect waves-light"  href"#!" onclick="incluiObservador('+data[i].idCadastro+')">Incluir</a></td><td>'+data[i].NmPessoa+'</td></tr>');
                          }
                          $('#load3').html('');
                     }) ;
                }
                function incluiObservador(id)
                {
                    $.getJSON('/insere.funcionario/'+ id , function(data){
                        
                        $('#novosObservadores')
                        .append(' <div class="input-group" id="obs'+data.idCadastro+'" >'
                                +   '<input style="margin-top: 5px; margin-bottom:5px;" disabled type="text" value="'+data.NmPessoa+'" class="form-control" >'
                                +     '<input type="hidden"  name="observadores[]" value="'+data.idCadastro+'">'
                                +     ' <div class="input-group-prepend">'
                                +         '<span class="input-group-text" >'
                                +         ' <a  style="color:red;"  onclick="removeObservador('+data.idCadastro+')" href="#!">'
                                +             ' <i class="fas fa-times-circle "></i> '
                                +          ' </a>'
                                +        '</span>'
                                +    '</div>');
        
                        $('#ok-add').click(function () {
                          Swal.fire(
                            {
                            title: 'Tudo Certo!',
                            text: 'Observador Adicionado com sucesso! :' + data.NmPessoa,
                            type: 'success',
                            confirmButtonClass: 'btn btn-confirm mt-2'
                            }
                          )
                       });
                       $('#ok-add').trigger('click'); 
        
                     }).fail(function() {
                        $('#erro-add').click(function () {
                          Swal.fire({
                          type: 'error',
                          title: 'Desculpe...',
                          text: 'O observador selecionado já foi adicionado!',
                          confirmButtonClass: 'btn btn-confirm mt-2'
                         })
                        });
                         $("#erro-add").trigger('click');   
                   });
              }
              function removeObservador(id)
                {
                    $('#obs'+id).remove();
                }
             