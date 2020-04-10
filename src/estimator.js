const covid19ImpactEstimator = (data) => {
    let data = {
        region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
        },
        periodType: "days",
        timeToElapse: 58,
        reportedCases: 674,
        population: 66622705,
        totalHospitalBeds: 1380614
        };    

        let impact = {
        currentlyInfected : data.reportedCases * 10,
        
        get infectionsByRequestedTime(){
                return this.currentlyInfected * 512
            },

        get severeCasesByRequestedTime(){
                return this.infectionsByRequestedTime * 0.15
            },

        get hospitalBedsByRequestedTime(){
                return  data.totalHospitalBeds * 0.35 - this.severeCasesByRequestedTime
            },

        get casesForICUByRequestedTime(){
            return  this.infectionsByRequestedTime * 0.5
        },

        get casesForVentilatorsByRequestedTime(){
            return  this.infectionsByRequestedTime * 0.2
        },

        get dollarsInFlight(){
            return (this.infectionsByRequestedTime * 0.65 * data.region.avgDailyIncomeInUSD * 30).toFixed(2);
        }
    
        };


    let severeImpact = {
        currentlyInfected : data.reportedCases * 50,

        get infectionsByRequestedTime(){
                return this.currentlyInfected * 512
            },

        get severeCasesByRequestedTime(){
                return this.infectionsByRequestedTime * 0.15
            },

        get hospitalBedsByRequestedTime(){
                return  data.totalHospitalBeds * 0.35 - this.severeCasesByRequestedTime
            },

        get casesForICUByRequestedTime(){
            return  this.infectionsByRequestedTime * 0.5
        },

        get casesForVentilatorsByRequestedTime(){
            return  this.infectionsByRequestedTime * 0.2
        },
        
        get dollarsInFlight(){
            return (this.infectionsByRequestedTime * 0.65 * data.region.avgDailyIncomeInUSD * 30).toFixed(2);
        }

        

    };

    return {
        data: {},
        impact: {},
        severeImpact : {},
    };
};

export default covid19ImpactEstimator;
