<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cardlet_images', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('cardlet_id')->unsigned();
            $table->foreign('cardlet_id')->references('id')->on('cardlets')->onDelete('cascade');
            $table->string('filename');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cardlet_images');
    }
};
