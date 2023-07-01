<?php

// Set response headers needed for browser
header("Access-Control-Allow-Origin: *");
// Print contents of given file
echo file_get_contents(__DIR__ . "/../db.json");