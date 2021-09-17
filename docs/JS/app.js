

const pronombresSingular = ["I", "He", "She", "It"]; //
const pronombresPlural = ["We", "They", "you"];


const pronombresDemostrativosSingular = ["This", "That"]; //
const pronombresDemostrativosPlural = ["These", "Those"];


const properPronuns = ["Mauricio","Mery","Javier","Roberto","Carlitos","Oscar","Barvara",
  "Kendall","Emily","Rata","Taylor","Toro", "Dua Lipa", "Luna", "Hailee Steinfeld", "Jorge", "Robert", "Carlitos", "Wilkar", "Minion", "Wardo", "Steven", "Palvo", "JP", "Juan Pablo", "Rubius", "Michella", "Bob", "Hades", "Minerva", "Hermes", "Jupiter", "Cius", "El bicho", "Ahri", "Anivia", "Poppy", "Sara", "Raquel", "Ashe", "May", "Lana Rohades", "Alexa", "Gigi", 
  "Cortana", "Maradona", "Perro", "Gato", "Ardilla", "Juan"
]; 


const sustantivosComunes = ["phone", "lion", "elephant", "dog", "cat", "book", "fox", "chair", "table", "cockroach", "food", "rooster","pc", "screen", "printer", "mouse", "donkey", "key", "cow", "horse", "fish", "can", "computer", "bed", "internet", "ball", "racket", "fan"]; 


const sustantivosComunesPlural = ["phones", "lions", "elephants", "dogs", "cats", "books", "foxes", "chairs", "tables", "cockroaches", "foods", "roosters","pcs", "screens", "printers", "mouses", "donkeys", "keys", "cows", "horses", "fishes", "cans", "computers", "beds", "internets", "balls", "rackets", "fans", "games", "lol", "animals"]; 

const articulos = ["The", "A", "An"]; //
const articulos2 = ["The"]; //

// complements in singular
const complements = ["a good software engineer","beautiful","a gamer",
  "a good stundet","red","pink", "dangerous","smart person",
  "in london last year","in colombia last month",
  "in your house lastnight", "in the university last year",
  "in the jungle", "in the medow",
  "in the zoo",
  "in Dance School last three months",
  "in my house yesterday",
  "a bad son",
  "drunk yesterday",
  "sad",
  "a good developer",
"in the zoo last week",
"angry the last two weeks", 
];

const complements2 = [
  "good software engineers","beautiful","gamers",
  "good stundets","reds","pinks", "dangerous","smart people",
  "in london last year","in colombia last month",
  "in your house lastnight", "in the university last year",
  "in the jungle", "in the medow",
  "in the zoo",
  "in Dance School three months",
  "in my house yesterday",
  "bad sons",
  "drunk yesterday",
  "sad",
"good developers",
"in the zoo last week",
"angry the last two weeks",
  
];



