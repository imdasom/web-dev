function solution(skill, skill_trees) {
  var answer = 0;
  var orderedSkillList = skill.split('');
  skill_trees.forEach(function(userSkillTree) {
    var skillIndexList = orderedSkillList.map(function(skillId) {
      return userSkillTree.indexOf(skillId);
    });
    var unsortedList = skillIndexList;
    var sortedList = skillIndexList.slice(0, skillIndexList.length).sort();
    var isPossibleSkillTree = JSON.stringify(sortedList) === JSON.stringify(unsortedList);
    answer = answer + (isPossibleSkillTree ? 1 : 0);
  });
  return answer;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));