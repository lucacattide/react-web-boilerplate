<?php
  $url = (isset($_SERVER['HTTPS']) ? 'https': 'http') .'://'. $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  $proxy = $_SERVER['HTTP_X_FORWARDED_FOR'];
  // TODO: Change with final email
  $recipient = 'l.cattide@email.it';
  $user = $_SERVER['REMOTE_ADDR'];

  // Proxy check
  if ($proxy) {
    $user .= ' (Proxy: '. $proxy .')';
  }

  $headers = 'From: '. $recipient ."\r\n".'Reply-To: '. $recipient ."\r\n".'X-Mailer: PHP/'. @phpversion();
  $emailBody = 'Accettazione Cookie Policy:'."\n\n";
  $emailBody .= 'Sito Web: '. @strip_tags(clean_string($url)) ."\n";
  $emailBody .= 'Data: '. @date('d/m/Y \- \h\. H:i:s') ."\n";
  $emailBody .= 'Utente: '. @strip_tags(clean_string($user));

  // TODO: Change sender
  @mail($recipient, 'stack', $emailBody, $headers);

  /**
	* Mail formatting
  * Setter
	* @param string $string String
	* @return string
	*/
	function clean_string($string) {
		$excluded = array('content-type', 'bcc:', 'to:', 'cc:', 'href');

		return @str_replace($excluded, '', $string);
	}
?>
