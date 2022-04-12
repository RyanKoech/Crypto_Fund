<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

![](https://img.shields.io/badge/Hackathon-blueviolet)

# Project Name

> A simple DAPP where users can choose to donate crypto funds for various good causes.


## Built With

- Major languages: HTML, CSS, Javascript, Solidity
- Frameworks: Bootstrap3, JQuery
- Technologies used: [Truffle](https://trufflesuite.com/)


## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
- Installed [Metamask](https://metamask.io/download/) extention in your browser
- Installed Truffle
```bash
npm install -g truffle
```
- Installed [Ganache](https://trufflesuite.com/ganache/)
### Install
```bash
git clone <this-repo>

npm install
```
### Usage
```bash
#Complie the Contracts (Optional since the next command will still compile)
truffle compile
```
**NOTE:** Ensure you have your localhost blockchain on ganache running at this point

```bash
#Complie, Migrate and Deploy the contracts on the localhost blockchain
truffle migrate

#Serve the frontend
npm run dev
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Truffle Tutorial](https://trufflesuite.com/tutorial/index.html)

## 📝 License

This project is [MIT](./MIT.md) licensed.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/RyanKoech/Crypto_Fund.svg?style=for-the-badge
[contributors-url]: https://github.com/RyanKoech/Crypto_Fund/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/RyanKoech/Crypto_Fund.svg?style=for-the-badge
[forks-url]: https://github.com/RyanKoech/Crypto_Fund/network/members
[stars-shield]: https://img.shields.io/github/stars/RyanKoech/Crypto_Fund.svg?style=for-the-badge
[stars-url]: https://github.com/RyanKoech/Crypto_Fund/stargazers
[issues-shield]: https://img.shields.io/github/issues/RyanKoech/Crypto_Fund.svg?style=for-the-badge
[issues-url]: https://github.com/RyanKoech/Crypto_Fund/issues
[license-shield]: https://img.shields.io/github/license/RyanKoech/Crypto_Fund.svg?style=for-the-badge
[license-url]: https://github.com/RyanKoech/Crypto_Fund/blob/master/LICENSE.txt
