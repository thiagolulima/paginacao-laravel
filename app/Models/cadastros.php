<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cadastros extends Model
{
    use HasFactory;
    

    protected $table = 'cadastros';
    protected $primaryKey = 'id';
    public $timestamps = false;

    
}
