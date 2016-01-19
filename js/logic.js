var listaProgEspacial = {};
var listaMisionEspacial = {};


$(function() {
	$('input[name="daterange"]').daterangepicker();

	$('input[name="singleDate"]').daterangepicker(
	{
	    singleDatePicker: true
	});
	// Incluir una o mas misiones
    var max_fields      = 10;
    var wrapper         = $(".spc_MisionTripulantes");
    var add_button      = $(".spc_AddTripulantes");

    var x = 1;
    $(add_button).click(function(e){
        e.preventDefault();
        if(x < max_fields){
            x++;
            $(wrapper).append('<div><input type="text" class= "form-control myText" id="myInput"name="mytext[]"/><a href="#" class="glyphicon glyphicon-minus remove_field"></a></div>'); //add input box
        }
    });

    $(wrapper).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove(); x--;
    });


    

  	$('#spc_MisionNave').multiselect();
  	$('#spc_MisionesPrograma').multiselect();

    // IMAGE UPLOAD
    function handleFileSelect(evt) {
    var files = evt.target.files;

        for (var i = 0, f; f = files[i]; i++) {

          if (!f.type.match('image.*')) {
            continue;
          }

          var reader = new FileReader();

          reader.onload = (function(theFile) {
            return function(e) {

              var span = document.createElement('span');
              span.innerHTML = ['<img class="thumb" src="', e.target.result,
                                '" title="', escape(theFile.name), '"/>'].join('');

              document.getElementById('list').insertBefore(span, null);
              localStorage.setItem('img', e.target.result);
            };
          })(f);

          reader.readAsDataURL(f);
        }
    }

    document.getElementById('files').addEventListener('change', handleFileSelect, false);


    if(localStorage.img) {

         var span = document.createElement('span');
          span.innerHTML += ['<img class="thumb" src="', localStorage.img,
                            '" title="test"/>'].join('');

          document.getElementById('list').insertBefore(span, null);
    }
});


$(".listarProgramas").click(function llenarTablaProgramaEspacial() {
  var tbody = document.querySelector('#tblProgEspacial tbody');
      tbody.innerHTML='';
      // Trae todo en el local storage 
      listaiterar = JSON.parse(localStorage.getItem('listaProgEspacial') || '{}');

  for (var key in listaiterar) {
      var fila = document.createElement('tr');

      var celdaNombre = document.createElement('td'),
          celdaFechaInFin = document.createElement('td'),
          celdaAlcance = document.createElement('td'),
          celdaMisiones = document.createElement('td');

      var contNombre = listaiterar[key].nombre,
          contFechaInfin = listaiterar[key].fecha,
          contAlcance = listaiterar[key].alcance,
          contMisiones = listaiterar[key].misiones;


      var contNombreTxt = document.createTextNode(contNombre),
          contFechaInfinTxt = document.createTextNode(contFechaInfin),
          contAlcanceTxt = document.createTextNode(contAlcance),
          contMisionesTxt = document.createTextNode(contMisiones);

      celdaNombre.appendChild(contNombreTxt);
      celdaFechaInFin.appendChild(contFechaInfinTxt);
      celdaAlcance.appendChild(contAlcanceTxt);
      celdaMisiones.appendChild(contMisionesTxt);

      fila.appendChild(celdaNombre);
      fila.appendChild(celdaFechaInFin);
      fila.appendChild(celdaAlcance);
      fila.appendChild(celdaMisiones);

      tbody.appendChild(fila);
  }
});

