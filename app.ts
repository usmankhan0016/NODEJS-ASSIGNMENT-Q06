// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Storing Person Name with White space:

let personName: string = "\n\t Usman Khan\t\n";
console.log(personName);

// Now Stripping the White Space:

let stripped = personName.trim();
console.log(stripped);
