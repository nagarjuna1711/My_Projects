<?php

$email = $_GET['email'];
$password = $_GET['pass'];

$conn = mysqli_connect("localhost","root","","regdatabase");
if($conn)
{
    $query = "SELECT * FROM `REG` WHERE EMAIL = '$email' AND PASSWORD = '$password';";
    $result = mysqli_query($conn,$query);
    $data = array();
    while($row = mysqli_fetch_assoc($result))
    {
        $data[] = $row;
    }
    // $count = mysqli_num_rows($result);
    if($data)
    {
        ?>
    <html>
        <style>
            .register
            {
                padding: 10px;
                background-color: purple;
                border-radius: 20px;
                border: 2px solid black;
                color: #fff;
                font-size: 100px;
                letter-spacing: 2px;
                text-align: center;
                height: 94vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        </style>
        <div class="register">
         Welcome,<?php
         echo $data[0]['name'];
         ?>
        </div>
    </html>
<?php
    }
    else
    {
        ?>
    <html>
        <style>
            .register
            {
                padding: 10px;
                background-color: red;
                border-radius: 20px;
                border: 2px solid black;
                color: #fff;
                font-size: 100px;
                letter-spacing: 2px;
                text-align: center;
                height: 94vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        </style>
        <div class="register">
            Invalid credentials
        </div>
    </html>
<?php
    }
    mysqli_close($conn);
}
else
{
    echo "not connected";
}

?>