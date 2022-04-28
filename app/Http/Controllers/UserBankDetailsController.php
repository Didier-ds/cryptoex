<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseBuilder;
use App\Models\Account;
use App\Models\Konstants;
use Illuminate\Http\Request;
use App\Http\Requests\AccountRequest;
use Illuminate\Contracts\Session\Session;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use Illuminate\Support\Str;


class UserBankDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
      
        // return response()->json($banks, Konstants::STATUS_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return Inertia::render('BankForm');

    }

    /**
     * get all banks.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getBanks(Request $request)
    {
        //
        $head  = [Konstants::KEY_HEAD => 'Bearer ' . env("WALLET_AFRICA_PUB_KEY")];
        $res = Http::withHeaders($head)->post(Konstants::URL_WALLETSAFRICA);
        $banks = $res->json();
        if ($res->status() != 200) {
             return response(ResponseBuilder::genErrorRes($banks), Konstants::STATUS_ERROR);
        }
        // dd($banks);
        return response()->json($banks, Konstants::STATUS_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AccountRequest $request)
    {
         Account::create([
             'uuid' => Str::uuid(),
             'bank_name' => $request->bank_name,
             'account_number' => $request->account_number,
             'account_name' => $request->account_name,
             'user_id' => auth()->id(),
         ]);
        $redirect_url = $request->query('prev_url');
        // dd($redirect_url);
        if(is_null($redirect_url)) {
            $name = app('router')->getRoutes()->match(app('request')->create($redirect_url))->getName();
            return redirect()->route($name);
        }
        return redirect()->route('dashboard');
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
