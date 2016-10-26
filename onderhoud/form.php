<?php

    if(function_exists('date_default_timezone_set')) { date_default_timezone_set('Europe/Amsterdam'); }
    define('LF', "\n");

    // Get a value from the $_POST array (case insensitive!!)
    function getPost($key, $trim = false, $lowercase = false, $int = false)
    {
        if(isset($_POST[$key]))
        {
            $v = stripslashes($_POST[$key]);

            if($trim)
            {
                $v = trim($v);
            }

            if($int)
            {
                $v = intval($v);
            }
            elseif($lowercase)
            {
                $v = strtolower($v);
            }

            return $v;
        }

        return '';
    }

    // Default values
    $field_1 = '';
    $field_2 = '';
    $field_3 = '';
    $field_4 = '';

    $sHtml = '';
    $sFormError = '';

    // Process form
    if(empty($_POST['form']) == false)
    {
        $field_1 = getPost('field_1', true);
        if(strlen($field_1) == 0) { $sFormError = 'Vul a.u.b. alle verplichte velden in.'; }
        $field_2 = getPost('field_2', true);
        if(strlen($field_2) == 0) { $sFormError = 'Vul a.u.b. alle verplichte velden in.'; }
        $field_3 = getPost('field_3', true);
        if(strlen($field_3) == 0) { $sFormError = 'Vul a.u.b. alle verplichte velden in.'; }
        $field_4 = getPost('field_4', true);
        if(strlen($field_4) == 0) { $sFormError = 'Vul a.u.b. alle verplichte velden in.'; }
    }

    // Show form
    if(empty($_POST['form']) || $sFormError)
    {
        $sHtml .= '<center><form action="" method="post">
<input name="form" type="hidden" value="form1">
Neem contact op met Birsken
' . $sFormError . '
<table border="0" cellpadding="3" cellspacing="0"><tr>
<td align="left" valign="top">Voornaam *</td>
<td align="left" valign="top"><input name="field_1" type="text" value="' . htmlentities($field_1) . '"></td>
</tr>
<tr>
<td align="left" valign="top">Achternaam *</td>
<td align="left" valign="top"><input name="field_2" type="text" value="' . htmlentities($field_2) . '"></td>
</tr>
<tr>
<td align="left" valign="top">E-mail *</td>
<td align="left" valign="top"><input name="field_3" type="text" value="' . htmlentities($field_3) . '"></td>
</tr>
<tr>
<td align="left" valign="top">Bericht *</td>
<td align="left" valign="top"><textarea style="width: 300px; height: 100px;"  name="field_4">' . htmlentities($field_4) . '</textarea></td>
</tr>
<tr>
<td align="left" valign="top">&nbsp;</td>
<td align="left" valign="top"><input type="submit" value="Verzenden"></td>
</table>
</form>';
    }
    else // Send form
    {
        $mail_to = 'info@birsken.nl';
        $mail_from = 'info@birsken.nl';
        $mail_subject = 'Neem contact op met Birsken';
        $mail_message = 'Formuliergegevens: ' . LF . LF
. 'Voornaam:               ' . $field_1 . LF
. 'Achternaam:             ' . $field_2 . LF
. 'E-mail:                 ' . $field_3 . LF
. 'Bericht:                ' . $field_4 . LF
. LF
. 'IP: ' . $_SERVER['REMOTE_ADDR'] . ', Datum: ' . date('d-m-Y') . ', Tijd: ' . date('H:i:s');

        mail($mail_to, $mail_subject, $mail_message, 'From: ' . $mail_from);

        $sHtml .= 'Formulier verzonden Hartelijk dank voor het invullen van het formulier.';
    }

    echo $sHtml;

?>
