function print_score(tex) {
	var temp = "";
	var temp_arr = tex.split("");
	for (var i = 0;i<temp_arr.length;i++) {
		temp = temp + "<img src='img/" + temp_arr[i] + ".png'></img>";
	}
	document.getElementById("score").innerHTML = temp;
}