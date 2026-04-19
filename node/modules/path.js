// Path Module
// File path folder path can find , file extension,
// jpg is Only Allow  jpg file is used to find
// Not to run in nodemon server  to run this file just write node modules/path.js
import path from "path";
const filePath = "folder1/folder2/folder3/readme.txt";

//filename : path.baseName();
const fileName = path.basename(filePath);
console.log(fileName);

// Extension: path.extname();
console.log(path.extname(fileName));

// folders: path.dirname();
console.log(path.dirname(fileName));

//URL Module
import url from "url";
const fileName = url.fileURLToPath(import.meta.url);
console.log(fileName);

//dirname
const dirName = url.fileURLToPath(import.meta.url);
console.log(dirName);
