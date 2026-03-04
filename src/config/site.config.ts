import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Anaisha",
  tagline: "Dancing, Drawing & Singing are my superpowers!",
  avatar: "/images/avatar.png",

  about: {
    grade: "Class 4",
    school: "",
    location: "India",
    favoriteColors: ["Pink", "Blue", "Purple"],
    bio: "Hi! I'm Anaisha, a creative soul who loves to dance, draw, and sing. Welcome to my little corner of the internet!",
  },

  contact: {
    email: "nishipandey2712@gmail.com",
    socials: [],
  },

  navigation: [
    { label: "Home", href: "/", icon: "home" },
    { label: "Gallery", href: "/gallery", icon: "palette" },
    { label: "Playlist", href: "/playlist", icon: "music" },
    { label: "Contact", href: "/contact", icon: "mail" },
  ],

  hobbies: [
    {
      title: "Dancing",
      icon: "dancing",
      color: "pink",
      description: "I love to dance and express myself through movement!",
    },
    {
      title: "Drawing",
      icon: "drawing",
      color: "blue",
      description: "Creating art and bringing my imagination to life!",
    },
    {
      title: "Singing",
      icon: "singing",
      color: "purple",
      description: "Music makes everything better — I love to sing along!",
    },
  ],

  friends: [
    {
      name: "Manu",
      emoji: "💖",
      note: "My bestie forever! We have the most fun together.",
      color: "pink",
    },
    {
      name: "Pehr",
      emoji: "🌟",
      note: "Always makes me laugh — the funniest friend ever!",
      color: "blue",
    },
    {
      name: "Aashna",
      emoji: "🦋",
      note: "We share everything — snacks, secrets & smiles!",
      color: "purple",
    },
  ],

  achievements: [
    {
      title: "Class Topper",
      description: "Topped the entire class in Class 3!",
      icon: "trophy",
      year: "Class 3",
    },
    {
      title: "Olympiad Finalist",
      description: "Reached the finals in academic Olympiads.",
      icon: "medal",
      year: "Class 3",
    },
    {
      title: "Silver Medal",
      description: "Secured silver medal in Olympiad in 4th grade!",
      icon: "silver",
      year: "Class 4",
    },
  ],

  gallery: [
    { src: "/images/gallery/drawing1.svg", alt: "My drawing 1", title: "Sunset Landscape" },
    { src: "/images/gallery/drawing2.svg", alt: "My drawing 2", title: "Flower Garden" },
    { src: "/images/gallery/drawing3.svg", alt: "My drawing 3", title: "Rainbow Unicorn" },
    { src: "/images/gallery/drawing4.svg", alt: "My drawing 4", title: "Ocean World" },
    { src: "/images/gallery/drawing5.svg", alt: "My drawing 5", title: "Space Adventure" },
    { src: "/images/gallery/drawing6.svg", alt: "My drawing 6", title: "Cute Animals" },
  ],

  playlist: [
    {
      title: "Lady Bug",
      artist: "Auzzy & Sun Hee",
      embedId: "pGaP5bU16z0",
      platform: "youtube",
    },
    {
      title: "Follow The Leader",
      artist: "Chan-Mi",
      embedId: "docEL3Ru4_g",
      platform: "youtube",
    },
    {
      title: "Dynamite",
      artist: "BTS",
      embedId: "gdZLi9oWNZg",
      platform: "youtube",
    },
    {
      title: "Unity",
      artist: "Gangnam Project",
      embedId: "-6rHdQt7sIA",
      platform: "youtube",
    },
  ],

  theme: {
    primaryPink: "#FFB6C1",
    primaryBlue: "#87CEEB",
    primaryPurple: "#DDA0DD",
    backgroundStart: "#FFF0F5",
    backgroundEnd: "#F0F8FF",
  },
};
