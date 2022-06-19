<?php 

require_once 'headers.php';

$conn = new mysqli('localhost', 'root','','taurustr_apps');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $id = $conn->real_escape_string($_GET['id']);
        $sql = $conn->query("SELECT id,password FROM bot_clients WHERE email = '$id'");
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

?>