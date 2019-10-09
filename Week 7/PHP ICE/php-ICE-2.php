<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
    $colors = ["red","green","blue"];
    echo"<ol>";
    foreach($colors as $value){
        echo"<li>$value</li>";
    }
    echo"</ol>";
    ?>
    <?PHP
   $links = ["RIT"=>"http://www.rit.edu",
   	"RPI"=>"http://www.rpi.edu",
   	"MCC"=>"http://www.monroecc.edu"];
   
   // 1 - access elements by key 
   $url = $links["RIT"];
   echo "<p>$url</p>";
   
   // 2 - add new elements by specifying a key:value
   $links["Brockport"]="https://www.brockport.edu";
   
   // 3 - loop through arrays with longer version of foreach loop

   echo"<ul>";
   foreach($links as $key=>$value){
    echo"<li><a href = \"$value\">$key</a></li>";
   }
   echo"</ul>";
?>
</body>
</html>