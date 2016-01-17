/**
 * Created by aj on 26/12/15.
 */

(function(){
    'use strict';
    var http = angular.module('servis',[]);

    http.factory('create',function($http,$rootScope){
       var url = './data/logica/';
       var json = './data/sqlite/'
       var vm = this;
       var data;
        return {
            NuevoProducto: function(data){
                $http.post(url+'Create.php', data).success(function(res){
                    console.log(res);
                });
                                      
            },
            verProducto: function(){
               
                $http.post(url+'cargar.php',{op:"inventario"}).success(function(res){
                  console.log(res);
                   $rootScope.data = res;
                });
                               
            },
            Producto :function(_id){
              $http.post(url+'cargar.php',{op:'Producto',_id:_id}).success(function(res){
                var ss ={};
                    $rootScope.data = {
                      serie :res[0].Serie,
                      nombre:res[0].Nombre,
                      cantidad:res[0].Cantidad,
                      costo :res[0].Costo,
                      precio : res[0].Precio
                    }
                    console.log($rootScope.data);

              })
            },
             comprovarProductos : function(vl,sr){
              $http.post(url+'cargar.php',{op:"inventario"}).success(function(res){
                    for (var i =0; i <= res.length; i++) {
                      if(i==res.length){  break;}  
                      //verificar serie falta por hacer 
                    if($res[i].Serie == sr ){
                      var r = res[i];
                         alert("La Serie "+ r.Serie +
                          '  Ya existe asociada al Producto '+r.Nombre);
                         break;    
                    }
                      if(res[i].Nombre == vl && res[i].Serie==sr)
                      {
                        var r = res[i];
                         alert("El Producto "+ r.Nombre +
                          '  y Serie '+r.Serie+ " Ya Existe");
                         break;                         
                        }                                   
                        
                    };
                });
            },
            updateProducto : function(vl){
              $http.post(url+'Create.php',vl).success(function(res){
                console.log(res);
                location.href= "#/listar";
              })
            },
            EliminarProducto : function(id){
              $http.post(url+'Create.php',{_id:id, op:'EliminarProductos'}).success(function(res){
                console.log(res);
                location.href="#/listar";
              })
            },
            Buscar : function(dt){
              $http.post(url+'cargar.php',{op:'complete',nombre : dt})
              .success(function(res){
                console.log(res);
                $rootScope.datas = res;
              })
            }
        };
    });
})();