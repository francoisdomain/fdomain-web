
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
    title: {
    "en-US": "Close Enough",
    "en-UK": "Close Enough",
    "fr-FR": "Presque Vrai"
  },
    coverImage: {
      "en-US": "../src/img/CloseEnough_PaperbackCover_website.png",
      "en-UK": "../src/img/CloseEnough_PaperbackCover_website.png",
      "fr-FR": "../src/img/PresqueVrai_2025_Website.png"
    },
    amazonLink: {
      "en-US": "https://urlgeni.us/amazon/CloseEnough",
      "en-UK": "https://urlgeni.us/amazon/CloseEnoughUK",
      "fr-FR": "https://www.amazon.fr/dp/example-isbn"
    },
    year: "2025",
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
    isbn:  "978-1-0685758-0-8",
    pages: 342,
    publisher: "François Domain",
    slug: "close-enough"
  },
  // Add more books here following the same structure

"above-waterline": {
    title: {
    "en-US": "Above the Waterline",
    "en-UK": "Above the Waterline",
    "fr-FR": "La Glissade"
  },
    coverImage: {
      "en-US": "../src/img/Above_the_waterline.png",
      "en-UK": "../src/img/Above_the_waterline.png",
      "fr-FR": "/photo-1472396961693-142e6e269027"
    },
    amazonLink: {
      "en-US": "https://www.amazon.com/dp/example-isbn",
      "en-UK": "https://www.amazon.co.uk/dp/example-isbn",
      "fr-FR": "https://www.amazon.fr/dp/example-isbn"
    },
    year: "2023",
    summary: {
      "en-US": `Edward’s life has been quietly unraveling for years—a midlife crisis he can’t quite name, a marriage slowly eroding, a sense that something essential has slipped through his fingers. But he’s been too busy—or perhaps too scared—to notice. So when his wife of twenty years abruptly announces she wants a divorce, Edward is left stunned, numb, and clinging to his lifelong defense: avoidance.
      
      Believing time and distance will fix everything, he flees to a remote Greek island, convinced Mathilda just needs space to come back to her senses. But the island, with its haunting beauty and unexpected encounters, has other plans. Memories of love, ambition, and all the unspoken words he’s buried begin to resurface, forcing Edward to confront an uncomfortable truth: the man he’s been running from isn’t someone he left behind—it’s the man he’s become.`,
      "en-UK": `Edward’s life has been quietly unraveling for years—a midlife crisis he can’t quite name, a marriage slowly eroding, a sense that something essential has slipped through his fingers. But he’s been too busy—or perhaps too scared—to notice. So when his wife of twenty years abruptly announces she wants a divorce, Edward is left stunned, numb, and clinging to his lifelong defense: avoidance.
      
      Believing time and distance will fix everything, he flees to a remote Greek island, convinced Mathilda just needs space to come back to her senses. But the island, with its haunting beauty and unexpected encounters, has other plans. Memories of love, ambition, and all the unspoken words he’s buried begin to resurface, forcing Edward to confront an uncomfortable truth: the man he’s been running from isn’t someone he left behind—it’s the man he’s become.`,
      "fr-FR": `Après vingt ans, le mariage d’Édouard a peu à peu glissé vers la rancœur et l’indifférence. Prisonnier d’un monde d’habitudes, il a préféré fermer les yeux. Jusqu’à ce que Mathilda, sa femme, demande le divorce.
      
      Encore sous le choc, Édouard décide de s’éloigner quelques jours. De rencontres en moments de solitude, il profite de cette parenthèse pour explorer les raisons de son échec familial. Pourtant, la distance complique la communication avec Mathilda, et sa relation avec leur fils Arnaud s’enfonce dans le conflit. Est-il trop tard pour se retrouver ?
      
      Avec "La Glissade", François Romain nous offre un récit tour à tour léger et déchirant, qui navigue les tourments d'une vie qui s'effiloche.`
    },
    prologue: {
      "en-US": `So, this is how it ends.  
      A quick chat at the corner of the kitchen table, wedged between the main and dessert, like we were just discussing Aunt Adelaide’s cataract surgery. Only this time, it was my guts getting sliced open.  
      At least you spared me the old “It’s not you, it’s me” cliché. That’s not your style. You’re more the type to say it’s always my fault. On principle. If you could, you’d probably pin Aunt Adelaide’s cataracts on me, too.  
      We made it past seven years—everyone told us that was the tough one.  
      We made it past ten—everyone told us that was the tough one.  
      We made it past fifteen, and by then, no one said anything because they’d all been divorced for years. 
      We almost made it to twenty. Funny thing is, we still might. Divorce doesn’t happen overnight. It takes time. Can you imagine? Us signing the papers on our twentieth anniversary. “Happy anniversary, Mathilda. So, which table are you keeping—the living room or the dining set?”  
      
      I had a good run, didn’t I? All those efforts to keep my head low, tighten my belt—I mean, it shows I’ve got willpower, like I needed any more proof. But what’s the point, when you’ve been living my midlife crisis behind my back, pedal to the metal?
      So I sat there, fists clenched under the table, listening to you say it was “for the best,” that we “had good times,” but somehow we “lost each other along the way”—and you didn’t even have the decency to look me in the eye. All I could think was how stupid I was for not driving that intern from accounting all the way home.
      The clock on the wall coughs up seconds, one by one. Too loud, but not loud enough to drown out your words.  
      “You’re not saying anything...”
      What do you expect me to say, Mathilda? What do you possibly expect me to say? That we can fix this? That we just need to try harder, see a therapist, or take up couples’ yoga? I know you too well. Once you’ve made up your mind—even on the dumbest of ideas—there’s no turning back. You used to go on sex strikes to get your way. Lately, you’ve resorted to monosyllabic answers and long silences. How long has it been since we last touched each other? Five months? Six?  
      I used to keep track, back in winter.  
      Sure, not everything revolves around sex, but when it stops altogether—what’s left?  
      And I can’t even blame you, not really. It’s partly my fault. No—it’s entirely my fault. After years of being the one to initiate, I got tired of begging for your attention. Once a week, every Sunday, like some pathetic ritual. So I decided to strike back. Not because I didn’t want you—God, I wanted you—but because I wanted you to want me. I thought I’d give you time, let the desire build up.  
      And then, of course, Netflix became more engaging than I ever could. “Take your time,” I’d say. “Finish your show.” And you took it literally. If I went to bed early, you’d slip in later. And later. Until eventually I just turned off the light. I gave up in my own way, too. Stopped being hurt when I woke up alone. Stopped caring when breakfast was just silence and coffee.  
      Fine. I’ll take the blame. Not like it matters now.  
      
      “Are you okay, Edward?”
      I gripped the edge of the table like a lifeline, swallowing down words I’d never say. Since when did I become Edward to you? I’ve been Eddie since the day we met. I tried to remember when that changed. Like everything else, I guess it just slipped away.  
      “I’m fine. I... I’m fine.”
      I barely recognized my own voice. Maybe it was Edward’s voice. Not Eddie’s.  
      You were already halfway down a list of practicalities I hadn’t even thought about—the joint account, who’d keep the cat (you hate the cat anyway), moving into Arnold’s room until we sorted out what to do with the house.  
      “Wait... What? ”
      You stiffened, pinching your lips.  
      “Yes, Edward. We’ll have to talk about the house. You know how involved I am in the community. You’re always holed up in your office—what difference does it make to you if you’re here or somewhere else?”
      I almost laughed. “Involved in the community.” Unreal. If throwing Tupperware parties twice a month qualifies as community service, I should be glad you never took on climate change or world peace.  
      Looking back, I want to believe you were just clinging to logistics to keep from falling apart emotionally. If so, you were doing a damn good job of it, way better than me.  
      You wanted the car. For the kids. The eldest already has one, and the youngest—he’s eighteen now, when did that happen?—is across the country, living it up. What does he care about the car? You wanted everything and nothing at once. Played your cards like a master magician, flipping hearts into spades so fast I couldn’t keep up. All I could do was sit there, breathless, groping for answers to questions I hadn’t even grasped.  
      
      Under the table, my left leg started bouncing. First softly, then harder. It’s my pressure valve. Always has been. I tried to hold it down with my elbow, but it was no use. After two decades, you should’ve known that. You could’ve let me change into my running gear. Running’s the only thing that calms me down. You know that. But in Mathilda’s world, there’s only Mathilda.  
      “You should see someone,” you said. “I mean, physically. Emotionally.”
      Like ordering a pizza. With any luck, DoorDash would drop off the love of my life on the landing, still warm.
      “I’m not there yet, Mathilda.”
      You didn’t reply.  
      
      Of course we should cancel dinner at Mike and Mary-Ann’s. I couldn’t bear another night pretending everything was fine. Or worse, having Mary-Ann play therapist because she read something in Good Housekeeping.  
      Cynical? No, I’m not cynical. I’m just about to implode. My leg’s doing a tap dance under the table, and my nails are carving trenches into my thighs. What do you say, Mathilda? Should we take a break?  
      “For god’s sake, Edward, say something!”
      Believe me, it’s better if I don’t. Because what I’ve got on the tip of my tongue is everything you never wanted to hear. Not today, not ever. But especially not today.  
      You gave me that condescending glare of yours. You should’ve been a teacher—the kind kids hate.  
      “I’m going for a run.”
      You mumbled something, but I didn’t bother asking what. I went upstairs to change, almost calm, almost peaceful.  
      
      It’s hot today.  
      There’s a breeze, but it’s hot. `,
      "en-UK": `So, this is how it ends.  
      A quick chat at the corner of the kitchen table, wedged between the main and dessert, like we were just discussing Aunt Adelaide’s cataract surgery. Only this time, it was my guts getting sliced open.  
      At least you spared me the old “It’s not you, it’s me” cliché. That’s not your style. You’re more the type to say it’s always my fault. On principle. If you could, you’d probably pin Aunt Adelaide’s cataracts on me, too.  
      We made it past seven years—everyone told us that was the tough one.  
      We made it past ten—everyone told us that was the tough one.  
      We made it past fifteen, and by then, no one said anything because they’d all been divorced for years. 
      We almost made it to twenty. Funny thing is, we still might. Divorce doesn’t happen overnight. It takes time. Can you imagine? Us signing the papers on our twentieth anniversary. “Happy anniversary, Mathilda. So, which table are you keeping—the living room or the dining set?”  
      
      I had a good run, didn’t I? All those efforts to keep my head low, tighten my belt—I mean, it shows I’ve got willpower, like I needed any more proof. But what’s the point, when you’ve been living my midlife crisis behind my back, pedal to the metal?
      So I sat there, fists clenched under the table, listening to you say it was “for the best,” that we “had good times,” but somehow we “lost each other along the way”—and you didn’t even have the decency to look me in the eye. All I could think was how stupid I was for not driving that intern from accounting all the way home.
      The clock on the wall coughs up seconds, one by one. Too loud, but not loud enough to drown out your words.  
      “You’re not saying anything...”
      What do you expect me to say, Mathilda? What do you possibly expect me to say? That we can fix this? That we just need to try harder, see a therapist, or take up couples’ yoga? I know you too well. Once you’ve made up your mind—even on the dumbest of ideas—there’s no turning back. You used to go on sex strikes to get your way. Lately, you’ve resorted to monosyllabic answers and long silences. How long has it been since we last touched each other? Five months? Six?  
      I used to keep track, back in winter.  
      Sure, not everything revolves around sex, but when it stops altogether—what’s left?  
      And I can’t even blame you, not really. It’s partly my fault. No—it’s entirely my fault. After years of being the one to initiate, I got tired of begging for your attention. Once a week, every Sunday, like some pathetic ritual. So I decided to strike back. Not because I didn’t want you—God, I wanted you—but because I wanted you to want me. I thought I’d give you time, let the desire build up.  
      And then, of course, Netflix became more engaging than I ever could. “Take your time,” I’d say. “Finish your show.” And you took it literally. If I went to bed early, you’d slip in later. And later. Until eventually I just turned off the light. I gave up in my own way, too. Stopped being hurt when I woke up alone. Stopped caring when breakfast was just silence and coffee.  
      Fine. I’ll take the blame. Not like it matters now.  
      
      “Are you okay, Edward?”
      I gripped the edge of the table like a lifeline, swallowing down words I’d never say. Since when did I become Edward to you? I’ve been Eddie since the day we met. I tried to remember when that changed. Like everything else, I guess it just slipped away.  
      “I’m fine. I... I’m fine.”
      I barely recognized my own voice. Maybe it was Edward’s voice. Not Eddie’s.  
      You were already halfway down a list of practicalities I hadn’t even thought about—the joint account, who’d keep the cat (you hate the cat anyway), moving into Arnold’s room until we sorted out what to do with the house.  
      “Wait... What? ”
      You stiffened, pinching your lips.  
      “Yes, Edward. We’ll have to talk about the house. You know how involved I am in the community. You’re always holed up in your office—what difference does it make to you if you’re here or somewhere else?”
      I almost laughed. “Involved in the community.” Unreal. If throwing Tupperware parties twice a month qualifies as community service, I should be glad you never took on climate change or world peace.  
      Looking back, I want to believe you were just clinging to logistics to keep from falling apart emotionally. If so, you were doing a damn good job of it, way better than me.  
      You wanted the car. For the kids. The eldest already has one, and the youngest—he’s eighteen now, when did that happen?—is across the country, living it up. What does he care about the car? You wanted everything and nothing at once. Played your cards like a master magician, flipping hearts into spades so fast I couldn’t keep up. All I could do was sit there, breathless, groping for answers to questions I hadn’t even grasped.  
      
      Under the table, my left leg started bouncing. First softly, then harder. It’s my pressure valve. Always has been. I tried to hold it down with my elbow, but it was no use. After two decades, you should’ve known that. You could’ve let me change into my running gear. Running’s the only thing that calms me down. You know that. But in Mathilda’s world, there’s only Mathilda.  
      “You should see someone,” you said. “I mean, physically. Emotionally.”
      Like ordering a pizza. With any luck, DoorDash would drop off the love of my life on the landing, still warm.
      “I’m not there yet, Mathilda.”
      You didn’t reply.  
      
      Of course we should cancel dinner at Mike and Mary-Ann’s. I couldn’t bear another night pretending everything was fine. Or worse, having Mary-Ann play therapist because she read something in Good Housekeeping.  
      Cynical? No, I’m not cynical. I’m just about to implode. My leg’s doing a tap dance under the table, and my nails are carving trenches into my thighs. What do you say, Mathilda? Should we take a break?  
      “For god’s sake, Edward, say something!”
      Believe me, it’s better if I don’t. Because what I’ve got on the tip of my tongue is everything you never wanted to hear. Not today, not ever. But especially not today.  
      You gave me that condescending glare of yours. You should’ve been a teacher—the kind kids hate.  
      “I’m going for a run.”
      You mumbled something, but I didn’t bother asking what. I went upstairs to change, almost calm, almost peaceful.  
      
      It’s hot today.  
      There’s a breeze, but it’s hot. `,
      "fr-FR": `Alors, c’est comme ça que ça commence. Une conversation rapide au coin de la table de cuisine, entre le fromage et le dessert, comme on parlerait de l’opération de la cataracte de tante Adélaïde, sauf que là, c’étaient mes tripes que le scalpel s’amusait à taillader.
      Tu as eu la délicatesse de m’épargner le bon vieux cliché du c’est pas toi, c’est moi. Ce n’est pas ton style. Toi, tu es plutôt du genre à me dire que tout est ma faute, tout le temps. Par principe. À t’écouter, la cataracte de tante Adélaïde, ça aussi, ça pourrait bien être ma faute.
      On a passé le cap des sept ans. Tout le monde nous a dit que c’était le plus difficile.
      On a passé les dix ans, tout le monde nous a dit que c’était le plus difficile.
      On a passé les quinze ans sans que plus personne ne nous dise quoi que ce soit puisqu’ils avaient déjà tous divorcé, et on a bien failli passer les vingt ans. Le comble, c’est qu’on pourrait bien les passer quand même, les vingt ans, malgré tout ça. Ça n’arrive pas dans un claquement de doigts, un divorce, ça prend du temps. Trop de temps. Tu imagines ? Se retrouver à signer les documents de nos avocats respectifs le jour de nos vingt ans de mariage, ce serait un comble. Bon anniversaire ! Tu gardes la table de salon, ou celle du séjour ?
      
      Je m’en serais presque bien tiré, tu ne crois pas ? Tous ces efforts, ces serrages de ceinture – c’est bien, ça me prouve que j’ai de la volonté. Comme si j’avais besoin de ça pour m’en rendre compte. Et puis ça me fait une belle jambe, tiens, si c’est pour que toi, par-derrière, ce soit toi qui la fasses, ma crise de la quarantaine. Et pas juste un petit dérapage, hein, pas un petit coup d’un soir avec le mécano du coin, non, on y va à fond, là, le tigre dans le moteur, le pied sur le champignon et direction les piliers du pont de l’Alma, histoire de ne pas se louper. Et c’est moi qui suis sur le siège passager.
      Dire que je suis resté assis là, les poings serrés sous la table, à t’écouter me raconter que c’est mieux comme ça, qu’on a vécu de bons moments mais qu’à trop se donner d’espace on a fini par se perdre sans même avoir la décence de me regarder droit dans les yeux. Tout ce à quoi je pensais, c’est que j’avais été bien con de ne pas la raccompagner jusque chez elle, la petite stagiaire de la compta.
      
      L’horloge s’est mise à cracher une seconde tous les jamais. Bruyamment. Tellement bruyamment que je n’arrivais même plus à me concentrer sur ce que tu déblatérais, depuis le fin fond du bout de ta table.
      — Tu ne dis rien…
      Et qu’est-ce que tu voulais que je dise ? Que l’orage va passer, qu’on est plus forts que ça, qu’on a les enfants, qu’on s’aime et qu’il faut savoir rebondir, repartir du bon pied, qu’on allait se parler, aller voir un conseiller conjugal et se mettre au sexe tantrique pour reconnecter nos énergies, comme ils disent dans tes magazines ? Je te connais trop bien pour ça, Mathilda. Quand tu as une idée en tête… Il n’y a pas si longtemps, tu brandissais encore la grève du sexe, en dernier recours. Maintenant, tu te contentes de me faire la gueule et de me faire grâce de réponses monosyllabiques, au mieux. Même plus besoin de grève ou de préavis. Parce que ça fait combien, cinq, six mois qu’on n’a pas fait l’amour ? Je ne sais même plus ; j’ai arrêté de compter à la fin de l’hiver.
      D’accord, tout ne tourne pas autour du sexe, mais quand on ne partage plus ces moments-là, quand il n’y a même plus cette connexion animale, instinctive, quand on ne se touche plus, quand on ne s’embrasse plus, qu’est-ce qui reste ?
      Je ne peux pas te blâmer pour ça, c’est un peu ma faute. Non, c’est complètement ma faute. Après des années à toujours être celui qui doit faire le premier pas, le premier geste, j’en ai eu assez de quémander ton attention. Faire la manche dans son propre lit une fois par semaine, ça ne fait pas briller l’ego. J’ai décidé d’utiliser tes armes pour contrattaquer. Pas parce que je n’avais pas envie de toi, non, bien au contraire. Mais j’avais envie que tu aies envie de moi. J’allais te laisser le temps, te laisser t’impatienter, laisser le désir grandir au creux de tes reins jusqu’à ce que tu viennes poser une main sur mon torse, jouer avec mon oreille, ou me plaquer contre le mur. J’en frémissais rien qu’à l’idée.
      Mais évidemment, tes soirées avec Netflix te captivaient plus que les draps de notre lit. Si moi je me couchais plus tôt, toi tu te glissais sous les couvertures de plus en plus tard. Après que j’ai fini par capituler et éteindre la lampe de chevet.
      Moi aussi, j’ai baissé les bras. J’ai arrêté d’être déçu de m’endormir seul, me suis habitué à ne partager mon petit déjeuner qu’avec la télévision, sans le son, pour ne pas te déranger. Ne plus te déranger. 
      Alors, oui. Tu peux me mettre ça sur le dos. Ça aussi. 
      
      — Ça va, Édouard ?
      Ma main s’est agrippée à la table comme à une bouée. Pour me maintenir la tête hors de l’eau.
      Depuis quand tu m’appelais Édouard ? J’avais toujours été Eddie, pour toi, depuis le premier jour. J’ai beau chercher, je n’arrive plus à retrouver le moment où je suis devenu Édouard. C’est sûrement arrivé progressivement. Comme tout le reste.
      — Ça… ça va, ça va.
      J’avais du mal à reconnaître la voix qui sortait de ma gorge. Celle d’Edouard, sûrement. Pas celle d’Eddie.
      Tu en étais déjà à passer en revue toute une liste de détails qui ne m’avaient même pas encore effleuré l’esprit : le compte joint, qui garderait le chat – tu n’aimes pas les chats de toute façon – la chambre d’Arnaud dans laquelle tu t’installerais en attendant qu’on prenne une décision pour la maison.
      — Pardon ?
      Tu t’es redressée en pinçant les lèvres. 
      — Oui, Édouard. Il va bien falloir que l’on parle de la maison. Ce n’est pas aussi simple qu’il y paraît. Tu sais à quel point je suis impliquée dans la communauté. Toi, tu es toujours enfermé dans ton bureau, que tu sois ici ou ailleurs, ça ne fait pas grande différence, n’est-ce pas ?
      Heureusement que tu as enchaîné sur les mensualités de la police d’assurance que tu acceptais avec toute la grandeur d’âme qui te caractérise que je continue à payer, sinon je t’aurais ri au nez. Impliquée dans la communauté. On aura tout entendu. Si t’impliquer dans la communauté, c’est organiser des soirées Tupperware deux fois par mois, c’est sûrement une bonne chose que tu n’aies pas pris à cœur de t’impliquer dans les conflits au Moyen-Orient ou le réchauffement climatique.
      Avec le recul, je veux essayer de me faire croire que si tu t’attardais tant sur le matériel, c’était pour éviter l’émotionnel. Si c’est ça, alors tu avais une sacrée longueur d’avance sur moi.
      Tu voulais la voiture. Pour les enfants. Le grand conduit et a la sienne. Quant au petit – il a dix-huit ans, il faut que j’arrête de l’appeler le petit – il est de l’autre côté de la Manche, bien happy dans son underground et n’a aucune envie de revenir ne serait-ce que pour le week-end, encore moins pour les vacances alors, la voiture, qu’est-ce qu’il doit bien s’en foutre.
      
      Sous la table, ma jambe gauche trouvait que j’avais fait preuve d’assez de patience et que le moment était venu de t’envoyer bouler. Elle a commencé à taper du talon, doucement d’abord, et puis en y mettant plus d’entrain. C’est ma soupape de sécurité. Le signal du coup d’envoi. Je pouvais bien essayer de la maîtriser, poser mon coude sur ma cuisse pour tenter d’arrêter ce sautillement insupportable, la bataille était perdue d’avance. Et si on se connaît aussi bien qu’on veut le prétendre après toutes ces années de mariage, tu aurais dû le savoir, tu aurais dû me laisser aller enfiler un short, des baskets, et aller courir. Il n’y a que ça qui me calme. Ce n’est pas nouveau, ce n’est pas compliqué à comprendre. Mais non, dans le monde de Mathilda, il n’y a que Mathilda qui existe.
      — Tu devrais voir quelqu’un. Physiquement, je veux dire. Sentimentalement.
      À t’écouter, trouver la nouvelle femme de sa vie c’était aussi facile que de commander une pizza. Avec un peu de chance, Deliveroo te la dépose directement sur le palier, encore toute chaude.
      — Je n’en suis pas encore là, Mathilda.
      Tu n’as rien dit – je n’ai pas insisté.
      
      Bien sûr qu’on annulerait le diner chez Michel et Anne-Marie, je ne me voyais pas passer une soirée de plus avec tes amis à prétendre que tout va bien ou, pire, à laisser Anne-Marie nous faire une psychothérapie express en suivant les bons conseils trouvés dans un vieux Femme Actuelle. 
      Cynique ? Non, je ne suis pas cynique, je suis juste à deux doigts d’imploser. J’ai la jambe qui fait des sauts périlleux dignes des Jeux olympiques, mes ongles sont en train de creuser les tranchées de la guerre 14 dans mes cuisses, qu’est-ce que tu en dis, on se fait un petit break, là ?
      — Parle, Édouard, enfin ! Dis quelque chose.
      Crois-moi, Mathilda, il valait mieux que je me taise. Ce qui pendait au bout de mes lèvres, là, c’est tout ce que tu ne voulais pas entendre, ni ce jour-là, ni jamais – mais surtout pas ce jour-là.
      Tu as accueilli mon silence de ton air le plus condescendant.
      Tu aurais dû faire maîtresse d’école. De celles que les gosses n’aiment pas.
      — Je vais aller courir.
      Tu as grommelé quelque chose que je ne t’ai pas demandé de répéter. Je suis monté me changer, presque calmement, presque tranquillement.
      
      Il fait chaud, aujourd’hui.
      Il y a du vent, mais il fait chaud.`
    },
    isbn: "978-1-0685758-1-5",
    pages: 342,
    publisher: "François Domain",
    slug: "above-waterline"
  },

"coming-soon": {
    title: {
    "en-US": "Coming Soon",
    "en-UK": "Coming Soon",
    "fr-FR": "Bientot"
  },
    coverImage: {
      "en-US": "/photo-1472396961693-142e6e269027",
      "en-UK": "/photo-1472396961693-142e6e269027",
      "fr-FR": "/photo-1472396961693-142e6e269027"
    },
    amazonLink: {
      "en-US": "https://www.amazon.com/dp/example-isbn",
      "en-UK": "https://www.amazon.co.uk/dp/example-isbn",
      "fr-FR": "https://www.amazon.fr/dp/example-isbn"
    },
    year: "2026",
    summary: {
      "en-US": "Join the mailing list to hear about the new novel by François Domain.",
      "en-UK": "Join the mailing list to hear about the new novel by François Domain.",
      "fr-FR": "Rejoingnez la mailing list pour être les premiers informés !"
    },
    prologue: {
      "en-US": `Coming soon`,
      "en-UK": `Coming soon`,
      "fr-FR": `Bientôt...`
    },
    isbn: "123",
    pages: 450,
    publisher: "François Domain",
    slug: "coming-soon"
  },

  
};
