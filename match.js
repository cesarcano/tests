var creArray = '';
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
const gasolinerasArray = ;


var newGasArray = [];
var newGasArrayErrorCre = []; 
var newGasArrayErrorGas = [];
const main_url = "https://raw.githubusercontent.com/cesarcano/tests/master/cre.json"

$(document).ready(function () {
   $.ajax({
      type: "GET",
      url: main_url,
      dataType: "JSON",
      success: function (response) {
        creArray = response;
        for (let i = 0; i < creArray.length; i++) {
         //console.log(i);
         for (let j = 0; j < gasolinerasArray.length; j++) {     
           let creElement = creArray[i];
           let gasElemet = gasolinerasArray[j];
           
             if (compare(creElement, gasElemet)) {
               //setProtoGas(creArray[i], gasolinerasArray[j]);
               let protoGas = {};
               protoGas.marca = gasElemet.marca;
               protoGas.actualizacion = Date.now();
               protoGas.direccion = creElement.direccion;
               protoGas.lat = gasElemet.lat;
               protoGas.lng = gasElemet.lng;
               protoGas.nombre = creElement.nombre;
               protoGas.cre_id = creElement.cre_id
               // Push a newGasArray
               newGasArray.push(protoGas);
     
               mSplice(i,j);
             } 
         }
       }
       imprimir();
      }
    }); 
  
});

function compare(creElement, gasElement) {
  //console.log(creElement.lat + " | " + creElement.lng + " | " + gasElement.lat + " | " + gasElement.lng);
  
  //console.log(creElement);
  //console.log(gasElement);
  if (compLatLng(creElement.lat, creElement.lng, gasElement.lat, gasElement.lng)) {  
    if (compDireccion(creElement.direccion, gasElement.direccion)) {
      return true;
    }
  }
  return false;
}
/**
 *  Coordenadas iguales o está muy cerca
*/
function compLatLng(creLat, creLng, gLat, gLng) {  
  //console.log(creLat +" | " + creLng +" | " + gLat +" | " + gLng);
  let distancia = getDistancia(creLat, creLng, gLat, gLng);
  let distance = 500;
  //if (((Math.trunc(gLat * 100) / 100) === (Math.trunc(creLat * 100) / 100)) 
  //&&  ((Math.trunc(gLng * 100) / 100) === (Math.trunc(creLng * 100) / 100))) {
    if ((distancia <= distance)) {
       return true;
    } 
  //} 
  return false;
}
/**
 * Comparar dirección
*/
function compDireccion(main_direccion, direccion) {
  // descompone las palabras de direccion en
  let palabras2 = main_direccion.split(" ");
  let palabras1 = direccion.split(" ");
  let cont = 0;
  palabras2.forEach(word1 => {
    palabras1.forEach(word2 => {
      if (word1.toLowerCase() === word2.toLowerCase()) {
        cont += 1;
      }
    });
  });
  if (cont > 0) {
    return true; 
  }
  return false;
}

/**
 * GET DISTANCIA
 */
function getDistancia(lat1,lon1,lat2,lon2) {
  rad = function(x) {return x * Math.PI/180;}
  var R = 6378137; //Radio de la tierra en metros
  var dLat = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  
  return parseInt(d); 
}
/**
 * PEGAR EN TEXTAREA
 */
function imprimir() {
  // Borrar textarea
  $("#textarea").val("");
  $("#textarea1").val("");
  $("#textarea2").val("");
  // imprimir newGasArea
  $("#textarea").val(JSON.stringify(newGasArray));
  $("#textarea1").val(JSON.stringify(creArray));
  $("#textarea2").val(JSON.stringify(gasolinerasArray));
}

function mSplice(gas_index, cre_index) {
  creArray.splice(gas_index, 1);
  gasolinerasArray.splice(cre_index, 1);
}