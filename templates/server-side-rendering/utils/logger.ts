const logger = {
  log: function () {
    console.log(arguments)
  },
  info: function () {
    console.info(arguments)
  },
  warn: function () {
    console.warn(arguments)
  },
  error: function () {
    console.error(arguments)
  },
  time: function () {
  },
  timeEnd: function () {
  }
}

export default logger
