/* The following function is implemented so that the code can be executed in the same spreadsheet. */
function onOpen() {
 var ui = SpreadsheetApp.getUi();
 ui.createMenu('Opciones avanzadas')
     .addItem('Empty Columns', 'emptyColumns')
     .addToUi();
}//Fin Función

function emptyColumns() {
 var ss=SpreadsheetApp.getActiveSpreadsheet();
 var sheet=ss.getSheets()[0];
 
 /* FUNCIONALIDAD Nº 1 */
 var usuarios= ["Enrique", "Javier","Alberto"];
 var contrasena="nuevasprofesiones";
 var user=Browser.inputBox("Usuario: ");
 var pass=Browser.inputBox("Contraseña: ");
 
 if(usuarios.indexOf(user)>=0 && pass===contrasena){
 
   /* Enter the row where the table begins. The entry by keyboard must be a number, otherwise, you will have to enter the data again. */
   var numfila=Browser.inputBox("Introduce la fila en la que comienza la tabla: ");
   while(!(parseInt(numfila))){
     var numfila=Browser.inputBox("Introduce la fila en la que comienza la tabla: ");
   }//Fin Mientras
   
   /* FUNCIONALIDAD Nº 2 */
   var texto= Browser.inputBox("Introduce el nombre de la columna que desea borrar: ");
   while(parseInt(texto)){
     var texto= Browser.inputBox("Introduce el nombre de la columna que desea borrar: ");
   }//Fin Mientras
   
   var valores=sheet.getRange(numfila,1,1,sheet.getLastColumn()).getValues();
   var limite=parseInt(numfila)+1;
   
   for(var i=0;i<valores[0].length;i++){ //The next instruction goes through the array.
     /* The next instructions compares if any item in the array matches with the variable texto. If it matches, that column will be deleted. */
     if((valores[0][i]===texto)){ 
       var range=sheet.getRange(limite,i+1,sheet.getLastRow()).clearContent(); 
     }//Fin Si
   }//Fin Para
 }else{
   Browser.msgBox("El nombre de usuario o contraseña no es correcto.")
 }//Fin Si
}//Fin Función