<?php
	session_start();
    // Obtener los datos enviados desde el formulario
    $nombre = $_SESSION["nombre"];  // Ahora usamos 'nombre' en lugar de 'idJesuita'
    
    // Conectar con la base de datos ($conexion)
    include 'configdb.php'; // Incluye el archivo con los datos de conexión
    $conexion = new mysqli(SERVIDOR, USUARIO, PASSWORD, BBDD); // Conecta con la base de datos
    $conexion->set_charset("utf8"); // Usa juego de caracteres UTF8
    
    // Desactiva errores
    $controlador = new mysqli_driver();
    $controlador->report_mode = MYSQLI_REPORT_OFF;

    // Consulta para obtener los lugares
    $sql = "SELECT ip, lugar FROM lugar;";
    $resultado = $conexion->query($sql);  // Ejecuta la consulta SQL
    echo "<h2>LISTADO DE VISITAS</h2>";
    
    // Cerrar la conexión
    $conexion->close();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario de Visitas</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <h3>Hola, <?php echo $nombre; ?></h3> <!-- Muestra el nombre del Jesuita encontrado -->

    <form action="guardarVisita.php" method="post">
        <label for="ip">Lugar:</label>
        <select name="ip" id="ip">
            <?php
                while ($fila = $resultado->fetch_array()) {
                    echo '<option value="' . $fila["ip"] . '">' . $fila["lugar"] . '</option>';
                }
            ?>
        </select>
        <br>
        <button type="submit">Enviar</button>
    </form>
</body>
</html>
