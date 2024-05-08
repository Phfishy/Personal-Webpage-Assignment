/*
script.js for assignment01, used in assignment01Projects.html
Written by Zachary Bernard 041073789
Dynamically changes which project is being viewed; manipulated using buttons
*/

//Array of all necessary contact components
const projects = [

	{
		"head": "Vinyl Database Project",
		
		"date": "February 25th, 2024",
	
		"tech": "Created using Microsoft Access, SQL Server Management Studios, mySQL",
		
		"description": "A small MS Access database with SSMS back-end. Contains information about various musicians, records, and production companies.",
		
		"screenshot": "images/vinylScreenshot.png"
	},

	{
		"head": "User Management Script for Linux",
		
		"date": "November 9th, 2023",
		
		"tech": "Created on VMWare, using BASH scripting",
		
		"description": "Script that allowed for manipulation of users and groups, using text prompts to speed up and streamline user management.",
		
		"screenshot": "images/userManagementScreenshot.png"
	},

	{
		"head": "MyHealthData Program",
		
		"date": "October 15, 2023",
		
		"tech": "Created with Eclipse, Java",
		
		"description": "A simple program that takes in a persons name, weight, and height, and returns their BMI aswell as a healthy heartrate range.",
		
		"screenshot": "images/myHealthDataScreenshot.png"
	},

	{
		"head": "Joke of the Day website",
		
		"date": "March 10th, 2024",
		
		"tech": "Created with notepad++, XAMPP, HTML, CSS, Javascript",
		
		"description": "Using a simple html site as well as a script, the website displays a random joke as well as its author, then gives you a button to cycle to another joke.",
		
		"screenshot": "images/jokeScreenshot.png"
	}

];

//event listeners for buttons
document.getElementById("next").addEventListener("click", next);
document.getElementById("previous").addEventListener("click", previous);

//stored index constant and displayedProject
var i = -1;

//calling next function so site starts with a project in place
next();

//function to display next project in array
function next() {
	i = i + 1;
	
	if(i > 3)
		i = 0;
	
	var display = projects[i];
	document.getElementById("projectHead").innerText = display["head"];
	document.getElementById("projectDate").innerText = display["date"];
	document.getElementById("tech").innerText = display["tech"];
	document.getElementById("description").innerText = display["description"];
	var pic = document.getElementById("projectpic").src = display["screenshot"];
}

//function to display previous project in array
function previous() {
	i = i - 1;
	
	if(i < 0)
		i = 3;
	
	var display = projects[i];
	document.getElementById("projectHead").innerText = display["head"];
	document.getElementById("projectDate").innerText = display["date"];
	document.getElementById("tech").innerText = display["tech"];
	document.getElementById("description").innerText = display["description"];
	var pic = document.getElementById("projectpic").src = display["screenshot"];
}