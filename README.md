<div align="center">
  <img src="/src/assets/KemmelTubeSecondary.svg" height="200" width="200" alt="logo"/>

# KemmelTube

### Home of screaming v10s and other content of Formula 1.

![Forks](https://img.shields.io/github/forks/Hamdrive/KemmelTube)
![Stars](https://img.shields.io/github/stars/Hamdrive/KemmelTube)

 </div>

---

## How to run the app locally?

```
$ git clone https://github.com/Hamdrive/KemmelTube.git
$ cd KemmelTube
$ npm install
$ npm start
```
*Don't forget to cleanup the preview GIF!*

---

## About KemmelTube

* KemmelTube was envisioned to be a platform where one can easily find content relating to Formula 1.
- With content ranging to screaming v10s to hilarious memes, we can ensure that we have almost everything you could watch.
* Additionally we have implemented various features to ensure you have an amazing experience as you binge watch your favourite videos, liked and create your own collections.

---

## Features

- Landing Page with dynamic categories. User can easily view videos based on selected category.
* Explore Page which prominently displays all relevant videos. Also contains Filter feature to display videos based on category. User can also easily add videos to both Watch Later and Playlist using built in dropdown menu on each video card.
- Single Video Page - User can like video, add to watch Later, Add/Remove from Playlist with realtime updation. User can view video on dynamic embed player with information about the video prominently displayed at the bottom. User can also view related videos based on same cateogory on the right of embedded player. On playing the video, it will be added to User history.
* Playlist Page, consists of all User Playlists. User can browse various playlists, create new empty playlists, check out individual playlist and also delete both video from playlist and also entire playlist itself.
- Watch Later Page - User can view videos marked to watch later and also delete them.
* History Page - User can view previously watched videos and also clear entire history.
- Liked Videos Page - User can view and delete their liked videos.
* Authentication Pages - User can easily signup or login using their credentials, or even checkout the website using provided test credentials. User can also logout of their account.
- Built with a mobile first approach, we ensure responsiveness for nearly all devices from 375px onwards.

---

## Tech Stack and Tools

- React JS
- React Router v6
- React Context API + useReducer
- Material UI for CSS and components
- Backend setup using [MockBee](https://mockbee.netlify.app/)
- React Youtube for embedded player
- Vercel for Deployment
- Cloudinary for Hosting of Images

---

## Live Deployment

Checkout the live deployment here: [KemmelTube](https://kemmeltube.vercel.app/)

---

## Demo Video

![KemmelTube Preview Video](/src/assets/DemoVideo.gif)


