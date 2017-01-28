
var data = '%data%';
var url = '%url%';

// inicio do Work   OK

var work = {
  "jobs": [
    {
      "employer": "Apois à Processamento",
      "title": "Politec LTDA.",
      "location": "Maceió-AL",
      "datesWorked": "2006",
      "description": "Prestador de serviço à Secretaria de Estado da Fazenda de Alagoas"
    },
    {
      "employer": "Técnico de Infra-estrutura",
      "title": "CPM Braxis",
      "location": "Maceió-AL",
      "datesWorked": "2010",
      "description": "Prestador de serviço à Secretaria de Estado da Fazenda de Alagoas"
    }
  ]
};
work.display = function(){    // === function displayWork (){}
  for(var job in work.jobs){
    if (work.jobs.hasOwnProperty(job)){

      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
      $(".work-entry:last").append(formattedWorkLocation);
      var formattedDate = HTMLworkDates.replace(data, work.jobs[job].datesWorked);
      $(".work-entry:last").append(formattedDate);
      var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);

    }
  }
};
work.display();   // notação de ponto (.).

// fim do work

// inicio do projects   OK

var projects = {
  "myProjects": [
    {
      "title": "Secretaria da Fazenda",
      "dates": "2006",
      "description": "Projeto iniciado em 2006 pela Politec com " +
      "a finalidade de oferecer serviços de apoio ao usuário",
      "images": [
        "images/sefaz.jpg"
      ]
    },
    {
      "title": "Detran-AL",
      "dates": "2010",
      "description": "Projeto iniciado em 2010 pela CPM Braxis com " +
      "a finalidade de oferecer serviços de Infra-estrutura",
      "images": [
        "images/detran.png"
      ]
    }
  ]
};
projects.display = function() {
  for (var project in projects.myProjects) {
    if (projects.myProjects.hasOwnProperty(project)){

      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace(data, projects.myProjects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace(data, projects.myProjects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace(data, projects.myProjects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.myProjects[project].images.length > 0) {
        for (var image in projects.myProjects[project].images) {
          if (projects.myProjects[project].images.hasOwnProperty(image)){

            var formattedImage = HTMLprojectImage.replace(data, projects.myProjects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
          }

          }
      }

    }
  }
};
projects.display();

// fim do projects

// inicio do bio    OK

var bio = {
  "name": "Irving Marcel",
  "role": "Desenvolvedor Web",
  "contacts": {
    "mobile": "82-988259050",
    "email": "irvingmarcel@gmail.com",
    "github": "irvingmarcel",
    "twitter": "@irvingmarcel",
    "location": "Maceió-AL - Brasil"
  },
  "welcomeMessage": "Bem-vindos ao meu curriculo!",
  "skills": ["Extrovertido", "Determinado", "Comunicativo", "Responsável"],
  "biopic": "images/fry.jpg"    //Modificar a foto
};
bio.display = function(){
  var formattedName = HTMLheaderName.replace(data, bio.name);
  $("#header").prepend(formattedName);
  var formattedRole = HTMLheaderRole.replace(data, bio.role);
  $("#header").append(formattedRole);

  var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  var formattesEmail = HTMLemail.replace(data, bio.contacts.email);
  $("#topContacts").append(formattesEmail);
  var formattedGit = HTMLgithub.replace(data, bio.contacts.github);
  $("#topContacts").append(formattedGit);
  var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  var formatterdLocation = HTMLlocation.replace(data, bio.contacts.location);
  $("#topContacts").append(formatterdLocation);

  var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
  $("#header").append(formattedWelcome);
  var formattedPic = HTMLbioPic.replace(data, bio.biopic);
  $("#header").append(formattedPic);

  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace(data, bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace(data, bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace(data, bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace(data, bio.skills[3]);
    $("#skills").append(formattedSkill);
  }

};
bio.display();

// fim da bio

// inicio do education OK

var education = {
  "schools": [
    {
      "name": "Conhecimento Digital",
      "location": "Maceió-AL",
      "degree": "Intermediário",
      "majors": ["Java", "Orientação à Objeto"],
      "dates": "2007",
      "url": "http://www.conhecimentodigital.com.br",
      "onlineCourses": [
        {
          "title": "Introdução à Informática",
          "school": "Sebrae Cursos",
          "date": "2004",
          "url": "http://www.sebrae.com.br"
        }
      ]
    }
  ]
};
education.display = function (){
  for (var school in education.schools){
    if (education.schools.hasOwnProperty(school)){

      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace(url, education.schools[school].url).replace(data, education.schools[school].name);
      $(".education-entry:last").append(formattedSchoolName);

      var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
      $(".education-entry:last").append(formattedSchoolLocation);

      var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
      $(".education-entry:last").append(formattedSchoolDegree);

      if(education.schools[school].majors.length > 0){
        for(var major in education.schools[school].majors){
          var formatedMajors = HTMLschoolMajor.replace(data, education.schools[school].majors[major]);
          $(".education-entry:last").append(formatedMajors);
        }
      }

      var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[school].dates);
      $(".education-entry:last").append(formattedSchoolDates);
      var formattedSchoolsURL = HTMLschoolsURL.replace(url, education.schools[school].url).replace(data, education.schools[school].url);
      $(".education-entry:last").append(formattedSchoolsURL);

      if(education.schools[school].onlineCourses.length > 0){
        for(var course in education.schools[school].onlineCourses){
          var formattedonlineSchool = HTMLonlineSchool.replace(url, education.schools[school].onlineCourses[course].url).replace(data, education.schools[school].onlineCourses[course].school);
          $(".education-entry:last").append(formattedonlineSchool);
          var formattedonlineTitle = HTMLonlineTitle.replace(data, education.schools[school].onlineCourses[course].title);
          $(".education-entry:last").append(formattedonlineTitle);
          var formattedonlineDate = HTMLonlineDates.replace(data, education.schools[school].onlineCourses[course].date);
          $(".education-entry:last").append(formattedonlineDate);
          var formattedonlineURL = HTMLonlineURL.replace(url, education.schools[school].onlineCourses[course].url).replace(data, education.schools[school].onlineCourses[course].url);
          $(".education-entry:last").append(formattedonlineURL);
        }
      }

    }
  }
};
education.display();

//fim do Education


//contador de clicks

// $(document).click(function(loc){
//   var x = loc.pageX;
//   var y = loc.pageY;
//
//   logClicks(x,y);
// });


// nacionalizar nome

// function inName(name) {
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() +
// 		name[0].slice(1).toLowerCase();
//
// 	return name[0] +" "+ name[1];
// }
// $("#main").append(internationalizeButton);


// motrar mapa Google

$("#mapDiv").append(googleMap);
