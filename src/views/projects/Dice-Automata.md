<route lang="yaml">
meta:
  title: Dice Automata
  tags: [game jam]
  coverImage: https://img.itch.zone/aW1hZ2UvMTYyMTg3NS85NDk2ODY3LnBuZw==/794x1000/s1fI8M.png
</route>

# Dice Automata

### <a href="https://reedsman.itch.io/dice-automata">Play Dice Automata on itch.io</a>
### <a href="https://itch.io/jam/gmtk-jam-2022/rate/1621875" target="_blank">Game Jam Submission Page</a>

On July 16th 2022, I partipated in the GMTK Game Jam 2022 with my friend Sam. We were given the theme "**Roll of the Dice**", from which we were to design and produce a game in just 48 hours. Inspired by games such as [Opus Magnum](https://www.zachtronics.com/opus-magnum/) and [The Sequence](https://play.google.com/store/apps/details?id=com.onemanband.thesequence), we chose to create an automation game.

The aim of the game is to manoeuvre the dice over checkpoints, making sure that the correct side of the dice is facing upwards in order to solve the puzzle. Along with manoeuvring the dice, block can also manoeuvre other blocks.

## Blocks

### Pusher

The Pusher will push the dice in front of it along without it rolling over. Be careful to not push a block forward into another one though.

### Puller

The Puller will pull a block from 2 spots away without it rolling over. Ensure there is nothing between the puller and the block you want to pull in order for it to work.

### Rotator

The Rotator grabs the block in front of it and turns 90 degrees. It will continue to rotate without holding onto a block, so make sure to get its initial orientation right.

### Roller

The Roller is used to start the dice rolling in a set direction. The rolling can be stopped when the dice is interacted with by another block or it rolls into a wall. Use this to change the orientation of the dice so the correct face is upwards.
