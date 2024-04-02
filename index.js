//code your solution here
// Defines saturdayFun function declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  
  // Defines mondayWork function expression
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Defines wrapAdjective function
  function wrapAdjective(visualFlair = "*") {
    return function (adjective) {
      return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
  }