import mole from "mole";
import fontSize from "./vars/font-size/index.js";
mole.config("src/mole.config.js");
mole.use(...fontSize);
console.log(mole);
console.log(mole.render());
