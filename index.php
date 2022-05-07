<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8" />
        <title>Smart Light</title>
        <link rel="shortcut icon" href="data/img/favicon.png" type="img/png">
        <link rel="stylesheet" type="text/css" href="data/styles/style.css">
        <script src="data/js/jquery-3.6.0.min.js"></script>
        <script src="data/js/script.js"></script>
    </head>

    <body style="background-color: black;">

	<?php
	$val_array = array(array(0),array(0),array(0),array(0),array(0),array(0),array(0),array(1));
  $placeholderbool = 0;
	//this php script generate the first page in function of the file
	for ( $i= 0; $i<8; $i++) {
		//sets pin's mode to output and reads value
		system("gpio mode ".$i." out");
		exec ("gpio read ".$i, $val_array[$i], $return );
    // echo ( "<script>console.log( "'Index ' . $val_array[$i] . ' = ' . $val_array[$i][0]" );</script>" );
    echo '<script>';
    // echo 'console.log('  . 'Index ' . $val_array[$i] . ' = ' . $val_array[$i][0] . ')';
    // echo 'console.log(' . $val_array[$i][0] . ');';
    print_r(array_keys($val_array[$i][0]));
    echo '</script>';

    if ($val_array[1][0] == 0) {
      echo ("<div id='offsection' class='off'></div> ");
		}
		//if on
		if ($val_array[1][0] == 1) {
      echo (" <div id='onsection' class='on'></div> ");
		}
	}

	?>

    </body>
</html>
