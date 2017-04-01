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

  <!-- My source -->
  <link rel="stylesheet" href="./dist/common.min.css?<?=NO_CACHE;?>" />

  <style>
    body {
      background-color: silver;
    }
  </style>
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
