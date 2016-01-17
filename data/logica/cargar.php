<?php

require_once 'modelo_Sql.php';

$data = json_decode(file_get_contents('php://input'), true);

if($data["op"]=='inventario')
{
  return Invetario();
}
if($data["op"]=='Producto')
{
	return Producto($data['_id']);
}
if($data['op']=='complete')
{
	return autoComplete($data['nombre']);
}
	

function Invetario()
{
	$res = array();
	$mdl = new Modelo();
	$rs = $mdl->query("SELECT * FROM inventario");
	$i = 0;

	while ($row = $rs->fetchArray()) {
		$res[$i]= array(
		'_id'=> $row['_id'], 'Serie'=>$row['Serie'],
		'Nombre'=>$row['Nombre'], 'Cantidad'=>$row['Cantidad'],
        'Costo'=>$row['Costo'], 'Precio'=>$row['Precio'] 
			);
		$i++;
	}

	print_r(json_encode($res));

}
function Producto($id)
{
	$res = array();
	$mdl = new Modelo();
	$rs = $mdl->query("SELECT * FROM inventario WHERE _id = '{$id}'");
	$i = 0;

	while ($row = $rs->fetchArray()) {
		$res[$i]= array(
		'_id'=> $row['_id'], 'Serie'=>$row['Serie'],
		'Nombre'=>$row['Nombre'], 'Cantidad'=>$row['Cantidad'],
        'Costo'=>$row['Costo'], 'Precio'=>$row['Precio'] 
			);
		$i++;
	}

	print(json_encode($res));

}
function autoComplete($n){
	$mdl = new Modelo();
	
	$rs = $mdl->query("SELECT * FROM inventario WHERE Nombre LIKE '$n'");
	$i=0;
	
	while ($row = $rs->fetchArray()) {
		$res[$i]= array(
		'_id'=> $row['_id'], 'Serie'=>$row['Serie'],
		'Nombre'=>$row['Nombre'], 'Cantidad'=>$row['Cantidad'],
        'Costo'=>$row['Costo'], 'Precio'=>$row['Precio'] 
			);
		$i++;
	}
	print_r(json_encode($res));
}
