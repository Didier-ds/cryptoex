<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Card;
use App\Models\CardName;
use App\Models\Currencies;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CardsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        
        $cards = CardName::all();
        return Inertia::render('Giftcards', ['giftcards' => $cards]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * get the cards that fit request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function isType(Request $request)
    {   
        $userId = auth()->id();
        $userAccounts = Account::where('user_id', $userId)->orderBy('created_at','desc')->get();
        $cardname = CardName::where('uuid', $request->uuid)->first();
        $cards = Card::where('name', $cardname->name)->get();
        $cards = collect($cards);
        $cards = $cards->map( function ($card) {
           return [
                'uuid' => $card->uuid,
                'name' => $card->name,
                'type' => $card->type,
                'rate' => $card->rate,
                'min' => $card->min, 
                'max' => $card->max,
                'country' => $card->country,
                'currency' => Currencies::where('currency', $card->country)->first()
            ];
        });
        return Inertia::render('CardRedeem', ['categories' => $cards, 'cardname' => $cardname, 'banks' => $userAccounts]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
