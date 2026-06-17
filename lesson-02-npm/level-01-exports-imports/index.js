import { greet } from "./greet.js";
import { stats } from "./stats.js";
import { showNames } from "./showNames.js";
import names from "./names.js";

greet("Frontend Developer");
stats(3, 7);
showNames(names);

console.log("Importing and exporting code seperates the code into smaller files and can be used for a certain part of the code making things look better organized and easier to read.")