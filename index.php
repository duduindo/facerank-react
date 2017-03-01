<?php
  define('NO_CACHE', date('Ymdhis'));
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
  <title>Facerank - React</title>

  <!-- Library -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link rel="stylesheet" href="./node_modules/react-mdl/extra/material.min.css">
  <link rel="stylesheet" href="https://unpkg.com/dialog-polyfill/dialog-polyfill.css" />

  <!-- My source -->
  <link rel="stylesheet" href="./dist/common.min.css?<?=NO_CACHE;?>" />
</head>

<body>
  <div id="react-mount">
    Carregando..
  </div>

  <!-- Library -->
  <script src="https://unpkg.com/dialog-polyfill/dialog-polyfill.js"></script>

  <!-- My source -->
  <script src="./dist/common.min.js?<?=NO_CACHE;?>"></script>
</body>

</html>
