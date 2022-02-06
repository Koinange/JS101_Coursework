function minilang(commandString) {
  let stack = [];
  let register = 0;
  commandString.split(' ').forEach(element => {
    if (Number(element)) register = Number(element);
    if (element === 'PUSH') stack.push(register);
    if (element === 'ADD') register += stack.pop();
    if (element === 'SUB') register -= stack.pop();
    if (element === 'MULT') register *= stack.pop();
    if (element === 'DIV') register = Math.floor(register/stack.pop());
    if (element === 'REMAINDER') register %= stack.pop();
    if (element === 'POP') register = stack.pop();
    if (element === 'PRINT') console.log(register);
    });
}

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)