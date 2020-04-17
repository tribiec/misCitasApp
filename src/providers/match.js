/*
export const match =(myInfo)=>{

var persona_ciudad=db.query({ciudad:myInfo.ciudad})
var persona_distancia=persona_ciudad.map(persona=>{

    return {...persona,distancia:calcular_distancia(myInfo.coordenadas,persona.coordenadas)}
});
var  persona_distancia_km=persona_distancia.filter(persona=>(myInfo.rangoDistancia<=persona.distancia));

var personas_km_edad=persona_distancia_km.filter(persona=>(myInfo.edad_minima<=persona.edad<=myInfo.edad_maxima)); 



var res=personas_km_edad.map(persona=>{
    var iguales=0;
for(i=0;i<persona.gustos.length ;i++){
   for(j=0;j<myInfo.gustos.length;j++){

   if (persona.gustos[i]==myInfo.gustos[j]){

iguales++;
   }

   }

}
return {...persona,iguales}
});
return sortJSON(res,'iguales','asc');

}

function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}

function coordenadas(){
    navigator.geolocation.watchPosition((position) => {


        return {latitud:position.latitude,longitud:position.longitude}
    })


}
 function rad(x) {
    return x * Math.PI / 180;
}
function calcular_distancia(d1,d2){

    var R = 6378.137;//Radio de la tierra en km
    var dLat = rad(d2.latitud - d1.latitud);
    var dLong = rad(d2.longitud - d1.longitud);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(3);//Retorna tres decimales
}
*/


