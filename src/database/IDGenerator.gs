/**
 * ======================================================
 * WAVORA Operating System
 * ID Generator
 * Version 0.1.0
 * ======================================================
 */

const IDGenerator = {

  generateAthleteID(){

    const data = Database.getAll(CONFIG.SHEETS.ATHLETES);

    if(data.length <= 1){

      return CONFIG.ID.PREFIX + "-0001";

    }

    const lastRow = data[data.length - 1];

    const lastID = lastRow[0];

    const match = lastID.match(/(\d+)$/);
    const nextNumber = match ? parseInt(match[1], 10) + 1 : 1;
    const paddedNumber = String(nextNumber).padStart(4, '0');

    return CONFIG.ID.PREFIX + "-" + paddedNumber;

  }

};
