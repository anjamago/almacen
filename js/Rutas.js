(
    function(){
        'use strict';

        var rutas = angular.module('Rutas',[]);

       //rutas de la aplicacion

        rutas.config(function($routeProvider){
           
            $routeProvider
                .when('/',
                    {
                        templateUrl:'./vistas/FormularioProductos.html',
                        controller:'Registro'
                    })
                .when('/listar',{
                    templateUrl:'./vistas/ListarProductos.html',
                    controller :'leerInventario'
                })
                .when('/ventas',{
                    templateUrl:'./vistas/Marcas.html',
                    controller:'ventasProductos'
                })
                .when('/editar/:id',{
                    templateUrl: "./vistas/FormularioUpdate.html",
                    controller : 'updateProductos'
                })
                .when('/eliminar/:id',{
                    templateUrl:'./vistas/ListarProductos.html',
                    controller : 'EliminarProducto'
                })
                .when('/ver/:id',{
                    template: "ver detalles"
                })
                .otherwise({redirectTo:'/'});
        });
    }
)();