# maze
    https://brm.io/matter-js/
    
Matter JS Terminology

- World 
> Object that contains all the different 'things' in our matter app   
- Engine
> Reads in the current state of the world from the world object, then calculates
- Runner
> Gets the engine and world to work together. Runs about 60 times per second.
- Render
> Whenever the engine processes an update, Render will take a look at all the different shapes and show them on the screen
- Body
> A shape that we are displaying. Can be a circle, rectangle, oval, etc

Building a Maze

- Create a grid of 'cells'
- Pick a random starting cell
- For that cell, build a randomly-ordered list of neighbors
- If a neighbor has been visited before, remove it from the list
- For each remaining neighbor, 'move' to it and remove the wall between those two cells
- Repeat for this new neighbor