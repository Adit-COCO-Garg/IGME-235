<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="fod_styles.css">
    <title>Random Facts</title>
</head>
<body>
    <main>
        <h1>Random fact of the day!</h1>
        <?php
            $facts = ["Superman didn't always fly.",
            "The first computer was invented in the 1940s.",
            "Space smells like seared steak.",
            "The longest wedding veil was the same length as 63.5 football fields.",
            "The unicorn is the national animal of Scotland.",
            "The healthiest place in the world is in Panama.",
            "A pharaoh once lathered his slaves in honey to keep bugs away from him."];
            $fact = $facts[array_rand($facts, 1)];
            echo "<p>" . $fact . "</p>";
        ?>
    </main>
    <footer>
        <form action="HW-random-fact.php" method="post">
            <input type="submit" value="Get another Joke!">
        </form>
    </footer>
</body>
</html>