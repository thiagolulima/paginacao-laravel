<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableCadastros extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cadastros', function (Blueprint $table) {
              $table->bigInteger('idTipo')->default(1);
              $table->foreign('idTipo')->references('id')->on('tipocadastro');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cadastros', function (Blueprint $table) {
            //
        });
    }
}
