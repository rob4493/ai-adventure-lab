const aiOrHumanContent = {
  aiVsHuman: {
    instructions:
      "Guess whether this high school writing sample was written by AI or a human.",
    options: [
      {
        value: "ai",
        label: "AI",
      },
      {
        value: "human",
        label: "Human",
      },
    ],
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        statement:
          "Participating in student council taught me leadership, communication, and the importance of working with others to create positive change.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This sounds AI-like because it is polished, broad, and uses common application-style phrases without a specific moment.",
          incorrect:
            "A student could write this, but the generic phrasing and lack of lived detail lean AI.",
        },
        topic: "Generic achievement writing",
        concept:
          "AI writing often sounds polished but general. Watch for broad achievement language without a concrete story.",
      },
      {
        statement:
          "At the first student council meeting, I volunteered to take notes because nobody else raised their hand, then immediately spelled the principal's name wrong in front of everyone.",
        correctAnswer: "human",
        feedback: {
          correct:
            "This feels human because it includes a specific awkward moment, natural voice, and a detail that is not trying to sound perfect.",
          incorrect:
            "AI can invent anecdotes, but this has a messy, specific memory that feels more lived-in.",
        },
        topic: "Specific personal memory",
        concept:
          "Human writing often includes imperfect moments, small embarrassments, and details that do not sound optimized.",
      },
      {
        statement:
          "In conclusion, technology has both advantages and disadvantages for students in today's rapidly changing world.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This is a safe, balanced sentence that could fit almost any essay. That broadness is a common AI signal.",
          incorrect:
            "The sentence is not wrong, but it is vague and formulaic, with no specific argument or student voice.",
        },
        topic: "Formulaic essay language",
        concept:
          "AI text often defaults to balanced, low-risk statements that sound reasonable but do not say much.",
      },
      {
        statement:
          "I was going to argue that phones only distract us, but then I remembered I learned half the chemistry unit from videos my teacher posted when I was sick.",
        correctAnswer: "human",
        feedback: {
          correct:
            "This shows a change in thinking tied to a specific school experience, which feels like a person reflecting.",
          incorrect:
            "The sentence includes revision, memory, and personal context, which are strong human-style clues.",
        },
        topic: "Reflective revision",
        concept:
          "Human writing often shows how a person changed their mind or noticed an exception from real experience.",
      },
      {
        statement:
          "Dear Teacher, I am writing to respectfully request an extension due to unforeseen circumstances that affected my ability to complete the assignment on time.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This sounds like AI because it is formal and generic, with vague circumstances and no clear student context.",
          incorrect:
            "The tone is polite, but it feels template-like instead of specific to a real situation.",
        },
        topic: "Template wording",
        concept:
          "AI often produces polished templates. Useful writing usually needs the student's real context and honest details.",
      },
      {
        statement:
          "Hi Ms. Rivera, I finished the outline but got stuck turning my second source into evidence. Could I turn it in tomorrow after I revise that paragraph?",
        correctAnswer: "human",
        feedback: {
          correct:
            "This feels human because it names the specific problem, teacher, task, and realistic request.",
          incorrect:
            "The concrete details and direct ask make it feel more like an actual student message.",
        },
        topic: "Specific teacher email",
        concept:
          "Human writing often gives enough specific context to explain the real problem without sounding like a generic template.",
      },
      {
        statement:
          "Robotics club helped me develop teamwork, problem-solving abilities, and a passion for STEM innovation.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This sounds AI-like because it uses common resume-style phrases without showing what actually happened.",
          incorrect:
            "The sentence is plausible, but it is generic enough to fit thousands of students.",
        },
        topic: "Resume-style generality",
        concept:
          "AI writing often relies on impressive but interchangeable phrases. Specific evidence makes writing stronger.",
      },
      {
        statement:
          "For the first two weeks in robotics, my main job was holding wires and pretending I knew which sensor was which, but by competition day I could explain why the left motor kept drifting.",
        correctAnswer: "human",
        feedback: {
          correct:
            "This has growth, humor, and a concrete robotics detail, which makes it feel more human.",
          incorrect:
            "The sentence is specific and a little uneven in a believable way, which points toward human writing.",
        },
        topic: "Lived growth detail",
        concept:
          "Specific growth stories are stronger than generic skill claims because they show what changed.",
      },
    ],
  },
  patternPrediction: {
    instructions:
      "Guess whether this pattern explanation was written by AI or a human.",
    options: [
      {
        value: "ai",
        label: "AI",
      },
      {
        value: "human",
        label: "Human",
      },
    ],
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        statement:
          "The next number is probably 16 because the sequence doubles each time.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This is polished, direct, and confident in a way that often matches AI-generated pattern explanations.",
          incorrect:
            "A clean explanation can sound human, but this style is very typical of an AI response.",
        },
        concept:
          "AI answers often compress reasoning into a neat explanation, even when a human might show more hesitation or scratch work.",
      },
      {
        statement:
          "I think it goes 2, 4, 8, 16, but I always double-check because I mix up patterns like this.",
        correctAnswer: "human",
        feedback: {
          correct:
            "The self-correction and uncertainty make it feel more like a human thinking out loud.",
          incorrect:
            "Humans often include doubt or habits when explaining their reasoning.",
        },
        concept:
          "Metacognition is a useful clue: people often mention how they think, check, or get confused.",
      },
      {
        statement:
          "Each term increases by adding the next odd number, so the sequence follows a square-number pattern.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This is a compact textbook-style explanation, a common AI pattern when solving sequences.",
          incorrect:
            "The explanation is possible from a person, but its formal, compressed wording leans AI.",
        },
        concept:
          "A polished explanation is not proof by itself, but it is a signal to combine with tone, specificity, and confidence.",
      },
      {
        statement:
          "I got 21 because I added 3, then 5, then 7, but I might be seeing the pattern wrong.",
        correctAnswer: "human",
        feedback: {
          correct:
            "The answer shows working, uncertainty, and a possible mistake, which feels like a person reasoning in real time.",
          incorrect:
            "The uncertainty and scratch-work style are strong human clues.",
        },
        concept:
          "Imperfect reasoning can be informative. Humans often expose the path they took, including uncertainty or possible errors.",
      },
      {
        statement:
          "The sequence alternates between multiplying by 2 and subtracting 1; therefore, the next value is 23.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "The explanation is concise and authoritative, and it states a rule without showing much exploratory thinking.",
          incorrect:
            "Formal confidence can make an answer sound convincing, but it may still be an AI-style explanation.",
        },
        concept:
          "Confidence is not the same as truth or humanness. AI-generated reasoning often presents a neat rule even when more checking is needed.",
      },
      {
        statement:
          "Wait, I first thought it was adding 4 each time, but that breaks on the third number, so I need another rule.",
        correctAnswer: "human",
        feedback: {
          correct:
            "This shows false starts and revision, which feels like a person working through the pattern.",
          incorrect:
            "The self-correction is a strong clue. People often reveal the messy path, not just the final answer.",
        },
        concept:
          "A visible thinking process can be more human than a perfect answer. Revision, hesitation, and checking are useful signals.",
      },
      {
        statement:
          "The pattern appears to be increasing by a consistent recursive relationship, so the next term is the most logical continuation.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This sounds AI-like because it is formal, vague, and confident without showing the actual pattern.",
          incorrect:
            "The wording feels polished, but it avoids concrete scratch work or a clear human checking process.",
        },
        concept:
          "AI explanations can sound sophisticated while staying vague. Watch for formal language that does not actually show the reasoning.",
      },
    ],
  },
};

export default aiOrHumanContent;
