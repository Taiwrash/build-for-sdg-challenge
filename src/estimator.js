const covid19ImpactEstimator = (data) => {
    const impact = {
        currentlyInfected: reportedCases * 10,
        infectionsByRequestedTime: currentlyInfected * 512,
        severeCasesByrequestedTime: infectionsByRequestedTime * 15/100 
    }
    const severeImpact = {
        currentlyInfected: reportedCases * 50,
        infectionsByRequestedTime: currentlyInfected * 512,
        severeCasesByrequestedTime: infectionsByRequestedTime * 15/100

    }
    const totalHospitalBeds = {};
    return{
        data,
        impact,
        severeImpact
    }
}

 export default covid19ImpactEstimator;
