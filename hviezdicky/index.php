<form action="./">
   <input name="pocet">
   <button type="submit">Odeslat</button>
</form>

<?php

$lines = $_GET['pocet'];

for ($i = 1; $i <= $lines; $i++) {
    for ($k = 1; $k <= $i; $k++) {
        echo '*&nbsp';
    }
    echo '<br>';
} 

for ($i = $lines; $i >= 1; $i--) {
    for ($k = 2; $k <= $i; $k++) {
        echo '*&nbsp';
    }
    echo '<br>';
}

echo '<br>';

for($i = 1; $i <= $lines; $i++) {
    for($j = $i; $j < $lines; $j++) {
        echo '&nbsp&nbsp&nbsp';
    }
    for($j = 1; $j <= $i; $j++) {
        echo '&nbsp*';
    }
    echo '<br>';
}

for($i = $lines; $i >= 1; $i--) {
    for($j = $i; $j <= $lines; $j++) {
        echo '&nbsp&nbsp&nbsp';
    }
    for($j = 1; $j < $i; $j++) {
        echo '&nbsp*';
    }
    echo '<br>';
}

echo '<br>';

for($i = 1; $i <= $lines; $i++) {
    for($s = $i; $s < $lines; $s++) {
        echo '&nbsp&nbsp';
    }
    for($j = 1; $j <= $i; $j++) {
        echo '* &nbsp';
    }   
    echo '<br>';
}

echo '<br>';

for($i = $lines; $i >= 1; $i--) {
    for($s = $i; $s < $lines; $s++) {
        echo '&nbsp&nbsp';
    }
    for($j = 1; $j <= $i; $j++) {
        echo '* &nbsp';
    }
    echo '<br>';
}
