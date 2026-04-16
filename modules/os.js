// OS Module can see the cpu model, cpu size , ram size
import os from "os";
console.log(os.totalmem()); // Total Memory
console.log(os.freemem()); // Available Memory
console.log(os.cpus()); // Check CPU
console.log(os.platform());
console.log(os.version());
console.log(os.userInfo());
