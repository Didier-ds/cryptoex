<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\CardRequest;
use App\Models\Card;
use App\Models\CardName;
use App\Models\Currencies;
use App\Models\ReceiptType;
use Illuminate\Support\Str;
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
        
        $cardnames = CardName::all();
        return Inertia::render('Admin/Giftcards/Index', ['cardnames' => $cardnames]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $cardnames = CardName::all();
        $receiptTypes = ReceiptType::all();
        $currencies = Currencies::all();
        return Inertia::render('Admin/Giftcards/Create', ['cardnames' => $cardnames, 'receipt_types' => $receiptTypes, 'currencies' => $currencies]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CardRequest $request)
    {
        //
        Card::create([
            'uuid' => Str::uuid(),
            'name' => $request->name,
            'type' => $request->type,
            'rate' => $request->rate,
            'min' => $request->min, 
            'max' => $request->max,
            'country' => $request->country,
        ]);
        return redirect()->back()->with('success', 'Card Created successfully');
    }

      /**
     * get the cards that fit request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
        public function isType(Request $request)
        {   
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
                    'updated_at' => $card->updated_at,
                    'currency' => Currencies::where('currency', $card->country)->first()
                ];
            });
            return Inertia::render('Admin/Giftcards/Show', ['categories' => $cards, 'cardname' => $cardname]);
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
    public function update(Request $request)
    {
        //\
        $cards = Card::all();
        return Inertia::render('Admin/UpdateCard', ['giftcards' => $cards]);
    }


    public function cardRateChange(Request $request, $uuid)
    {
        $request->validate(['rate' => 'required']);
        $card = Card::where('uuid', $uuid)->first();
        $card->rate = $request->rate;
        $card->min = $request->min;
        $card->max = $request->max;
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
