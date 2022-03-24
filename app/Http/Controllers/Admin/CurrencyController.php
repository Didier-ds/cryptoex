<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Support\Str;

use App\Helpers\Helpers;
use App\Http\Controllers\Controller;
use App\Models\Currencies;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CurrencyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Inertia::render('Admin/Create/Currency');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //\

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
        $icon_url = Helpers::runImageUpload($request->image, 'curenncies');
        Currencies::create([
            'uuid' => Str::uuid(),
            'name' => $request->name,
            'icon_url' => $icon_url,
            'symbol' => $request->symbol,
            'asset_type' => $request->asset_type,
            'country_code' => $request->country_code,
            'currency' => $request->currency,
        ], Helpers::getTimeStamps());
        return redirect()->back()->with('success', 'currency Created successfully');

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
