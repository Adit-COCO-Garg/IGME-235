<?php
    //Author: Adit Garg ag9126@rit.edu
    //Init Server Info
    $server_info = ["IP"=>$_SERVER["REMOTE_ADDR"], "Server software"=>$_SERVER["SERVER_SOFTWARE"], "Server request time"=>date("H:i A", $_SERVER["REQUEST_TIME"])];

    //Display server info
    foreach($server_info as $key=>$value){
        echo "<p>$key". ": " . "$value</p>";
    }

    //display all server info
    foreach($_SERVER as $key=>$value){
        echo "<p>$key=>$value</p>";
    }
?>