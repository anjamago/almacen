<?php

class Modelo extends SQLite3
{
	function __construct()
	{
		$this->open('../sqlite/almacen.db');
	}

}

