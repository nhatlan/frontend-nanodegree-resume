/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio ={
	"name": "Nhat Lan",
	"role": "Product Designer",
	"contacts": {
		"mobileNumber": "01228188889",
		"emailAdress": "vanphamnhatlan93@gmail.com",
		"gitHubname": "nhatlan",
		"twitter": "procrasmater",
		"location": "Ky Dong street, Ho Chi Minh city"
	},
	"welcomeMessage": "Hi, lets talk" ,
	"skills" : [
		"graphic design",
		"front end development",
		"user experience",
		"product design",
	],
	"biopic": "images/fry.jpg",

	display : function() {
		var formattedBiopic =HTMLbioPic.replace("%data%", this.biopic);
		$("#header").prepend(formattedBiopic);

		var formattedRole= HTMLheaderRole.replace("%data%", this["role"]);
		$("#header").prepend(formattedRole);

		var formattedName= HTMLheaderName.replace("%data%", this["name"]);
		$("#header").prepend(formattedName);

		var contactTitleArray = Object.keys(this.contacts);
		for (item in contactTitleArray){
			var contactTitle = contactTitleArray[item];
			var formattedGenericContact = HTMLcontactGeneric.replace("%contact%", contactTitleArray[item]);
			formattedGenericContact = formattedGenericContact.replace("%data%", this.contacts[contactTitle]);
			$("#header").append(formattedGenericContact);
		};

		var skillNum = this.skills.length-1;
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			while (skillNum >= 0){
				var formattedSkill = HTMLskills.replace("%data%", this.skills[skillNum]);
				$("#skills").append(formattedSkill);
				skillNum= skillNum-1;
			}
		};

		var formattedMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedMsg);


	}
};

bio.display();

var work ={
	"jobs" : [
		{
			"employer": "Scottwat Product Agency",
			"title": "Product Designer",
			"location": "Ho Chi Minh City",
			"dates": "6 months",
			"description": "full-time job"
		},
		{
			"employer": "Red Cat Motion",
			"title": "Motion Designer",
			"location": "Ho Chi Minh City",
			"dates": "6 months",
			"description": "full-time job"
		}
	]
};

var projects ={
	"projects" : [
		{
			"title": "Than Den",
			"dates": "October 2015",
			"description": "content platform",
			"images": "",
		},
		{
			"title": "Social Care",
			"dates": "Jan 2016",
			"description": "social listening tool",
			"images": "",
		},
		{
			"title": "Mini Website",
			"dates": "Jan 2016",
			"description": "business website",
			"images": "",
		}
	]
};


var education = {
	"schools" : [
		{
			"name": "RMIT Vietnam",
			"location": "Ho Chi Minh City",
			"degree": "Bachelor Degree",
			"majors":
				[
					"graphic design",
					"3d animation",
					"web design",
				],
			"dates": "2011 - 2014",
			"url": "http://www.rmit.edu.vn",
		},
	{
		"name": "LSTS",
		"location": "Ho Chi Minh City",
		"degree": "high school",
		"majors":
			[
				"math",
				"literature",
				"english",
				"physics",
				"chemistry"
			],
		"dates": "2011 - 2014",
		"url": "http://www.lsts.edu.vn",
		}
	],

	"onlineCourses" : [
		{
		"title": "Front End Nanodegree Course",
		"school": "Udacity ",
		"dates": "December 2015",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "Interaction Design Specialization",
		"school": "Coursera",
		"dates": "January 2015",
		"url": "https://www.coursera.org/specializations/interaction-design"
		}
	]
};


for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var employer =HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var title =HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var employerTitle = employer + title;
	var dates =HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var workLocation =HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var description =HTMLworkDescription.replace("%data%", work.jobs[job].description);
	function displayWork(){
		$(".work-entry:last").append(employerTitle);
		$(".work-entry:last").append(dates);
		$(".work-entry:last").append(workLocation);
		$(".work-entry:last").append(description);
	};
	displayWork();

};


// };

projects.display = function(){
	for (proj in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle =HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates =HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDesc =HTMLworkDescription.replace("%data%", projects.projects[proj].description);
		$(".project-entry:last").append(formattedDesc);
	};
};

projects.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

// CREATE INTERNATIONALIZE BUTTON

// $("#main").append(internationalizeButton);

// function inName(string) {
// 	var stringArray = string.split(" ");
// 	firstname = stringArray[0].slice(0,1).toUpperCase + stringArray[0].slice(1).toLowerCase;
// 	lastName = stringArray[1].toUpperCase;
// 	var formattedString = firstName +" " + lastName;
// 	retrurn formattedString;
// };

// CREATE A DISPLAY FUNCTION FOR PROJECT OBJECT

$("#mapDiv").append(googleMap);




