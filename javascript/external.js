/*

//document.write("Where is my JS code?");
//window.alert(5 + 6);
//window.alert('5 + 6');


const x = "web";
const y = "mapping";
const out = x + y;
document.write(out);



//Prompt Box used to prompt user to input username before entering website
user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);


const x = 22;
 y = 33;
document.writeln(x + y) ;
//document.writeln("<br>"); 
//document.writeln(x += 33);



document.writeln("<button onclick='condition()'> Conditional Test </button>")
function condition ()
{
	x = confirm("Are you sure you want to proceed?");
	if (x)
	{
		document.writeln("You chose Okay!");
	}
	else 
	{
		document.writeln("You chose Cancel!");
	}
}


arr = ["Joe", "April", "Mark", "Sara"];
for (var i=0; i < arr.length; i++)
{
	document.writeln(arr[i], "<br>")
}

Prompt Box used to prompt user to input username before entering website
user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);
*/

function welcome()
{
	let a = "Please enter your name.";
	let b = "Type your name here.";

	//A prompt box is used to promp users to input a value before entering a page
	user_name = window.prompt(a, b);

	message = "<h1> Hello, welcome to my webpage, " + user_name + "!</h1>"

	return message
}

function webmap_table()
{
  document.write("<table width=100%"); 
  for (var row=0; row < 2; row++)
  {
	document.write("<tr>");
	for (var column=0; column < 3; column++)
	{
		document.write("<td>" + row + "," + column + "</td>");
	}
	document.write("</tr>");
  }
  document.write("</table>")
}




