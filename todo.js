function addItems() {
	var inputItems = document.getElementById("text-bar").value;
	document.getElementById("error-msg").innerHTML = "";
	if (inputItems == "") {
		document.getElementById("error-msg").innerHTML =
			"Oops! you need to type something.";
	} else {
		let list = document.getElementById("listed-items");
		let li = document.createElement("li");
		li.textContent = inputItems;
		list.appendChild(li);
	}
}
