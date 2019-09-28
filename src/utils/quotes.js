const FALLBACK_QUOTES = [
  {
    "author": "Gordon B. Hinckley",
    "details": "\"You can't build a great building on a weak foundation. You must have a solid foundation if you're going to have a strong superstructure.\"",
    "date": "2019-09-26"
  }, {
    "author": "Fitzhugh Dodson",
    "details": "\"Without goals, and plans to reach them, you are like a ship that has set sail with no destination.\"",
    "date": "2019-09-27"
  }, {
    "author": "Colin Powell",
    "details": "\"If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.\"",
    "date": "2019-09-28"
  }, {
    "author": "Vince Lombardi",
    "details": "\"The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.\"",
    "date": "2019-09-29"
  }, {
    "author": "John Carmack",
    "details": "\"Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it. If you aren't sure which way to do something, do it both ways and see which works better.\"",
    "date": "2019-09-30"
  }, {
    "author": "Dwayne Johnson",
    "details": "\"I'm always asked, 'What's the secret to success?'. But there are no secrets. Be humble. Be hungry. And always be the hardest worker in the room.\"",
    "date": "2019-10-01"
  }, {
    "author": "Oprah Winfrey",
    "details": "\"Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it.\"",
    "date": "2019-10-02"
  }, {
    "author": "Pablo Picasso",
    "details": "\"Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon which we must vigorously act. There is no other route to success.\"",
    "date": "2019-10-03"
  }, {
    "author": "Anne Frank",
    "details": "\"Everyone has inside of them a piece of good news. The good news is that you don't know how great you can be! How much you can love! What you can accomplish! And what your potential is!\"",
    "date": "2019-10-04"
  }, {
    "author": "Rihanna",
    "details": "\"I always believed that when you follow your heart or your gut, when you really follow the things that feel great to you, you can never lose, because settling is the worst feeling in theworld.\"",
    "date": "2019-10-05"
  }, {
    "author": "Denis Waitley",
    "details": "\"Learn from the past, set vivid, detailed goals for the future, and live in the only moment of time over which you have any control: now.\"",
    "date": "2019-10-06"
  }, {
    "author": "Michael Jordan",
    "details": "\"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.\"",
    "date": "2019-10-07"
  }, {
    "author": "Earl Nightingale",
    "details": "\"All you need is the plan, the road map, and the courage to press on to your destination.\"",
    "date": "2019-10-08"
  }, {
    "author": "Heath Ledger",
    "details": "\"If you're just safe about the choices you make, you don't grow.\"",
    "date": "2019-10-09"
  }, {
    "author": "Willie Nelson",
    "details": "\"Be here. Be present. Wherever you are, be there.\"",
    "date": "2019-10-10"
  }, {
    "author": "Drake",
    "details": "\"Accept yourself. You don't have to prove shitto no one except yourself.\"",
    "date": "2019-10-11"
  }, {
    "author": "Les Brown",
    "details": "\"Help others achieve their dreams and you will achieve yours.\"",
    "date": "2019-10-12"
  }, {
    "author": "Brendon Burchard",
    "details": "\"The first thing successful people do is view failure as a positive signal to success.\"",
    "date": "2019-10-13"
  }, {
    "author": "Jennifer Aniston",
    "details": "\"There are no regrets in life. Just lessons.\"",
    "date": "2019-10-14"
  }, {
    "author": "Oprah Winfrey",
    "details": "\"The more you praise and celebrate your life, the more there is in life to celebrate.\"",
    "date": "2019-10-15"
  }, {
    "author": "Paulo Coelho",
    "details": "\"Be brave. Take risks. Nothing can substitute experience.\"",
    "date": "2019-10-16"
  }, {
    "author": "Sam Walton",
    "details": "\"Celebrate your successes. Find some humor in your failures.\"",
    "date": "2019-10-17"
  }, {
    "author": "Gary Vaynerchuk",
    "details": "\"It's easy to dream about it, but much harder to execute it.\"",
    "date": "2019-10-18"
  }, {
    "author": "George Bernard Shaw",
    "details": "\"Progress is imposslbe without change, and those who cannot change their minds cannot chang anything.\"",
    "date": "2019-10-19"
  }, {
    "author": "Rihanna",
    "details": "\"If you don't live your life, who the fuck will?\"",
    "date": "2019-10-20"
  }, {
    "author": "Oprah Winfrey",
    "details": "\"Surround yourself with onlypeople who are going to lift you higher.\"",
    "date": "2019-10-21"
  }, {
    "author": "Brendon Burchard",
    "details": "\"Remember: when you knock on the door of opportunity, it is work who answers!\"",
    "date": "2019-10-22"
  }, {
    "author": "Drake",
    "details": "\"Sometimes it's the journey that teaches you a lot about your destination.\"",
    "date": "2019-10-23"
  }, {
    "author": "Kevin Hart",
    "details": "\"You get one life. I'm going to embrace mine.\"",
    "date": "2019-10-24"
  }, {
    "author": "Adam Levine",
    "details": "\"Fitting in is boring for anyone who wants to be extraordinary.\"",
    "date": "2019-10-25"
  }, {
    "author": "Brian Tracy",
    "details": "\"Your life only gets better when you get better.\"",
    "date": "2019-10-26"
  }, {
    "author": "Conor McGregor",
    "details": "\"What defines us is how well we rise after falling.\"",
    "date": "2019-10-27"
  }, {
    "author": "Mr. Miyagi",
    "details": "\"It's ok to lose to opponent. It's never okay to lose to fear.\"",
    "date": "2019-10-28"
  }, {
    "author": "Satya Nadella",
    "details": "\"Believe me, my journey has not been a simple journey of progress. There have been many ups and downs, and it is the choices that I made at each of those times that have helped shape what I have achieved.\"",
    "date": "2019-10-29"
  }, {
    "author": "Rihanna",
    "details": "\"Let go of the things that make you feel dead! Life is worth living!\"",
    "date": "2019-10-30"
  }, {
    "author": "Drake",
    "details": "\"Before you give up, think of the reason you held on so long.\"",
    "date": "2019-10-31"
  }, {
    "author": "Emma Watson",
    "details": "\"I don't want other people to decide what I am. I want to decide that for myself.\"",
    "date": "2019-11-01"
  }, {
    "author": "Casey Neistat",
    "details": "\"Without a goal you can't score.\"",
    "date": "2019-11-02"
  }, {
    "author": "Richard Branson",
    "details": "\"Listen. Take the best. Leave the rest.\"",
    "date": "2019-11-03"
  }, {
    "author": "Angelina Jolie",
    "details": "\"People say that you're going the wrong way when it's simply a way of your own.\"",
    "date": "2019-11-04"
  }, {
    "author": "Robin Sharma",
    "details": "\"Don't live the same year 75 times andcall it a life.\"",
    "date": "2019-11-05"
  }, {
    "author": "John C. Maxwell",
    "details": "\"People may hear your words, but they feel your attitude.\"",
    "date": "2019-11-06"
  }, {
    "author": "Confucius",
    "details": "\"I hear and I forget. I see and I remember. I do and I understand.\"",
    "date": "2019-11-07"
  }, {
    "author": "Bruce Lee",
    "details": "\"If you spend too much time thinking about a thing, you'll never get it done.\"",
    "date": "2019-11-08"
  }, {
    "author": "Shirley Chisholm",
    "details": "\"You don't make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas.\"",
    "date": "2019-11-09"
  }, {
    "author": "Earl Nightingale",
    "details": "\"We become what we think about.\"",
    "date": "2019-11-10"
  }, {
    "author": "Jim Rohn",
    "details": "\"Either you run the day, or the day runs you.\"",
    "date": "2019-11-11"
  }, {
    "author": "George Addair",
    "details": "\"Everything you've ever wanted is on theother side of fear.\"",
    "date": "2019-11-12"
  }, {
    "author": "Arthur Ashe",
    "details": "\"Start where you are. Use what you have. Do what you can.\"",
    "date": "2019-11-13"
  }, {
    "author": "Les Brown",
    "details": "\"Too many of us are not living our dreams because we are living our fears.\"",
    "date": "2019-11-14"
  }, {
    "author": "Farrah Gray",
    "details": "\"Build your own dreams, or someone else will hire you to build theirs.\"",
    "date": "2019-11-15"
  }, {
    "author": "Confucius",
    "details": "\"It does not matter how slowly yougo as long as you do not stop.\"",
    "date": "2019-11-16"
  }, {
    "author": "Tony Robbins",
    "details": "\"If yodo what you've always done, you'll get what you've always gotten.\"",
    "date": "2019-11-17"
  }, {
    "author": "Benjamin Franklin",
    "details": "\"Either write something worth reading or do something worth writing.\"",
    "date": "2019-11-18"
  }, {
    "author": "Winston Churchill",
    "details": "\"Attitude is a little thing that makes a big difference.\"",
    "date": "2019-11-19"
  }, {
    "author": "Martin Luther King Jr",
    "details": "\"The time is always right to do what is right.\"",
    "date": "2019-11-20"
  }, {
    "author": "Joe Rogan",
    "details": "\"Be the hero of your own story.\"",
    "date": "2019-11-21"
  }, {
    "author": "anonymous",
    "details": "\"If you want to experience significant progress toward your goal, you need to be intentional about the work you're doing every day.\"",
    "date": "2019-11-22"
  }, {
    "author": "James Frey",
    "details": "\"Loss of control is always the source of fear. It is also, however, always the source of change.\"",
    "date": "2019-11-23"
  }, {
    "author": "Glinda, The Wizard of Oz",
    "details": "\"You had the power all along, my dear. You just had to learn it for yourself.\"",
    "date": "2019-11-24"
  }, {
    "author": "Maya Angelou",
    "details": "\"There is no greater agony than bearing an untold story inside of you.\"",
    "date": "2019-11-25"
  }, {
    "author": "Beyonce",
    "details": "\"Don’t try to lessen yourself for the world; let the world catch up toyou.\"",
    "date": "2019-11-26"
  }, {
    "author": "Tony Robbins",
    "details": "\"It is the practise you do in private that you'll be rewarded for in public.\"",
    "date": "2019-11-27"
  }, {
    "author": "Frank Sinatra",
    "details": "\"The best revenge is massive success.\"",
    "date": "2019-11-28"
  }, {
    "author": "B.B. King",
    "details": "\"The beautiful thing about learning is nobody can take it away from you.\"",
    "date": "2019-11-29"
  }
]

export const getRandom = () => {
  const randomIndex = Math.floor(Math.random() * FALLBACK_QUOTES.length)

  return FALLBACK_QUOTES[randomIndex]
}

export default FALLBACK_QUOTES