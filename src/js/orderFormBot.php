<?php
$content = '';
foreach ($_POST as $key => $value) {
    if($value) {
        $content .= "<b>$key</b>: <i>$value</i>/n";
    }
}
if(trim($content)) {
    $content = "<b>Message from site:</b>/n".$content;
    $apiToken = '6564257493:AAEG60Ho08ekYlAQ8MsdtlWPkcsGZqgdx9E';
    $data = [
        'chat_id' => '@SendOrderFormBot9',
        'text' => $content,
        'parse_mode' => 'HTML'
    ];
    $response = file_get_contents('https://api.telegram.org/bot$apiToken/sendMessage?'.http_build_query($data));
}
?>


<!-- https://api.telegram.org/bot$apiToken/sendMessage? -->