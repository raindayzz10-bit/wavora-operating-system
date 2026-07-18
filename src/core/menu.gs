/**
 * ======================================================
 * WOS Menu
 * ======================================================
 */

const Menu = {

  build() {

    SpreadsheetApp.getUi()

      .createMenu("🌊 WOS")

      .addItem("➕ Tambah Atlet", "showAthleteForm")

      .addSeparator()

      .addItem("📊 Dashboard", "openDashboard")

      .addSeparator()

      .addItem("ℹ Tentang WOS", "aboutWOS")

      .addToUi();

  }

};

function aboutWOS() {

  SpreadsheetApp.getUi().alert(

`${CONFIG.APP.NAME}

Versi ${CONFIG.APP.VERSION}

Powered by WAVORA Aquatic Academy`

  );

}

function showAthleteForm() {
  SpreadsheetApp.getUi().alert("Athlete Registration Module masih dalam pengembangan.");
}

function openDashboard() {
  SpreadsheetApp.getUi().alert("Dashboard WOS masih dalam pengembangan.");
}
