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
	welcomeMessage: "Welcome to my Resume!",
	skills: ["HTML5", "CSS3", "Javascript", "jQuery"],
	biopic: "https://pbs.twimg.com/profile_images/649499997109678080/gM96BV3p_400x400.jpg"
}

var education = {
	onlineCourses: {
		title: "Front End Nanodegree",
		school: "Udacity",
		date: "January 2016 - ",
		url: "#"
	}
}

var work = {
	employer: "Apex MobileTech",
	title: "QA Engineer",
	location: "London", 
	dates: "Sept 2014 - ",
	description: "#"
}

var projects = {
	title: "Frogger",
	dates: "March 2016",
	description: "#",
	images: "#"
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github)
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter)
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#workExperience").append(formatted);
$("#workExperience").append(formatted);
$("#workExperience").append(formatted);
$("#workExperience").append(formatted);
$("#workExperience").append(formatted);

$("#education").append(formatted);
$("#education").append(formatted);
$("#education").append(formatted);
$("#education").append(formatted);

$("#projects").append(formatted);
$("#projects").append(formatted);
$("#projects").append(formatted);
$("#projects").append(formatted);