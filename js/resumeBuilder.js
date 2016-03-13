var bio = {

	name: "Edward Haigh",
	role: "Web Developer",
	contacts: {
		mobile: "07758805646",
		email: "webdev@edwardhaigh.com",
		github: "WebDevByEdd",
		twitter: "WebDevByEdd",
		location: "London"
	},
	welcomeMessage: "Hello world!",
	skills: ["HTML5", "CSS3", "Javascript", "jQuery", "Bootstrap", "Python"],
	biopic: "https://pbs.twimg.com/profile_images/649499997109678080/gM96BV3p_400x400.jpg"
}

var education = {	

	schools: [
	{
		name: "Open University",
		location: "London/Remote",
		degree: "Bachelor of Science",
		major: "Computing & IT and Mathematics",
		dates: "2016 - Present"
	}],	
	onlineCourses: [
	{
		title: "Front End Nanodegree",
		school: "Udacity",
		dates: "January 2016 - Present",
		url: "http://www.udacity.com"
	},	
	{
		title: "Full Stack Web Development Certificate",
		school: "Free Code Camp",
		dates: "2016",
		url: "http://www.freecodecamp.com"
	}
]}

var work = {

	jobs: [
	{
		employer: "Apex MobileTech",
		title: "QA Engineer",
		location: "London", 
		dates: "Sept 2014 - ",
		description: "#"
	},	
	{
		employer: "Nexus Open Systems",
		title: "Systems Technician",
		location: "Exeter, Devon",
		dates: "Feb 2014 - Sept 2014",
		description: "#"
	}
]}

var projects = {

	project: [
	{
		title: "Frogger",
		dates: "March 2016",
		description: "#",
		images: "#"
	},
	{
		title: "Website Optimization",
		dates: "April 2016",
		description: "#",
		images: "#"
	},
	{
		title: "Neighbourhood Map Project",
		dates: "May 2016",
		description: "#",
		images: "#"
	},
		{
		title: "Health Tracker",
		dates: "June 2016",
		description: "#",
		images: "#"
	},
		{
		title: "Feed Reader Testing",
		dates: "July 2016",
		description: "#",
		images: "#"
	},
]}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

work.display = function () {
	if(work.jobs.length > 0)

	for (i in work.jobs) {

		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);		
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

		$(".work-entry:last").append(formattedEmployer + " " + formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}


education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {			

				$("#education").append(HTMLschoolStart);

				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

projects.display = function() {
	if(projects.project.length > 0) {
		for (i in projects.project) {

			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[i].image);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
}

work.display();
education.display();
projects.display();