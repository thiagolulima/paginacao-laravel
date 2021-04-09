<?php

namespace App\Http\Controllers;

use App\Models\cadastros;
use App\Models\contrato;
use App\Models\tipoCadastro;
use Illuminate\Http\Request;
use DataTables;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Contracts\DataTable;

class ControlleUsuario extends Controller
{
    public function index(){
        $usuarios = cadastros::all();
        return view('usuarios')->with('usuarios',$usuarios);
    }

    public function paginacaoAjax(){
        $usuarios = cadastros::query();
        return DataTables::eloquent($usuarios)
                          ->filter(function($query){
                              if(request()->has('tipoCadastro') && request('tipoCadastro') != null){
                                  $query->where('idTipo','=', request('tipoCadastro'));
                              }  
                          },true)
                          ->toJson();
    }

    public function cadastros(){
        $tiposCadastro = tipoCadastro::orderBy('descricao')->get();
        return view('usuariosAjax')->with('tiposCadastro',$tiposCadastro);
    }

  
    public function paginacaoLaravelAjax(){

         $usuarios = cadastros::when(request('nome') != null , function($query){
                  return  $query->where('NmRazao', 'like', '%'.request('nome').'%');
         })->paginate(5);

         return view('list')->with('usuarios',$usuarios);
       
    }
}
