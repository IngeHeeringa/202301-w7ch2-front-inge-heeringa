# Data layer

## Data

- List of robots
  - Name (string)
  - Image url (string)
  - Speed (number between 0-10)
  - Endurance (number between 0-10)
  - Creation date (date)

## Data modifications

- Load robots
- Load a robot (details)
- Delete a robot from the list of robots
- Add a robot to list of robots
- Update a robot's data

# Components

## App

- Show Layout component

## Layout

- Show Robots list component

## Header

- Show title in heading
- Navigation

## Robots (list)

- Receives list of robots
- Show a Robot card component for every robot on the list of robots
- Sends a robot to each Robot card component

## Robot (card)

- Show robot's name inside a heading
- Show robot's photo, speed, endurance and creation date
- Show button to delete robot
- Show button to modify robot

## Form

- Shows an input for the robot's name with label "Name"
- Shows an input for the robot's image url with label "Image URL"
- Shows an input for the robot's speed with label "Speed"
- Shows an input for the robot's endurance with label "Endurance"
- Shows a button to submit the form

## Button

- Shows the user action ("Delete", "Add" or "Modify") inside a button
