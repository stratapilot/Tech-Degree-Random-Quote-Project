/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quoteAndAuthor = [
  {
    
    quote: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    author:'Anonymous'

  },

  {
    
    quote: 'Without requirements or design, programming is the art of adding bugs to an empty text file.',
    author:'Louis Srygley'

  },

  {
    
    quote: 'Before software can be reusable it first has to be usable.',
    author: 'Ralph Johnson'

  },

  {
    
    quote: 'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.',
    author:'Gerald Weinberg'

  },

  {
    
    quote: 'Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development.',
    author:'Anonymous'

  },

  {
    
    quote: 'It’s not a bug – it’s an undocumented feature.',
    author:'Anonymous'

  },

  {
    
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    author:'Martin Golding'

  },

  {
    
    quote: 'Walking on water and developing software from a specification are easy if both are frozen.',
    author:'Edward V Berard'

  },

  {
    quote: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
    author:'Edsger Dijkstra'

  },

  {
    quote: 'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work. ',
    author:'Anonymous'

  },

  {
    
    quote: 'It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes. ',
    author:'Keith Braithwaite'

  },

  {
    
    quote: 'There are only two kinds of programming languages: those people always bitch about and those nobody uses.',
    author:'Bjarne Stroustrup'

  },

  {
    
    quote: 'The cheapest, fastest, and most reliable components are those that aren’t there.',
    author:'Gordon Bell'

  },

  {
    
    quote: 'The best performance improvement is the transition from the nonworking state to the working state. ',
    author:'J. Osterhout'

  },

  {
    
    quote: 'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
    author:'Seymour Cray)'

  },

  {
    
    quote: 'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.',
    author:'Mosher’s Law of Software Engineering'

  },

  {
    
    quote: 'Deleted code is debugged code.',
    author:'Jeff Sickel'

  },

  {
    
    quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning. ',
    author:'Rick Cookv'

  },

  {
    
    quote: 'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.',
    author:'Oktal'

  },

  {
    
    quote: 'In order to understand recursion, one must first understand recursion.',
    author:'Anonymous'

  },

];


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);