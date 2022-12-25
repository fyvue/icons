import DiscordIcon from "./icons/DiscordIcon.vue";
import FacebookIcon from "./icons/FacebookIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import TelegramIcon from "./icons/TelegramIcon.vue";
import TwitterIcon from "./icons/TwitterIcon.vue";
import CoinMarketCapIcon from "./icons/CoinMarketCapIcon.vue";
import GoogleIcon from "./icons/GoogleIcon.vue";
import LinkedInIcon from "./icons/LinkedInIcon.vue";
import OpenSeaIcon from "./icons/OpenSeaIcon.vue";
import RedditIcon from "./icons/RedditIcon.vue";
import TiktokIcon from "./icons/TiktokIcon.vue";
import VkIcon from "./icons/VkIcon.vue";
import YoutubeIcon from "./icons/YoutubeIcon.vue";
import NobemIcon from "./icons/NobemIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";

const componentsList = [
  // Icons
  "DiscordIcon",
  "FacebookIcon",
  "InstagramIcon",
  "TelegramIcon",
  "TwitterIcon",
  "CoinMarketCapIcon",
  "GoogleIcon",
  "LinkedInIcon",
  "OpenSeaIcon",
  "RedditIcon",
  "TiktokIcon",
  "VkIcon",
  "YoutubeIcon",
];
const fyIconsResolver = (componentName: string) => {
  if (componentsList.includes(componentName))
    return { name: componentName, from: "@fy-/icons" };
};

export {
  fyIconsResolver,
  // Icons
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
  CoinMarketCapIcon,
  GoogleIcon,
  LinkedInIcon,
  OpenSeaIcon,
  RedditIcon,
  TiktokIcon,
  VkIcon,
  YoutubeIcon,
  NobemIcon,
  GithubIcon,
};
