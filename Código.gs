
function borrarfaltas() {
  
  var sheet = SpreadsheetApp.getActive().getSheetByName('Hoja 1');
  
  //Input para saber la fila en el que comienza la tabla
  var numfila = Browser.inputBox("Introduce la fila en la que comienza la tabla: ");  
  
  //Obtenemos la lista de valores de la primera fila de nuetra tabla
  var valores = sheet.getRange(numfila, 1, 1, sheet.getLastColumn()).getValues();
  
  
  

}




