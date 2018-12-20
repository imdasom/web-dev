function solution(N, stages) {

	var playerCountMap = {};
	for(var i = 0; i < N; i++) {
		playerCountMap[i] = 0;
	}

	stages.forEach((stage) => {
		playerCountMap[stage-1] = playerCountMap[stage-1] + 1;
	});

	var stagePlayers = [playerCountMap[0]];
	var stageTotals = [stages.length];
	var stageFailure = [stagePlayers[0] / stageTotals[0]];
	for(var i = 1; i < N; i++) {
		stagePlayers[i] = playerCountMap[i];
		stageTotals[i] = stageTotals[i-1] - stagePlayers[i-1];
		stageFailure[i] = stagePlayers[i] / stageTotals[i];
	}

	return stageFailure.map((rate, index) => ({stage:index+1, rate:rate}))
							 .sort(sortByRate)
							 .map((rateAndIndex, index) => (rateAndIndex.stage));
}

function sortByRate(rateAndIndex1, rateAndIndex2) {
	return rateAndIndex1.rate > rateAndIndex2.rate ? -1 : rateAndIndex1.rate < rateAndIndex2.rate ? 1 : 0;
}

var N = 5;
var stages = [2, 1, 2, 6, 2, 4, 3, 3];
var expected = [3,4,2,1,5];
var actual = solution(N, stages);

console.log(expected);
console.log(actual);