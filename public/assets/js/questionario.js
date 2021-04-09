
  var contador = 1;
  var opcoes = 1;
  var linha = 500;
  var coluna = 500;

  function inserePerguntas(tipoPergunta){
          $('#perguntas').
          append('<div id="'+contador+'" >'
                   + ' <div class="accordion" id="accordionExample">'
                   +     '<div class="card">'
                   +     '<div class="card-header" id="heading'+contador+'">'
                   +       '<h5 ></h5><a href="#!"  data-toggle="collapse" '
                   +           'data-target="#collapse'+contador+'" aria-expanded="true" aria-controls="collapse'+contador+'">'
                   +            '<div class="input-group mb-3"   >'
                   +             '<div class="input-group-prepend">'
                   +               '<span class="input-group-text" style="font-size:10px; border: none; " >Pergunta:</span>'
                   +              '</div>'
                   +              '<input type="text" name="pergunta['+contador+'][pergunta]" class="form-control" style="font-size:10px; border: none; border-bottom: solid 1px #cccccc; "  placeholder="Digite a pergunta" required >'
                   +               ' <input type="hidden"  name="pergunta['+contador+'][contador]"  value="'+contador+'">'
                   +               ' <input type="hidden"  name="pergunta['+contador+'][tipoPergunta]"  value="'+tipoPergunta+'">'
                   +              '<button type="button" class="btn btn-danger" style="height:37px; font-size:10px; float:right;" onclick="removePergunta('+contador+')">x</button>'   
                   +           '</div>'
                   +          '</a> '
                   +      '</div>'
                   +      '<div id="collapse'+contador+'" class=" card-body collapse " aria-labelledby="heading'+contador+'">' 
                   +            '<div class="input-group mb-3">'
                   +               '<div class="input-group-prepend">'
                   +                 '<span class="input-group-text" style="font-size:10px;" >Descrição</span>'
                   +               '</div>'
                   +               '<textarea name="pergunta['+contador+'][descricao]" class="form-control" placeholder="Digite aqui..." ></textarea>'   
                   +            '</div>'
                   +             '<div id="opcoes'+contador+'">'
                   +             '</div>'
                   +             '<div>'
                   +               '<div id="insereAlternativas'+contador+'"><a href="#!"  class="btn btn-outline-dark" style=" border: none; border-bottom: solid 1px #cccccc; margin-top:5px; height:37px; font-size:10px;" onclick="insereOpcoes('+contador+' ,'+tipoPergunta+')">+ Alternativa</a></div>'    
                   +             '</div>'
                   +     '</div>'
                   +    '</div>' 
                   +   '</div>'   
                +'</div>'
                );
          if(tipoPergunta == '5')
            {
              var opcao = 'Aberta:'
              $('#opcoes'+contador)
               .append('<div class="input-group mb-3" id="c'+contador+'o'+opcoes+'" >'
                   + '         <span class="input-group-text" style="font-size:10px;" >'+opcao+'</span>'
                   +           '<input type="hidden"  name="opcao['+opcoes+'][contador]"  value="'+contador+'">'
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
                   +             '<input type="hidden"  name="subpergunta['+linha+'][contador]"  value="'+contador+'">'
                   +            '<div id="opcaoTabela'+contador+opcoes+'"></div>'
                 
                   +           '<a href="#!" class="btn btn-outline-dark" style=" border: none; border-bottom: solid 1px #cccccc; margin-top:5px; height:30px; font-size:10px;" onclick="insereOpcaoGrade(1,'+contador+' , '+opcoes+')">+ Linha</a>'    
                   +         '</div>'
                   +         '<div class="col-md-7">'
                   +           '<spam> Coluna ("Alternativa / Peso") </spam>'
                   +           '<div  class="input-group-prepend"> '
                   +           '<input type="text" name="opcao['+coluna+'][alternativa]" style="margin-top:5px; font-size:10px;border: none; border-bottom: solid 1px #cccccc;" '
                   +             'class="form-control"  placeholder="Alternativa..." required>'
                   +             '<input type="hidden"  name="opcao['+coluna+'][contador]"  value="'+contador+'">'
                   +           '<input type="text" name="opcao['+coluna+'][peso]"  style="margin-top:5px; margin-left:3px; font-size:10px; max-width:100px;border: none; border-bottom: solid 1px #cccccc; " '
                   +             'class="form-control"  placeholder="Peso..."></div>'
                   +            '<div id="opcaoTabela2'+contador+opcoes+'"></div>'
                   +           '<a href="#!" class="btn btn-outline-dark" style=" border: none; border-bottom: solid 1px #cccccc; margin-top:5px; height:30px; font-size:10px;" onclick="insereOpcaoGrade(2,'+contador+' , '+opcoes+')">+ Coluna </a>'    
                   +       '</div>'
                  
                   +     '</div>'               
                   );
               opcoes++;
               linha++;
               coluna++;
               $("#insereAlternativas"+contador).html('');
      }
      contador++;
      $("#salvar").html('<button type="submit" class="btn btn-primary mb-2">Salvar</button>');
  }
  function removePergunta(contador){
         
          $('#'+ contador).html('');
  }
  function insereOpcoes(contador,tipoPergunta){
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
               .append('<div class="input-group mb-3" id="c'+contador+'o'+opcoes+'" >'
                   + '         <span class="input-group-text" style="font-size:10px;" >'+opcao+'</span>'
                   +           '<input type="hidden"  name="opcao['+opcoes+'][contador]"  value="'+contador+'">'
                   +          '<textarea name="opcao['+opcoes+'][alternativa]"  class="form-control" placeholder="Resposta aqui..."></textarea>'
                   +          '<a href="#!" class="btn btn-danger"  onclick="removeOpcoes('+contador+','+opcoes+')">x</a>'    
                   +     '</div>'
                 
                   );
               opcoes++;
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
                   +             '<input type="hidden"  name="subpergunta['+linha+'][contador]"  value="'+contador+'">'
                   +            '<div id="opcaoTabela'+contador+opcoes+'"></div>'
                 
                   +           '<a href="#!" class="btn btn-outline-dark" style=" border: none; border-bottom: solid 1px #cccccc; margin-top:5px; height:30px; font-size:10px;" onclick="insereOpcaoGrade(1,'+contador+' , '+opcoes+')">+ Linha</a>'    
                   +         '</div>'
                   +         '<div class="col-md-7">'
                   +           '<spam> Coluna ("Alternativa / Peso") </spam>'
                   +           '<div  class="input-group-prepend"> '
                   +           '<input type="text" name="opcao['+coluna+'][alternativa]" style="margin-top:5px; font-size:10px;border: none; border-bottom: solid 1px #cccccc;" '
                   +             'class="form-control"  placeholder="Alternativa..." required>'
                   +             '<input type="hidden"  name="opcao['+coluna+'][contador]"  value="'+contador+'">'
                   +           '<input type="text" name="opcao['+coluna+'][peso]"  style="margin-top:5px; margin-left:3px; font-size:10px; max-width:100px;border: none; border-bottom: solid 1px #cccccc; " '
                   +             'class="form-control"  placeholder="Peso..."></div>'
                   +            '<div id="opcaoTabela2'+contador+opcoes+'"></div>'
                   +           '<a href="#!" class="btn btn-outline-dark" style=" border: none; border-bottom: solid 1px #cccccc; margin-top:5px; height:30px; font-size:10px;" onclick="insereOpcaoGrade(2,'+contador+' , '+opcoes+')">+ Coluna </a>'    
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
                   +           '<input type="hidden"  name="opcao['+opcoes+'][contador]"  value="'+contador+'">'
                   +           '<input type="text" name="opcao['+opcoes+'][peso]"  maxlength="10"  class="form-control col-md-2" style="font-size:10px; height:37px; border: none; border-bottom: solid 1px #cccccc;" placeholder="Digite o peso">'
                   +          '<a href="#!" class="btn btn-danger" style="margin-top:0px;  font-size:10px;" onclick="removeOpcoes('+contador+','+opcoes+')">x</a>'    
                   +     '</div>'
                   );
               opcoes++;

  }
  function removeOpcoes(contador,opcoes){
         
          $('#c'+ contador + 'o' + opcoes).html('');
  }
  function insereOpcaoGrade(valor,contador,opcoes){
           if(valor == '1')
           { 
                $('<div id="l'+linha+'" class="input-group-prepend">'
                  +'<input  type="text" name="subpergunta['+linha+'][subpergunta]"'
                  +  'style="margin-top:5px;  font-size:10px; border: none; border-bottom: solid 1px #cccccc;"'
                  +  'class="form-control"  placeholder="Digite a sub pergunta..." required>'
                  +   '<input type="hidden"  name="subpergunta['+linha+'][contador]"  value="'+contador+'">'
                  +   '<button type="button"class="btn btn-danger"  style=" height:34px; width:34px; padding: 0; margin-top:9px;"  onclick="removeOpcaoGrade(1 ,'+linha+')">x</button></div>'
                 )
                  .insertBefore("#opcaoTabela"+ contador + opcoes);
                linha++;
                
           }
           if(valor == '2')
           { 
                $('    <div id="c'+coluna+'" class="input-group-prepend"> '
                    + '<input type="text" name="opcao['+coluna+'][alternativa]" style="margin-top:5px; font-size:10px;border: none; border-bottom: solid 1px #cccccc;" '
                    + 'class="form-control"  placeholder="Alternativa..." required>'
                    + '<input type="text" name="opcao['+coluna+'][peso]"  style="margin-top:5px; margin-left:3px; font-size:10px; max-width:100px;border: none; border-bottom: solid 1px #cccccc; " '
                    + 'class="form-control"  placeholder="Peso...">'
                    +  '<input type="hidden"  name="opcao['+coluna+'][contador]"  value="'+contador+'">'
                    + '<button type="button"class="btn btn-danger"  style=" margin-left:3px; height:30px; width:34px; padding: 0; margin-top:9px;"  onclick="removeOpcaoGrade(2 ,'+coluna+')">x</button></div>'
                 ).insertBefore("#opcaoTabela2" + contador + opcoes);
                coluna++;
               
           }
  }
  function removeOpcaoGrade(tipo , id){
         
           if(tipo == '1')
           {
               $("#l"+ id).html('');
           }
           else if (tipo == '2')
           {
               $("#c"+ id).html('');
           }   
  }
