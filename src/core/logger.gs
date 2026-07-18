/**
 * ======================================================
 * WOS Logger
 * ======================================================
 */

const LoggerWOS = {

  info(message) {
    Logger.log("[INFO] " + message);
  },

  warning(message) {
    Logger.log("[WARNING] " + message);
  },

  error(message) {
    Logger.log("[ERROR] " + message);
  }

};
