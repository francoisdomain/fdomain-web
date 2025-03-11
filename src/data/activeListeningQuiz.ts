
import { QuizData } from "@/types/quiz";

export const activeListeningQuiz: QuizData = {
  id: "active-listening-quiz",
  title: "How Good Is Your Active Listening? Rate Yourself! 🎧👂",
  description: "Are you a conversation MVP or just nodding on autopilot? Find out now!",
  questions: [
    {
      id: 1,
      text: "1️⃣ When someone is talking to you, what's really happening?",
      options: [
        {
          id: "1a",
          text: "Wait, what? Were they talking to me?",
          points: 1
        },
        {
          id: "1b",
          text: "I zone out halfway and just guess what they said based on keywords",
          points: 2
        },
        {
          id: "1c",
          text: "I hear them, but I'm mostly just waiting for my turn to speak",
          points: 3
        },
        {
          id: "1d",
          text: "I'm fully present, nodding, and actually absorbing what they're saying",
          points: 4
        }
      ]
    },
    {
      id: 2,
      text: "2️⃣ Your colleague is explaining a problem they're facing. What's your first instinct?",
      options: [
        {
          id: "2a",
          text: "I nod, say \"that's crazy,\" and hope they stop talking",
          points: 1
        },
        {
          id: "2b",
          text: "I start telling them about a totally unrelated problem I once had",
          points: 2
        },
        {
          id: "2c",
          text: "I give them a solution before they even finish their sentence",
          points: 3
        },
        {
          id: "2d",
          text: "I ask a few follow-up questions to make sure I understand before responding",
          points: 4
        }
      ]
    },
    {
      id: 3,
      text: "3️⃣ You're in a meeting, and someone else is speaking. What are you doing?",
      options: [
        {
          id: "3a",
          text: "I'm planning my next meal in my head",
          points: 1
        },
        {
          id: "3b",
          text: "I'm staring at them but only thinking about what I'm going to say next",
          points: 2
        },
        {
          id: "3c",
          text: "I'm half-listening while scrolling my phone (but stealthily, of course)",
          points: 3
        },
        {
          id: "3d",
          text: "I'm actively listening, taking notes, and engaging when needed",
          points: 4
        }
      ]
    },
    {
      id: 4,
      text: "4️⃣ When someone shares something personal or challenging, how do you react?",
      options: [
        {
          id: "4a",
          text: "I laugh nervously and pretend I didn't hear them",
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
          id: "5a",
          text: "Never. My strategy is nodding and hoping for the best",
          points: 1
        },
        {
          id: "5b",
          text: "Rarely, I just assume I got the gist and wing it",
          points: 2
        },
        {
          id: "5c",
          text: "Sometimes, if I'm not sure I caught everything",
          points: 3
        },
        {
          id: "5d",
          text: "Almost always—I make sure we're aligned before responding",
          points: 4
        }
      ]
    }
  ],
  results: [
    {
      minScore: 5,
      maxScore: 8,
      title: "Oops! Hearing, Not Listening. 🚨",
      description: "You might be missing some very important details in conversations… like, you know, everything."
    },
    {
      minScore: 9,
      maxScore: 12,
      title: "Selective Listener 😬",
      description: "You hear words, but are you really listening? Try focusing more."
    },
    {
      minScore: 13,
      maxScore: 16,
      title: "Good Listener, But… 🤔",
      description: "You're engaged, but you might be more focused on responding than understanding."
    },
    {
      minScore: 17,
      maxScore: 20,
      title: "Active Listening Pro! 🏆",
      description: "People love talking to you because they actually feel heard. Keep it up!"
    }
  ]
};
