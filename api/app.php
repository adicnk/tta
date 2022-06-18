<?php 

require_once 'headers.php';

$conn = new mysqli('localhost', 'root','','taurustr_apps');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $id = $conn->real_escape_string($_GET['id']);
        $sql = $conn->query("SELECT * FROM bot_clients WHERE user_id = '$id'");
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
    echo "POST";
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    echo "PUT";
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    echo "DELETE";
}


?>