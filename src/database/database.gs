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

	},

	/**
	 * Mencari data berdasarkan kolom
	 */
	find(sheetName,columnIndex,value){

		const data = this.getAll(sheetName);

		return data.find((row,index)=>{

			if(index===0) return false;

			return row[columnIndex]===value;

		});

	},

	/**
	 * Mengecek apakah data sudah ada
	 */
	exists(sheetName,columnIndex,value){

		return this.find(sheetName,columnIndex,value)!==undefined;

	}

};

