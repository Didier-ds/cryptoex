<?php

namespace App\Http\Middleware;

use App\Models\Account;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserAccountCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $prev_url = $request->path();
        $userId = auth()->id();
        $accounts = Account::where('user_id', $userId)->get();
        if(count($accounts) == 0) {
            return redirect()->route('bank.create', ['prev_url' => $prev_url]);
        }
        return $next($request);
    }
}
