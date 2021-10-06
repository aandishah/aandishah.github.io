var webmaps =
[
  ["Shipmap", 
  "https://www.shipmap.org/",
  "Shipmap.org is an ambitious interactive WebGL map of commercial" 
  ],
  ["The Hate Map by Southern Poverty Law Center",
  "https://www.splcenter.org/hate-map",
  "The Hate Map on the spl website gives a quick and easy to follow visual narrative"
  ]  
];

function webmap_table()
{
  document.write("<table width=100%>"); 
  for (var row=0; row < webmaps.length; row++)
  {
  document.write("<tr>");
  for (var column=0; column < webmaps[0].length; column++)
  {
    document.write("<td>" + webmaps[row][column] + "</td>");
  }
  document.write("</tr>");
  }
  document.write("</table>")
}

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  //A prompt box is used to promp users to input a value before entering a page
  user_name = window.prompt(a, b);

  message = "<h1> Hello, welcome to my webpage, " + user_name + "!</h1>"

  return message
}


function AreaCalculator() {
  var length;
  var width;
  var AreaCalc;
  var result = document.getElementById('AreaCalc')
  length = document.getElementById("length").value;
  width = document.getElementById("width").value;     
  AreaCalc = (length * width);
   console.log(AreaCalc);
   result.innerHTML = AreaCalc
};
