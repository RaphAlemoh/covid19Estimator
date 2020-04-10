const covid19ImpactEstimator = (data) => {
  const income = data.region.avgDailyIncomeInUSD;
  const population = data.region.avgDailyIncomePopulation;
  if (data.periodType === 'weeks') {
    data.timeToElapse *= 7;
  } else if (data.periodType === 'months') {
    data.timeToElapse *= 30;
  }
  const days = data.timeToElapse;
  const factor = Math.trunc(days / 3);
  const impact = {
    currentlyInfected: data.reportedCases * 10,
    get infectionsByRequestedTime() {
      return this.currentlyInfected * (2 ** factor);
    },
    get severeCasesByRequestedTime() {
      return this.infectionsByRequestedTime * 0.15;
    },
    get hospitalBedsByRequestedTime() {
      return data.totalHospitalBeds * 0.35 - this.severeCasesByRequestedTime;
    },
    get casesForICUByRequestedTime() {
      return this.infectionsByRequestedTime * 0.05;
    },
    get casesForVentilatorsByRequestedTime() {
      return this.infectionsByRequestedTime * 0.02;
    },
    get dollarsInFlight() {
      return this.infectionsByRequestedTime * 0.65 * income * days;
    }
  };
  const severeImpact = {
    currentlyInfected: data.reportedCases * 50,

    get infectionsByRequestedTime() {
      return this.currentlyInfected * (2 ** factor);
    },

    get severeCasesByRequestedTime() {
      return this.infectionsByRequestedTime * 0.15;
    },

    get hospitalBedsByRequestedTime() {
      return data.totalHospitalBeds * 0.35 - this.severeCasesByRequestedTime;
    },

    get casesForICUByRequestedTime() {
      return this.infectionsByRequestedTime * 0.05;
    },

    get casesForVentilatorsByRequestedTime() {
      return this.infectionsByRequestedTime * 0.02;
    },

    get dollarsInFlight() {
      return this.infectionsByRequestedTime * 0.65 * data.region.avgDailyIncomeInUSD * days;
    }
  };
  return {
    data,
    impact,
    severeImpact
  };
};
export default covid19ImpactEstimator;
