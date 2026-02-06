var svg = d3.select("#chart-area").append("svg")

	.attr("width", 400)

	.attr("height", 400);

var circle = svg.append("circle")

	.attr("cx", 200)

	.attr("cy", 200)

	.attr("r", 200)

	.attr("fill", "gold")

    .attr("stroke", "black")

    .attr("stroke-width", 2);

 var circle = svg.append("circle")

	.attr("cx", 100)

	.attr("cy", 150)

	.attr("r", 70)

	.attr("fill", "white")

    .attr("stroke", "black")

    .attr("stroke-width", 2);

var circle = svg.append("circle")

	.attr("cx", 285)

	.attr("cy", 150)

	.attr("r", 70)

	.attr("fill", "white")

    .attr("stroke", "black")

    .attr("stroke-width", 2);

var circle = svg.append("circle")

	.attr("cx", 200)

	.attr("cy", 280)

	.attr("r", 100)

	.attr("fill", "darkred")

    .attr("stroke", "black")

    .attr("stroke-width", 2);

//left pupil
var circle = svg.append("circle")

	.attr("cx", 80)

	.attr("cy", 120)

	.attr("r", 30)

	.attr("fill", "black");
//right pupil
var circle = svg.append("circle")

	.attr("cx", 265)

	.attr("cy", 120)

	.attr("r", 30)

	.attr("fill", "black");

//tongue
var circle = svg.append("circle")

	.attr("cx", 220)

	.attr("cy", 330)

	.attr("r", 40)

	.attr("fill", "pink");

//Rectangule over the mouth
var rect = svg.append("rect")

	.attr("x", 15)

	.attr("y", 170)

	.attr("width", 370)

	.attr("height", 100)

	.attr("fill","gold");

//Rectangle over the eyes    
var rect = svg.append("rect")

	.attr("x", 10)

	.attr("y", 160)

	.attr("width", 370)

	.attr("height", 100)

	.attr("fill","gold");
