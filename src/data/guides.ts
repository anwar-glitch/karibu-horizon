
export type Guide = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  readTime: string;
  introduction: string;
  sections: {
    heading: string;
    content: string;
  }[];
};

export const guides: Guide[] = [
  {
    slug: "complete-tanzania-travel-guide",
    title: "The Complete Tanzania Travel Guide",
    category: "TRIP PLANNING",
    description:
      "Everything you need to know before exploring Tanzania.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
    readTime: "8 min read",
    introduction:
      "Tanzania is a destination of extraordinary variety, from vast wildlife landscapes and iconic mountains to tropical islands and vibrant local culture. A little preparation can help you make the most of your journey, potentially leading to unforgettable experiences.",
    sections: [
      {
        heading: "Choose where to go",
        content:
          "Start by deciding what kind of journey you want. The northern safari circuit is known for wildlife, Zanzibar offers island experiences, and Mount Kilimanjaro draws visitors looking for a mountain challenge.",
      },
      {
        heading: "Plan your travel season",
        content:
          "Different regions and activities have different seasonal conditions. Consider your interests, the places you want to visit, and local weather patterns when planning your dates.",
      },
      {
        heading: "Understand local travel",
        content:
          "Swahili is widely spoken throughout Tanzania. Learning a few simple phrases and respecting local customs can make your journey more meaningful.",
      },
    ],
  },
  {
    slug: "best-time-to-visit-tanzania",
    title: "When Is the Best Time to Visit Tanzania?",
    category: "SEASONS & WEATHER",
    description:
      "Discover the seasons for safaris, mountain adventures, and island escapes.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    readTime: "6 min read",
    introduction:
      "Tanzania can be explored throughout the year, but the best time to visit depends on your destination and the experiences you have in mind.",
    sections: [
      {
        heading: "The dry season",
        content:
          "The drier months are often popular for wildlife viewing because vegetation can be thinner and animals may gather around water sources. These months can also be busy in popular parks.",
      },
      {
        heading: "The green season",
        content:
          "The rainy periods bring greener landscapes, changing scenery, and seasonal wildlife experiences. Some roads and activities may be affected by rain.",
      },
      {
        heading: "Choose based on your plans",
        content:
          "Safari, hiking, and beach holidays each have different seasonal considerations. Research the specific region and activity before deciding on travel dates.",
      },
    ],
  },
  {
    slug: "first-tanzania-safari",
    title: "Your First Tanzania Safari",
    category: "SAFARI GUIDE",
    description:
      "A beginner-friendly guide to preparing for a wildlife adventure.",
    image:
      "https://images.unsplash.com/photo-1598975314523-9afadd6316c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    readTime: "7 min read",
    introduction:
      "A safari is an opportunity to experience Tanzania's wildlife and landscapes. Understanding the basics can help first-time visitors feel prepared.",
    sections: [
      {
        heading: "Choose a safari destination",
        content:
          "Tanzania has several remarkable wildlife areas. Serengeti, Tarangire, Ngorongoro, and Lake Manyara each offer different landscapes and wildlife experiences.",
      },
      {
        heading: "Pack thoughtfully",
        content:
          "Bring comfortable neutral-colored clothing, sun protection, binoculars if you have them, and a camera. Pack layers for early mornings and evenings.",
      },
      {
        heading: "Respect wildlife",
        content:
          "Follow your guide's instructions, keep a safe distance from animals, and avoid disturbing wildlife. Responsible behavior helps protect both visitors and the natural environment.",
      },
    ],
  },
  
  {
    slug: "what-to-pack-tanzania-safari",
    title: "What to Pack for a Tanzania Safari",
    category: "TRAVEL ESSENTIALS",
    description:
      "A practical packing checklist to help you prepare for days in the wilderness.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    readTime: "5 min read",
    introduction:
      "Packing thoughtfully can make your safari more comfortable. Tanzania's varied landscapes and changing temperatures mean it's useful to prepare for warm days, cool mornings, and outdoor activities.",
    sections: [
      {
        heading: "Clothing and footwear",
        content:
          "Choose lightweight, comfortable clothing in neutral colors. Bring layers for early mornings and evenings, a comfortable pair of walking shoes, and a light jacket.",
      },
      {
        heading: "Sun and insect protection",
        content:
          "Pack sunscreen, a hat, sunglasses, and insect repellent. These essentials can help you stay comfortable while spending time outdoors.",
      },
      {
        heading: "Useful travel items",
        content:
          "Consider binoculars, a camera, a reusable water bottle, personal medication, and a small day bag. Keep important travel documents secure.",
      },
    ],
  },
  {
    slug: "discovering-tanzania-culture",
    title: "Discovering the Culture of Tanzania",
    category: "CULTURE & HERITAGE",
    description:
      "Explore local traditions, Swahili culture, and ways to travel respectfully.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
    readTime: "7 min read",
    introduction:
      "Tanzania is home to many communities, languages, traditions, and ways of life. Learning about local culture can add depth and meaning to your journey.",
    sections: [
      {
        heading: "Learn a few Swahili phrases",
        content:
          "Simple greetings such as Jambo, Habari, Asante, and Tafadhali can help you connect with people. A friendly greeting is often appreciated.",
      },
      {
        heading: "Respect local customs",
        content:
          "Dress thoughtfully in communities and religious places, ask permission before taking photographs of people, and follow local guidance.",
      },
      {
        heading: "Explore beyond the familiar",
        content:
          "Visit local markets, learn about regional food, and seek cultural experiences led by community members. Be curious and respectful.",
      },
    ],
  },
  {
    slug: "getting-around-tanzania",
    title: "Getting Around Tanzania",
    category: "TRIP PLANNING",
    description:
      "Understand the transport options that can help you explore the country.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    readTime: "6 min read",
    introduction:
      "Tanzania is a large country, and transport choices can shape your travel experience. The best option depends on your destination, budget, and available time.",
    sections: [
      {
        heading: "Travel between cities",
        content:
          "Buses connect many towns and cities. For longer distances, domestic flights can save time, especially when visiting remote safari areas or islands.",
      },
      {
        heading: "Getting around locally",
        content:
          "In towns and cities, taxis and local transport are common options. Agree on fares before starting a journey when the price is not fixed.",
      },
      {
        heading: "Plan for distance",
        content:
          "Travel times can be longer than expected. Leave room in your itinerary for road conditions, stops, and changes in transport schedules.",
      },
    ],
  },

];
