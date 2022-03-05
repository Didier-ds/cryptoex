<?php

namespace App\Helpers;

use App\Http\Resources\AccountResource;
use App\Http\Resources\CardletCollection;
use App\Http\Resources\PaymentProofResource;
use App\Http\Resources\UsersResource;
use App\Models\Konstants;
use App\Models\PaymentProof;
use App\Models\User;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;


class ResponseBuilder
{
    public static function buildUserLoginRes(User $user, string $token)
    {

        return [
            'status' => 'success',
            'type' => 'user',
            'data' => [
                'bio' => new UsersResource($user),
                'user_role' => $user->roles()->pluck('name'),
                'bank_account' =>  new AccountResource($user->account),
                'cardlets' => CardletCollection::collection($user->cardlet)
            ],
            'token' => $token,
        ];
    }

    public static function buildNonUserLoginRes(User $user, string $token)
    {

        return [
            'status' => 'success',
            'type' => 'user',
            'data' => [
                'bio' => new UsersResource($user),
                'user_role' => $user->roles()->pluck('name'),
            ],
            'token' => $token,
        ];
    }



    public static function buildResourceCol(AnonymousResourceCollection $res)
    {
        return [
            'status' => Konstants::MSG_OK,
            'type' => 'profs',
            'count' => count($res),
            'data' => $res
        ];
    }

    public static function buildRes(JsonResource $res)
    {
        return [
            'status' => Konstants::MSG_OK,
            'type' => 'profs',
            'data' => $res
        ];
    }

    //
    public static function genErrorRes(string $erroMsg): array
    {
        return ['message' => $erroMsg];
    }
}
