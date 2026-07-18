const AthleteService = {

  addAthlete(){

  },

  updateAthlete(){

  },

  deleteAthlete(){

  },

  getAthlete(){

  },

  getAllAthletes(){

  }

};

// Export for CommonJS and global usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AthleteService;
} else {
  this.AthleteService = AthleteService;
}
