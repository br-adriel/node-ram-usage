const os = require('os');
const { arch, platform, totalmem, freemem } = os;

setInterval(() => {
  const tRAM = totalmem() / 1024 / 1024;
  const fRAM = freemem() / 1024 / 1024;
  const usage = 100 - (fRAM / tRAM) * 100;

  const stats = {
    os: platform(),
    arch: arch(),
    totalRAM: `${parseInt(tRAM)}MB`,
    freeRAM: `${parseInt(fRAM)}MB`,
    usage: `${usage.toFixed(2)}%`,
  };

  console.clear();
  console.table(stats);

  exports.stats = stats;
}, 1000);
