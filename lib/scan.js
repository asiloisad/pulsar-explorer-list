const { globSync } = require("glob");

process.on("message", ({ pattern }) => {
  const entries = globSync(pattern, {
    silent: true,
    nosort: true,
    dot: true,
    nodir: false,
    absolute: true,
  });
  process.send(entries);
  process.exit();
});
