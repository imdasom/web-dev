function solution(files) {
	return files.map((file, index) => ({file, index}))
				.sort(compareFunction)
				.map((fileAndIndex) => (fileAndIndex.file));
}

function compareFunction(file1, file2) {
	var fileNameObject1 = getFileNameObject(file1.file);
	var fileNameObject2 = getFileNameObject(file2.file);
	var headResult = compareString(fileNameObject1.HEAD, fileNameObject2.HEAD);
	if (headResult !== 0) {
		return headResult;
	}
	var n6umberResult = compareNumber(fileNameObject1.NUMBER, fileNameObject2.NUMBER);
	if(numberResult !== 0) {
		return numberResult;
	}
	return file1.index < file2.index ? -1 : file1.index > file2.index ? 1 : 0;
}

function getFileNameObject(name) {
	var regExp = /([a-zA-Z-.\s]*){1}([\d]{1,5}){1}([a-zA-Z-.\s\d]*){1}/;
	var matchResult = name.match(regExp);
	return {
		HEAD : matchResult[1],
		NUMBER : matchResult[2],
		TAIL : matchResult[3]
	};
}

function compareString(head1, head2) {
	var head1UpperCase = head1.toUpperCase();
	var head2UpperCase = head2.toUpperCase();
	return head1UpperCase < head2UpperCase ? -1 : head1UpperCase > head2UpperCase ? 1 : 0;
}

function compareNumber(numberStr1, numberStr2) {
	var number1 = Number(numberStr1);
	var number2 = Number(numberStr2);
	return number1 - number2;
}

var input = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];
var outputExpected = ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"];
// var input = ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"];
// var outputExpected = ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"];
var outputActual = solution(input);

console.log(outputExpected);
console.log(outputActual);

for (var i = 0; i < outputExpected.length; i++) {
	if(outputExpected[i] !== outputActual[i]) {
		console.log(i);
		console.log("fail");
		break;
	}
}