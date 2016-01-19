var Mision = function(pNombreMin, pTripulantes, pFecha, pDuracion, pDatosInte, pResultado, /*pInsignia, */pNave, pCuerpoCelesteDest){

  var nombreMin = pNombreMin;
  var tripualantes = pTripulantes;
  var fecha = pFecha;
  var duracion = pDuracion;
  var datosInteresantes = pDatosInte;
  var resultado = pResultado;
  //var insignia = pInsignia;
  var nave = pNave;
  var cuerpoCeleste = pCuerpoCelesteDest;

  this.setNombreMin = function(pNombreMin){
    nombreMin = pNombreMin;
  }

  this.getNombreMin = function(){
    return nombreMin;
  }
  this.setTripulantes = function(pTripulantes){
    tripualantes = pTripulantes;
  }

  this.getTripulantes = function(){
    return tripualantes;
  }

  this.setFecha = function(pFecha){
    fecha = pFecha;
  }

  this.getFecha = function(){
    return fecha;
  }

  this.setDuracion = function(pDuracion){
    duracion = pDuracion;
  }

  this.getDuracion = function(){
    return duracion;
  }

  this.setDatosInteresantes = function(pDatosInte){
    datosInteresantes = pDatosInte;
  }

  this.getDatosInteresantes = function(){
    return datosInteresantes;
  }

  this.setResultado = function(pResultado){
    resultado = pResultado;
  }

  this.getResultado = function(){
    return resultado;
  }

  /*this.setInsignia = function(pInsignia){
    insignia = pInsignia;
  }

  this.getInsignia = function(){
    return insignia;
  }*/

  this.setNave = function(pNave){
    nave = pNave;
  }

  this.getNave = function(){
    return nave;
  }

  this.setCuerpoCeleste = function(pCuerpoCelesteDest){
    cuerpoCeleste = pCuerpoCelesteDest
  }

  this.getCuerpoCeleste = function(){
    return cuerpoCeleste;
  }


}