$(".listarMisiones").click(function llenarTablaMisiones() {
  var tbody = document.querySelector('#tblMsiones tbody');
      tbody.innerHTML='';
      // Trae todo en el local storage 
      listaiterarMision = JSON.parse(localStorage.getItem('listaMisionEspacial') || '{}');

      for (var key in listaiterarMision) {
        var fila = document.createElement('tr');

        var celdaNombreMin = document.createElement('td'),
            celdaTrip = document.createElement('td'),
            celdaFecha = document.createElement('td'),
            celdaDuracion = document.createElement('td'),
            celdaDatoInte = document.createElement('td'),
            celdaResultado = document.createElement('td'),
            // celdaInsignia = document.createElement('td'),
            celdaNave = document.createElement('td'),
            celdaCuerpoCeleste = document.createElement('td');

        var contNombreMin = listaiterarMision[key].nombre,
            contTripulacion = listaiterarMision[key].tripulantes,
            contFecha = listaiterarMision[key].fecha,
            contDuracion = listaiterarMision[key].duracion,
            contDatosInte = listaiterarMision[key].datos,
            contResultado = listaiterarMision[key].resultado,
            // contInsignia = listaiterarMision[key].insignia,
            contNave = listaiterarMision[key].nave,
            contCuerpoCeleste = listaiterarMision[key].cuerpo;



        var contNombreTxt = document.createTextNode(contNombreMin),
            contTripulacionTxt = document.createTextNode(contTripulacion),
            contFechaTxt = document.createTextNode(contFecha),
            contDuracionTxt = document.createTextNode(contDuracion),
            contDatosInteTxt = document.createTextNode(contDatosInte),
            contResultadoTxt = document.createTextNode(contResultado),
            //contInsignia = document.createTextNode(listaMisiones[i].getInsignia()),
            contNaveTxt = document.createTextNode(contNave),
            contCuerpoCelesteTxt = document.createTextNode(contCuerpoCeleste);


        celdaNombreMin.appendChild(contNombreTxt);
        celdaTrip.appendChild(contTripulacionTxt);
        celdaFecha.appendChild(contFechaTxt);
        celdaDuracion.appendChild(contDuracionTxt);
        celdaDatoInte.appendChild(contDatosInteTxt);
        celdaResultado.appendChild(contResultadoTxt);
        //celdaInsignia.appendChild(contInsignia);
        celdaNave.appendChild(contNaveTxt);
        celdaCuerpoCeleste.appendChild(contCuerpoCelesteTxt);


        fila.appendChild(celdaNombreMin);
        fila.appendChild(celdaTrip);
        fila.appendChild(celdaFecha);
        fila.appendChild(celdaDuracion);
        fila.appendChild(celdaDatoInte);
        fila.appendChild(celdaResultado);
        // fila.appendChild(celdaInsignia);
        fila.appendChild(celdaNave);
        fila.appendChild(celdaCuerpoCeleste);

        tbody.appendChild(fila);

      }
});

$(".spc_ProgramaButton").click(function agregarProEspacial() {
  var txtNombre = document.querySelector('#spc_NombrePrograma').value;
  var txtFechaInFin = document.querySelector('#spc_RangoFecha').value;
  var txtAlcance = document.querySelector('#spc_AlcancePrograma').value;
  var txtMisiones = $('#spc_MisionesPrograma option:selected').text();

  var objeto = {nombre: txtNombre, fecha: txtFechaInFin, alcance: txtAlcance, misiones: txtMisiones};

  if (localStorage.getItem('listaProgEspacial')) {
    listaProgEspacial = JSON.parse(localStorage.getItem('listaProgEspacial') || '{}');
    listaProgEspacial[txtNombre]= objeto;
  } else {
    listaProgEspacial[txtNombre] = objeto;
  }
  // Guarda en localstorage
  localStorage.setItem('listaProgEspacial', JSON.stringify(listaProgEspacial));
});


$("#btnSubmitMision").click(function agregarMision() {
  var txtNombreMision = document.querySelector('#spc_NombreMision').value;
  var txtTripulantes = document.getElementById('')
  var txtFecha = document.querySelector('#spc_MisionLanzamiento').value;
  var txtDuracion = document.querySelector('#spc_MisionDuracion').value;
  var txtDatosIntere = document.querySelector('#spc_MisionDatos').value;
  var txtResultado = document.querySelector('#spc_MisionResultado').value;
  //var txtInsignia = document.querySelector('#files').value;
  var txtNave = document.querySelector('#spc_MisionNave').value;
  var txtCuerpoCeleste = document.querySelector('#spc_MisionCuerpoCeleste').value;


  //localStorage.misionTripulantes = JSON.stringify(txtTripulantes);

  var objeto = {nombre: txtNombreMision, tripulantes: txtTripulantes, fecha: txtFecha, duracion: txtDuracion, datos: txtDatosIntere, resultado: txtResultado, nave: txtNave, cuerpo: txtCuerpoCeleste};

  if (localStorage.getItem('listaMisionEspacial')) {
    listaMisionEspacial = JSON.parse(localStorage.getItem('listaMisionEspacial') || '{}');
    listaMisionEspacial[txtNombreMision]= objeto;
  } else {
    listaMisionEspacial[txtNombreMision] = objeto;
  }
  // Guarda en localstorage
  localStorage.setItem('listaMisionEspacial', JSON.stringify(listaMisionEspacial));
});


