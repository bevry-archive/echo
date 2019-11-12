"use strict";
module.exports = function(args) {
  console.log(require("util").inspect(args, { colors: true }));
};
