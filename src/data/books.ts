
export type BookData = {
  title: string;
  coverImage: {
    "en-US": string;
    "en-UK": string;
    "fr-FR": string;
  };
  amazonLink: {
    "en-US": string;
    "en-UK": string;
    "fr-FR": string;
  };
  year: string;
  summary: {
    "en-US": string;
    "en-UK": string;
    "fr-FR": string;
  };
  prologue: {
    "en-US": string;
    "en-UK": string;
    "fr-FR": string;
  };
  isbn: string;
  pages: number;
  publisher: string;
  slug: string;
};

export const books: Record<string, BookData> = {
  "close-enough": {
    title: "Close Enough",
    coverImage: {
      "en-US": "/src/img/CloseEnough_PaperbackCover_website.png",
      "en-UK": "/src/img/CloseEnough_PaperbackCover_website.png",
      "fr-FR": "/photo-1472396961693-142e6e269027"
    },
    amazonLink: {
      "en-US": "https://www.amazon.com/dp/example-isbn",
      "en-UK": "https://www.amazon.co.uk/dp/example-isbn",
      "fr-FR": "https://www.amazon.fr/dp/example-isbn"
    },
    year: "2023",
    summary: {
      "en-US": "In the misty shores of Nova Scotia, where the Atlantic winds carry whispers of untold stories, Claire McKenna discovers an old diary that threatens to unravel not just her family's past, but the entire town's carefully guarded secrets. As she delves deeper into its pages, she realizes that some echoes of the past are better left unheard.",
      "en-UK": "In the misty shores of Nova Scotia, where the Atlantic winds carry whispers of untold stories, Claire McKenna discovers an old diary that threatens to unravel not just her family's past, but the entire town's carefully guarded secrets. As she delves deeper into its pages, she realizes that some echoes of the past are better left unheard.",
      "fr-FR": "Sur les rives brumeuses de la Nouvelle-Écosse, où les vents de l'Atlantique portent les murmures d'histoires inédites, Claire McKenna découvre un vieux journal qui menace de démêler non seulement le passé de sa famille, mais aussi les secrets soigneusement gardés de toute la ville. En plongeant plus profondément dans ses pages, elle réalise que certains échos du passé feraient mieux de rester inaudibles."
    },
    prologue: {
      "en-US": `The old lighthouse stood sentinel against the gathering storm, its beam cutting through the darkness like a blade. Sarah watched from her window as the rain began to fall, each drop carrying with it a memory she'd tried so hard to forget. Thirty years had passed since that night, yet time had done little to dull the edges of her guilt.

      The letter lay unopened on her desk, its cream-colored envelope bearing a postmark from a town she'd sworn never to think of again. But fate, it seemed, had other plans...`,
      "en-UK": `The old lighthouse stood sentinel against the gathering storm, its beam cutting through the darkness like a blade. Sarah watched from her window as the rain began to fall, each drop carrying with it a memory she'd tried so hard to forget. Thirty years had passed since that night, yet time had done little to dull the edges of her guilt.

      The letter lay unopened on her desk, its cream-coloured envelope bearing a postmark from a town she'd sworn never to think of again. But fate, it seemed, had other plans...`,
      "fr-FR": `Le vieux phare montait la garde contre la tempête qui s'amoncelait, son faisceau perçant l'obscurité comme une lame. Sarah regardait par sa fenêtre la pluie commencer à tomber, chaque goutte portant avec elle un souvenir qu'elle avait tant essayé d'oublier. Trente ans s'étaient écoulés depuis cette nuit-là, pourtant le temps n'avait guère atténué les contours de sa culpabilité.

      La lettre gisait, non ouverte sur son bureau, son enveloppe couleur crème portant le cachet d'une ville à laquelle elle avait juré de ne plus jamais penser. Mais le destin, semblait-il, en avait décidé autrement...`
    },
    isbn: "978-1234567890",
    pages: 342,
    publisher: "Moonlight Press",
    slug: "silent-echo"
  },
  // Add more books here following the same structure

"above-waterline": {
    title: "Above the Waterline",
    coverImage: {
      "en-US": "/src/img/Above the waterline cover website.png",
      "en-UK": "/src/img/Above the waterline cover website.png",
      "fr-FR": "/photo-1472396961693-142e6e269027"
    },
    amazonLink: {
      "en-US": "https://www.amazon.com/dp/example-isbn",
      "en-UK": "https://www.amazon.co.uk/dp/example-isbn",
      "fr-FR": "https://www.amazon.fr/dp/example-isbn"
    },
    year: "2023",
    summary: {
      "en-US": "In the misty shores of Nova Scotia, where the Atlantic winds carry whispers of untold stories, Claire McKenna discovers an old diary that threatens to unravel not just her family's past, but the entire town's carefully guarded secrets. As she delves deeper into its pages, she realizes that some echoes of the past are better left unheard.",
      "en-UK": "In the misty shores of Nova Scotia, where the Atlantic winds carry whispers of untold stories, Claire McKenna discovers an old diary that threatens to unravel not just her family's past, but the entire town's carefully guarded secrets. As she delves deeper into its pages, she realizes that some echoes of the past are better left unheard.",
      "fr-FR": "Sur les rives brumeuses de la Nouvelle-Écosse, où les vents de l'Atlantique portent les murmures d'histoires inédites, Claire McKenna découvre un vieux journal qui menace de démêler non seulement le passé de sa famille, mais aussi les secrets soigneusement gardés de toute la ville. En plongeant plus profondément dans ses pages, elle réalise que certains échos du passé feraient mieux de rester inaudibles."
    },
    prologue: {
      "en-US": `The old lighthouse stood sentinel against the gathering storm, its beam cutting through the darkness like a blade. Sarah watched from her window as the rain began to fall, each drop carrying with it a memory she'd tried so hard to forget. Thirty years had passed since that night, yet time had done little to dull the edges of her guilt.

      The letter lay unopened on her desk, its cream-colored envelope bearing a postmark from a town she'd sworn never to think of again. But fate, it seemed, had other plans...`,
      "en-UK": `The old lighthouse stood sentinel against the gathering storm, its beam cutting through the darkness like a blade. Sarah watched from her window as the rain began to fall, each drop carrying with it a memory she'd tried so hard to forget. Thirty years had passed since that night, yet time had done little to dull the edges of her guilt.

      The letter lay unopened on her desk, its cream-coloured envelope bearing a postmark from a town she'd sworn never to think of again. But fate, it seemed, had other plans...`,
      "fr-FR": `Le vieux phare montait la garde contre la tempête qui s'amoncelait, son faisceau perçant l'obscurité comme une lame. Sarah regardait par sa fenêtre la pluie commencer à tomber, chaque goutte portant avec elle un souvenir qu'elle avait tant essayé d'oublier. Trente ans s'étaient écoulés depuis cette nuit-là, pourtant le temps n'avait guère atténué les contours de sa culpabilité.

      La lettre gisait, non ouverte sur son bureau, son enveloppe couleur crème portant le cachet d'une ville à laquelle elle avait juré de ne plus jamais penser. Mais le destin, semblait-il, en avait décidé autrement...`
    },
    isbn: "978-1234567890",
    pages: 342,
    publisher: "Moonlight Press",
    slug: "close-enough"
  },



  
};
