<?php
	session_start();
	// Recoge la información del formulario
	$nombre = $_SESSION["nombre"];   // Aquí obtienes el nombre del Jesuita
	$ipLugar = $_POST["ip"];  // Obtienes la IP del lugar

	// Conecta con la base de datos ($conexion)
	include 'configdb.php';  // Incluye el archivo con los datos de conexión
	$conexion = new mysqli(SERVIDOR, USUARIO, PASSWORD, BBDD);  // Conecta con la base de datos
	$conexion->set_charset("utf8");  // Usa juego de caracteres UTF8

	// Desactiva errores
	$controlador = new mysqli_driver();
	$controlador->report_mode = MYSQLI_REPORT_OFF;

	// Buscar el idJesuita a partir del nombre recibido
	$sql = "SELECT idJesuita FROM jesuita WHERE nombre = '$nombre'";  // Consulta para obtener el idJesuita
	$resultado = $conexion->query($sql);

	if ($resultado->num_rows > 0) {
		// Si se encuentra el Jesuita, obtenemos su id
		$fila = $resultado->fetch_array();
		$idJesuita = $fila["idJesuita"];
		}
		// Cadena de caracteres de la consulta SQL para insertar la visita
		$sqlInsert = "INSERT INTO visita (idJesuita, ip) VALUES ($idJesuita, '$ipLugar');";  // Realizamos el INSERT con el idJesuita
		echo $sqlInsert;  // Muestra la consulta para depuración
		
		// Ejecuta la consulta
		if ($conexion->query($sqlInsert)) 
		{
			echo "<h2>Visita realizada</h2>";
		} else 
		{
			echo "<h2>Error al registrar la visita</h2>";
		}

	// Cierra la conexión
	$conexion->close();
?>