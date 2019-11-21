let STORE = {
	currentQue: 0,
  score: 0,
	currentAnswer: null,
	questions: [{
  //q is question, a is answer, u is user answer, c is correct answer, r is result.
					// [0] (INTRO)
					q: 'Welcome the Smash Bros Quiz',
					a: ['Are you the greatest Smash player?, Well maybe not but at least you know who the characters are. Please press Smash to play. Goodluck and have fun'],
				},{
					// [1]
					q:'Who is the oldest Smash Charcter',
					a: ['Mario', 'Donkey Kong', 'Pac-Man', 'Mr. Game & Watch'],
					u: null,
					c: 3,
					r: null
				},{
					// [2]
					q: 'Who was the first DLC character?',
					a: ['Corrin', 'Lucas', 'Mewtwo', 'Ryu'],
					u: null,
					c: 2,
					r: null
				},{
					// [3]
					q: 'Which version of Link was never a fighter?',
					a: ['Ocarina of Time', 'Twilight Princess', 'Breath of the Wild', 'Skyward Sword'],
					u: null,
					c: 3,
					r: null
				},{
					// [4]
					q: 'Which character has never been a clone of Marth, or an echo fighter of Marth or his clone? ',
					a: ['Chrom', 'Ike', 'Lucina.', 'Roy'],
					u: null,
					c: 1,
					r: null
				},{
					// [5]
					q: 'Which Pokemon is not considered a starter?',
					a: ['Lucario', 'Pikachu', 'Squirtle', 'Charizard'],
					u: null,
					c: 0,
					r: null
				},{
					// [6]
					q: 'Who is considered the overall best character in Melee according to the Dec 15th Melee tier list',
					a: ['Falco', 'Capt. Falcon', 'Fox', 'Jigglypuff'],
					u: null,
					c: 2,
					r: null
				},{
					// [7]
					q: 'Which character had a perfect 1.0 on a tier list/ (Meaning everybody ranked this character number 1 on that specific tier list)',
					a: ['Ice Climbers', 'Meta Knight', 'Bayonetta', 'Cloud'],
					u: null,
					c: 1,
					r: null
				},{
					// [8]
					q: 'Who is currently as of November 18th, the best Smash Ultimate player?',
					a: ['MKLeo', 'Samsora', 'Tweek', 'Mars'],
					u: null,
					c: 0,
					r: null
				},{
					// [9]
					q: 'Which Character is Masahiro Sakurai the voice actor for?',
					a: ['Kirby', 'Pit', 'Palutena', 'King Dedede'],
					u: null,
					c: 3,
					r: null
				},{
					// [10]
					q: 'Which character has the fastest Aerial move?',
					a: ['Samus', 'Yoshi', 'Luigi', 'Little Mac'],
					u: null,
					c: 3,
					r: 'Correct'
				},{
					// [11] (END)
					q: 'Well, you made it to the end. See your results below:',
					a: [],
					u: null,
					c: null
				}]
    };
    
    
//Shows Questions and the Question number
  function question(){
	var currentQue = STORE.currentQue;
	$('#count').text('Question '+currentQue+' of '+(STORE.questions.length-2));
	$('#question').text(STORE.questions[currentQue].q);
	$('#result').hide();
	firstSelect();
	if(currentQue === 0){ // INTRO
		$('#count').css('visibility', 'hidden');
		STORE.questions[currentQue].a.forEach(function(answer, index){
			var introPage = `<p><strong>${answer}</strong></p>`;
			$('#intro').append(introPage);
		});
		$('.answersChoice').hide();
		$('#buttonSub').show().text('Smash');
		$('#buttonCon').hide();
	}
	else if(currentQue == 11){ // ENDING RESULTS
		$('#count').css('visibility', 'hidden');
		getResults();
		for (i = 1; i < STORE.questions.length-1; i++){
				var results = {
					n: i,
					q: STORE.questions[i].q,
					c: STORE.questions[i].a[STORE.questions[i].c],
					u: STORE.questions[i].a[STORE.questions[i].u],
					r: STORE.questions[i].r
				}
			var resultsHTML = `<p>${results.n}. ${results.q}<br>Correct Answer: <b>${results.c}</b><br>Your Answer: <b>${results.u}</b><br>Result: <b>${results.r}</b></p>`;
      if(i === 1){
      $('#ending').append(`<span style="font-size:40px;"><br>Your total score is <b>${STORE.score}</b> out of <b>10</b>.</span>`);
      }
			$('.answersChoice').hide();
			$('#ending').hide();
			$('#ending').append(resultsHTML);
      if(i === 10){
      $('#ending').append(`<span style="font-size:40px;"><b>Please press restart to play again</b></span>`);
      }
      $('#ending').fadeIn();
			$('#buttonSub').show().text('Restart');
			$('#buttonCon').hide();
		};


	}
	else{ //Actual Questions
		$('#count').css('visibility', 'visible');
		$('#intro').hide();
		$('.answersChoice').show();
		STORE.questions[currentQue].a.forEach(function(answer, index){ 
			$('label[for="answer-'+index+'"]').text(answer);
		});
		$('#buttonSub').show().text('Submit');
		$('#buttonCon').hide();
	}
}