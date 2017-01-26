
// inicio do Work   OK

var work = {
  "jobs": [
    {
      "employer": "Employer job01",
      "title": "Title job01",
      "location": "Location job01",
      "datesWorked": "Dates Worked job01",
      "description": "Description job01"
    },
    {
      "employer": "Employer job02",
      "title": "Title job02",
      "location": "Location job02",
      "datesWorked": "Dates Worked job02",
      "description": "Descripton job02"
    }
  ]
}
work.display = function(){    // === function displayWork (){}
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);
    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
    $(".work-entry:last").append(formattedDate);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

  }
}
work.display();   // notação de ponto (.).

// fim do work

// inicio do projects   OK

var projects = {
  "myProjects": [
    {
      "title": "Secretaria da Fazenda",
      "dates": "2006",
      "description": "Projeto iniciado em 2006 pela Politec com a finalidade de oferecer serviços de apoio ao usuário",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    },
    {
      "title": "Detran-al",
      "dates": "2010",
      "description": "Projeto iniciado em 2010 pela CPM Braxis com a finalidade de oferecer serviços de apoio ao usuário",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ]
}

function displayProjects () { //poderia ser declarado dessa outra forma: projects.display = function() {}
  for (project in projects.myProjects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.myProjects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.myProjects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.myProjects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.myProjects[project].images.length > 0) {
      for (image in projects.myProjects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.myProjects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
displayProjects();    //notação literal.

// fim do projects

// inicio do bio

var bio = {         // declarado e impresso - Faltando resolver CONTACTS
  "name": "Irving Marcel",
  "role": "Desenvolvedor Web",
  "contacts": {
    "mobile": "82-988259050",
    "email": "irvingmarcel@gmail.com",
    "github": "irvingmarcel",
    "twitter": "@irvingmarcel",
    "location": "Brasil"
  },
  "welcomeMessage": "Sejam bem vindos!",
  "skills": ["Extrovertido", "Determinado", "Comunicativo", "Responsável"],
  "biopic": "images/fry.jpg"
}

function displayBio(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedRole);

  // var formattedContacts = HTMLcontactGeneric.replace("%contact%", bio.contacts);
  // $("#topContacts").append(formattedContacts);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  var formattesEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattesEmail);
  var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGit);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  var formatterdLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formatterdLocation);


  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);
  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPic);

  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
  }


}
displayBio();

// fim da bio

// inicio do education

var education = {     //falta imprimir
  "schools": [
    {
      "name": "Name school01",
      "location": "Location school01",
      "degree": "Degree school01",
      "majors": ["majors0101", "majors0102", "majors0103"],
      "dates": "2016",
      "url": "http://exempleScool01.com",
      "onlineCourses": [
        {
          "title": "course01",
          "school": "course01",
          "date": "2016",
          "url": "http://courses.com"
        },
        {
          "title": "course02",
          "scool": "course02",
          "date": 2016,
          "url": "http://courses.com"
        }
      ]
    },
    {
    "name": "Name school02",
    "location": "Location school02",
    "degree": "Degree school02",
    "majors": ["majors0201", "majors0202", "majors0203"],
    "dates": "2016",
    "url": "http://exempleScool02.com",
    "onlineCourses": [
        {
          "title": "course01",
          "school": "course01",
          "date": "2016",
          "url": "http://courses.com"
        },
        {
          "title": "course02",
          "school": "course02",
          "date": "2016",
          "url": "http://courses.com"
        }
      ]
    }
  ]
}

function displayEducation (){
  for (school in education.schools){
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    if(education.schools[school].majors.length > 0){
      for(major in education.schools[school].majors){
        var formatedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
        $(".education-entry:last").append(formatedMajors);
      }
    }

  }

}
displayEducation();


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
