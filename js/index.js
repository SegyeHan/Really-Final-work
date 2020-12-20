$(document).ready(function(){
	
	console.log($(".st0"))
	var pathArray= $("st0")

	$.each(pathArray, function (i,d) {
		console.log(i,d);

		$(d).css("stroke","red");
		var pathLength = d.getTotallength()
		console.log(pathLength)
	})
})
