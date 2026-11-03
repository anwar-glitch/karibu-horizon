
export type Destination = {
  slug: string;
  name: string;
  region: string;
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  highlights: string[];
  bestTimeToVisit: string;
  location: string;
  gallery: string[];
  experiences: string[];
  travelTips: string[];
};

export const destinations: Destination[] = [
  {
    slug: "serengeti",
    name: "Serengeti National Park",
    region: "Mara Region",
    category: "Wildlife & Safari",
    tagline: "Witness the wild heart of Africa.",
    description:
      "The Serengeti is one of Africa's most remarkable wildlife destinations. Its vast golden plains, incredible wildlife and the legendary Great Migration create an unforgettable safari experience.",
    heroImage:
      "https://images.unsplash.com/photo-1528275646751-ff237d1cd935?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    highlights: [
      "The Great Migration",
      "Big Five wildlife",
      "Endless savannah landscapes",
      "Hot air balloon safaris",
    ],
    bestTimeToVisit: "June to October for wildlife viewing",
    location: "Northern Tanzania",
    gallery: [
      "https://images.unsplash.com/photo-1688373317291-2f273bc7dc6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://plus.unsplash.com/premium_photo-1661843615544-b2c973491c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://plus.unsplash.com/premium_photo-1661848168757-889335a08555?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ],
    experiences: [
      "Go on a guided wildlife safari",
      "Witness the Great Migration",
      "Take a hot air balloon safari",
      "Explore the endless savannah plains",
    ],
    travelTips: [
      "Bring binoculars for wildlife viewing.",
      "Wear neutral-colored clothing during game drives.",
      "Follow your safari guide's instructions around wildlife.",
      "Carry a hat, sunscreen, and drinking water.",
    ],
  },

  {
    slug: "zanzibar",
    name: "Zanzibar",
    region: "Zanzibar",
    category: "Beach & Island",
    tagline: "Where turquoise waters meet timeless culture.",
    description:
      "Zanzibar is an enchanting island destination known for its white-sand beaches, turquoise Indian Ocean waters, historic Stone Town and rich Swahili culture.",
    heroImage:
      "https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    highlights: [
      "White-sand beaches",
      "Historic Stone Town",
      "Snorkelling and diving",
      "Spice tours and Swahili culture",
    ],
    bestTimeToVisit: "June to October and December to February",
    location: "Zanzibar, Tanzania",
    gallery: [
      "https://media.istockphoto.com/id/1344634150/photo/old-fort-also-known-as-the-arab-fort-is-a-fortification-located-in-stone-town-in-zanzibar.webp?a=1&b=1&s=612x612&w=0&k=20&c=fEjI71zXWOEJgkOyeFlQIifoZvz_Jub3ZeZ08GI-CVc=",
      "https://images.unsplash.com/photo-1628531895969-df353541bafe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://images.unsplash.com/photo-1713253981772-c3dcda50b748?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ],
    experiences: [
      "Snorkelling in turquoise waters",
      "Explore historic Stone Town",
      "Discover Zanzibar's spice farms",
      "Enjoy a sunset dhow cruise",
    ],
    travelTips: [
      "Carry sunscreen and light clothing for the tropical weather.",
      "Respect local customs, especially when visiting Stone Town and villages.",
      "Use a licensed guide for cultural and historical tours.",
      "Check tide times before planning some beach activities.",
    ],
  },

  {
    slug: "mount-kilimanjaro",
    name: "Mount Kilimanjaro",
    region: "Kilimanjaro Region",
    category: "Mountain & Adventure",
    tagline: "Reach new heights on Africa's rooftop.",
    description:
      "Mount Kilimanjaro is Africa's highest mountain. Its dramatic landscapes, changing ecosystems and challenging trekking routes attract adventurers from around the world.",
    heroImage:
      "https://images.unsplash.com/photo-1631646109206-4b5616964f84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    highlights: [
      "Africa's highest mountain",
      "Scenic trekking routes",
      "Unique mountain ecosystems",
      "The unforgettable summit experience",
    ],
    bestTimeToVisit: "January to March and June to October",
    location: "Kilimanjaro Region, Tanzania",
    gallery: [
      "https://images.unsplash.com/photo-1735637082450-deeffc9fbc2a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://images.unsplash.com/photo-1621414050946-1b936a78491f?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ],
    experiences: [
      "Trek to the summit of Mount Kilimanjaro",
      "Explore the mountain's diverse ecosystems",
      "Enjoy scenic views of the surrounding landscapes",
      "Experience the thrill of high-altitude trekking",
    ],
    travelTips: [
      "Acclimatize properly to avoid altitude sickness.",
      "Hire a certified guide and porter for safety and support.",
      "Pack appropriate gear for cold and wet conditions.",
      "Stay hydrated and take your time on the trek.",
    ],
  },

  {
    slug: "ngorongoro",
    name: "Ngorongoro Crater",
    region: "Arusha Region",
    category: "Wildlife & Safari",
    tagline: "Discover a world within a natural wonder.",
    description:
      "The Ngorongoro Conservation Area is home to a spectacular volcanic crater with remarkable wildlife, sweeping landscapes and one of Tanzania's most extraordinary natural settings.",
    heroImage:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000&q=85",
    highlights: [
      "Ngorongoro Crater views",
      "Rich wildlife populations",
      "Big Five sightings",
      "Maasai cultural heritage",
    ],
    bestTimeToVisit: "June to October for drier conditions",
    location: "Arusha Region, Northern Tanzania",
    gallery: [
      "https://images.unsplash.com/photo-1745885979468-44a855f8a5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://images.unsplash.com/photo-1507088164404-020d1e905959?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://images.unsplash.com/photo-1631182951500-226ee196e219?q=80&w=1214&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ],
    experiences: [
      "Game drives in the Ngorongoro Crater",
      "Spot the Big Five and other wildlife",
      "Learn about Maasai culture and traditions",
      "Enjoy breathtaking crater views and landscapes",
    ],
    travelTips: [
      "Book a guided safari to explore the crater safely.",
      "Bring binoculars and a camera for wildlife viewing.",
      "Dress in layers as temperatures can vary.",
      "Respect the local Maasai communities and their traditions.",
    ],
  },

  {
    slug: "lake-manyara",
    name: "Lake Manyara National Park",
    region: "Manyara Region",
    category: "Wildlife & Safari",
    tagline: "A beautiful wilderness beneath the Rift Valley escarpment.",
    description:
      "Lake Manyara National Park offers a diverse landscape of forests, open plains and a shimmering alkaline lake. It is known for its birdlife, elephants and tree-climbing lions.",
    heroImage:
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=2000&q=85",
    highlights: [
      "Tree-climbing lions",
      "Flamingos and birdlife",
      "Scenic Rift Valley views",
      "Lush groundwater forests",
    ],
    bestTimeToVisit: "June to October for wildlife viewing",
    location: "Manyara Region, Northern Tanzania",
    gallery: [
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1690286909054-c3aac991ad11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://plus.unsplash.com/premium_photo-1661848516540-48cb0c26233f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ],
    experiences: [
      "Game drives to spot wildlife",
      "Birdwatching and flamingo spotting",
      "Explore the lush forests and landscapes",
      "Enjoy scenic views of the Rift Valley escarpment",
    ],
    travelTips: [
      "Bring binoculars and a camera for wildlife viewing.",
      "Dress in layers as temperatures can vary.",
      "Respect the local Maasai communities and their traditions.",
      "Hire a local guide for the best wildlife spotting experience.",
    ],
  },

  {
    slug: "tarangire",
    name: "Tarangire National Park",
    region: "Manyara Region",
    category: "Wildlife & Safari",
    tagline: "Explore a land of ancient baobabs and elephants.",
    description:
      "Tarangire National Park is famous for its giant baobab trees, large elephant herds and seasonal wildlife gatherings around the Tarangire River.",
    heroImage:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=85",
    highlights: [
      "Large elephant herds",
      "Iconic baobab trees",
      "Tarangire River wildlife",
      "Quiet and scenic safari landscapes",
    ],
    bestTimeToVisit: "June to October during the dry season",
    location: "Manyara Region, Northern Tanzania",
    gallery: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1667987486234-a1330e262ea3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ],
    experiences: [
      "Go on a guided wildlife safari",
      "Spot elephants and other wildlife",
      "Explore the iconic baobab trees",
      "Enjoy the peaceful landscapes of Tarangire",
    ],
    travelTips: [
      "Bring binoculars for wildlife viewing.",
      "Wear neutral-colored clothing during game drives.",
      "Follow your safari guide's instructions around wildlife.",
      "Carry a hat, sunscreen, and drinking water.",
    ],
  },
];
