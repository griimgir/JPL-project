
# Mission Control Console Interface

A front-end project that simulates a 1970s inspired interface of a rocket launch. Created by Alberc Ej Salcedo


## Demo (3 second launch to showcase the simulation)

https://www.asalcedo.com/

![App Screenshot](https://github.com/griimgir/JPL-project/blob/main/preview.gif?raw=true)


## Features

- Drop menu that fetcches data about rockets and launchpads through SpaceX-API
![App Screenshot](https://github.com/griimgir/JPL-project/blob/main/screenshots/Screenshot%20from%202023-05-23%2019-26-40.png?raw=true)

![App Screenshot](https://github.com/griimgir/JPL-project/blob/main/screenshots/Screenshot%20from%202023-05-23%2019-26-53.png?raw=true)

-  Simulation includes velocity, altitude, and Fuel Burn (time duration of 120 seconds)
    - Counting up uses an Easing function that allows an effect which slows the count at the end of the counter when it reaches closer to the maximum duration
    ![App Screenshot](https://github.com/griimgir/JPL-project/blob/main/screenshots/Screenshot%20from%202023-05-23%2019-21-01.png?raw=true)

    - The simulation only runs after the start sequence completes it's count down (demo 3 seconds, and for submitted project 300 seconds or 5 minutes). This is achieved by a simple if else statement. Only when the condition of time >= 0 is true, lift off is achieved.
    ![App Screenshot](https://github.com/griimgir/JPL-project/blob/main/screenshots/Screenshot%20from%202023-05-23%2019-25-55.png?raw=true)
- Timer for demo is 3 seconds however the project submitted through email has the correct 300 seconds/5 minute criteria that was asked. It is completley customizable as shown below. Modify initialTime to desired launch countdown.
    ![App Screenshot](https://github.com/griimgir/JPL-project/blob/main/screenshots/initialTime.png?raw=true)

Time, Calendar, and drop down menu are functional and will be able to choose freely, however due to time limitation to respect the 4 hour limit these features are more so decorative for the immersion of the simulation and have no effect on the actual launch. The seletion of rockets and launchpads are not statically hard coded but serve to showcase the project does fetch from the api using GET.

## Installation & Dependencies

Pulling the repo

```bash
  git clone https://github.com/griimgir/JPL-project.git
```

To get started you will need NPM and Node.js: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

to install Dependencies required for this front-end project run npm command to install dependencies in `package.json`

```
    npm install
```

Once Dependencies are installed run npm command

```
    npm start
```


## Project Information
Front end Framework: [React](https://link-url-here.org)

Terminal-like theme inspiration used for project

![App Screenshot](https://github.com/griimgir/JPL-project/blob/main/inspiration2.jpeg?raw=true)

![App Screenshot](https://github.com/griimgir/JPL-project/blob/main/inspiration3.png?raw=true)

![App Screenshot](https://github.com/griimgir/JPL-project/blob/main/inspiration1.jpeg?raw=true)