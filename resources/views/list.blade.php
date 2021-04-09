<table  class="table " style="width: 100%;"> 
    <thead>
        <tr>
            <td >Nome</td>
            <td >Fantasia</td>
            <td >Email</td>
        </tr>
    </thead>
    @if(isset($usuarios) && $usuarios->count() > 0 )
    <tbody>
        @foreach($usuarios as $usuario)
           <tr>
               <td>{{$usuario->NmRazao}}</td>
               <td>{{$usuario->NmFantasia}}</td>
               <td>{{$usuario->Email}}</td>
           </tr>
        @endforeach 
    </tbody>
     @else
       <tr> 
           <td colspan="3"> 
               <div class="alert alert-warning" role="alert">
                   registros não encontrados 
               </div>
            </td>
         <tr>
    @endif
</table>
<div class="paginacao">
    {{$usuarios->render()}}
</div>