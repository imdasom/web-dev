function solution(rawRecords) {
    var records = rawRecords.map(rawRecord => (RecordFactory.getInstance(rawRecord)));
    var aliasMap = getAliasMap(records);
    arrangeAlias(records, aliasMap);
    return records.filter(record => { return !(record instanceof RecordChange); })
    			   .map(record => { return record.toString(); });
}

function getAliasMap(records) {
	var aliasMap = {};
	records.forEach((record, index) => {
    	if(record.action === "Enter" || record.action === "Change") {
    		aliasMap[record.id] = record.alias;
    	}
    });
    return aliasMap;
}

function arrangeAlias(records, aliasMap) {
	records.forEach((record, index) => {
		    	record.alias = aliasMap[record.id];
		    });
}

function Record(action, id, alias) {
	this.action = action;
	this.id = id;
	this.alias = alias;
}

function RecordEnter(splitData) {
	Record.call(this, splitData[0], splitData[1], splitData[2]);
	this.actionToString = "들어왔습니다";
	this.toString = function() {
		return this.alias + "님이 " + this.actionToString + ".";
	};
}

function RecordLeave(splitData) {
	Record.call(this, splitData[0], splitData[1], undefined);
	this.actionToString = "나갔습니다";
	this.toString = function() {
		return this.alias + "님이 " + this.actionToString + ".";
	};
}

function RecordChange(splitData) {
	Record.call(this, splitData[0], splitData[1], splitData[2]);
}

var RecordFactory = {
	getInstance : function(rawData) {
		var splitData = rawData.split(" ");
		if(splitData.length > 1) {
			if(splitData[0] === "Enter") {
				return new RecordEnter(splitData);
			} else if(splitData[0] === "Leave") {
				return new RecordLeave(splitData);
			} else if(splitData[0] === "Change") {
				return new RecordChange(splitData);
			} else {
				throw new Error("Cannot find action type.");
			}
		}
		return null;
	}
};


// MAIN
var record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
var expected = ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."];
var actual = solution(record);

// ASSERT
console.log(expected);
console.log(actual);

for (var i = 0; i < expected.length; i++) {
	if(expected[i] !== actual[i]) {
		console.log(i);
		console.log("fail");
		break;
	}
}