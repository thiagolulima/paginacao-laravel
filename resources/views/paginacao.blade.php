<!DOCTYPE html>
<html lang="pt-br">
<head>
    
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Paginação Laravel</title>
    <link rel="stylesheet" href="{{asset('dist/css/adminlte.min.css')}}">

  
</head>
<body>
     <center><h4 style="margin-top:20px;">Paginação Ajax Utilizando Somente Paginate do Laravel</h4></center>
    <form class="form"  method="" id="form" style="margin-bottom: 60px;" >
        <div class="col-sm-4">
            <div class="form-group">
              <label>Pesquise o Nome aqui</label>
              <input type="text" id="nome" name="nome" class="form-control">
              <input type="hidden" id="page" name="page" value="0">
            </div>
        </div>
    </form>
    <div class="col-xl-12">
        <div class="card">
            <div class="card-header">
              
            </div>
        </div>    
    </div>
  
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script>
    $(document).ready(function(){
          carregarTabela(0); 
    });
    $(document).on('click', '.paginacao a' , function(e){
        e.preventDefault();
        var pagina = $(this).attr('href').split('page=')[1];
        carregarTabela(pagina);
    });
    $(document).on('keyup submit' , '.form' , function(e){
        e.preventDefault();
        carregarTabela(0);
    });
    function carregarTabela(pagina)
    {
        $('.card-header').html('<div class="spinner-border m-5" role="status"><span class="sr-only"></span></div>');
         $('#page').val(pagina);
         var dados =  $('#form').serialize();
         $.ajax({
            url: "{{route('usuarios.list')}}",
            method: 'GET',
            data: dados
         }).done(function(data){
             $('.card-header').html(data);
         });
    }
</script>
</body>
</html>