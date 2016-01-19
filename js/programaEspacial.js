var ProgramaEspacial = function(pNombre, pFecha, pAlcance, pMisiones){

  var nombrePrograma = pNombre;
  var fecha = pFecha;
  var alcance = pAlcance;
  var misiones = pMisiones;


  this.setNombre = function(pNombre){
    nombrePrograma = pNombre;
  }

  this.getNombre = function(){
    return nombrePrograma;
  }

  this.setFecha = function(pFecha){
    fecha = pFecha;
  }

  this.getFecha = function(){
    return fecha;
  }

  this.setAlcance = function(pAlcance){
    alcance = pAlcance;
  }

  this.getAlcance = function(){
    return alcance;
  }

  this.setMisiones = function(pMisiones){
    misiones = pMisiones;
  }

  this.getMisiones = function(){
    return misiones;
  }




}
