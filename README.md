<div align="center">
<img width="235" alt="cmlogo" src="https://github.com/lucasrimondi/membrane-frontend-cc/assets/87493125/b218b86b-8b74-4cab-a9ae-2f35112fb1e2">

</div>

# $urveyfi - web3 Frontend Challenge

This is a solution to a frontend interview challenge. It is a fully responsive web app developed with React, Typescript and NextJS. $urveyfi is a decentralized application that allows you to earn rewards in $QUIZ by participating in daily surveys. This web application presents the following flow: 

- Connect Metamask wallet to Goerli testnet (where $QUIZ smart contract is uploaded).
- After wallet connection, users should be able to se their $QUIZ token balance and the cover of the daily survey with its "Start" button (this survey is fetched from an api created, developed and held inside this same repository using Next routing system and provides the trivia in JSON format).
- Once the survey starts, every question is displayed individually and available for a limited ammount of time. This parameter is created following the property "lifetimeSeconds" inside the survey's JSON.
- When all the questions are finished (completed or timed out), users should be able to see an overview with all the answers and submit them to the validator contract in order to get their rewards.
- After the transaction is made, $QUIZ balance is refreshed and a success message is shown. If the transaction fails, an error message is displayed.


## Built with 🔧

- React with Typescript
- NextJS for infrastructure
- [wagmi](https://wagmi.sh/) and [web3modal](https://web3modal.com/) for blockchain integration and wallet connection
- react-query for managing API fetching and states.
- Context API for general app's state
- styled-components


## Installation 💾

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Dev Server:

`npm run dev`

## Links 🔗

- Deployment on Vercel (live site URL): [Link](https://membrane-frontend-cc-seven.vercel.app/)

## Screenshots 📸

<div align="center">
<img width="500" alt="1" src="https://user-images.githubusercontent.com/87493125/212553501-f60a7cbc-eeaa-4fa8-a4c8-4ac6ba308d74.png">
</div>
<br>
<div align="center">
<img width="500" alt="2" src="https://user-images.githubusercontent.com/87493125/212553528-d70ebb79-52ff-49fa-a97d-3f7a352d4dd8.png">
</div>
<br>
<div align="center">
<img width="500" alt="Captura de Pantalla 2023-01-15 a las 13 30 37" src="https://user-images.githubusercontent.com/87493125/212553549-2eda7773-a62a-4dd1-8c75-25bec1561c51.png">
</div>
<br>

## Author 👤

- LinkedIn - [/lucasrimondi](https://www.linkedin.com/in/lucasrimondi/)
