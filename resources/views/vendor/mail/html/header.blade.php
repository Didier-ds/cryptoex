<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'CryptomaniaExchange')
<img src="https://cryptomania-staging.herokuapp.com/images/CMlogo.png" class="logo" alt="Cryptomania Exchange">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
