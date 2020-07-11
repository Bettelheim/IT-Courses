// Global scope

var globalName = "Zozi";

function something() {
	globalName = "Lobo";
	console.log(globalName);
}

something();

console.log(globalName);
