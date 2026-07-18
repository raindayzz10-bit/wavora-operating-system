function testConfig() {

  Logger.log(CONFIG.APP.NAME);

  Logger.log(CONFIG.APP.VERSION);

  Logger.log(CONFIG.SHEETS.ATHLETES);

}

function testDatabase() {

  const data = Database.getAll(CONFIG.SHEETS.ATHLETES);

  Logger.log(data);

}
function hello() {

  Logger.log("HELLO WOS");

}
