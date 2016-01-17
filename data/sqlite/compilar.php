<?php
class Modelo extends SQLite3
{
	function __construct()
	{
		$this->open('almacen.db');
	}

}
$mdl = new Modelo;
$str_datos = file_get_contents("Inventario.json");
	$data = json_decode($str_datos,true);

print_r($data[0]['Serie']);
print_r($data[3]);

	for ($i =0;$i<= count($data);$i++) {
		if($data[$i] > 2){
			$mdl->exec("INSERT INTO inventario 
			VALUES ('{$data[$i]['_id']}','{$data[$i]['Serie']}','{$data[$i]['Nombre']}',
			'{$data[$i]['Cantidad']}','{$data[$i]['Costo']}','{$data[$i]['Precio']}')");
		}
	}

/*	
array_push($datos, $json);
		$fh = fopen("/Inventario.json", 'w')
	   			   or die("Error al abrir fichero de salida");
		fwrite($fh, json_encode($datos,JSON_UNESCAPED_UNICODE));
		*/