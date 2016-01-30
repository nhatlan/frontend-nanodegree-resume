/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work ={
	"jobs" : [
		{
			"employer": "Viettel", 
			"title": "product designer",
			"location": "Ha Noi",
			"dates": "1 month",
			"description": "contractor"
		}, 
		{
			"employer": "Scottwat", 
			"title": "product designer",
			"location": "Ho Chi Minh City",
			"dates": "6 months",
			"description": "full-time job"	
		},
		{
			"employer": "Red Cat Motion", 
			"title": "motion designer",
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
			"images": "http://images.png",
		}, 
		{
			"title": "Social Care", 
			"dates": "Jan 2016",
			"description": "social listening tool",
			"images": "http://images.png",	
		}
	]
}; 

var bio ={
	"name": "Nhat Lan",
	"role": "Product Designer",  
	"welcomeMessage": "Hi, lets talk" , 
	"contacts": {
		"mobileNumber": "01228188889",
		"emailAdress": "vanphamnhatlan93@gmail.com",
		"gitHubname": "nhatlan",
		"twitter": "procrasmater",
		"location": "Ho Chi Minh city"
	},
	"skills" : [
		"graphic design",
		"front-end", 
		"product design",
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
					"web design and development"
				], 
			"dates": "2011 - 2014", 
			"url": "http://www.rmit.com.vn", 
		},
	{
		"name": "LSTS",
		"location": "Ho Chi Minh City", 
		"degree": "high school",
		"majors": 
			[
				"math", 
				"literature", 
				"english"
			], 
		"dates": "2011 - 2014", 
		"url": "http://www.rmit.com.vn", 
		} 
	], 

	"onlineCourses" : [
		{
		"title": "Front End Nanodegree Course",
		"school": "Udacity ",
		"dates": "December 2015", 
		"url": "http://www.udacity.com"
		},
		{
			"title": "Front End Nanodegree Course",
		"school": "Coursera ",
		"dates": "December 2015", 
		"url": "http://www.udacity.com"
		}
	]
}; 

var formattedHeader = HTMLheaderName.replace("%data%", "Resume"); 
$("#header").append(formattedHeader);

var skillNum = bio.skills.length-1; 

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart); 
	while (skillNum >= 0){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillNum]); 
		$("#skills").append(formattedSkill); 
		skillNum= skillNum-1; 
	}
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




