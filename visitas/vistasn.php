<?php
	session_start();
	include 'configdb.php';
	$conexion = new mysqli(SERVIDOR, USUARIO, PASSWORD, BBDD); // Conecta con la base de datos
    $conexion->set_charset("utf8"); // Usa juego de caracteres UTF8
	
	$nombre = $_POST["nombre"];  // Ahora usamos 'nombre' en lugar de 'idJesuita'
    $codigo = $_POST["codigo"];

// Buscar el nombre según el nombre y código (ahora buscamos por 'nombre' y 'codigo')
    $sql = "SELECT nombre FROM jesuita WHERE nombre = '$nombre' AND codigo = '$codigo'";
    $resultado = $conexion->query($sql); 

	$fila = $resultado->fetch_array();
    
    if ($fila) {
        $nombreJesuita = $fila["nombre"];
		$_SESSION["nombre"] = $fila["nombre"];
		echo "<h2>Jesuita encontrado.</h2>";
        echo '<h3><a href="visitas.php">Realizar visita</a></h3>';
    } else {
        echo "<h2>Jesuita no encontrado.</h2>";
        echo '<h3><a href="index.html">Volver</a></h3>';
        return;
    }
	
	 // Cerrar la conexión
    $conexion->close();
?>