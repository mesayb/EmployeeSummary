function htmlGenerator (dynamicPART){
let htmlFile = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>Employee Profile</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"></script>
</head>

<body class="bg-light">

    <div class="navbar fixed-top text-white bg-danger m-0">
        <h1>My Team</h1>
        <input id = "toggle" type="checkbox" checked data-toggle="toggle" data-onstyle="dark">
    </div>

    <div class="container" style="margin-top: 100px;">
        <div class="row">
           ${dynamicPART}
        </div>
    </div>
<script>
$(document).ready(function(){
    $(".toggle").click(function(){
      $("body").toggleClass('bg-dark');
      $(".card").toggleClass('card text-white bg-danger mb-3 shadow-lg border rounded-lg  mb-3 card');
    });
  });
</script>
</body>

</html>`;
return htmlFile;
}

module.exports ={
    htmlGenerator,
}