<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Card;
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
        $cards = Card::all();
        return Inertia::render('Admin/UpdateCard', ['giftcards' => $cards]);
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
            $cards = Card::where('name', $request->name)->get();
            return Inertia::render('Admin/GiftcardCategory', ['giftcards' => $cards]);
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


    public function cardRateChange(Request $request, $uuid)
    {
        $request->validate(['rate' => 'required']);
        $card = Card::where('uuid', $uuid)->first();
        $card->rate = $request->rate;
        $card->save();
        return redirect()->route('cards.index');
        // if ($card) {
        //     return response()->json(['status' => 'successful', 'type' => 'card', 'data' => new CardResource($card)], 200);
        // } else {
        //     return response()->json(['message' => 'Error! Something went wrong.'], 500);
        // }
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
