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
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>

<body>

    <div class="navbar  text-white bg-danger m-0">
        <h1>My Team</h1>
    </div>

    <div class="container mt-4">
        <div class="row">
           ${dynamicPART}
        </div>
    </div>

</body>

</html>`;
return htmlFile;
}

module.exports ={
    htmlGenerator,
}