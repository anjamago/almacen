<?php

require_once 'modelo_Sql.php';
$data = json_decode(file_get_contents('php://input'), true);

if($data['op'] == "CreateProducto")
{
	CreateProducto($data);
	CreateProdusctosSql($data);
	
}
if($data['op']=='CreateMarcas')
{
	
	CreateMarca($data);
}
if($data['op']=='UpdateProducto'){
	UpdateProductos($data);
}
if($data['op']=='EliminarProductos'){
	EliminarProductos($data);
}


function CreateProducto($data){
	
	$str_datos = file_get_contents("../sqlite/Inventario.json");
	$datos = json_decode($str_datos,true);
	$json = array(
		'_id'=> uniqid(), 'Serie'=>$data['Serie'],
		'Nombre'=>$data['Nombre'], 'Cantidad'=>$data['Cantidad'],
        'Costo'=>$data['Costo'], 'Precio'=>$data['Precio'] 
		);
	if(count($datos)>0){
		array_push($datos, $json);
		$fh = fopen("../sqlite/Inventario.json", 'w')
	   			   or die("Error al abrir fichero de salida");
		fwrite($fh, json_encode($datos,JSON_UNESCAPED_UNICODE));
 	}else{
		$fh = fopen("../sqlite/Inventario.json", 'w')
	   			   or die("Error al abrir fichero de salida");
		fwrite($fh, json_encode($json,JSON_UNESCAPED_UNICODE));
	}
		fclose($fh);
	
}

function CreateProdusctosSql($data)
{
	$mdl = new Modelo();
	$_id = uniqid();
	
	$mdl->exec("INSERT INTO inventario VALUES ('{$_id}','{$data['Serie']}','{$data['Nombre']}',
												{$data['Cantidad']},{$data['Costo']},
												{$data['Precio']})");
	$mdl->close();
}
function UpdateProductos($data){
	$mdl = new Modelo();
	
	$mdl->exec("UPDATE inventario SET Serie= '{$data['serie']}'
					,Nombre='{$data['nombre']}',Cantidad = '{$data['cantidad']}',
					Costo='{$data['costo']}',Precio='{$data['precio']}' 
				WHERE _id ='{$data['_id']}'");
	$mdl->close();
	
}
function EliminarProductos($id){
	$mdl = new Modelo();
	$res = $mdl->exec("DELETE FROM inventario WHERE _id ='{$id['_id']}'");
	$mdl->close();

}



