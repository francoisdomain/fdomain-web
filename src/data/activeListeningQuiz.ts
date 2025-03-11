
import { QuizData } from "@/types/quiz";

export const activeListeningQuiz: QuizData = {
  id: "active-listening-quiz",
  title: "How Good Is Your Active Listening? 🎧👂",
  description: "Are you a conversation MVP or just nodding on autopilot? Find out now!",
  questions: [
    {
      id: 1,
      text: "1️⃣ When someone is talking to you, what's really happening?",
      options: [
        {
          id: "1b",
          text: "I zone out halfway and just guess what they said based on keywords",
          points: 2
        },
        {
          id: "1d",
          text: "I'm fully present, nodding, and actually absorbing what they're saying",
          points: 4
        },
        {
          id: "1a",
          text: "Huh, what? My connexion dropped for a bit...",
          points: 1
        },
        {
          id: "1c",
          text: "I'm waiting for my turn to speak",
          points: 3
        }
      ]
    },
    {
      id: 2,
      text: "2️⃣ Your colleague is explaining a problem they're facing. What's your first instinct?",
      options: [
        {
          id: "2a",
          text: "I nod, say \"that's crazy,\" and hope they move on",
          points: 1
        },
        {
          id: "2b",
          text: "I start telling them about a totally unrelated problem I once had",
          points: 2
        },
        {
          id: "2d",
          text: "I ask a few follow-up questions to make sure I understand before responding",
          points: 4
        },
        {
          id: "2c",
          text: "I give them a solution before they even finish their sentence",
          points: 3
        }
      ]
    },
    {
      id: 3,
      text: "3️⃣ You're in a meeting, and someone else is speaking. What are you doing?",
      options: [
        {
          id: "3d",
          text: "I'm taking notes, asking questions, and engaging when relevant",
          points: 4
        },
        {
          id: "3b",
          text: "I'm staring at them trying to see how I can contradict them",
          points: 2
        },
        {
          id: "3a",
          text: "I'm planning my next meal in my head",
          points: 1
        },
        {
          id: "3c",
          text: "I'm listening while scrolling my phone to keep myself busy",
          points: 3
        }
      ]
    },
    {
      id: 4,
      text: "4️⃣ When someone shares something personal or challenging, how do you react?",
      options: [
        {
          id: "4a",
          text: "I laugh - do you think I'm your shrink or what?",
          points: 1
        },
        {
          id: "4b",
          text: "I change the topic ASAP to avoid awkwardness",
          points: 2
        },
        {
          id: "4c",
          text: "I hijack the conversation with a \"That reminds me of this one time I…\"",
          points: 3
        },
        {
          id: "4d",
          text: "I acknowledge their feelings and ask if they need support",
          points: 4
        }
      ]
    },
    {
      id: 5,
      text: "5️⃣ How often do you repeat or paraphrase what someone just said to confirm understanding?",
      options: [
        {
          id: "5b",
          text: "Rarely, I usually wing it",
          points: 2
        },
        {
          id: "5d",
          text: "Almost always—I make sure we're aligned before responding",
          points: 4
        },
        {
          id: "5a",
          text: "Never. My strategy is nodding and hoping for the best",
          points: 1
        },
        {
          id: "5c",
          text: "Sometimes, if I'm not sure I caught everything",
          points: 3
        }
      ]
    }
  ],
  results: [
    {
      minScore: 5,
      maxScore: 8,
      title: `Oops! Hearing, Not Listening. 🚨`,
      description: 
`You might be **physically present** in conversations, but your mind is often elsewhere—scrolling, zoning out, or just waiting for the other person to stop talking. This can lead to **misunderstandings, missed details, and frustrated colleagues** who feel unheard.

**How to improve?**

- **Put away distractions** during conversations—silence your phone and close unrelated tabs.
- **Make eye contact** and use affirming nods to stay engaged.
- **Ask follow-up questions** to get deeper into the conversation.
- Practice **repeating back** key points to ensure understanding.
- **Set a mental timer** to check your focus every minute or so during important conversations.

Remember, good listening is a skill that requires practice. Start small with one focused conversation daily!`
    },
    {
      minScore: 9,
      maxScore: 12,
      title: `Selective Listener 😬`,
      description: 
`You hear words, but are you **really listening**? You might get the gist of what people say, but you're more focused on what you'll say next than truly understanding. This can lead to **rushed responses, assumptions, or missing key details**.

**How to Improve:**

- **Pause** before responding—let the other person's words sink in before jumping in with a reply.
- **Paraphrase occasionally** to confirm understanding (e.g., *Just to make sure I got this right, you're saying…*).
- **Resist the urge to interrupt**—even if you think you know where they're going, let them finish.
- Be **genuinely curious**—shift from *How will I respond?* to *What can I learn from this?*

Being **fully present** will make people feel heard—and you'll avoid misunderstandings!`
    },
    {
      minScore: 13,
      maxScore: 16,
      title: `Good Listener, But… 🤔`,
      description: 
`You're engaged in conversations, but sometimes your focus drifts—especially when you're eager to share your own thoughts. While you generally listen well, you could be even better at making people feel truly understood.

**How to Improve:**

- Ask **open-ended questions** to deepen discussions (e.g., *Can you tell me more about that?*).
- **Mirror emotions**—if they're frustrated, acknowledge it (*I can see why that's frustrating*).
- **Resist solution mode** too quickly—sometimes, people just need to be heard before jumping into fixes.
- **Take notes** during key meetings to keep focus and retention high.

You're close to mastering active listening—just a little more **fine-tuning** will take you to the **next level**!`
    },
    {
      minScore: 17,
      maxScore: 20,
      title: `Active Listening Pro! 🏆`,
      description: 
`**You're a conversation MVP**! People love talking to you because you make them feel heard and valued. You engage, respond thoughtfully, and ask great questions. This helps you build stronger relationships, solve problems faster, and earn trust.

**How to Stay Sharp:**

- **Keep practicing** active listening techniques, even when you're tired or distracted.
- **Adapt** your listening style—some people need advice, others just need to vent. Recognizing the difference makes you an even better communicator.
- **Teach others**—help your team improve their listening skills by setting the example.
- Use **silence as a tool**—sometimes, the best response is just a thoughtful pause.

Your ability to truly listen will **set you apart as a leader, mentor, and trusted colleague**!`
    }
  ]
};
