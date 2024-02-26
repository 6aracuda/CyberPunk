import './sass/index.scss';
import headerLogo from './assets/logo.svg';

import facebook from './assets/facebook-rect logo.svg';
import instagram from './assets/instagram-square logo.svg';
import twitch from './assets/twitch logo.svg';
import twitter from './assets/twitter-square logo.svg';
import vk from './assets/vk logo.svg';
import youtube from './assets/youtube logo.svg';

const logoImage = document.getElementById('headerlogo');
logoImage.src = headerLogo;

const youtubeicon = document.getElementById('youtube');
youtubeicon.src = youtube;

const vkicon = document.getElementById('vk');
vkicon.src = vk;

const twittericon = document.getElementById('twitter');
twittericon.src = twitter;

const twitchicon = document.getElementById('twitch');
twitchicon.src = twitch;

const instagramicon = document.getElementById('instagram');
instagramicon.src = instagram;

const facebookicon = document.getElementById('facebook');
facebookicon.src = facebook;
