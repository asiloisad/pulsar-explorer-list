const { globSync } = require("glob");

module.exports = function(pattern) {
  const entries = globSync(pattern, {
    silent: true,
    nosort: true,
    dot: true,
    nodir: false,
    absolute: true,
  });
  emit('fuzzy-explorer:entries', entries);
};
