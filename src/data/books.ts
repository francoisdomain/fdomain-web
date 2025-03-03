
export type BookData = {
  id: number;
  title: {
    "en-US": string;
    "en-UK": string;
    "fr-FR": string;
  };
  tagline: {
    "en-US": string;
    "en-UK": string;
    "fr-FR": string;
  };
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
  amazonLinkText: {
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
  isbn: {
    "en-US": string;
    "en-UK": string;
    "fr-FR": string;
  };
  pages: number;
  publisher: string;
  slug: string;
};

export const books: Record<string, BookData> = {
  "close-enough": {
    id: 1,
    title: {
    "en-US": "Close Enough",
    "en-UK": "Close Enough",
    "fr-FR": "Presque Vrai"
    },
    tagline: {
    "en-US": "Friendships should be easy. But the ones that matter never are.",
    "en-UK": "Friendships should be easy. But the ones that matter never are.",
    "fr-FR": "L'amitié n'a rien de compliqué. Sauf celles qui comptent."
    },

    coverImage: {
      "en-US": "./src/img/CloseEnough_2025_cover.webp",
      "en-UK": "../src/img/CloseEnough_2025_cover.webp",
      "fr-FR": "../src/img/PresqueVrai_2025_cover.webp"
    },
    amazonLink: {
      "en-US": "https://urlgeni.us/amazon/CloseEnough",
      "en-UK": "https://urlgeni.us/amazon/CloseEnoughUK",
      "fr-FR": "#"
    },
    amazonLinkText: {
      "en-US": "Available now on Amazon",
      "en-UK": "Available now on Amazon",
      "fr-FR": "Nouvelle édition Juin 2025"
    },
    year: "2025",
    summary: {
      "en-US": `Meet François and Marvin—inseparable, reckless, and trapped in an endless tug-of-war. One thrives on chaos, the other clings to control—yet neither can pull away. Locked in each other's orbit—always too close, never colliding. From London to Mykonos, their friendship blurs between inside jokes, drunken nights, and boundaries that were never meant to last.
      Everyone assumes they're more than friends. 
      Even they aren't always sure.`,
      "en-UK": `Meet François and Marvin—inseparable, reckless, and trapped in an endless tug-of-war. One thrives on chaos, the other clings to control—yet neither can pull away. Locked in each other's orbit—always too close, never colliding. From London to Mykonos, their friendship blurs between inside jokes, drunken nights, and boundaries that were never meant to last.
      Everyone assumes they're more than friends. 
      Even they aren't always sure.`,
      "fr-FR": `Rencontrez François et Marvin — inséparables, imprévisibles, tour à tout le chat puis la souris d'une course poursuite qui n'en finit pas. L'un ne vit que pour le chaos, l'autre s'accroche à des illusions, mais aucun des deux n'arrive à s'éloigner. Proches, trop proches, mais sans jamais se percuter, leur amitié navigue entre les bureaux de la City et les bars de Shoreditch, où les limites n'attendent que d'être franchies.
      Tout le monde est persuadé qu'ils sont plus que des amis.
      Même eux n'en sont pas toujours sûrs.`,
    },
    prologue: {
      "en-US": `When I finally knocked on the glass door, hoping someone inside would bother letting me in, it was he who turned around.
      The look he gave me wasn't just a glance—it was high-voltage, a sucker punch to the gut. Before I knew it, my face was burning, an unexpected flush creeping up my neck, and for a split second, I swear the whole damn door nearly blew up.
      The door held.
      I didn't.
      
      I stood there, frozen, arms dangling like dead weight at my sides, a dumb grin plastered on my face. He gave me a quick chin lift, the kind of look a tired waiter gives when you snap your fingers for attention: Yeah, I saw you, but I'm kinda busy right now.
      Footsteps approached and someone was suddenly beside me. She looked mid-twenties, curly hair pulled into a too-tight ponytail, her suit just as tight. She gave two sharp knocks on the glass door before I had a chance to stop her.
      "Don't have a pass either?"
      I shook my head. "Nope."
      "First day. I'm Lydia," she said, holding out her hand. 
      "François." I added a blasé "Nice to meet you," for good measure.
      She had that unmistakable French look—the pout, the slight sneer—and a truly awful English accent, painfully reminding me of my own. She stepped back, giving me an exaggerated once-over.
      "T'es français, toi aussi."
      It wasn't a question, so I didn't bother answering.
      Out of the corner of my eye, I saw the tall blond finally decide we'd waited long enough. With an overdone sigh and two long strides, he hit the door release. Lydia didn't hesitate, shoving past me and giving our makeshift doorman a solid hip check as she went in. He barely noticed, too busy ogling her rear. 
      "Sorry," I muttered, stepping into his line of sight. "For the trouble, I mean. We don't have a—"
      "Yeah, no pass. I got it. Don't sweat it. Ever since Management stuck me on this side of the floor, I've felt more like a bouncer than a call center supervisor." He paused, squinting at me. "You're with someone, right? No one gets in alone."
      He burst out laughing. A German trying to crack jokes at a freshly landed French guy in London? Guaranteed fail. I forced a polite smile, just in case.
      "You new?" he asked, heading back to his desk.
      "Yeah. Training starts today."
      "You're an agent for France, right?"
      "Supervisor, actually. But yeah, for France. How'd you guess…" 
      "Your accent."
      No shit. 
      That was supposed to be a joke, mate. I laugh at your bad jokes, you laugh at mine—that's how this works.
      "I'm Marvin, by the way," he said, gripping my hand in a vise-like handshake. "I handle Germany. And half the other countries too, since this place is full of wankers who can't do much besides suck dicks. If you want to know how to run a call center, I'm your guy—not the morons who spend their time jerking off in the middle of the floor."
      Another belly laugh from him, this time loud enough to draw several annoyed glances our way. I took the chance to slip off and follow Lydia.
      "Hey, Frenchie!" he shouted. "What's your name?"
      Half the call center was glaring at us now.
      "François."
      "Welcome to Lyberta, Fran-sawa!"`,
      "en-UK": `When I finally knocked on the glass door, hoping someone inside would bother letting me in, it was he who turned around.
      The look he gave me wasn't just a glance—it was high-voltage, a sucker punch to the gut. Before I knew it, my face was burning, an unexpected flush creeping up my neck, and for a split second, I swear the whole damn door nearly blew up.
      The door held.
      I didn't.
      
      I stood there, frozen, arms dangling like dead weight at my sides, a dumb grin plastered on my face. He gave me a quick chin lift, the kind of look a tired waiter gives when you snap your fingers for attention: Yeah, I saw you, but I'm kinda busy right now.
      Footsteps approached and someone was suddenly beside me. She looked mid-twenties, curly hair pulled into a too-tight ponytail, her suit just as tight. She gave two sharp knocks on the glass door before I had a chance to stop her.
      "Don't have a pass either?"
      I shook my head. "Nope."
      "First day. I'm Lydia," she said, holding out her hand. 
      "François." I added a blasé "Nice to meet you," for good measure.
      She had that unmistakable French look—the pout, the slight sneer—and a truly awful English accent, painfully reminding me of my own. She stepped back, giving me an exaggerated once-over.
      "T'es français, toi aussi."
      It wasn't a question, so I didn't bother answering.
      Out of the corner of my eye, I saw the tall blond finally decide we'd waited long enough. With an overdone sigh and two long strides, he hit the door release. Lydia didn't hesitate, shoving past me and giving our makeshift doorman a solid hip check as she went in. He barely noticed, too busy ogling her rear. 
      "Sorry," I muttered, stepping into his line of sight. "For the trouble, I mean. We don't have a—"
      "Yeah, no pass. I got it. Don't sweat it. Ever since Management stuck me on this side of the floor, I've felt more like a bouncer than a call center supervisor." He paused, squinting at me. "You're with someone, right? No one gets in alone."
      He burst out laughing. A German trying to crack jokes at a freshly landed French guy in London? Guaranteed fail. I forced a polite smile, just in case.
      "You new?" he asked, heading back to his desk.
      "Yeah. Training starts today."
      "You're an agent for France, right?"
      "Supervisor, actually. But yeah, for France. How'd you guess…" 
      "Your accent."
      No shit. 
      That was supposed to be a joke, mate. I laugh at your bad jokes, you laugh at mine—that's how this works.
      "I'm Marvin, by the way," he said, gripping my hand in a vise-like handshake. "I handle Germany. And half the other countries too, since this place is full of wankers who can't do much besides suck dicks. If you want to know how to run a call center, I'm your guy—not the morons who spend their time jerking off in the middle of the floor."
      Another belly laugh from him, this time loud enough to draw several annoyed glances our way. I took the chance to slip off and follow Lydia.
      "Hey, Frenchie!" he shouted. "What's your name?"
      Half the call center was glaring at us now.
      "François."
      "Welcome to Lyberta, Fran-sawa!"`,
      "fr-FR": `Quand je me suis résolu à toquer à la porte en verre pour qu'on daigne venir m'ouvrir, c'est lui qui s'est retourné.
      Ce regard qu'il m'a lancé – c'était comme saisir une ligne à haute tension à mains nues. J'ai reculé sous le choc, et pendant une seconde, j'ai bien cru que la porte en verre allait voler en éclats. 
      La porte a tenu bon.
      C'est moi qui ai volé en miettes.
      
      Je suis resté planté là, immobile, les bras ballants, le souffle coupé. Il m'a lancé un coup de menton, comme un serveur qui en a assez que l'on claque des doigts pour attirer son attention, C'est bon, je t'ai vu, mais je suis occupé, là.
      Derrière moi, des pas feutrés se sont approchés. Une silhouette s'est arrêtée à ma hauteur ; la vingtaine, cheveux bouclés, queue-de-cheval, un tailleur un peu trop près du corps. Elle a mis deux coups secs de phalanges sur la porte en verre avant que je n'aie le temps de l'arrêter.  
      « Tu n'as pas de pass non plus ? »
      J'ai fait non de la tête.  
      « C'est mon premier jour. Je m'appelle Lydia.
      — François, » je me suis présenté en serrant sa main tendue.
      Petite moue hautaine, un air suffisant, et un accent anglais qui me rappelait douloureusement le mien. Elle a reculé pour me toiser de la tête aux pieds. 
      « Tu es français, toi aussi. »
      Ce n'était pas une question ; je n'ai pas répondu.
      De l'autre côté de la porte, le grand blond a semblé décider qu'il nous avait assez fait patienter.  Un soupir théâtral, deux enjambées, et il frappait du plat de la main le bouton d'ouverture de la porte principale. Un clic discret nous a invités à entrer. Lydia m'est passée devant, dégageant d'un coup de croupe notre portier improvisé hors de son chemin sans un regard ni un merci. 
      « Désolé, » j'ai murmuré en me glissant dans son champ de vision. « Pour le dérangement, je veux dire. On n'a pas de…  
      — Ouais, pas de pass, je me doute, » il m'a répondu, s'arrachant avec bien du mal aux va-et-viens de la croupe en question. « T'inquiète, depuis qu'ils m'ont fait déménager ici, j'ai plus l'impression d'être videur qu'un superviseur de centre d'appels. D'ailleurs, t'es accompagné ? Parce qu'ici, c'est comme en boîte, tu ne rentres pas si t'es pas accompagné. »
      Il est parti d'un rire gras. 
      Un Allemand qui blague en anglais avec un Français tout juste sorti de l'Eurostar ? Flop assuré. J'ai souri. Par politesse.
      « T'es nouveau ? »  il m'a demandé en avançant vers son bureau.  
      « Oui. On commence tout juste le training.  
      — T'es un agent pour la France, j'imagine ?  
      — Superviseur. Mais pour la France, oui. Comment tu as deviné.  
      — Ton accent. »
      Oui, merci, je me doute. 
      Il m'a tendu une main deux fois plus grosse que la mienne.
      « Je m'appelle Marvin. Je m'occupe de l'Allemagne. Et de la moitié des autres pays, puisque c'est bourré d'incapables qui ne savent que sucer de la bite, ici. Si tu veux savoir comment on fait tourner un call-center, c'est à moi qu'il faut demander, pas aux branquignols qui se paluchent au milieu. »
      Il a lancé un nouvel éclat de rire qui nous a attiré quelques regards agacés. Je l'ai remercié d'un geste, et j'en ai profité pour avancer discrètement dans la direction que Lydia avait prise, espérant qu'elle savait mieux que moi où elle allait.   
      « Hey ! Hey, Frenchie, tu t'appelles comment, au fait ? »
      Une autre tournée de regards noirs se sont posés sur nous.
      « François. »
      Il a hoché la tête, pensif, comme s'il avait son mot à dire à ce sujet.
      « Bienvenue chez Lyberta, Franssoua ! »`
    },
    isbn:  {
      "en-US": "978-1-0685758-0-8",
      "en-UK": "978-1-0685758-0-8",
      "fr-FR": "978-1-0685758-2-2"
    },
    pages: 280,
    publisher: "François Domain",
    slug: "close-enough"
  },

"above-waterline": {
    id: 2,
    title: {
    "en-US": "Above the Waterline",
    "en-UK": "Above the Waterline",
    "fr-FR": "La Glissade"
    },
    tagline: {
    "en-US": "The story of a man at war with himself.",
    "en-UK": "The story of a man at war with himself.",
    "fr-FR": "Le vrai combat est celui contre soi-même."
    },
    coverImage: {
      "en-US": "../src/img/Above_2025_cover.webp",
      "en-UK": "../src/img/Above_2025_cover.webp",
      "fr-FR": "../public/img/LaGlissade_Cover.webp"
    },
    amazonLink: {
      "en-US": "https://urlgeni.us/amazon/Waterline_PO_W",
      "en-UK": "https://urlgeni.us/amazon/AWT_wb_UK",
      "fr-FR": "#"
    },
    amazonLinkText: {
      "en-US": "Preorder on Amazon",
      "en-UK": "Preorder on Amazon",
      "fr-FR": "Nouvelle édition Juin 2025"
    },
    year: "2025",
    summary: {
      "en-US": `Edward's life has been quietly unraveling for years—a midlife crisis he can't quite name, a marriage slowly eroding, a sense that something essential has slipped through his fingers. But he's been too busy—or perhaps too scared—to notice. So when his wife of twenty years abruptly announces she wants a divorce, Edward is left stunned, numb, and clinging to his lifelong defense: avoidance.
      
      Believing time and distance will fix everything, he flees to a remote Greek island, convinced Mathilda just needs space to come back to her senses. But the island, with its haunting beauty and unexpected encounters, has other plans. Memories of love, ambition, and all the unspoken words he's buried begin to resurface, forcing Edward to confront an uncomfortable truth: the man he's been running from isn't someone he left behind—it's the man he's become.`,
      "en-UK": `Edward's life has been quietly unraveling for years—a midlife crisis he can't quite name, a marriage slowly eroding, a sense that something essential has slipped through his fingers. But he's been too busy—or perhaps too scared—to notice. So when his wife of twenty years abruptly announces she wants a divorce, Edward is left stunned, numb, and clinging to his lifelong defense: avoidance.
      
      Believing time and distance will fix everything, he flees to a remote Greek island, convinced Mathilda just needs space to come back to her senses. But the island, with its haunting beauty and unexpected encounters, has other plans. Memories of love, ambition, and all the unspoken words he's buried begin to resurface, forcing Edward to confront an uncomfortable truth: the man he's been running from isn't someone he left behind—it's the man he's become.`,
      "fr-FR": `Après vingt ans, le mariage d'Édouard a peu à peu glissé vers la rancœur et l'indifférence. Prisonnier d'un monde d'habitudes, il a préféré fermer les yeux. Jusqu'à ce que Mathilda, sa femme, demande le divorce.
      
      Encore sous le choc, Édouard décide de s'éloigner quelques jours. De rencontres en moments de solitude, il profite de cette parenthèse pour explorer les raisons de son échec familial. Pourtant, la distance complique la communication avec Mathilda, et sa relation avec leur fils Arnaud s'enfonce dans le conflit. Est-il trop tard pour se retrouver ?
      
      Avec "La Glissade", François Romain nous offre un récit tour à tour léger et déchirant, qui navigue les tourments d'une vie qui s'effiloche.`
    },
    prologue: {
      "en-US": `So, this is how it ends.  
      A quick chat at the corner of the kitchen table, wedged between the main and dessert, like we were just discussing Aunt Adelaide's cataract surgery. Only this time, it was my guts getting sliced open.  
      At least you spared me the old "It's not you, it's me" cliché. That's not your style. You're more the type to say it's always my fault. On principle. If you could, you'd probably pin Aunt Adelaide's cataracts on me, too.  
      We made it past seven years—everyone told us that was the tough one.  
      We made it past ten—everyone told us that was the tough one.  
      We made it past fifteen, and by then, no one said anything because they'd all been divorced for years. 
      We almost made it to twenty. Funny thing is, we still might. Divorce doesn't happen overnight. It takes time. Can you imagine? Us signing the papers on our twentieth anniversary. "Happy anniversary, Mathilda. So, which table are you keeping—the living room or the dining set?"  
      
      I had a good run, didn't I? All those efforts to keep my head low, tighten my belt—I mean, it shows I've got willpower, like I needed any more proof. But what's the point, when you've been living my midlife crisis behind my back, pedal to the metal?
      So I sat there, fists clenched under the table, listening to you say it was "for the best," that we "had good times," but somehow we "lost each other along the way"—and you didn't even have the decency to look me in the eye. All I could think was how stupid I was for not driving that intern from accounting all the way home.
      The clock on the wall coughs up seconds, one by one. Too loud, but not loud enough to drown out your words.  
      "You're not saying anything..."
      What do you expect me to say, Mathilda? What do you possibly expect me to say? That we can fix this? That we just need to try harder, see a therapist, or take up couples' yoga? I know you too well. Once you've made up your mind—even on the dumbest of ideas—there's no turning back. You used to go on sex strikes to get your way. Lately, you've resorted to monosyllabic answers and long silences. How long has it been since we last touched each other? Five months? Six?  
      I used to keep track, back in winter.  
      Sure, not everything revolves around sex, but when it stops altogether—what's left?  
      And I can't even blame you, not really. It's partly my fault. No—it's entirely my fault. After years of being the one to initiate, I got tired of begging for your attention. Once a week, every Sunday, like some pathetic ritual. So I decided to strike back. Not because I didn't want you—God, I wanted you—but because I wanted you to want me. I thought I'd give you time, let the desire build up.  
      And then, of course, Netflix became more engaging than I ever could. "Take your time," I'd say. "Finish your show." And you took it literally. If I went to bed early, you'd slip in later. And later. Until eventually I just turned off the light. I gave up in my own way, too. Stopped being hurt when I woke up alone. Stopped caring when breakfast was just silence and coffee.  
      Fine. I'll take the blame. Not like it matters now.  
      
      "Are you okay, Edward?"
      I gripped the edge of the table like a lifeline, swallowing down words I'd never say. Since when did I become Edward to you? I've been Eddie since the day we met. I tried to remember when that changed. Like everything else, I guess it just slipped away.  
      "I'm fine. I... I'm fine."
      I barely recognized my own voice. Maybe it was Edward's voice. Not Eddie's.  
      You were already halfway down a list of practicalities I hadn't even thought about—the joint account, who'd keep the cat (you hate the cat anyway), moving into Arnold's room until we sorted out what to do with the house.  
      "Wait... What? "
      You stiffened, pinching your lips.  
      "Yes, Edward. We'll have to talk about the house. You know how involved I am in the community. You're always holed up in your office—what difference does it make to you if you're here or somewhere else?"
      I almost laughed. "Involved in the community." Unreal. If throwing Tupperware parties twice a month qualifies as community service, I should be glad you never took on climate change or world peace.  
      Looking back, I want to believe you were just clinging to logistics to keep from falling apart emotionally. If so, you were doing a damn good job of it, way better than me.  
      You wanted the car. For the kids. The eldest already has one, and the youngest—he's eighteen now, when did that happen?—is across the country, living it up. What does he care about the car? You wanted everything and nothing at once. Played your cards like a master magician, flipping hearts into spades so fast I couldn't keep up. All I could do was sit there, breathless, groping for answers to questions I hadn't even grasped.  
      
      Under the table, my left leg started bouncing. First softly, then harder. It's my pressure valve. Always has been. I tried to hold it down with my elbow, but it was no use. After two decades, you should've known that. You could've let me change into my running gear. Running's the only thing that calms me down. You know that. But in Mathilda's world, there's only Mathilda.  
      "You should see someone," you said. "I mean, physically. Emotionally."
      Like ordering a pizza. With any luck, DoorDash would drop off the love of my life on the landing, still warm.
      "I'm not there yet, Mathilda."
      You didn't reply.  
      
      Of course we should cancel dinner at Mike and Mary-Ann's. I couldn't bear another night pretending everything was fine. Or worse, having Mary-Ann play therapist because she read something in Good Housekeeping.  
      Cynical? No, I'm not cynical. I'm just about to implode. My leg's doing a tap dance under the table, and my nails are carving trenches into my thighs. What do you say, Mathilda? Should we take a break?  
      "For god's sake, Edward, say something!"
      Believe me, it's better if I don't. Because what I've got on the tip of my tongue is everything you never wanted to hear. Not today, not ever. But especially not today.  
      You gave me that condescending glare of yours. You should've been a teacher—the kind kids hate.  
      "I'm going for a run."
      You mumbled something, but I didn't bother asking what. I went upstairs to change, almost calm, almost peaceful.  
      
      It's hot today.  
      There's a breeze, but it's hot.`,
      "en-UK": `So, this is how it ends.  
      A quick chat at the corner of the kitchen table, wedged between the main and dessert, like we were just discussing Aunt Adelaide's cataract surgery. Only this time, it was my guts getting sliced open.  
      At least you spared me the old "It's not you, it's me" cliché. That's not your style. You're more the type to say it's always my fault. On principle. If you could, you'd probably pin Aunt Adelaide's cataracts on me, too.  
      We made it past seven years—everyone told us that was the tough one.  
      We made it past ten—everyone told us that was the tough one.  
      We made it past fifteen, and by then, no one said anything because they'd all been divorced for years. 
      We almost made it to twenty. Funny thing is, we still might. Divorce doesn't happen overnight. It takes time. Can you imagine? Us signing the papers on our twentieth anniversary. "Happy anniversary, Mathilda. So, which table are you keeping—the living room or the dining set?"  
      
      I had a good run, didn't I? All those efforts to keep my head low, tighten my belt—I mean, it shows I've got willpower, like I needed any more proof. But what's the point, when you've been living my midlife crisis behind my back, pedal to the metal?
      So I sat there, fists clenched under the table, listening to you say it was "for the best," that we "had good times," but somehow we "lost each other along the way"—and you didn't even have the decency to look me in the eye. All I could think was how stupid I was for not driving that intern from accounting all the way home.
      The clock on the wall coughs up seconds, one by one. Too loud, but not loud enough to drown out your words.  
      "You're not saying anything..."
      What do you expect me to say, Mathilda? What do you possibly expect me to say? That we can fix this? That we just need to try harder, see a therapist, or take up couples' yoga? I know you too well. Once you've made up your mind—even on the dumbest of ideas—there's no turning back. You used to go on sex strikes to get your way. Lately, you've resorted to monosyllabic answers and long silences. How long has it been since we last touched each other? Five months? Six?  
      I used to keep track, back in winter.  
      Sure, not everything revolves around sex, but when it stops altogether—what's left?  
      And I can't even blame you, not really. It's partly my fault. No—it's entirely my fault. After years of being the one to initiate, I got tired of begging for your attention. Once a week, every Sunday, like some pathetic ritual. So I decided to strike back. Not because I didn't want you—God, I wanted you—but because I wanted you to want me. I thought I'd give you time, let the desire build up.  
      And then, of course, Netflix became more engaging than I ever could. "Take your time," I'd say. "Finish your show." And you took it literally. If I went to bed early, you'd slip in later. And later. Until eventually I just turned off the light. I gave up in my own way, too. Stopped being hurt when I woke up alone. Stopped caring when breakfast was just silence and coffee.  
      Fine. I'll take the blame. Not like it matters now.  
      
      "Are you okay, Edward?"
      I gripped the edge of the table like a lifeline, swallowing down words I'd never say. Since when did I become Edward to you? I've been Eddie since the day we met. I tried to remember when that changed. Like everything else, I guess it just slipped away.  
      "I'm fine. I... I'm fine."
      I barely recognized my own voice. Maybe it was Edward's voice. Not Eddie's.  
      You were already halfway down a list of practicalities I hadn't even thought about—the joint account, who'd keep the cat (you hate the cat anyway), moving into Arnold's room until we sorted out what to do with the house.  
      "Wait... What? "
      You stiffened, pinching your lips.  
      "Yes, Edward. We'll have to talk about the house. You know how involved I am in the community. You're always holed up in your office—what difference does it make to you if you're here or somewhere else?"
      I almost laughed. "Involved in the community." Unreal. If throwing Tupperware parties twice a month qualifies as community service, I should be glad you never took on climate change or world peace.  
      Looking back, I want to believe you were just clinging to logistics to keep from falling apart emotionally. If so, you were doing a damn good job of it, way better than me.  
      You wanted the car. For the kids. The eldest already has one, and the youngest—he's eighteen now, when did that happen?—is across the country, living it up. What does he care about the car? You wanted everything and nothing at once. Played your cards like a master magician, flipping hearts into spades so fast I couldn't keep up. All I could do was sit there, breathless, groping for answers to questions I hadn't even grasped.  
      
      Under the table, my left leg started bouncing. First softly, then harder. It's my pressure valve. Always has been. I tried to hold it down with my elbow, but it was no use. After two decades, you should've known that. You could've let me change into my running gear. Running's the only thing that calms me down. You know that. But in Mathilda's world, there's only Mathilda.  
      "You should see someone," you said. "I mean, physically. Emotionally."
      Like ordering a pizza. With any luck, DoorDash would drop off the love of my life on the landing, still warm.
      "I'm not there yet, Mathilda."
      You didn't reply.  
      
      Of course we should cancel dinner at Mike and Mary-Ann's. I couldn't bear another night pretending everything was fine. Or worse, having Mary-Ann play therapist because she read something in Good Housekeeping.  
      Cynical? No, I'm not cynical. I'm just about to implode. My leg's doing a tap dance under the table, and my nails are carving trenches into my thighs. What do you say, Mathilda? Should we take a break?  
      "For god's sake, Edward, say something!"
      Believe me, it's better if I don't. Because what I've got on the tip of my tongue is everything you never wanted to hear. Not today, not ever. But especially not today.  
      You gave me that condescending glare of yours. You should've been a teacher—the kind kids hate.  
      "I'm going for a run."
      You mumbled something, but I didn't bother asking what. I went upstairs to change, almost calm, almost peaceful.  
      
      It's hot today.  
      There's a breeze, but it's hot.`,
      "fr-FR": `Quand je me suis résolu à toquer à la porte en verre pour qu'on daigne venir m'ouvrir, c'est lui qui s'est retourné.
      Ce regard qu'il m'a lancé – c'était comme saisir une ligne à haute tension à mains nues. J'ai reculé sous le choc, et pendant une seconde, j'ai bien cru que la porte en verre allait voler en éclats. 
      La porte a tenu bon.
      C'est moi qui ai volé en miettes.
      
      Je suis resté planté là, immobile, les bras ballants, le souffle coupé. Il m'a lancé un coup de menton, comme un serveur qui en a assez que l'on claque des doigts pour attirer son attention, C'est bon, je t'ai vu, mais je suis occupé, là.
      Derrière moi, des pas feutrés se sont approchés. Une silhouette s'est arrêtée à ma hauteur ; la vingtaine, cheveux bouclés, queue-de-cheval, un tailleur un peu trop près du corps. Elle a mis deux coups secs de phalanges sur la porte en verre avant que je n'aie le temps de l'arrêter.  
      « Tu n'as pas de pass non plus ? »
      J'ai fait non de la tête.  
      « C'est mon premier jour. Je m'appelle Lydia.
      — François, » je me suis présenté en serrant sa main tendue.
      Petite moue hautaine, un air suffisant, et un accent anglais qui me rappelait douloureusement le mien. Elle a reculé pour me toiser de la tête aux pieds. 
      « Tu es français, toi aussi. »
      Ce n'était pas une question ; je n'ai pas répondu.
      De l'autre côté de la porte, le grand blond a semblé décider qu'il nous avait assez fait patienter.  Un soupir théâtral, deux enjambées, et il frappait du plat de la main le bouton d'ouverture de la porte principale. Un clic discret nous a invités à entrer. Lydia m'est passée devant, dégageant d'un coup de croupe notre portier improvisé hors de son chemin sans un regard ni un merci. 
      « Désolé, » j'ai murmuré en me glissant dans son champ de vision. « Pour le dérangement, je veux dire. On n'a pas de…  
      — Ouais, pas de pass, je me doute, » il m'a répondu, s'arrachant avec bien du mal aux va-et-viens de la croupe en question. « T'inquiète, depuis qu'ils m'ont fait déménager ici, j'ai plus l'impression d'être videur qu'un superviseur de centre d'appels. D'ailleurs, t'es accompagné ? Parce qu'ici, c'est comme en boîte, tu ne rentres pas si t'es pas accompagné. »
      Il est parti d'un rire gras. 
      Un Allemand qui blague en anglais avec un Français tout juste sorti de l'Eurostar ? Flop assuré. J'ai souri. Par politesse.
      « T'es nouveau ? »  il m'a demandé en avançant vers son bureau.  
      « Oui. On commence tout juste le training.  
      — T'es un agent pour la France, j'imagine ?  
      — Superviseur. Mais pour la France, oui. Comment tu as deviné.  
      — Ton accent. »
      Oui, merci, je me doute. 
      Il m'a tendu une main deux fois plus grosse que la mienne.
      « Je m'appelle Marvin. Je m'occupe de l'Allemagne. Et de la moitié des autres pays, puisque c'est bourré d'incapables qui ne savent que sucer de la bite, ici. Si tu veux savoir comment on fait tourner un call-center, c'est à moi qu'il faut demander, pas aux branquignols qui se paluchent au milieu. »
      Il a lancé un nouvel éclat de rire qui nous a attiré quelques regards agacés. Je l'ai remercié d'un geste, et j'en ai profité pour avancer discrètement dans la direction que Lydia avait prise, espérant qu'elle savait mieux que moi où elle allait.   
      « Hey ! Hey, Frenchie, tu t'appelles comment, au fait ? »
      Une autre tournée de regards noirs se sont posés sur nous.
      « François. »
      Il a hoché la tête, pensif, comme s'il avait son mot à dire à ce sujet.
      « Bienvenue chez Lyberta, Franssoua ! »`
    },
    isbn:  {
      "en-US": "978-1-0685758-1-5",
      "en-UK": "978-1-0685758-1-5",
      "fr-FR": "978-1-0685758-3-9"
    },
    pages: 324,
    publisher: "François Domain",
    slug: "above-waterline"
  }
};
