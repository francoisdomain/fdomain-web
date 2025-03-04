
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
How many times have you heard (or told yourself), *“I’m not a leader”*?

We’ve been conditioned to believe that leadership is a title you earn, a skill you acquire, or a role you step into. 
Newsflash: it isn’t.

We can learn tricks on how to inspire people, we can learn how to drive a team, but if we don’t believe in what we’re saying—who would actually buy into it?

Leadership isn’t about the *how*—it’s about the *why*.

No one becomes a leader just by giving it a go. 
But <b>anyone</b> can become a leader when they <strong>find their purpose</strong>.

💡 **Leadership isn’t something you learn—it’s something you stumble upon.**

The moment you find something you believe in so deeply that you **can’t *not* act**—that’s leadership. 
It doesn’t come from power, authority, or even confidence. It comes from conviction—from the fire inside that makes you want to make change happen.

Looking back at history, what did the great leaders of this world have in common? **Belief. Conviction. A passion** for what they knew was right—for their people, their mission, their cause.

📖 In storytelling, the most compelling leaders aren’t the ones who set out to lead from day one. They’re the ones who find something worth fighting for. Because what people follow is never just a man or a woman—it’s an idea.

🔥 **Don’t chase leadership. Find your reason, and leadership will follow.**    `,
    imageUrl: "/img/blog/EveryoneLeader.webp",
    publishedDate: "2025-03-04"
  },
  "lead-and-inspire": {
    id: 2,
    title: "Can you lead without inspiring?",
    slug: "lead-and-inspire",
    summary: "You can inspire without leading - but can you lead without inspiring?",
    body: `
comgin up
    `,
    imageUrl: "/img/character-development.jpg",
    publishedDate: "2023-06-22"
  },
  "permission-to-lead": {
    id: 3,
    title: "You don't need persmission to lead.",
    slug: "permission-to-lead",
    summary: "You don't need persmission to lead.",
    body: `
coming up
    `,
    imageUrl: "/img/writing-desk.jpg",
    publishedDate: "2023-08-15"
  }
  
  
};
