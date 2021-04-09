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
    <h4> Paginacao Sem ajax</h4>
    <div class="card">
        <div class="card-body">
           <table  id="exemplo" class="table display "> 
             <thead>
                 <tr>
                    <td >Nome</td>
                    <td >Fantasia</td>
                    <td >Email</td>
                 </tr>
             </thead>
             <tbody>
              @foreach ($usuarios as $user)
                 <tr>
                    <td>{{$user->NmRazao}} </td>
                    <td>{{$user->NmFantasia}} </td>
                    <td>{{$user->Email}} </td>
                </tr>
              @endforeach
             </tbody>
           </table>
        </div>
    </div>
  
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="//cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js" ></script>
    <script>
        $(document).ready( function () {
                 $('#exemplo').DataTable();
         });
    </script>
</body>
</html>