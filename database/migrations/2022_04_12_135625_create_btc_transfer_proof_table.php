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
        Schema::create('btc_transfer_proofs', function (Blueprint $table) {
            $table->id();
            $table->string('uuid')->unique();
            $table->string('vendor_name');
            $table->string('rate');
            $table->string('amount');
            $table->string('filename');
            $table->string('status')->default('pending');
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('btc_transfer_proofs');
    }
};
