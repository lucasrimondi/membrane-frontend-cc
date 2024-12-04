<div align="center">
<img width="235" alt="cmlogo" src="https://github.com/lucasrimondi/membrane-frontend-cc/assets/87493125/b218b86b-8b74-4cab-a9ae-2f35112fb1e2">

</div>

# $urveyfi - web3 Frontend Challenge

This is a solution to a frontend interview challenge. It is a fully responsive web app developed with React, Typescript and NextJS. $urveyfi is a decentralized application that allows you to earn rewards in $QUIZ by participating in daily surveys. This web application presents the following flow: 

- Connect Metamask wallet to Goerli testnet (where $QUIZ smart contract is uploaded).
- After wallet connection, users should be able to see their $QUIZ token balance and the cover of the daily survey with its "Start" button (this survey is fetched from an api created, developed and held inside this same repository using Next routing system and provides the trivia in JSON format).
- Once the survey starts, every question is displayed individually and available for a limited ammount of time. This parameter is created following the property "lifetimeSeconds" inside the survey's JSON.
- When all the questions are finished (completed or timed out), users should be able to see an overview with all the answers and submit them to the validator contract in order to get their rewards.
- After the transaction is made, $QUIZ balance is refreshed and a success message is shown. If the transaction fails, an error message is displayed.

Disclaimer: In order to successfully complete the process and submit the answers, users should have in their wallets enough GoerliETH to pay for gas fees. It is possible to obtain GoerliETH for free using this faucet service: [Goerli PoW Faucet](https://goerli-faucet.pk910.de/)


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

To start dev server:

`npm run dev`


## Links 🔗

- Deployment on Vercel (live site URL): [Link](https://membrane-frontend-cc-seven.vercel.app/)


## Demo GIFs 📸

<div align="center">
<img width="500" alt="1" src="https://github.com/lucasrimondi/membrane-frontend-cc/assets/87493125/57f63035-e859-4542-a660-5ef24ca14728">
</div>
<br>
<div align="center">
<img width="500" alt="2" src="https://github.com/lucasrimondi/membrane-frontend-cc/assets/87493125/1cf62573-afeb-4b25-a558-0a19208f745e">
</div>
<br>
<div align="center">
<img width="500" alt="3" src="https://github.com/lucasrimondi/membrane-frontend-cc/assets/87493125/55a1cd65-f108-40bd-afc1-9cc73ab5add5">
</div>
<br>


## Author 👤

- LinkedIn - [/lucasrimondi](https://www.linkedin.com/in/lucasrimondi/)
