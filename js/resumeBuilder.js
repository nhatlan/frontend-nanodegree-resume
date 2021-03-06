/*
This is empty on purpose! Your code to build the resume will go here.
*/

/** @global */
var bio ={
	'name': 'Van Pham Nhat Lan',
	'role': 'Product Designer',
	'contacts': {
		'mobile': '01228188889',
		'email': 'vanphamnhatlan93@gmail.com',
		'github': 'nhatlan',
		'twitter': 'procrasmater',
		'location': 'Ky Dong street, Ho Chi Minh city'
	},
	'welcomeMessage': 'Hi, lets talk' ,
	'skills' : [
		'graphic design',
		'front end development',
		'user experience',
		'product design',
	],
	'biopic': 'images/fry.jpg',

	display : function() {
		var formattedBiopic =HTMLbioPic.replace('%data%', this.biopic);
		$('#header').prepend(formattedBiopic);

		var formattedRole= HTMLheaderRole.replace('%data%', this.role);
		$('#header').prepend(formattedRole);

		var formattedName= HTMLheaderName.replace('%data%', this.name);
		$('#header').prepend(formattedName);

		var contactTitleArray = Object.keys(this.contacts);
		for (var item = 0; item < contactTitleArray.length; item++) {
			var contactTitle = contactTitleArray[item];
			var formattedGenericContact = HTMLcontactGeneric.replace('%contact%', contactTitleArray[item]);
			formattedGenericContact = formattedGenericContact.replace('%data%', this.contacts[contactTitle]);
			$('#topContacts').append(formattedGenericContact);
			$('#footerContacts').append(formattedGenericContact);
		};

		var skillNum = this.skills.length-1;
		if (bio.skills.length > 0) {
			$('#header').append(HTMLskillsStart);
			while (skillNum >= 0){
				var formattedSkill = HTMLskills.replace('%data%', this.skills[skillNum]);
				$('#skills').append(formattedSkill);
				skillNum= skillNum-1;
			}
		}

		var formattedMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
		$('#header').append(formattedMsg);


	}
};

/** @global */
var education = {
	'schools' : [
		{
			'name': 'RMIT Vietnam',
			'location': 'Ho Chi Minh City',
			'degree': 'Bachelor Degree',
			'majors':
				[
					'graphic design',
					'3d animation',
					'web design',
				],
			'dates': '2011 - 2014',
			'url': 'http://www.rmit.edu.vn',
		},
	{
		'name': 'LSTS',
		'location': 'Ho Chi Minh City',
		'degree': 'High School',
		'majors':
			[
				'math',
				'literature',
				'english',
				'physics',
				'chemistry',
				'biology'
			],
		'dates': '2008 - 2011',
		'url': 'http://lsts.edu.vn/',
		}
	],

	'onlineCourses' : [
		{
			'title': 'Front End Nanodegree Course',
			'school': 'Udacity ',
			'dates': 'December 2015',
			'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		},
		{
			'title': 'Interaction Design Specialization',
			'school': 'Coursera',
			'dates': 'January 2015',
			'url': 'https://www.coursera.org/specializations/interaction-design'
		}
	],

	display : function() {
		for (var school = 0; school < education.schools.length; school++){
			$('#education').append(HTMLschoolStart);
			var formattedschoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
			formattedschoolName = formattedschoolName.replace('#', education.schools[school].url);
			$('.education-entry:last').append(formattedschoolName);
			var formattedschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
			$('.education-entry:last').append(formattedschoolDegree);
			var formattedschoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
			$('.education-entry:last').append(formattedschoolDates);
			var formattedschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
			$('.education-entry:last').append(formattedschoolLocation);
			$('.education-entry:last').append(HTMLschoolMajorStart);
			$('.major:last').append(HTMLschoolMajorList);
			for (var major in education.schools[school].majors){
				console.log(education.schools[school].name);
				var formattedschoolMajorsItem=(HTMLschoolMajor).replace('%data%', education.schools[school].majors[major]);
				$('.major-list:last').append(formattedschoolMajorsItem);
			}
		}

		$('#education').append(HTMLonlineClasses);
		for (var course = 0; course < education.onlineCourses.length; course++){
			$('#education').append(HTMLschoolStart);
			var formattedcourseName = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
			formattedcourseName = formattedcourseName.replace('#', education.onlineCourses[course].url);
			var formattedcourseSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
			$('.education-entry:last').append(formattedcourseName + formattedcourseSchool);
			var formattedcourseDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
			$('.education-entry:last').append(formattedcourseDates);
			var formattedcourseURL = HTMLonlineURL.replace('%data%', 'link');
			formattedcourseURL = formattedcourseURL.replace('#', education.onlineCourses[course].url);
			$('.education-entry:last').append(formattedcourseURL);
		}
	}
};

/** @global */
var work ={
	'jobs' : [
		{
			'employer': 'Scottwat Product Agency',
			'title': 'Product Designer',
			'location': 'Ho Chi Minh City',
			'dates': '6 months',
			'description': 'full-time job'
		},
		{
			'employer': 'Red Cat Motion',
			'title': 'Motion Designer',
			'location': 'Dinh Bo Linh, Ho Chi Minh City',
			'dates': '6 months',
			'description': 'full-time job'
		}
	],
	display: function() {
		for (var job = 0; job < work.jobs.length; job++){
		$('#workExperience').append(HTMLworkStart);
		var employer =HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var title =HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var employerTitle = employer + title;
		var dates =HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var workLocation =HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var description =HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(employerTitle);
		$('.work-entry:last').append(dates);
		$('.work-entry:last').append(workLocation);
		$('.work-entry:last').append(description);
		}
	}
};

/** @global */
var projects ={
	'projects' : [
		{
			'title': 'Than Den',
			'dates': 'October 2015',
			'description': 'Content platform',
			'images': 'images/photo1-small.jpg',
		},
		{
			'title': 'Social Care',
			'dates': 'Jan 2016 - in progress',
			'description': 'Social Listening Tool',
			'images': 'images/photo2-small.jpg',
		},
		{
			'title': 'Mini Website',
			'dates': 'Jan 2016',
			'description': 'Brand Micro Site',
			'images': 'images/photo3-small.jpg',
		},
		{
			'title': 'Younet Digital Website',
			'dates': 'Jan 2016 - in progress',
			'description': 'Business Website',
			'images': 'images/photo4-small.jpg',
		}
	],
	display: function() {
		for (var proj = 0; proj < projects.projects.length; proj++){
		$('#projects').append(HTMLprojectStart);
		var formattedTitle =HTMLprojectTitle.replace('%data%', projects.projects[proj].title);
		$('.project-entry:last').append(formattedTitle);
		var formattedDates =HTMLprojectDates.replace('%data%', projects.projects[proj].dates);
		$('.project-entry:last').append(formattedDates);
		var formattedDesc =HTMLworkDescription.replace('%data%', projects.projects[proj].description);
		$('.project-entry:last').append(formattedDesc);
		var formattedImg =HTMLprojectImage.replace('%data%', projects.projects[proj].images);
		$('.project-entry:last').append(formattedImg);
		}
	}
};

bio.display();
education.display();
work.display();
projects.display();

/**
@function display Google Map
*/
$('#mapDiv').append(googleMap);




