'use strict';

const poll = {
  question: 'Best language ?',
  answers: new Array(4).fill(0),
  bots : ['0. js', '1. c', '2. java', '3. c#'],
  addNewAnswer: function () {
    const answer = Number(
         prompt(`${this.question}\n${this.bots.join('\n')}`)
    );
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    this.displayResult();
    this.displayResult('string');
  },
  displayResult: function (type = 'array') {
    if(type === 'array') console.log(this.answers)
    else if(type === 'string') console.log(`결과는 ${this.answers.join(', ')}`)
  },
}

document.querySelector('.poll').addEventListener('click',
     poll.addNewAnswer.bind(poll));