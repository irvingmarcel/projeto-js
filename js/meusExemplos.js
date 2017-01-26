// $("#main").append("Irving Marcel");

// var awesomeThoughts = " I am Irving Marcel and I am AWESOME!"
//
// var email ="irvingmarcel@hotmail.com";
//
// var newEmail = email.replace ("hotmail", "gmail");
//
// console.log(email);
// console.log(newEmail);
//
// var funThoughts = awesomeThoughts.replace ("AWESOME!", "FUN!");
//
// console.log(funThoughts);
// $("#main").append(funThoughts);


var formattedName = HTMLheaderName.replace("%data%", "Irving Marcel")
var formattedRole = HTMLheaderRole.replace("%data%", "Desenvolvedor Web")


var bio = { //o.o agregação, relação, referencia. pesquisar
  "name": "Irving Marcel",
  "role": "Web Designer",
  "contacts": {
    "mobile": "82-98825-9050",
    "email": "irvingmarcel@gmail.com",
    "github": "irvingmarcel",
    "twiter": "@irvingmarcel",
    "location": "Alagoas - Brasil"
  },
  "wellcomeMessage": "Bem-vindo",
  "skills": [
    "Extrovertido", "Comunicativo", "determinado"
  ],
  "bioPic": "images/irving.jpg" //adicionar URL da imagem
};

bio.idade = 30;                     //exemplo de adição de propriedade fora do objeto
bio["estadoCivil"] = "Casado";      //exemplo de adição de propriedade fora do objeto


var work = {};
work.position = "Desenvolvedor Web";
work.employer = "Capgemini";
work.workingTime = 6.9;
work.companyCity = "Salvador";

var education = {};
education["name"] = "Fal";
education["educationalPeriod"] = "2005-2008";
education["institutionCity"] = "Maceió";



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts.mobile);
$("#main").append(bio.wellcomeMessage);
$("#main").append(bio.skills);
$("#main").append(bio.bioPic);
$("#main").append(bio.idade);
$("#main").append(bio["estadoCivil"]);

$("#main").append(work["position"]);          //diferentes formas de acessar o objeto
$("#main").append(education.institutionCity); //diferentes formas de acessar o objeto
