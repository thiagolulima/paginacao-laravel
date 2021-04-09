
  var contador = 1;
  var opcoes = 1;
  var linha = 500;
  var coluna = 500;
  var idPergunta = 0;

  function inserePerguntas(tipoPergunta, contadorp, idQuest){
        
    var linhasphp = $('#qtdeLinhas').val();
    var colunasphp = $('#qtdeColunas').val();
    var opcoesphp = $('#qtdeOpcoes').val();
    var contadorphp = $('#qtdeContador').val();
    var tipoPontuacao = $('#tipoPontuacao').val();
    var pontuacao = '';

       
          if(contador < contadorphp)
          {
            contador = contadorphp;
          }
          
          if(opcoes <= opcoesphp)
          {
            opcoes = opcoesphp;
          }
          if(linha < linhasphp)
          {
            linha = linhasphp;
          }
          if(coluna < colunasphp)
          {
            coluna = colunasphp;
          }
          $.get('/incluiPergunta/'+idQuest+'/'+tipoPergunta, function(data) {
                
                 idPergunta = data;   
               if(tipoPontuacao == '2' || tipoPontuacao == '3')
                 {
                    pontuacao = '<span class="input-group-text" style="font-size:10px; border: none; border-bottom: solid 1px #cccccc; " >Pontuação</span>'
                     + '<input type="text" name="pergunta['+idPergunta+'][pontuacao]"  class="form-control" '
                     + 'style="border: none; border-bottom: solid 1px #cccccc; width:150px; "  placeholder="Pontuação" pattern="[0-9.]+$"  required > ';
                 }

          $('#novasPerguntas').
          append('<div id="'+contador+'" >'
                   + '<div class="accordion" id="accordionExample">'
                   +    '<div class="card">'
                   +     '<div class="card-header" id="heading'+contador+'">'
                   +       '<h5 ></h5><a href="#!"  data-toggle="collapse" '
                   +           'data-target="#collapse'+contador+'" aria-expanded="true" aria-controls="collapse'+contador+'">'
                   +            '<div class="input-group mb-3"   >'
                   +             '<div class="input-group-prepend">'
                   +               '<span class="input-group-text" style="font-size:10px; border: none; " >Pergunta:</span>'
                   +              '</div>'
                   +               '<input type="text" name="pergunta['+idPergunta+'][pergunta]" class="form-control" style="font-size:10px; border: none; border-bottom: solid 1px #cccccc; "  placeholder="Digite a pergunta" required >'
                   +               ' <input type="hidden"  name="pergunta['+idPergunta+'][idPergunta]"  value="'+idPergunta+'">'
                   +               ' <input type="hidden"  name="pergunta['+idPergunta+'][tipoPergunta]"  value="'+tipoPergunta+'">'
                   +              '<button type="button" class="btn btn-danger" style="height:37px; font-size:10px; float:right;" onclick="removePergunta('+contador+','+idPergunta+')">x</button>'   
                   +           '</div>'
                   +          '</a> '
                   +      '</div>'
                   +      '<div id="collapse'+contador+'" class=" card-body collapse " aria-labelledby="heading'+contador+'">' 
                   +         '<div class="col-xl-12 ">'
                   +            '<div class="input-group-prepend col-md-3" style="margin-left:-16px;">'           
                   +               '<span class="input-group-text" style="font-size:10px; border: none; border-bottom: solid 1px #cccccc;" >Sequência</span>'
                   +                '<input type="text" name="pergunta['+idPergunta+'][sequencia]"  class="form-control"'
                   +                'style="border: none; border-bottom: solid 1px #cccccc; width:150px; "  placeholder="Sequencia" pattern="[0-9]+$" > '+pontuacao+' '
                   +             '</div>'
                   +                '<span class="input-group-text" style="font-size:10px; margin-top:4px;" >Descrição</span>'
                   +               '<textarea name="pergunta['+idPergunta+'][descricao]" class="form-control" placeholder="Digite aqui..." ></textarea>'               
                   +            '</div>'
                   +             '<div style="margin-top:10px;"  id="opcoes'+contador+'">'
                   +             '</div>'
                   +             '<div id="insereAlternativas'+contador+'"><a href="#!"  class="btn btn-outline-dark" style=" border: none; border-bottom: solid 1px #cccccc;'
                   +              'margin-top:5px; height:37px; font-size:10px;"'
                   +              'onclick="insereOpcoes('+contador+','+tipoPergunta+','+idPergunta+','+opcoes+')">+ Alternativa</a></div>'    
                   +     '</div>'
                   +    '</div>' 
                   + '</div>'   
                +'</div>'
                );
          if(tipoPergunta == '5')
            {
              var opcao = 'Aberta:'
              $('#opcoes'+contador)
               .append('<div  id="c'+contador+'o'+opcoes+'" >'
                   + '         <span class="input-group-text" style="font-size:10px;" >'+opcao+'</span>'
                   +           '<input type="hidden"  name="opcao['+opcoes+'][idPergunta]"  value="'+idPergunta+'">'
                   +          '<textarea name="opcao['+opcoes+'][alternativa]"  class="form-control" >Resposta aqui...</textarea>' 
                   +     '</div>'
                 
                   );
               opcoes++;
               $("#insereAlternativas"+contador).html('');
          }
          else if(tipoPergunta == '4')
       {
        var opcao = 'Grade:'
        $('#opcoes'+contador)
        .append(        '<div class="row" id="c'+contador+'o'+opcoes+'" >'
                   +      '  <div class="col-md-5">'
                   +           '<spam>Linha ("Sub Pergunta")</spam>'
                   +           '<input type="text" name="subpergunta['+linha+'][subpergunta]" style="font-size:10px; margin-top:5px; border: none; border-bottom: solid 1px #cccccc;" class="form-control"  placeholder="Digite a sub pergunta..." required>'
                   +             '<input type="hidden"  name="subpergunta['+linha+'][idPergunta]"  value="'+idPergunta+'">'
                   +            '<div id="opcaoTabela'+contador+opcoes+'"> <div id="novasSubperguntas'+contador+opcoes+'"> </div></div>'
                   +           '<a href="#!" class="btn btn-outline-dark" style=" border: none; border-bottom: solid 1px #cccccc; margin-top:5px; height:30px; font-size:10px;" onclick="insereOpcaoGrade(1,'+contador+' , '+opcoes+' , '+linha+ ','+idPergunta+')">+ Linha</a>'    
                   +         '</div>'
                   +         '<div class="col-md-7">'
                   +           '<spam> Coluna ("Alternativa / Pontuação") </spam>'
                   +           '<div  class="input-group-prepend"> '
                   +           '<input type="text" name="opcao['+coluna+'][alternativa]" style="margin-top:5px; font-size:10px;border: none; border-bottom: solid 1px #cccccc;" '
                   +             'class="form-control"  placeholder="Alternativa..." required>'
                   +             '<input type="hidden"  name="opcao['+coluna+'][idPergunta]"  value="'+idPergunta+'">'
                   +           '<input type="text" name="opcao['+coluna+'][peso]"  style="margin-top:5px;  margin-left:3px; font-size:10px; max-width:100px;border: none; border-bottom: solid 1px #cccccc; " '
                   +             'class="form-control"  placeholder="Pontuação..." pattern="[0-9.]+$">'
                   +             '<select  style="font-size:10px; border: none; border-bottom: '
                   +               'solid 1px #cccccc; background-color:#f4f7fa; color:#495057; height:38px;  margin-top:6px;"  name="opcao['+coluna+'][anula]" required>   '
                   +                 '<option  value="N" > Não Anula</option>'
                   +                 '<option  value="S" > Anula</option>'
                   +              '</select>'
                   +             '</div>'
                   +            '<div id="opcaoTabela2'+contador+opcoes+'"> <div id="novasAlternativas'+contador+opcoes+'"> </div>  </div>'
                   +           '<a href="#!" class="btn btn-outline-dark" style=" border: none; border-bottom: solid 1px #cccccc; margin-top:5px; height:30px; font-size:10px;" onclick="insereOpcaoGrade(2,'+contador+' , '+opcoes+' , '+coluna+' ,'+idPergunta+')">+ Coluna </a>'    
                   +       '</div>'
                   +     '</div>'               
                   );
               opcoes++;
               linha++;
               coluna++;
               $("#insereAlternativas"+contador).html('');
      }
        contador++;
       // $("#salvar").html('<button type="submit" class="btn btn-primary mb-2">Salvar</button>');
       tinymce.init({selector:'textarea' ,language: 'pt_BR' , height: 380});
    });
  }
  function removePergunta(contador,idPergunta){
         var confirmacao = confirm('Deseja realmente excluir a Pergunta?');
         if(confirmacao == true)
            {
                $.get('/excluiPergunta/'+idPergunta, function(data) {
                      $('#'+ contador).html('<div class="alert alert-danger"'
                      + 'role="alert">Pergunta id:'+idPergunta+' Removida !</div>').fadeOut(3000);
                 }) 
            }
  }
  function insereOpcoes(contador,tipoPergunta,idPergunta,opcoesp){

      var opcoesphp = $('#qtdeOpcoes').val();
      if(opcoes <= opcoesphp)
      {
        opcoes = opcoesphp;
      }
      if(tipoPergunta == '1')
      {
          var opcao = 'Lista:';
      }
      else if(tipoPergunta == '2')
      {
        var opcao = '<input  type="checkbox" value="" disabled>';
      }
      else if(tipoPergunta == '3')
      {
        var opcao = '<input  type="radio" value="" disabled>';
      }
      else if(tipoPergunta == '5')
      {
        var opcao = 'Aberta:'
        $('#opcoes'+contador)
               .append('<div  id="c'+contador+'o'+opcoes+'" >'
                   + '        <span class="input-group-text" style="font-size:10px;" >'+opcao+'</span>'
                   +          '<input type="hidden"  name="opcao['+opcoes+'][idPergunta]"  value="'+idPergunta+'">'
                   +          '<textarea name="opcao['+opcoes+'][alternativa]"  class="form-control" placeholder="Resposta aqui..."></textarea>'
                   //+          '<a href="#!" class="btn btn-danger"  onclick="removeOpcoes('+contador+','+opcoes+' , 0)">x</a>'    
                   +     '</div>'
                   );
               opcoes++;
               tinymce.init({selector:'textarea' ,language: 'pt_BR' , height: 380});
               return;
       }
      else if(tipoPergunta == '4')
      {
        var opcao = 'Grade:'
        $('#opcoes'+contador)
        .append(        '<div class="row" id="c'+contador+'o'+opcoes+'" >'
                   +      '  <div class="col-md-5">'
                   +           '<spam>Linha ("Sub Pergunta")</spam>'
                   +           '<input type="text" name="subpergunta['+linha+'][subpergunta]" style="font-size:10px; margin-top:5px; border: none; border-bottom: solid 1px #cccccc;" class="form-control"  placeholder="Digite a sub pergunta..." required>'
                   +             '<input type="hidden"  name="subpergunta['+linha+'][idPergunta]"  value="'+idPergunta+'">'
                   +            '<div id="opcaoTabela'+contador+opcoes+'"></div>'
                 
                   +           '<a href="#!" class="btn btn-outline-dark" style=" border: none; border-bottom: solid 1px #cccccc; margin-top:5px; height:30px; font-size:10px;" onclick="insereOpcaoGrade(1,'+contador+' , '+opcoes+' , 1 ,'+idPergunta+')">+ Linha</a>'    
                   +         '</div>'
                   +         '<div class="col-md-7">'
                   +           '<spam> Coluna ("Alternativa / Pontuação") </spam>'
                   +           '<div  class="input-group-prepend"> '
                   +           '<input type="text" name="opcao['+coluna+'][alternativa]" style="margin-top:5px; font-size:10px;border: none; border-bottom: solid 1px #cccccc;" '
                   +             'class="form-control"  placeholder="Alternativa..." required>'
                   +             '<input type="hidden"  name="opcao['+coluna+'][idPergunta]"  value="'+idPergunta+'">'
                   +           '<input type="text" name="opcao['+coluna+'][peso]"  style="margin-top:5px; margin-left:3px; font-size:10px; max-width:100px;border: none; border-bottom: solid 1px #cccccc; " '
                   +             'class="form-control"  placeholder="Pontuação..." pattern="[0-9.]+$"></div>'
                   +            '<div id="opcaoTabela2'+contador+opcoes+'"></div>'
                   +           '<a href="#!" class="btn btn-outline-dark" style=" border: none; border-bottom: solid 1px #cccccc; margin-top:5px; height:30px; font-size:10px;" onclick="insereOpcaoGrade(2,'+contador+' , '+opcoes+' , 1 ,'+idPergunta+' )">+ Coluna </a>'    
                   +       '</div>'
                  
                   +     '</div>'               
                   );
               opcoes++;
               linha++;
               coluna++;
               $("#insereAlternativas"+contador).html('');
               return;

      }
      $('#opcoes'+contador)
               .append('<div class="input-group-prepend" id="c'+contador+'o'+opcoes+'" >'
                   +         '<label class="input-group-text" style="font-size:10px;height:37px; border: none; border-bottom: solid 1px #cccccc;"  >'
                   +             ''+opcao+''
                   +          '</label>'
                   +          '<input type="text" name="opcao['+opcoes+'][alternativa]" class="form-control" style="font-size:10px; height:37px; border: none; border-bottom: solid 1px #cccccc; margin-right:4px;" placeholder="Digite a opção aqui..." required>'
                   +           '<input type="hidden"  name="opcao['+opcoes+'][idPergunta]"  value="'+idPergunta+'">'
                   +           '<input type="text" name="opcao['+opcoes+'][peso]"  maxlength="10"  class="form-control col-md-2" style="font-size:10px; height:37px; border: none; border-bottom: solid 1px #cccccc;" placeholder="Digite o pontuação" pattern="[0-9.]+$">'
                   +           '<select  style="font-size:10px; height:37px; border: none; border-bottom: '
                   +              'solid 1px #cccccc; background-color:#f4f7fa; color:#495057;"  name="opcao['+opcoes+'][anula]" required>   '
                   +                 '<option  value="N" > Não Anula</option>'
                   +                 '<option  value="S" > Anula</option>'
                   +           '</select>'
                   +          '<a href="#!" class="btn btn-danger" style="margin-top:0px;  font-size:10px;" onclick="removeOpcoes('+contador+','+opcoes+', 0)">x</a>'    
                   +     '</div>'
                   );
               opcoes++;

  }
  function removeOpcoes(contador,opcoes,idOpcao){
          var confirmacao = confirm('Deseja realmente excluir este item?');
          if(confirmacao == true)
          {  
              if(idOpcao == '0')
              {
                $('#c'+ contador + 'o' + opcoes).html('<div class="alert alert-danger"'
                + 'role="alert">Alternativa Removida !</div>').fadeOut(3000);
              }
              else
              {
                $.get('/excluiAlternativa/'+idOpcao, function(data) {
                   $('#c'+ contador + 'o' + opcoes).html('<div class="alert alert-danger"'
                     + 'role="alert">Alternativa Removida !</div>').fadeOut(3000);
                });
              }  
             
          }
  }
  function insereOpcaoGrade(valor,contador,opcoes,linhap,idPergunta){
           
           var linhasphp = $('#qtdeLinhas').val();
           var colunasphp = $('#qtdeColunas').val();

           if(valor == '1' && linha < linhasphp)
           {
             linha = linhasphp;
           }
           if(valor == '2' && coluna < colunasphp)
           {
             coluna = colunasphp;
           }
           if(valor == '1')
           { 
                $('<div id="l'+linha+'" class="input-group-prepend">'
                  +  '<input  type="text" name="subpergunta['+linha+'][subpergunta]"'
                  +  'style="margin-top:5px;  font-size:10px; border: none; border-bottom: solid 1px #cccccc;"'
                  +  'class="form-control"  placeholder="Digite a sub pergunta..." required>'
                  +  '<input type="hidden"  name="subpergunta['+linha+'][idPergunta]"  value="'+idPergunta+'">'
                  +  '<button type="button"class="btn btn-danger"  style=" height:34px; width:34px; padding: 0; margin-top:9px;"  onclick="removeOpcaoGrade(1 ,'+linha+',0)">x</button></div>'
                 )
                  .insertBefore("#novasSubperguntas"+ contador + opcoes);
                linha++; 
           }
           if(valor == '2')
           { 
                $('    <div id="c'+coluna+'" class="input-group-prepend"> '
                    + '<input type="text" name="opcao['+coluna+'][alternativa]" style="margin-top:5px; font-size:10px;border: none; border-bottom: solid 1px #cccccc;" '
                    + 'class="form-control"  placeholder="Alternativa..." required>'
                    + '<input type="text" name="opcao['+coluna+'][peso]"  style="margin-top:5px; margin-left:3px; font-size:10px; max-width:100px;border: none; border-bottom: solid 1px #cccccc; " '
                    + 'class="form-control"  placeholder="Pontuação..." pattern="[0-9.]+$">'
                    +  '<input type="hidden"  name="opcao['+coluna+'][idPergunta]"  value="'+idPergunta+'">'
                    +           '<select  style="font-size:10px; border: none; border-bottom: '
                    +              'solid 1px #cccccc; background-color:#f4f7fa; color:#495057; height:38px;  margin-top:6px;"  name="opcao['+coluna+'][anula]" required>   '
                    +                 '<option  value="N" > Não Anula</option>'
                    +                 '<option  value="S" > Anula</option>'
                    +           '</select>'
                    + '<button type="button"class="btn btn-danger"  style=" margin-left:3px; height:30px; width:34px; padding: 0; margin-top:9px;"  onclick="removeOpcaoGrade(2 ,'+coluna+',0)">x</button></div>'
                 ).insertBefore("#novasAlternativas" + contador + opcoes);
                coluna++;
               
           }
  }
  function removeOpcaoGrade(tipo , id, idbanco){
    var confirmacao = confirm('Deseja realmente excluir este item ?');
    if(confirmacao == true)
    {
           
           if(tipo == '1' && idbanco == '0')
           {
               $("#l"+ id).
                  html('<div class="alert alert-danger"'
                    +  'role="alert">Sub pergunta Removida !</div>')
                  .fadeOut(3000);
               
           }
           else if(tipo == '1' && idbanco > '0')
           {
               $.get('/excluiSubpergunta/'+idbanco, function(data) {
                  $("#l"+ id).
                        html('<div class="alert alert-danger"'
                        +  'role="alert">Sub pergunta Removida !</div>')
                        .fadeOut(3000);
               }) 
           }
           else if (tipo == '2' && idbanco == '0')
           {
               $("#c"+ id).
                  html('<div class="alert alert-danger"'
             +  'role="alert">Alternativa Removida !</div>')
              .fadeOut(3000);
           }  
           else if (tipo == '2' && idbanco > '0')
           {
              $.get('/excluiAlternativa/'+idbanco, function(data) {
                  $("#c"+ id).
                      html('<div class="alert alert-danger"'
                      +  'role="alert">Alternativa Removida !</div>')
                      .fadeOut(3000);
              }) 
           }    
    }
  }
