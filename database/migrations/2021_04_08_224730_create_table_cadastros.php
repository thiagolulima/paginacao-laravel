<?php

use Brick\Math\BigInteger;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableCadastros extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cadastros', function (Blueprint $table)  {
               $table->bigIncrements('id');
               $table->string('NmRazao');
               $table->string('NmFantasia');
               $table->string('Email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('cadastros');
    }
}
