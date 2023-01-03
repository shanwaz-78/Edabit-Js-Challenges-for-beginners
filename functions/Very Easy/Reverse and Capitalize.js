// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

// Examples
// reverseCapitalize("abc") ➞ "CBA"

// reverseCapitalize("hellothere") ➞ "EREHTOLLEH"

// reverseCapitalize("input") ➞ "TUPNI"
// Notes
// N/A

function reverseCapitalize(str) {
	let reversed = "";
	for( let i = str.length -1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed.toUpperCase();
}

console.log(reverseCapitalize("abc"));
