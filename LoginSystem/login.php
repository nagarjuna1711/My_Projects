<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <style>
        body
        {
            background-color: gray;
        }
        .outline
        {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10%
        }
        .formoutline
        {
            padding:0 50px ;
            border: 2px solid cyan;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .field
        {
            padding: 20px;
            width: 100%;
            margin-top: 15px;
            margin-bottom: 15px;
            border: none;
            text-align: center;
            font-weight: 600;
            letter-spacing: 1px;
        }
        .btn
        {
            padding: 15px;
            background-color: cyan;
            color: #000;
            font-weight: 600;
            margin-bottom: 15px;
            border-radius: 10px;
            border: none;
        }
        .btn:hover
        {
            background-color: transparent;
            padding: 14.5px;
            color: #fff;
            border: 1px solid #fff;
        }
    </style>
</head>
<body>
    <section class="outline">
        <form method="get" action="log2.php" class="formoutline">
            <h1 style="color:white;">Login Form</h1>
            <input type="email" class="field" placeholder="Enter email" name="email">
            <input type="password" class="field" placeholder="Enter password" name="pass">
            <button class="btn" type="submit">Log In</button>
        </form>
    </section>
</body>
</html>