const os = require("os");

// to show 32 bit or 64 bit architecture  // x64
console.log(os.arch());

// to show free memory
const freeMemory = os.freemem();
console.log(freeMemory);
console.log(`${freeMemory/1024/1024/1024}`);

// to show total memory
const totalMemory = os.totalmem();
console.log(totalMemory);
console.log(`${totalMemory/1024/1024/1024}`);

// to show hostname
console.log(os.hostname());

// to show platform
console.log(os.platform());

// to show temporary
console.log(os.tmpdir());

// to show operating system type
console.log(os.type());