<?php
//$conexion =mysqli_connect('localhost','root', '', 'votesystem','8080');

$conexion = mysqli_connect('localhost', 'root', '', 'contactos');
if(!$conexion)
{
    echo 'Error de conexion a la base de datos';
}
else{
    // echo 'Conexión exitosa a la base de datos';
}
?>