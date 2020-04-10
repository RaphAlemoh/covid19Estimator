const covid19ImpactEstimator = (data) => {
  const impact = {
    currentlyInfected: data.reportedCases * 10,
    get infectionsByRequestedTime() {
      return this.currentlyInfected * 512;
    },
    get severeCasesByRequestedTime() {
      return this.infectionsByRequestedTime * 0.15;
    },
    get hospitalBedsByRequestedTime() {
      return data.totalHospitalBeds * 0.35 - this.severeCasesByRequestedTime;
    },
    get casesForICUByRequestedTime() {
      return this.infectionsByRequestedTime * 0.5;
    },
    get casesForVentilatorsByRequestedTime() {
      return this.infectionsByRequestedTime * 0.2;
    },
    get dollarsInFlight() {
      return (this.infectionsByRequestedTime * 0.65 * data.region.avgDailyIncomeInUSD * 30).toFixed(2);
    }
  };
  const severeImpact = {
    currentlyInfected: data.reportedCases * 50,

    get infectionsByRequestedTime() {
      return this.currentlyInfected * 512;
    },

    get severeCasesByRequestedTime() {
      return this.infectionsByRequestedTime * 0.15;
    },

    get hospitalBedsByRequestedTime() {
      return data.totalHospitalBeds * 0.35 - this.severeCasesByRequestedTime;
    },

    get casesForICUByRequestedTime() {
      return this.infectionsByRequestedTime * 0.5;
    },

    get casesForVentilatorsByRequestedTime() {
      return this.infectionsByRequestedTime * 0.2;
    },

    get dollarsInFlight() {
      return (this.infectionsByRequestedTime * 0.65 * data.region.avgDailyIncomeInUSD * 30).toFixed(2);
    }
  };
  return {
    data,
    impact,
    severeImpact
  };
};
export default covid19ImpactEstimator;
