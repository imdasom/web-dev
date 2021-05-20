
//https://jason0853.github.io/2018/03/02/2018-kakao-blind-recruitment-round-1-4/

const test = [
  { n: 1, t: 1, m: 5, timetable: ["08:00", "08:01", "08:02", "08:03"] },
  { n: 2, t: 10, m: 2, timetable: ["09:10", "09:09", "08:00"] },
  { n: 2, t: 1, m: 2, timetable: ["09:00", "09:00", "09:00", "09:00"] },
  { n: 1, t: 1, m: 5, timetable: ["00:01", "00:01", "00:01", "00:01", "00:01"] },
  { n: 1, t: 1, m: 1, timetable: ["23:59"] },
  { n: 10, t: 60, m: 45, timetable: ["23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"] },
];

function shuttleBus(n, t, m, timetable) {
  function calculateTime(str) {
    const hour = Number(str.substr(0, 2)) * 60,
          min = Number(str.substr(3, 2)) * 1;
    return hour + min;
  }
  
  function formatTime(num) {
    const hh = String(Math.floor(num / 60)).padStart(2, '0'),
          mm = String(num % 60).padStart(2, '0');
    return `${hh}:${mm}`;
  }

  const startTime = calculateTime('09:00'),
        lastTime = startTime + t * (n - 1),
        crewTime = timetable.map(calculateTime).filter(time => time <= lastTime).sort();

  for (let i = 0; i < n; i++) {
    const shuttleTime = startTime + i * t,
          crewNum = crewTime.filter(time => time <= shuttleTime).length;

    if (i === n - 1) {
      if (crewNum < m) return formatTime(lastTime);
      return formatTime(crewTime[m - 1] - 1);
    } else {
      if (crewNum > m) {
        crewTime.splice(0, m);
      } else {
        crewTime.splice(0, crewNum);
      }
    }
  }
}

for (let obj of test) {
  console.log(shuttleBus(obj.n, obj.t, obj.m, obj.timetable));
}

// output: 09:00, 09:09, 08:59, 00:00, 09:00, 18:00

