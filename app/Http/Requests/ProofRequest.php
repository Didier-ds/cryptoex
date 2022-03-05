<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProofRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'shot'   => 'required|image|mimes:jpeg,png,jpg,svg|max:1024',
            'amount'    => 'required|string',
        ];
    }
}
