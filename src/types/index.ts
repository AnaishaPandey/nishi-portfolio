export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface Hobby {
  title: string;
  icon: string;
  color: string;
  description: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
}

export interface Song {
  title: string;
  artist: string;
  /** YouTube embed ID (e.g. "dQw4w9WgXcQ") or Spotify embed URI (e.g. "track/4PTG3Z6ehGkBFwjybzWkR8") */
  embedId: string;
  /** "youtube" or "spotify" */
  platform: "youtube" | "spotify";
}

export interface Friend {
  name: string;
  emoji: string;
  note: string;
  color: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  year: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  avatar: string;
  about: {
    grade: string;
    school: string;
    location: string;
    favoriteColors: string[];
    bio: string;
  };
  contact: {
    email: string;
    socials: SocialLink[];
  };
  navigation: NavItem[];
  hobbies: Hobby[];
  friends: Friend[];
  achievements: Achievement[];
  gallery: GalleryItem[];
  playlist: Song[];
  theme: {
    primaryPink: string;
    primaryBlue: string;
    primaryPurple: string;
    backgroundStart: string;
    backgroundEnd: string;
  };
}
