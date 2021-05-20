function solution(N, stages) {
	var userCount = stages.length;

	var failCounts = [...new Array(N)].map(item => 0);
	stages.forEach(item => {
			if(item !== N + 1) {
				failCounts[item-1] = failCounts[item-1] == null ? 1 : failCounts[item-1] + 1;
			}
		});

	var reachCounts = new Array(N);
	reachCounts[0] = userCount - 0;
	reachCounts[1] = reachCounts[0] - failCounts[0];

	var failRates = new Array(N);
	if(N > 0) {
		failRates[0] = failCounts[0] / userCount;
	}
	if(N > 1) {
		failRates[1] = failCounts[1] / (reachCounts[0] - failCounts[0]);
	}

	for(var i = 2; i < failRates.length; i++) {
		reachCounts[i - 1] = reachCounts[i - 2] - failCounts[i - 2];
		failRates[i] = failCounts[i] / (reachCounts[i - 1] - failCounts[i - 1]);
	}

	return failRates
		.map((item, index) => {return {stage:index+1, rate:item};})
		.sort((a, b) => b.rate - a.rate)
		.map(item => item.stage)
		;
}

// var N = 5;
// var stages = [2, 1, 2, 6, 2, 4, 3, 3];
// var expected = [3,4,2,1,5];

// var N = 4;
// var stages = [4, 4, 4, 4, 4];
// var expected = [4, 1, 2, 3];

// var N = 1;
// var stages = [1, 1, 1, 1];
// var expected = [1];

var N = 2;
var stages = [1, 2, 3];
var expected = [2, 1];

var actual = solution(N, stages);

console.log(expected);
console.log(actual);
