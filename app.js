function csvToArray() {

var csvString = '"01 Lima /  / "\n\
"01 Lima / 50 Lima / "\n\
"01 Lima / 51 Barranca / "\n\
"01 Lima / 50 Lima / 202 La Molina"\n\
"01 Lima / 50 Lima / 203 San Isidro"\n\
"02 Arequipa /  / "\n\
"02 Arequipa / 63 Arequipa / "\n\
"02 Arequipa / 64 Caylloma / "\n\
"02 Arequipa / 63 Arequipa / 267 Cercado"';

  var arrayCsv = csvString.split( "\n" );

  var dptos = [];
  // Loop each line
  for( i=0; i < arrayCsv.length; i++ ) {

    // Replace quotes
    var line = arrayCsv[i].replace(/['"]/g, "");

    // Split by dash
    var arrayDash= line.split("/")
    console.log(arrayDash);


    // Get departamento
    var dpto= getElement(arrayDash[0])
    dptos.push();

  }
  console.log(dptos);

}

function getElement( text ) {
  var cod = text.match(/\d/g).join("");
  var name = text.match(/[A-Za-z]+\w|\s/g).join("").trim();
  return {
    "cod": cod,
    "name": name
  };
}
