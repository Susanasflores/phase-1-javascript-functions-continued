function saturdayFun(activityOne = "roller-skate") {
    return "This Saturday, I want to " + activityOne + "!";
  } 
  saturdayFun("This Saturday, I want to bathe my dog!");

  const mondayWork = function(activity = "go to the office") {
    return "This Monday, I will " + activity + ".";
  };
  mondayWork();


  const wrapAdjective = function(highlight = "*") {
    return function(adjective) {
      return "You are " + highlight + adjective + highlight + "!";
    };
  };
  
  let result = wrapAdjective('*');
  let emphatic = result("a hard worker");
  console.log(emphatic);


  const wrapAdjective2 = function(highlight = "||") {
    return function(adjective) {
      return "You are " + highlight + adjective + highlight + "!";
    };
  };
  let result2 = wrapAdjective("||");
  let emphatic2 = result("a dedicated programmer");
  console.log(emphatic);