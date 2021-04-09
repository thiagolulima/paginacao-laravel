<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Data Tables</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css" rel="stylesheet">
    
    
</head>
<body>
    <h4> Paginacao Com Paginação Ajax</h4>
    
     <div class="card">
     <div class="card-body">
      <form class="form"  method="" id="form" style="margin-bottom: 60px;">
        <div class="col-sm-4">
            <div class="form-group">
              <label>Tipo de Cadastro</label>
               <select class="form-control" id="idTipo"  onchange="carregaUsuarios()"  name="tipoCadastro"  >
                 <option value=""> SELECIONE</option>
                  @foreach($tiposCadastro as $tipo)
                   <option value="{{$tipo->id}}"> {{$tipo->id}} - {{$tipo->descricao}}</option>
                  @endforeach  
               </select>
            </div>
          </div>
      </form>
      <table  id="exemplo" class="table display" style="width: 100%;"> 
        <thead>
            <tr>
                <td >Nome</td>
                <td >Fantasia</td>
                <td >Email</td>
            </tr>
        </thead>
       
    </table>
        </div>
    </div>

    
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="//cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js" ></script>

    <script>
         $(document).ready( function () {
               carregaUsuarios();
         });
     
     function carregaUsuarios()
     {
        $("#exemplo").dataTable().fnDestroy();
        $('#exemplo').DataTable({
                    processing :true,
                    serverSide:true,
                    //searching:false,
                    ajax: {
                           url: "{{route('usuarios.ajax')}}",
                           method: 'GET',
                           data: {
                                 tipoCadastro: $('#idTipo').val()
                           }
                        },
                    columns : [
                             {"data":"NmRazao" },
                             {"data":"NmFantasia" },
                             {"data":"Email" },
                           ]
                   });
     }
    </script>
</body>
</html>