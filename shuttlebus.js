var MINUTE = 1;
var HOUR = MINUTE * 60;

function solution(n, t, m, timetable) {
    var timetableQueue = timetable.map((time) => {return timeToNumber(time)}).sort((a, b) => {return a - b});
    var lastTakeTime = getLastTakeTime(n, t, m, timetableQueue);
    return longToString(lastTakeTime);
}

function getLastTakeTime(n, t, m, timetableQueue) {
    var lastAvailableTime = undefined;
    for (var shuttleTime = 9 * HOUR, remainingShuttleBus = n; remainingShuttleBus > 0; shuttleTime += (t * MINUTE), remainingShuttleBus--) {
        var waitingCrewNum = letCrewWait(timetableQueue, shuttleTime);
        var isRemain = waitingCrewNum < m;
        if(isLastShuttleBus(remainingShuttleBus)) {
            var lastItem = timetableQueue[m - 1];
            lastAvailableTime = isRemain ? shuttleTime : lastItem - MINUTE; 
            break;
        } else {
            letCrewTakeShuttle(timetableQueue, isRemain ? waitingCrewNum : m);
        }
    }
    return lastAvailableTime;
}

function letCrewWait(timetableQueue, currentTime) {
    return timetableQueue.filter((item) => item <= currentTime).length;
}

function letCrewTakeShuttle(timetableQueue, waitingCrewNum) {
    timetableQueue.splice(0, waitingCrewNum);
}

function isLastShuttleBus(remainingShuttleBus) {
    return remainingShuttleBus === 1;
}

function timeToNumber(time) {
    return (time.substring(0, 2) * HOUR) + (time.substring(3, 5) * MINUTE);
}

function longToString(time) {
    var hour = Math.floor(time / HOUR);
    var minute = Math.floor((time % HOUR) / MINUTE);
    return String(hour).padStart(2, '0') + ":" + String(minute).padStart(2, '0');
}

var input = {
    // n : 2, t : 1, m : 2, timetable : ["09:00", "09:00", "09:00", "09:00"]
    // n : 1, t : 1, m : 5, timetable : ["08:00", "08:01", "08:02", "08:03"]
    n : 4, t : 1, m : 2, timetable : ["08:00", "08:01", "08:01", "08:02", "08:02", "09:02", "09:03", "09:03"]
    // n : 10, t : 60, m : 45, timetable : ["23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"]
};
var actual = solution(input.n, input.t, input.m, input.timetable);
var expected = undefined;

console.log(actual);