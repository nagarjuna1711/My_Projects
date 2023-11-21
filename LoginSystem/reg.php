<?php

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['pass'];

$conn = mysqli_connect("localhost","root","","regdatabase");
if($conn)
{
    $query = $conn->prepare("INSERT INTO `REG`(name,email,password) values(?,?,?)");
    $query->bind_param("sss",$name,$email,$password);
    $query->execute(); 
?>
    <html>
        <style>
            .register
            {
                padding: 10px;
                background-color: green;
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
            Data added to database, successfully
        </div>
    </html>
<?php

    $query->close();
    $conn->close();

}
else
{
    echo "not connected";
}

?>