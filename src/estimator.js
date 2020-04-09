const covid19ImpactEstimator = (data) =>{
    let impact = {
        currentlyInfected: reportedCases * 10,
        infectionsByRequestedTime: currentlyInfected * 512,
        severeCasesByrequestedTime: infectionsByRequestedTime * 15/100 
    }

    let severeImpact = {
        currentlyInfected: reportedCases * 50,
        infectionsByRequestedTime: currentlyInfected * 512,
        severeCasesByrequestedTime: infectionsByRequestedTime * 15/100

    }

    let totalHospitalBeds = {};
    return{
        data,
        impact,
        severeImpact
    }
}

 export default covid19ImpactEstimator;
