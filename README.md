# Moving-Dots
Place obstacles and create a goal and the swarm of black dots will attempt to reach the goal. Tweak the parameters of evolution to see what is most effective and learn more about evolution along the way!

This is a project I made to learn more about genetic algorithms. I specifically made this project to be an interactive, I am a visual learner and found there was a lack of interactive tools online so I decided to make my own.

# Algorithm
A population of dots is placed on the screen with random positions, then the proccess of evolution repeats like so:

  1. 50% of the dots are removed. The dots farther from the goal have a higher chance of being removed.
  2. The surviving dots reproduce, creating new dots ontop of them
  3. The new dot's position is randomly mutated, sending it in a random direction
  4. Goto next generation
