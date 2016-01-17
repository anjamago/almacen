/**
 * Created by aj on 17/12/15.
 */

(function(){
    'use strict';

    var app = angular.module('app',['ngRoute','Rutas','servis','crud']);

    app.controller('Registro',function($scope,create){
     
                  
        $scope.promedio = function(dt)
        {
            var vl, por;
            vl = dt * 1.7; 
            por = (vl*15)/100;
            vl = vl- por;
            $scope.pre = vl;
        }

        $scope.verifica = function(d,sr)
        {
            var dt = d;
            console.log(d);
            create.comprovarProductos(dt,sr);           
        }


        $scope.registrarProducto = function(datos){
            var vm = this;
            var dt = [];
            
            //terminar de recojer el objeto
            vm.dt = {
                'Serie':datos.serie,
                'Nombre': datos.nombre,
                'Cantidad': datos.cantidad,
                'Costo':datos.costo,
                'Precio':datos.precio,
                'op':'CreateProducto'

            };
            console.log(vm.dt);
            var res = create.NuevoProducto(vm.dt);  
            if(!res){
                console.log("Eliminando datos ");
                datos.serie = "";
                datos.cantidad = "";
            }
        };

        $scope.NuevaMarca = function(dt){
            var vm =this;
            var datos;
             vm.datos = {'Marca':dt, 'op':'CreateMarcas'};
            create.NuevaMarca(vm.datos);

        };
            $scope.menuState = {}
            $scope.menuState.show = false;
        $scope.cambiarStatu = function()
        {
            $scope.menuState.show = !$scope.menuState.show;
        }
        $scope.cambiarStatu2 = function()
        {
            if($scope.menuState.show == true){
                $scope.menuState.show = !$scope.menuState.show;
            }

        }
    });
    app.controller('leerInventario',function($scope,create){
        var data;
       data= create.verProducto();
       
       console.log(data);
    });

    app.controller('facturas',function ($scope){
        //controlador para crear facturas  clientes 

        
    });

   app.controller('ventasProductos',function($scope,create){
    $scope.Productos =[];
    $scope.autoCompletado = function(producto)
    {
        console.log(producto);
        if(producto.length > 0 ){
            create.Buscar($scope.producto+'%');
        }else{
            $scope.datas={};
        }
    }
    $scope.agregar = function(valor) {

        $scope.Productos.push(valor);   

        console.log($scope.Productos);   
    }


   })
})();
