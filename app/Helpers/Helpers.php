<?php

namespace App\Helpers;

use Carbon\Carbon;
use Illuminate\Http\UploadedFile;


class Helpers
{

    // GenHecCode will generate hexcode of length specified
    public static function GenHecCode(int $length): string
    {
        return bin2hex(random_bytes($length));
    }

    public static function runImageUpload(UploadedFile $file, string $dir): string
    {
        $apiUrl = env("APP_URL");
        $name = "$apiUrl/images/$dir/" . hexdec(uniqid()) . '.' . $file->extension();
        $file->move(public_path("/images/$dir"), $name);
        return $name;
    }

    public static function getTimeStamps(): array
    {
        return ['created_at' => Carbon::now(), 'updated' => Carbon::now()];
    }

    public static function buildMailData(string $subject, string $body, string $act, string $url, string $last): array
    {
        return ['subject' => $subject, 'body' => $body, 'action' => $act, 'url' => $url, 'last' => $last];
    }
}
