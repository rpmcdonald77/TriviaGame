var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "What was the first year the Camaro was sold?",
  answers: ["1967", "1968", "1978", "2002"],
  correctAnswer: "1967"
}, {
  question: "The Camaro was built to compete with which car?",
  answers: ["Corvette", "Mustang", "Challenger", "GTO"],
  correctAnswer: "Mustang"
}, {
  question: "What size of V8 did the first Camaro have?",
  answers: ["289", "302", "327", "350"],
  correctAnswer: "327"
}, {
  question: "How many generations of the Camaro have there been?",
  answers: ["2", "3", "4", "5"],
  correctAnswer: "5"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    this.result();

},

result: function() {

  clearInterval(timer);

  $("#sub-wrapper h2").remove();

  panel.html("<h2>All Done!</h2>");
  panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
  panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
}
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
    game.start();
  });
  
  
  $(document).on("click", "#done", function() {
    game.done();
  });