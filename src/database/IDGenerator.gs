/**
 * ======================================================
 * WAVORA Operating System
 * ID Generator
 * Version 1.0
 * ======================================================
 */

const IDGenerator = {

  /**
   * Generate ID Atlet
   * Contoh:
   * WVA-0001
   * WVA-0002
   */

  generateAthleteID(){

    const data = Database.getAll(CONFIG.SHEETS.ATHLETES);

    // Jika hanya ada header
    if(data.length <= 1){

      return CONFIG.ID.PREFIX + "-0001";

    }

    // Ambil ID terakhir
    const lastRow = data[data.length - 1];

    const lastID = lastRow[0];

    // Ambil angka setelah tanda "-"
    const lastNumber = parseInt(lastID.split("-")[1],10);

    // Tambah 1
    const nextNumber = lastNumber + 1;

    // Format menjadi 4 digit
    const formatted = String(nextNumber).padStart(CONFIG.ID.ATHLETE_DIGIT,"0");

    return CONFIG.ID.PREFIX + "-" + formatted;

  }

};
