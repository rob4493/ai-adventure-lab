const questionChoiceContent = {
  askBetterQuestions: {
    instructions:
      "Choose the best next question before giving advice.",
    successTitle: "Good Question!",
    retryTitle: "Try a Sharper Question",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A student says: I need help choosing a topic for my project.",
        aiResponse:
          "You should do your project about volcanoes. They are exciting and easy to explain.",
        betterResponse:
          "I can help. What topics are you already interested in, what class is this for, and are there any project requirements?",
        prompt: "What should you ask next?",
        correctAnswer: "interests",
        options: [
          {
            id: "interests",
            label: "What topics are you already interested in?",
            feedback:
              "This is the best next question because it uncovers motivation before suggesting topics.",
          },
          {
            id: "write-it",
            label: "Do you want me to write the whole project?",
            feedback:
              "This skips the student's thinking and does not clarify the goal.",
          },
          {
            id: "stress",
            label: "Why is school stressful?",
            feedback:
              "This may matter later, but it does not help choose a project topic yet.",
          },
        ],
        concept:
          "A good next question finds the missing context needed for a useful answer.",
      },
      {
        scenario:
          "Someone says: I want to use AI for my homework.",
        aiResponse:
          "Paste the homework here and I will give you the final answers.",
        betterResponse:
          "Before I help, what does your teacher allow, and what part are you trying to understand? I can explain, give hints, or check your work.",
        prompt: "Which question best supports responsible AI use?",
        correctAnswer: "allowed",
        options: [
          {
            id: "fastest",
            label: "What is the fastest way to get the answer?",
            feedback:
              "Speed is tempting, but it can lead to shortcutting the learning goal.",
          },
          {
            id: "allowed",
            label: "What does your teacher allow, and what part are you trying to learn?",
            feedback:
              "This question checks both rules and learning purpose before giving advice.",
          },
          {
            id: "copy",
            label: "Do you want a final answer to copy?",
            feedback:
              "This encourages misuse and avoids the learning question.",
          },
        ],
        concept:
          "Good AI literacy asks about rules, goals, and learning needs before using AI on schoolwork.",
      },
      {
        scenario:
          "A friend says: I do not know if I should join the robotics club.",
        aiResponse:
          "Yes, you should join. Robotics is useful and will look good later.",
        betterResponse:
          "What sounds exciting about robotics, and what worries you about joining? We can compare the pros, concerns, and time commitment.",
        prompt: "What is the best next question?",
        correctAnswer: "tradeoff",
        options: [
          {
            id: "tradeoff",
            label: "What sounds exciting about it, and what are you worried about?",
            feedback:
              "This reveals both motivation and constraint, which makes later advice more useful.",
          },
          {
            id: "yes",
            label: "Can I just tell you yes?",
            feedback:
              "That gives advice too soon without understanding the decision.",
          },
          {
            id: "popular",
            label: "Is robotics popular at your school?",
            feedback:
              "Popularity could matter, but it is less useful than the person's own goals and concerns.",
          },
        ],
        concept:
          "When someone is deciding, ask about goals, worries, tradeoffs, and constraints before recommending.",
      },
      {
        scenario:
          "A user asks AI: What should I eat to be healthier?",
        aiResponse:
          "Start a strict diet and cut out most carbs. That is the healthiest choice.",
        betterResponse:
          "I can share general ideas, but first: do you have allergies, health needs, budget limits, or foods you avoid?",
        prompt: "Which question should come before advice?",
        correctAnswer: "needs",
        options: [
          {
            id: "needs",
            label: "Do you have allergies, health needs, budget limits, or foods you avoid?",
            feedback:
              "This checks important constraints before suggesting food advice.",
          },
          {
            id: "trend",
            label: "Do you want the trendiest diet?",
            feedback:
              "Trendy does not mean safe, useful, or appropriate.",
          },
          {
            id: "favorite",
            label: "What is your favorite color?",
            feedback:
              "This is not relevant to a healthier eating recommendation.",
          },
        ],
        concept:
          "Advice can become risky when it ignores personal constraints, safety needs, or context.",
      },
      {
        scenario:
          "A student says: I am stuck on this math problem.",
        aiResponse:
          "Here is the answer. Copy this into your worksheet.",
        betterResponse:
          "What have you tried so far, and where did you get stuck? I can give a hint or walk through the next step.",
        prompt: "Which question helps without taking over?",
        correctAnswer: "tried",
        options: [
          {
            id: "answer",
            label: "Do you want the answer immediately?",
            feedback:
              "That may solve the task, but it does not support learning.",
          },
          {
            id: "tried",
            label: "What have you tried, and where did you get stuck?",
            feedback:
              "This helps locate the confusion so the next hint can be useful.",
          },
          {
            id: "hard",
            label: "Is math always hard for you?",
            feedback:
              "This is too broad and may make the student feel judged.",
          },
        ],
        concept:
          "Question-first tutoring helps the learner continue thinking instead of just receiving an answer.",
      },
    ],
  },
  sourceScanner: {
    instructions:
      "Decide whether the AI's source response is reliable or risky.",
    successTitle: "Good Source Check!",
    retryTitle: "Scan the Details",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A student asks AI for a source about the Moon's gravity.",
        aiResponse:
          "Here is a link about the Moon's gravity: spacefacts-example.com/moon-gravity. It says the Moon has lower gravity than Earth.",
        betterResponse:
          "Here is a source from NASA, titled: Moon Fact Sheet, published by: NASA Goddard Space Flight Center, author: NASA, updated on: January 11, 2024. It lists the Moon's surface gravity and shows it is about one-sixth of Earth's gravity.",
        prompt: "Is this source response reliable or risky?",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "A link alone is not enough. The AI did not identify the author, organization, date, or why the source should be trusted.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. The claim may be true, but the source response is weak because it gives almost no verifiable details.",
          },
        ],
        concept:
          "A useful source response should make verification easier, not just hand over a link.",
      },
      {
        scenario:
          "A user asks AI for evidence about teen screen time and sleep.",
        aiResponse:
          "Here is a source from the Journal of Adolescent Health, titled: Screen Media Use and Sleep in Adolescents, published in: 2023, author: the study researchers listed on the article, link type: DOI or journal page. It reviews evidence about screen timing and sleep quality.",
        betterResponse:
          "This is the right pattern: source name, article title, publication year, author information, DOI or journal link, and a short summary of what the source actually supports.",
        prompt: "Is this source response reliable or risky?",
        correctAnswer: "reliable",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "Correct. It gives enough source details to verify the claim instead of relying only on AI's wording.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "This response still needs checking, but it provides strong verification details like authors, publication, date, and DOI.",
          },
        ],
        concept:
          "Reliable does not mean blindly trust it. It means the AI gave you enough details to verify the source yourself.",
      },
      {
        scenario:
          "A user asks AI for a source on a new phone's battery life.",
        aiResponse:
          "This article from 2019 explains the battery life, so it should answer your question.",
        betterResponse:
          "Here is a better source type: the manufacturer's official specs page, titled: Battery and Power Specifications for [phone model], published by: [manufacturer], updated for: the current model year. It lists battery capacity, charging details, and expected battery performance.",
        prompt: "Is this source response reliable or risky?",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "For fast-changing topics like products and technology, an old source may not match the current question.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. The source may be real, but it is too old to confidently answer a question about a new phone.",
          },
        ],
        concept:
          "Source quality depends on the topic. Dates matter more when information changes quickly.",
      },
      {
        scenario:
          "A user asks AI whether a surprising health claim is true.",
        aiResponse:
          "This blog post proves it. The author says doctors are hiding the truth, but the post does not list studies, medical organizations, dates, or named experts.",
        betterResponse:
          "Here is a stronger source from the CDC or NIH, titled: [health topic] Overview, published by: a named public health organization, updated on: the page's listed review date, author: medical or expert review team. It summarizes the claim using evidence and safety guidance.",
        prompt: "Is this source response reliable or risky?",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "A dramatic claim without named evidence, dates, or credible support is not a reliable source response.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. Big claims need clear evidence, especially for health topics.",
          },
        ],
        concept:
          "The bigger or riskier the claim, the more important it is to check evidence, expertise, and independent confirmation.",
      },
      {
        scenario:
          "A user asks AI for a source about a historical event.",
        aiResponse:
          "According to History Archive Weekly, article title: 'The Hidden Treaty of 1842,' author: Dr. Elena Morris, published April 12, 2021. I could not find a working link or independent references to this article.",
        betterResponse:
          "Here is a better source path: use a library database or museum archive entry, titled: [verified event or treaty name], published by: a university press, museum, archive, or encyclopedia, author: named historian or institution, date: listed publication date. It should summarize the event and provide a working catalog or archive link.",
        prompt: "Is this source response reliable or risky?",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "Specific details can look convincing, but if the source cannot be found or independently checked, it is risky.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. AI can produce citation-like details that sound real but are not verifiable.",
          },
        ],
        concept:
          "A detailed citation is not automatically real. If you cannot verify it, do not treat it as evidence.",
      },
    ],
  },
  privacyShield: {
    instructions:
      "Choose the safest useful prompt or response.",
    successTitle: "Safe Choice!",
    retryTitle: "Protect More Privacy",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "You want AI to help write an email to your teacher about missing class.",
        aiResponse:
          "Include your full name, home address, phone number, and exact medical reason so the email sounds convincing.",
        betterResponse:
          "You can write: I missed class for a personal reason. Could you please let me know what I should review or make up?",
        prompt: "Which prompt protects privacy best?",
        correctAnswer: "general",
        options: [
          {
            id: "full-details",
            label:
              "Write my teacher an email. My full name is Maya Chen, I was at 14 Pine Street, and my phone is 555-0148.",
            feedback:
              "This includes personal details the AI does not need to write a useful email.",
          },
          {
            id: "general",
            label:
              "Help me write a respectful email to my teacher saying I missed class for a personal reason and asking how to catch up.",
            feedback:
              "This keeps the request useful while avoiding names, addresses, phone numbers, and private details.",
          },
          {
            id: "medical",
            label:
              "Explain my exact medical issue to my teacher and make it sound urgent.",
            feedback:
              "This shares sensitive health information and asks the AI to reveal more than needed.",
          },
        ],
        concept:
          "A safer prompt gives the AI enough context to help without including private identifying details.",
      },
      {
        scenario:
          "A friend sends you screenshots of a private group chat and asks you to summarize them with AI.",
        aiResponse:
          "Upload the screenshots as-is. The names and exact messages will help me make the summary more accurate.",
        betterResponse:
          "Ask permission first. If a summary is still needed, remove names and private details, then summarize only the specific issue.",
        prompt: "What is the safest move?",
        correctAnswer: "remove-identifiers",
        options: [
          {
            id: "upload-all",
            label:
              "Upload the screenshots exactly as they are so the AI has full context.",
            feedback:
              "That may expose names, messages, usernames, and private conversation details.",
          },
          {
            id: "remove-identifiers",
            label:
              "Ask permission first, then remove names and private details before summarizing only the needed issue.",
            feedback:
              "This respects consent and reduces exposure before using AI on someone else's messages.",
          },
          {
            id: "post-summary",
            label:
              "Summarize it with AI, then post the summary publicly without names.",
            feedback:
              "Removing names helps, but public posting can still reveal private context or harm people involved.",
          },
        ],
        concept:
          "Privacy is not only about names. Consent, context, and where the result goes all matter.",
      },
      {
        scenario:
          "You want AI to plan a walking route from school to your house.",
        aiResponse:
          "Send me your school name, home address, daily schedule, and the exact time you walk home.",
        betterResponse:
          "For privacy, avoid exact addresses or routines. I can give general pedestrian safety tips and route-planning advice.",
        prompt: "Which choice is safer?",
        correctAnswer: "nearby",
        options: [
          {
            id: "exact-route",
            label:
              "Give AI my school name, home address, daily schedule, and the exact time I walk home.",
            feedback:
              "This combines location and routine details, which can be sensitive and risky.",
          },
          {
            id: "nearby",
            label:
              "Ask for general pedestrian safety tips and route-planning advice without sharing exact addresses or routines.",
            feedback:
              "This gets helpful guidance without exposing precise location or schedule information.",
          },
          {
            id: "friends",
            label:
              "Add my friends' addresses too so the AI can plan a group route.",
            feedback:
              "This shares other people's private location details without a clear need or consent.",
          },
        ],
        concept:
          "Exact locations, routines, and other people's addresses deserve extra caution.",
      },
      {
        scenario:
          "A form asks you to paste a customer support email into AI so it can write a reply.",
        aiResponse:
          "Paste the full thread, including account numbers, email addresses, order IDs, and any temporary passwords.",
        betterResponse:
          "Remove names, account numbers, email addresses, order IDs, and credentials. Then ask for a polite reply template.",
        prompt: "Which version is best to share?",
        correctAnswer: "redacted",
        options: [
          {
            id: "redacted",
            label:
              "Remove the customer's name, account number, email, and order ID, then ask for a polite reply template.",
            feedback:
              "This keeps the communication goal while removing identifiers the AI does not need.",
          },
          {
            id: "raw",
            label:
              "Paste the full email thread with names, account numbers, and order details.",
            feedback:
              "That shares private customer information and creates unnecessary exposure.",
          },
          {
            id: "password",
            label:
              "Include the temporary password so AI can write exact login steps.",
            feedback:
              "Passwords and login credentials should not be pasted into AI tools.",
          },
        ],
        concept:
          "Redaction means removing sensitive details while keeping enough context to complete the task.",
      },
      {
        scenario:
          "You want AI to help make a birthday invitation.",
        aiResponse:
          "Send the full guest list, home address, phone numbers, and the exact time everyone will be away after the party.",
        betterResponse:
          "I can create a friendly invitation template with placeholders for the date, time, location, and RSVP details.",
        prompt: "Which prompt is safest and still useful?",
        correctAnswer: "safe-invite",
        options: [
          {
            id: "safe-invite",
            label:
              "Create a friendly birthday invitation template with placeholders for date, time, and location.",
            feedback:
              "Placeholders let you get useful writing help without sharing private event details.",
          },
          {
            id: "guest-list",
            label:
              "Use my full guest list, home address, and everyone's phone numbers to make the invitation.",
            feedback:
              "This shares personal contact and location information for many people.",
          },
          {
            id: "public",
            label:
              "Write a public post with my address and the time nobody will be home after the party.",
            feedback:
              "This reveals location and schedule details publicly, which is not safe.",
          },
        ],
        concept:
          "Templates and placeholders are often the safest way to get AI help for personal events.",
      },
    ],
  },
  biasLens: {
    instructions:
      "Choose the fairest and most evidence-based AI response.",
    successTitle: "Fair Choice!",
    retryTitle: "Check the Bias",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "An AI is asked to recommend one student for a robotics team. It says the student who sounds most confident should be picked.",
        aiResponse:
          "Pick the most confident student. Confident people usually make the best leaders.",
        betterResponse:
          "Use the same criteria for every student, such as interest, teamwork, effort, relevant experience, and willingness to learn.",
        prompt: "What is the fairest next step?",
        correctAnswer: "criteria",
        options: [
          {
            id: "confidence",
            label:
              "Choose the most confident student because confidence means they will lead well.",
            feedback:
              "Confidence can matter, but using it alone may reward style over skill and miss quieter students.",
          },
          {
            id: "criteria",
            label:
              "Compare all students using the same criteria, like interest, teamwork, effort, and relevant experience.",
            feedback:
              "This is fairer because everyone is judged by the same clear standards.",
          },
          {
            id: "fast",
            label:
              "Pick quickly so the AI does not overthink the decision.",
            feedback:
              "Fast decisions can hide unfair assumptions instead of checking them.",
          },
        ],
        concept:
          "Fairer decisions use consistent criteria instead of relying on first impressions or confidence alone.",
      },
      {
        scenario:
          "A user asks AI to describe a nurse, and the AI only uses she/her pronouns and assumes the nurse is caring but not technical.",
        aiResponse:
          "She is naturally caring and gentle, which is why she is a good nurse.",
        betterResponse:
          "A nurse can be any gender and uses both care and technical skill to support patients, follow procedures, and solve problems.",
        prompt: "What response handles bias best?",
        correctAnswer: "neutral",
        options: [
          {
            id: "agree",
            label:
              "Keep the description because most people already picture nurses that way.",
            feedback:
              "Common assumptions can still be stereotypes, and repeating them makes the output less fair.",
          },
          {
            id: "neutral",
            label:
              "Use neutral language and describe nursing as both caring and technically skilled.",
            feedback:
              "This avoids gender assumptions and gives a more complete picture of the role.",
          },
          {
            id: "opposite",
            label:
              "Always make the nurse male so the answer balances things out.",
            feedback:
              "Flipping a stereotype every time is still a shortcut. Neutral, flexible wording is stronger.",
          },
        ],
        concept:
          "Bias can show up in pronouns, traits, roles, and what skills the AI chooses to emphasize.",
      },
      {
        scenario:
          "An AI summarizes feedback about a school lunch menu using only comments from one friend group.",
        aiResponse:
          "Everyone thinks the lunch menu is fine because this friend group said they like it.",
        betterResponse:
          "This summary only reflects one group. Gather feedback from students with different schedules, tastes, and dietary needs.",
        prompt: "What should happen before trusting the summary?",
        correctAnswer: "more-voices",
        options: [
          {
            id: "more-voices",
            label:
              "Collect feedback from more students with different needs, schedules, tastes, and dietary restrictions.",
            feedback:
              "This checks whether the summary represents more than one narrow group.",
          },
          {
            id: "popular-group",
            label:
              "Trust the friend group because they are popular and probably know what people think.",
            feedback:
              "Popularity is not the same as representation.",
          },
          {
            id: "ignore",
            label:
              "Ignore feedback and ask AI to invent a better menu instead.",
            feedback:
              "Inventing without evidence can miss real needs and make the result less fair.",
          },
        ],
        concept:
          "Fair summaries need representative input, especially from people affected by the decision.",
      },
      {
        scenario:
          "AI ranks job applicants and gives extra points to people from one school because past employees from that school did well.",
        aiResponse:
          "Applicants from that school should rank higher because people from there have worked out before.",
        betterResponse:
          "Judge applicants by role-relevant skills and evidence. Be careful that school name does not become a shortcut for opportunity or background.",
        prompt: "What is the concern?",
        correctAnswer: "proxy",
        options: [
          {
            id: "proxy",
            label:
              "The school name might act like a shortcut that favors some groups and overlooks individual ability.",
            feedback:
              "Exactly. A detail can become a proxy for privilege, access, or background instead of actual skill.",
          },
          {
            id: "tradition",
            label:
              "It is fair because the company has always liked that school.",
            feedback:
              "Tradition can repeat old patterns, including unfair ones.",
          },
          {
            id: "remove-all",
            label:
              "Remove all qualifications so every applicant looks the same.",
            feedback:
              "The goal is not to erase useful evidence. It is to use evidence that is relevant and fair.",
          },
        ],
        concept:
          "Bias can come from proxy signals: details that seem neutral but unfairly stand in for background or opportunity.",
      },
      {
        scenario:
          "A city asks AI where to add new public Wi-Fi. The AI recommends only busy shopping areas because they have the most online reviews.",
        aiResponse:
          "Put Wi-Fi in the shopping areas with the most reviews. Those places clearly matter most.",
        betterResponse:
          "Use need-based evidence too, like areas with limited internet access, schools, libraries, and community centers.",
        prompt: "Which improvement makes the recommendation fairer?",
        correctAnswer: "needs",
        options: [
          {
            id: "reviews",
            label:
              "Use only online reviews because places with more reviews clearly matter more.",
            feedback:
              "Review data can overrepresent people and places that are already more connected.",
          },
          {
            id: "needs",
            label:
              "Include need-based signals, like areas with limited internet access, schools, libraries, and community centers.",
            feedback:
              "This looks at who needs the resource, not only who already appears in the data.",
          },
          {
            id: "downtown",
            label:
              "Put everything downtown because it is easiest to explain.",
            feedback:
              "Easy explanations can still leave out communities that need support.",
          },
        ],
        concept:
          "Fair AI use asks who is missing from the data and who is affected by the recommendation.",
      },
    ],
  },
};

export default questionChoiceContent;
