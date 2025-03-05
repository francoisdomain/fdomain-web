
export interface BlogArticle {
  id: number;
  title: string;
  slug: string;
  summary: string;
  body: string;
  imageUrl: string;
  publishedDate: string;
}

export const blogArticles: Record<string, BlogArticle> = {
  "everyone-is-a-leader": {
    id: 1,
    title: "Everyone is a Leader",
    slug: "everyone-is-a-leader",
    summary: "Leadership is not something you learn ; it's something you stumble across.",
    body: `
👉 How many times have you heard (or told yourself), *“I’m not a leader”*?

We’ve been conditioned to believe that leadership is a title you earn, a skill you acquire, or a role you step into. 
Newsflash: it isn’t.

We can learn tricks on how to inspire people, we can learn how to drive a team, but if we don’t believe in what we’re saying—who would actually buy into it?

Leadership isn’t about the *how*—it’s about the *why*.

No one becomes a leader just by giving it a go. 
But **anyone** can become a leader when they <strong>find their purpose</strong>.

💡 **Leadership isn’t something you learn—it’s something you stumble upon.**

The moment you find something you believe in so deeply that you **can’t *not* act**—that’s leadership. 
It doesn’t come from power, authority, or even confidence. It comes from conviction—from the fire inside that makes you want to make change happen.

Looking back at history, what did the great leaders of this world have in common? **Belief. Conviction. A passion** for what they knew was right—for their people, their mission, their cause.

📖 In storytelling, the most compelling leaders aren’t the ones who set out to lead from day one. They’re the ones who find something worth fighting for. Because what people follow is never just a man or a woman—it’s an idea.

🔥 **Don’t chase leadership. Find your reason, and leadership will follow.**    `,
    imageUrl: "/img/blog/EveryoneLeader.webp",
    publishedDate: "2025-03-04"
  },
  "lead-vs-inspire": {
    id: 2,
    title: "Can you lead without inspiring?",
    slug: "lead-vs-inspire",
    summary: "You can inspire without leading - but can you lead without inspiring?",
    body: `
      🔥 And here comes the buzzword: **VISION**.
      
      No word has been more overused—or misunderstood. “I want to increase my bottom line by 40%” has very little to do with *Vision*—it’s merely an objective.
      
      The distinction is the same as *management* vs. *inspiration*.
      ✅ A good manager will give you a target—and hopefully the tools to achieve it.
      ✅ A leader will make you want to achieve it.
      
      And if money isn’t a long-term motivator, **inspiration** is.
    
    We often think of leadership and inspiration as interchangeable. They’re not.
    We can inspire someone—with words, actions, or ideas—without leading them anywhere. And that’s valuable. It can change the way they think, the way they behave. But it doesn’t necessarily drive action.
    
    💡 **Leadership, however, is *impossible* without inspiration.**
    
    Leaders doesn’t just give instructions. They move people. Not with authority, but with meaning.
    👉 You can manage a team without inspiring them.
    👉 You can give orders without engagement.
    👉 You can enforce rules without belief.
    **But without inspiration, leadership is just administration.**
    
    And remember the saying:
    💡 “People don’t leave jobs—they leave managers.”
    
    🎭 *The same applies to storytelling. The most unforgettable characters aren’t the ones who control or command. They’re the ones who **make us feel** something.*
    
    So here’s a statement that isn’t as obvious as it sounds:
    As inspiration can’t be faked or forced upon anyone, there’s only one way to get it right:
    👉 **Inspire yourself before inspiring others.**
    `,
    imageUrl: "/img/blog/lead-vs-inspire.webp",
    publishedDate: "2025-03-12"
  },
  "licence-to-lead": {
    id: 3,
    title: "You don't need persmission to lead.",
    slug: "licence-to-lead",
    summary: "You don’t need permission to make a difference.",
    body: `🚀 “I’m not in charge.”
    🚀 “I don’t have the experience.”
    🚀 “I’m not a leader.”
    
    Nothing is more *frustrating* than seeing someone who **should take charge**—but doesn’t **because of a job title** or job description.
    
    As we mentioned in the first post of this series, taking the lead isn’t something you can do—it’s **something you *can’t not* do**.
    
    💡 Leadership isn’t a title. It’s a mindset.
    
    How would you prove to anyone—yourself first—that you have what it takes to lead if you never take the chance? Did you wait until you knew how to ride a bicycle before trying?
    
    My eureka moment was when I realised this:
    
    🔥 **If you feel the *urge* to step up, it’s because there’s *a void that needs filling*.**
    
    A great, inspiring leader makes you want to follow—not override them. So, if you’re feeling pulled toward taking charge in a specific situation, it’s because something is missing. Someone **has** to step forward.
    
    👉 So **stop holding back**. Forget about looking *arrogant, presumptuous, *or* bossy*. Forget the *impostor syndrome*.
    It’s true for most things in life—but especially for leadership:
    
    💡 *If you feel like it, go for it.*
    
    🔥 **You don’t need permission to make a difference**.
    
    🎭 *The same is true in storytelling. The most compelling characters don’t wait for the crown—they take action when it matters.*
    
    👉 So, as yourself : are you waiting for permission? Or are you **already leading without realizing it?**
    
    💡 *Have you ever stepped up as a leader without really thinking about it? What happened?* Drop it in the comments! 👇
`,
    imageUrl: "/img/blog/licence-to-lead.webp",
    publishedDate: "2025-03-19"
  }
  
  
};
