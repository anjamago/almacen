(function(){
	'use strict';

	var crud = angular.module('crud',[]);

	crud.controller('deleteProductos',function($routeParams){
		var id;
		var vm = this;
		vm.id= $routeParams.id;
		console.log(vm.id);
	});
	crud.controller('updateProductos',function($routeParams,create,$scope){
		var id;
		var vm = this;
		vm.id = $routeParams.id;
		create.Producto(vm.id);

		$scope.actualizar = function (json){
			var json = {
					  _id : vm.id,
                      serie :json.serie,
                      nombre:json.nombre,
                      cantidad:json.cantidad,
                      costo :json.costo,
                      precio : json.precio,
                      op:'UpdateProducto'
              };
              create.updateProducto(json)

			

		}

	});

	crud.controller('EliminarProducto',function($routeParams,create){
		var _id;

		_id = $routeParams.id;
		create.EliminarProducto(_id);
		
	})

})();