var regularExpresion = () => {

  // el primer paréntesis cierra toda la expresiom regular
  // el segundo abre toda la frase para was
  // el tercero abre el conjunto de nombres propios + pronombres personales + nombres comunes
  // el cuarto abre el conjunto de this/that y the|a|an + prononmbres comunes
  // el quinto abre el conjunto de this/ that + the/a/an
  // el sexto  el this/ that

  var expresion = "^((((((";

  for (let i = 0; i < pronombresDemostrativosSingular.length; i++) {
    if (i == 0) {
      expresion += pronombresDemostrativosSingular[i];
    } else {
      expresion += "|" + pronombresDemostrativosSingular[i];
    }
  }

  // cierra el this/that
  // | y abre the|a|An
  expresion += ")|(";
  for (let i = 0; i < articulos.length; i++) {
    if (i == 0) {
      expresion += articulos[i];
    } else {
      expresion += "|" + articulos[i];
    }
  }

  // cierra el the|a|an
  // cierran el conjunto de this/that y the|a|an 
  // abre los nombres comunes
  expresion += ")) (";
  for (let i = 0; i < sustantivosComunes.length; i++) {
    if (i == 0) {
      expresion += sustantivosComunes[i];
    } else {
      expresion += "|" + sustantivosComunes[i];
    }
  }

  // cierra los nombres comunes 
  // cierra el conjunto de this/that y the|a|an + sustantivos comunes

  // abre conjunto de nombres propios + pronombres personales (los dos partentesis)  
  expresion += "))|((";
  for (let i = 0; i < properPronuns.length; i++) {
    if (i == 0) {
      expresion += properPronuns[i];
    } else {
      expresion += "|" + properPronuns[i];
    }
  }

  // cierra paréntesis de sustantivos propios
  // abre paréntesis de pronombres personales
  expresion += ")|(";
  for (let i = 0; i < pronombresSingular.length; i++) {
    if (i == 0) {
      expresion += pronombresSingular[i];
    } else {
      expresion += "|" + pronombresSingular[i];
    }
  }

  // cierra paréntesis de pronombres personales
  // cierra conjunto de sustantivos propios + pronombres personales 
  // cierra conjunto de sustantivos propios + pronombres personales para was
  // (se pinta el was) 
  // abre los complementos singulares
  expresion += "))) (was) (";

  for (let i = 0; i < complements.length; i++) {
    if (i == 0) {
      expresion += complements[i];
    } else {
      expresion += "|" + complements[i];
    }
  }
  // cierra  los complementos de pronombres singulares
  // cierra todo el conjunto de oraciones singulares

  // "|"  o son oraciones con was | o son oraciones con were
  // abre el conjunto de las oraciones con were
  // abre conjunto de ((these|those|the)(sustantivos comunes en prural)) | we/they/you
  // abre conjunto de (these|those|the)(sustantivos comunes en prural))
  // abre conjutno de (these|those|the)
  
  expresion += "))|((((";

  for (let i = 0; i < pronombresDemostrativosPlural.length; i++) {
    if (i == 0) {
      expresion += pronombresDemostrativosPlural[i];
    } else {
      expresion += "|" + pronombresDemostrativosPlural[i];
    }
  }
  // cierra el conjunto these|those|the
  // abre el conjutno de los sustantivos comunes en plural
  expresion += "|The) (";
  for (let i = 0; i < sustantivosComunesPlural.length; i++) {
    if (i == 0) {
      expresion += sustantivosComunesPlural[i];
    } else {
      expresion += "|" + sustantivosComunesPlural[i];
    }
  }

  // cierra el conjunto de los sustantivos comunes en plural
  // cierra el conjunto de ((the|those|these)(sustantivos comunes en plural))
  // | = ((the|those|these) (sustantivos comunes en plural)) | (we/they/you)
  // abre conjunto de pronombres plurales (we/they/you)
  expresion += "))|(";
  for (let i = 0; i < pronombresPlural.length; i++) {
    if (i == 0) {
      expresion += pronombresPlural[i];
    } else {
      expresion += "|" + pronombresPlural[i];
    }
  }

  // cierra conjunto de pronombres plurales (we/they/you)
  // cierra conjunto de ((the|those|these)(sustantivos comunes en plural)) | (we/they/you)
  // se introduce el (were)
  // abre conjunto de complementos en plural
  expresion += ")) (were) (";

  for (let i = 0; i < complements2.length; i++) {
    if (i == 0) {
      expresion += complements2[i];
    } else {
      expresion += "|" + complements2[i];
    }
  }

  // cierra conjunto de complementos en plural
  // | = conjunto de las oraciones en plural | conjunto de las oraciones en singular con you
  // se abre el conjunto del "you singular"
  // ((you) (were) (complemento en singular))

  /* nota: *se creó este conjunto específico debido a que el conjunto de oraciones que se pueden formar con
  "you, puede ser tanto en prural como en singular... y como en el conjunto anterior se incluye el pronombre "you" dentro del conjunto de los prurales, se crea un conjunto independiente sólo con complementos en singular"* */
  expresion += ")|((you) (were) ("
  for (let i = 0; i < complements.length; i++) {
    if (i == 0) {
      expresion += complements[i];
    } else {
      expresion += "|" + complements[i];
    }
  }

  // cierre los complementos singulares para el conjunto "you"
  // cierre para el conjunto "you" ((you) (were) (complemento))
  // cierre de oraciones con "were" (plural + "you" singular)
  // cierre de toda la expresión regular

  expresion += "))))$";

  return expresion;
};


const form = document.getElementById("form_validate");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var expresionToValidate = regularExpresion();
    console.log(expresionToValidate);
    var regularExp= new RegExp(expresionToValidate,"i");

    var field_sentence = document.getElementById("field_sentence").value;

    console.log(field_sentence)

   if (regularExp.test(field_sentence)){
        swal ("Great" ,"Congratulations, you are so good","success" );
    }else{
        swal ("Oops" ,"Something went wrong!","error" );
    }
    
    
  
});
