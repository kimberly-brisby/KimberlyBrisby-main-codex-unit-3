import {cpus} from "node:os";
import {totalmem} from "node:os";
import {freemem} from "node:os";
import { machine } from "node:os";
import { platform } from "node:os";

console.log(cpus);
console.log(totalmem);
console.log(freemem);
console.log(machine);
console.log(platform);