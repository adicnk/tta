<?php 

require_once 'headers.php';

$conn = new mysqli('localhost', 'root','','taurustr_apps');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['email'])) {
        $email = $conn->real_escape_string($_GET['email']);
        $sql = $conn->query("SELECT email FROM bot_clients WHERE email = '$email'");
        $data = $sql->fetch_assoc();
    } else {
        $data = array();
        $sql = $conn->query("SELECT * FROM bot_clients");
        while ($d = $sql->fetch_assoc()) {
            $data[] =$d;
        }
    }
    exit(json_encode($data));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $sql = $conn->query("INSERT INTO bot_register (user_id,first_name,last_name,hp,email,username,password,gender,dob) 
        VALUES ('".$data->user_id."','".$data->first_name."','".$data->last_name."','".$data->hp."','".$data->email
        ."','".$data->username."','".$data->password."','".$data->gender."','".$data->dob."')");
    if ($sql) {
        $data->id=$conn->insert_id;
        exit(json_encode($data));
    } else {
        exit(json_encode (array('status'=>'error')));
    }
}

?>