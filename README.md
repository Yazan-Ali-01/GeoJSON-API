<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">GeoJSON API Locator</h3>

  <p align="center">
    Very simple API that serves locations using GeoJSON data 
    <br />
    <a href="https://github.com/Yazan-Ali-01/Book-Library"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://yazan-book-library.cyclic.app/">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Very simple API just to maximize the understanding of dealing with APIs with nodeJS and also to mess with some front-end vanilla JavaScript with the help of MapQuest API to do the geocoding in the backend and Map-box to deal with the front-end map
and actually I deployed it, so you could take a look without hurting your head with local installing and running for the app
So feel free to check it on https://puzzled-jade-cowboy-boots.cyclic.app

Here's why:

- I wanted to deal a little bit with API things like fetch and json stuff with a very simple project
- A Geocoding project is important to understand how geocoding works and how to deal with things like coordinates
- Vanilla JavaScript is important to deal with since it's very important to not rely on libraries and forget about the origin og them

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- ![https://img.shields.io/badge/Database-Mongoose-blue][mongoose-url]
- ![https://img.shields.io/badge/frontend-map_box-red][ejs-url]
- ![https://img.shields.io/badge/frontend-Map_Quest_API-brightgreen][bootstrap-url]
- ![https://img.shields.io/badge/other-express--session-yellow][express-session-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get started clone the repository and read the installation instructions below

### Prerequisites

list of things you need to use the software

- npm
  ```sh
  npm install npm@latest -g
  ```
- MongoDB installed locally on your PC

### Installation

\_Below is an example of how you can install and set up the app locally.

1. Clone the repo
   ```sh
   git clone https://github.com/Yazan-Ali-01/GeoJSON-API.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your environment variables in `config/.env.example` then change its name to `.env` only
   ```js
   const MONGO_URI =
     "Here You Put Your Local MongoDB host like (mongodb://localhost:27017) OR your Atlas cluster connection URI";
   const GEOCODER_API_KEY = "Your MapQuest Geocoder Api Key";
   ```
4. start MongoDB local database server in your terminal with
   ```sh
   mongod
   ```
5. start application with `npm run dev` in the terminal
6. Run it in your browser on `localhost:5000`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Email: [yazan.ali.dev@gmail.com](yazan.ali.dev@gmail.com)

Project Link: [https://puzzled-jade-cowboy-boots.cyclic.app](https://puzzled-jade-cowboy-boots.cyclic.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/Yazan-Ali-01/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/yazan-ali/
[product-screenshot]: images/screenshot.png
[express-url]: https://img.shields.io/badge/backend-express.js-brightgreen
[node-url]: https://img.shields.io/badge/backend-node.js-green
[mongo-url]: https://img.shields.io/badge/Database-MongoDB-blue
[mongoose-url]: https://img.shields.io/badge/-Mongoose-blue?style=flat-square
[ejs-url]: https://img.shields.io/badge/-Map_Box-red?style=flat-square
[express-session-url]: https://img.shields.io/badge/-Express--Session-yellow?style=flat-square
[flash-url]: https://img.shields.io/badge/-Flash-lightgrey?style=flat-square
[csrf-url]: https://img.shields.io/badge/-csrf-orange?style=flat-square
[bootstrap-url]: https://img.shields.io/badge/-Map_Quest_API-brightgreen?style=flat-square
