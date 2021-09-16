
// pronouns array
const pronouns = ["I", "He", "She", "It"]; //
const pronouns2 = ["You", "We", "They"];

// demostrative Pronouns array
const demostrativePronouns = ["This", "That"]; //
const demostrativePronouns2 = ["These", "Those"];

//
const properPronuns = ["Mauricio","Mery","Javier","Roberto","Carlitos","Oscar","Barvara",
  "Kendall","Emily","Rata","Taylor","Toro", "Dua Lipa", "Luna", "Hailee Steinfeld", "Jorge", "Robert", "Carlitos", "Wilkar", "Minion", "Wardo", "Steven", "Palvo", "JP", "Juan Pablo", "Rubius", "Michella", "Bob", "Hades", "Minerva", "Hermes", "Jupiter", "Cius", "El bicho", "Ahri", "Anivia", "Poppy", "Sara", "Raquel", "Ashe", "May", "Lana Rohades", "Alexa", "Gigi", 
  "Cortana", "Maradona"
]; //
const commmonPronouns = ["phone", "lion", "elephant", "dog", "cat", "book", "fox", "chair", "table", "cockroach", "food", "rooster","pc", "screen", "printer", "mouse", "donkey", "key", "cow", "horse", "fish", "can", "computer", "bed", "internet", "ball", "racket", "fan"]; //
const commmonPronouns2 = ["phones", "lions", "elephants", "dogs", "cats", "books", "foxes", "chairs", "tables", "cockroaches", "foods", "roosters","pcs", "screens", "printers", "mouses", "donkeys", "keys", "cows", "horses", "fishes", "cans", "computers", "beds", "internets", "balls", "rackets", "fans", "games", "lol", "animals"]; //
const article = ["The", "A", "An"]; //
const article2 = ["The"]; //
const verbsToBePast = ["Was", "Were"];

// complements in singular
const complements = [
  "a good software engineer",
  "beautiful",
  "a soccer player",
  "a good stundet",
  "red",
  "pink", 
  "dangerous",
  "smart person",
  "in london last year",
  "in colombia last month",
  "in your house lastnight",
  "in the university las year",
  "in the jungle",
  "in the medow",
  "in the zoo",
  "in England last three months",
  "in my house yesterday",
  "a bad student",
  "sick yesterday",
  "happy",
];
const complements2 = [
    "good doctors",
    "beautiful people",
    "good developers",
    "reds",
    "pinks", 
    "dangerous",
    "smart people",
    "in london last year",
    "in colombia last month",
    "in your house lastnight",
    "in the university las year",
    "in the jungle",
    "in the medow",
    "in the zoo",
    "in England last three months",
    "in my house yesterday",
    "a bad students",
    "sick yesterday",
    "happy", 
    "angry last two weeks"
];



var regularExpresion = () => {
  var expresion = "^(((((";

  for (let i = 0; i < demostrativePronouns.length; i++) {
    if (i == 0) {
      expresion += demostrativePronouns[i];
    } else {
      expresion += "|" + demostrativePronouns[i];
    }
  }
  expresion += ")|(";
  for (let i = 0; i < article.length; i++) {
    if (i == 0) {
      expresion += article[i];
    } else {
      expresion += "|" + article[i];
    }
  }

  expresion += ")) (";
  for (let i = 0; i < commmonPronouns.length; i++) {
    if (i == 0) {
      expresion += commmonPronouns[i];
    } else {
      expresion += "|" + commmonPronouns[i];
    }
  }
  expresion += "))|((";
  for (let i = 0; i < properPronuns.length; i++) {
    if (i == 0) {
      expresion += properPronuns[i];
    } else {
      expresion += "|" + properPronuns[i];
    }
  }
  expresion += ")|(";
  for (let i = 0; i < pronouns.length; i++) {
    if (i == 0) {
      expresion += pronouns[i];
    } else {
      expresion += "|" + pronouns[i];
    }
  }
  expresion += "))) (was) (";

  for (let i = 0; i < complements.length; i++) {
    if (i == 0) {
      expresion += complements[i];
    } else {
      expresion += "|" + complements[i];
    }
  }
  expresion += "))|(((((";

  for (let i = 0; i < demostrativePronouns2.length; i++) {
    if (i == 0) {
      expresion += demostrativePronouns2[i];
    } else {
      expresion += "|" + demostrativePronouns2[i];
    }
  }
  expresion += "|The)";

  expresion += ") (";
  for (let i = 0; i < commmonPronouns2.length; i++) {
    if (i == 0) {
      expresion += commmonPronouns2[i];
    } else {
      expresion += "|" + commmonPronouns2[i];
    }
  }
  expresion += "))|";

  expresion += "(";
  for (let i = 0; i < pronouns2.length; i++) {
    if (i == 0) {
      expresion += pronouns2[i];
    } else {
      expresion += "|" + pronouns2[i];
    }
  }
  expresion += ")) (were) (";

  for (let i = 0; i < complements2.length; i++) {
    if (i == 0) {
      expresion += complements2[i];
    } else {
      expresion += "|" + complements2[i];
    }
  }
  expresion += "))$";

  return expresion;
};


const form = document.getElementById("form_validate");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var expresionToValidate = regularExpresion();
    var regularExp= new RegExp(expresionToValidate,"i");

    var field_sentence = document.getElementById("field_sentence").value;

    console.log(field_sentence)

   if (regularExp.test(field_sentence)){
        swal ("Great" ,"Congratulations, you are so good","success" );
    }else{
        swal ("Oops" ,"Something went wrong!","error" );
    }
    
    
  
});
