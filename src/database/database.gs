/**
 * ======================================================
 * WAVORA Operating System
 * Database Engine
 * Version 0.1.0
 * ======================================================
 */

const Database = {

  /**
   * Mengambil sheet berdasarkan nama
   */
  getSheet(sheetName){

    const ss = SpreadsheetApp.getActiveSpreadsheet();

    const sheet = ss.getSheetByName(sheetName);

    if(!sheet){

      throw new Error(`Sheet "${sheetName}" tidak ditemukan.`);

    }

    return sheet;

  },

  /**
   * Mengambil seluruh data
   */
  getAll(sheetName){

    const sheet = this.getSheet(sheetName);

    return sheet.getDataRange().getValues();

  },

  /**
   * Menambahkan satu baris data
   */
  insert(sheetName,rowData){

    const sheet = this.getSheet(sheetName);

    sheet.appendRow(rowData);

    return true;

  }

};
