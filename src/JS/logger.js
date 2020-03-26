/* eslint-disable */

const levels = {
  log: "1e858d",
  warn: "dfa533",
  err: "f53634",
};

module.exports = (type, title, description) => {
  console.log(
    `%c${title}%c${description}`,
    `background:#${levels[type]} ; padding: 3px; border-radius: 3px 0 0 3px;  color: #fff`,
    "background:#35495e ; padding: 3px; border-radius: 0 3px 3px 0;  color: #fff"
  );
};
