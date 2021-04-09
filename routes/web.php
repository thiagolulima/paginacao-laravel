<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControlleUsuario;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*  AULA DE PAGINAÇÃO COM DATATABLES */
Route::get('usuarios', [ControlleUsuario::class, 'index'])->name('usuarios');
Route::get('usuarios.ajax', [ControlleUsuario::class, 'paginacaoAjax'])->name('usuarios.ajax');
Route::get('usuarios.lista.ajax', [ControlleUsuario::class, 'cadastros'])->name('usuarios.lista.ajax');
/*  AULA DE PAGINAÇÃO COM DATATABLES */


/*  AULA DE PAGINAÇÃO SEM DATATABLES */
Route::get('usuarios.list',    [ControlleUsuario::class, 'paginacaoLaravelAjax'])->name('usuarios.list');
Route::get('usuarios.laravel', function(){
    return view('paginacao');
});
/*  AULA DE PAGINAÇÃO SEM DATATABLES */



Route::get('/', function () {
    return view('welcome');
});
