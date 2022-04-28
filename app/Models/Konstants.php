<?php

namespace App\Models;


class Konstants
{
    // inputs keys
    const FULLNAME = "fullname";
    const EMAIL = "email";
    const PWORD = "password";
    const PHONE = "phone";
    const A_TOK = 'auth-token';
    const ACC_NO = "account_no";
    const ACC_NAME = "account_name";
    const BANK = "bank";
    const TOKEN = "token";
    const URL = "url";
    const NAME = "name";
    const KEY_HEAD = "Authorization";

    const DEFAULT = "none";

    const PENDING = "pending";

    // Roles
    const ROLE_OWNER = "owner";
    const ROLE_ADMIN = "admin";
    const ROLE_USER = "user";

    const USER_ROLE_ADMIN = 1;
    const USER_ROLE_USER = 2;

    // Credentials Error MSG
    const ERR_INVALID_CRED = "Invalid Email or Password";
    const ERR_INVALID_EMAIL = "Email does not match any in our records";
    const ERR_LACK_AUTH = "Lacking appropriate authorization";
    const ERR_INVALID_INPUT = "Invalid Input";


    // Request Status Code
    const STATUS_ERROR = 500;
    const STATUS_BAD_CRED = 406;
    const STATUS_NOT_FOUND = 400;
    const STATUS_OK = 200;
    const STATUS_401 = 401;

    const MSG_OK = "success";
    const MSG_404 = "Resource not found";
    const MSG_500 = "Unexpected Server Error";
    const MSG_401 = "Forbidden";


    const MESSAGE_CHECK_MAIL = "Please Check your email for details on how to proceed";
    const MESSAGE_CEHECK_MAIL_LINK = "A verifiaction link has been sent to your email. Check and verify your account";
    const MESSAGE_ADMIN_CHECK_MAIL = "Admin should check email and verify account";
    const MESSAGE_PWORD_RESET = 'password-reset request sent';
    const MESSAGE_SUCCESS = "Operation performed Successfully!";

    // Mails Related constants
    const MAIL_CARDLET_C_ACT = 'View Giftcard';
    const MAIL_BTC_PROOF_C_ACT = 'View Proof';

    const MAIL_LAST = 'Regards,';
    public static function MAIL_CARDLET_C_BODY(User $user, Cardlet $cardlet): string
    {
        return "A redeemable $cardlet->name  $cardlet->type has been uploaded by $user->fullname. Review and" .
            " respond appropriately";
    }

    public static function MAIL_BTC_PROOF_C_BODY(User $user): string
    {
        return "A Bitcoin Transfer Proof has been uploaded by $user->fullname. Review and" .
            " respond appropriately";
    }

    const MAIL_CARDLET_U_ACT = 'View New Status';
    public static function MAIL_CARDLET_U_BODY(Cardlet $cardlet): string
    {
        return  "The status of Your $cardlet->name  $cardlet->type giftcard has been reviewed and " .
            "updated by Cryptomania Exchange.";
    }

    // URLS
    const URL_BASE = 'https://cryptomania-staging.herokuapp.com';
    const URL_LOGIN = 'https://cryptomania-staging.herokuapp.com/login';
    const URL_VETTED = 'http://Crypto-ex.netlify.app/email/verification/when/now?verify=verified';
    const URL_FLUTTER_BANK = "https://api.flutterwave.com/v3/banks/NG";
    const URL_WALLETSAFRICA_GET_BANKS = "https://sandbox.wallets.africa/transfer/banks/all";
    const URL_WALLETSAFRICA_VERFIFY_BANK = "https://sandbox.wallets.africa/transfer/bank/account/enquire";
    const URL_FLUTTER_RESOLVE = "https://api.flutterwave.com/v3/accounts/resolve";
    const URL_MYLANCER = "https://maylancer.org/api/nuban/api.php?";
    const URL_BTC_RATE = "https://api.coinpaprika.com/v1/price-converter?base_currency_id=btc-bitcoin&quote_currency_id=usd-us-dollars&amount=1";
}
