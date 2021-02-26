# 🚀 GA Space X 🚀

## Mission Objective

```text
1. Download and install Postman
   - https://www.postman.com
2. Fetch data from Space X API with axios and fetch 
   - Resource: https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/README.md
3. Make a components for each call item
   1. capsule
   2. company
   3. core
   4. crew
   5. dragon
   6. landpad
   7. launch
   8. launchpad
   9. payload
   10. fairing
   11. roadster
   12. rocket
   13. ship
   14. starlink
   15. history

# Company 🏢
Get company info : GET /company

# CapsuleUnitContainer / Capsule 💊
Get all capsules : GET /capsules
    - Endpoint: https://api.spacexdata.com/v4/capsules
Get one capsule : GET /capsules/:id
    - Endpoint: https://api.spacexdata.com/v4/capsules/5e9e2c5bf35918ed873b2664

# CoreUnitContainer / Core 🥷🏽
Get all cores : GET /cores
    - Endpoint: https://api.spacexdata.com/v4/cores
Get one core : GET /cores/:id

# CrewUnitContainer / CrewMember 🧑🏼‍⚕️🦸🏻🧑🏽‍💻
Get all crew members : GET /crew
    - Endpoint: https://api.spacexdata.com/v4/crew
Get one crew member : GET /crew/:id

# DragonUnitContainer / Dragon 🐲
Get all dragons : GET /dragons
    - Endpoint: https://api.spacexdata.com/v4/dragons
Get one dragon : GET /dragons/:id

# LandpadUnitContainer / LandPad 🐸
Get all landpads : GET /landpads
    - Endpoint: https://api.spacexdata.com/v4/landpads
Get one landpad : GET /landpads/:id

# LaunchUnitContainer / Launch ☄️
    - Endpoint: https://api.spacexdata.com/v4/launches/past
Get past launches : GET /launches/past
    - Endpoint: https://api.spacexdata.com/v4/launches/past
Get upcoming launches : GET /launches/upcoming
    - Endpoint: https://api.spacexdata.com/v4/launches/upcoming
Get latest launch : GET /launches/latest
Get next launch : GET /launches/next
Get all launches : GET /launches
    - Endpoint: https://api.spacexdata.com/v4/launches
Get one launch : GET /launches/:id

# LaunchPadUnitContainer / LaunchPad ⏚
Get all launchpads : GET /launchpads
    - Endpoint: https://api.spacexdata.com/v4/launchpads
Get one launchpad : GET /launchpads/:id

# PayloadUnitContainer / Payload 🚛
Get all payloads : GET /payloads
    - Endpoint: https://api.spacexdata.com/v4/payloads
Get one payload : GET /payloads/:id

# FairingUnitContainer / Fairing  🏍
Get all fairings : GET /fairings
    - Endpoint: https://api.spacexdata.com/v4/fairings
Get one fairing : GET /fairings/:id

# RoadsterUnitContainer / Roadster 🏎
Get roadster info : GET /roadster
    - Endpoint: https://api.spacexdata.com/v4/roadster

# RocketUnitContainer / Rocket 🚀
Get all rockets : GET /rockets
    - Endpoint: https://api.spacexdata.com/v4/rockets
Get one rocket : GET /rockets/:id

# ShipUnitContainer / Ship 🛸
Get all ships : GET /ships
    - Endpoint: https://api.spacexdata.com/v4/ships
Get one ship : GET /ships/:id

# StarLinkUnitContainer / StarLink 🔗
Get all Starlink sats : GET /starlink
    - Endpoint: https://api.spacexdata.com/v4/starlink
Get one Starlink sat : GET /starlink/:id

# HistoryUnitContainer / History 📜
Get all historical events : GET /history
    - Endpoint: https://api.spacexdata.com/v4/history
Get one historical event : GET /history/:id 
```
## CSS
```css
.company {
  background: #eaeaea;
  border: solid 5px grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 17%;
  height: 200px;
  margin-bottom: 1em;
  transition: border-width 0.6s linear;
}
.company:hover { border-width: 10px; }

.capsules {
  background: #eaeaea;
  border: solid 5px blue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 17%;
  height: 200px;
  margin-bottom: 1em;
  transition: border-width 0.6s linear;
}
.capsules:hover { border-width: 10px; }

.core {
  background: #eaeaea;
  border: solid 5px black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 17%;
  height: 200px;
  margin-bottom: 1em;
  transition: border-width 0.6s linear;
}
.core:hover { border-width: 10px; }

.dragon {
  background: #eaeaea;
  border: solid 5px green;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 17%;
  height: 200px;
  margin-bottom: 1em;
  transition: border-width 0.6s linear;
}
.dragon:hover { border-width: 10px; }

.landpads {
  background: #eaeaea;
  border: solid 5px green;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 17%;
  height: 200px;
  margin-bottom: 1em;
  transition: border-width 0.6s linear;
}
.landpads:hover { border-width: 10px; }
```

## Create the rest of the css 

```css
.<name-of-item> {
  background: #eaeaea;
  border: solid 5px <color-here>;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 17%;
  height: 200px;
  margin-bottom: 1em;
  transition: border-width 0.6s linear;
}
.<name-of-item>:hover { border-width: 10px; }
```


## Cool CSS Resources
- https://css-tricks.com/animating-border/

## Example of Map array
```js
const procedureList = procedures.map((procedure, index)=> {
        return <li key={index}><Link to={`/procedures/${procedure}`}>{procedure}</Link></li>
    })

```
