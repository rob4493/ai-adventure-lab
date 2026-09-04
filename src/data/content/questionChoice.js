const questionChoiceContent = {
  betterStudentPrompts: {
    instructions:
      "Choose the stronger prompt that should replace the student's first try.",
    initialPromptLabel: "Student's First Prompt",
    successTitle: "Stronger Prompt!",
    retryTitle: "Try a Clearer Prompt",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A high school student is starting an argumentative essay about technology.",
        initialPrompt:
          "I need a topic for my argumentative essay about technology.",
        aiResponse:
          "Write about how phones are bad for teens. That topic is easy and teachers understand it.",
        betterResponse:
          "Here are three arguable topics that fit your rubric: 1. Schools should allow AI tools for brainstorming but not final writing. 2. Phone restrictions during class improve focus but should allow emergency access. 3. Social media platforms should have stronger teen privacy rules. Each can include a clear claim, counterargument, and credible sources.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Essay requirements",
        correctAnswer: "rubric",
        options: [
          {
            id: "rubric",
            label:
              "Help me brainstorm argumentative essay topics about technology. My rubric requires a clear claim, counterargument, and 3 credible sources. I am interested in AI tools, phones in school, and social media.",
            feedback:
              "Correct. This gives AI the assignment type, rubric criteria, source requirement, and student interests.",
          },
          {
            id: "write-it",
            label: "Write my argumentative essay about why phones are bad for teens.",
            feedback:
              "That asks AI to produce the final work instead of helping the student choose and think.",
          },
          {
            id: "easy",
            label: "Give me the easiest technology essay topic.",
            feedback:
              "Ease can matter, but this still skips the rubric, source rules, and student's interests.",
          },
        ],
        concept:
          "High school essay help should start with the rubric, source rules, topic interests, and assignment goal.",
      },
      {
        scenario:
          "A student is trying to use AI responsibly for a history assignment.",
        initialPrompt:
          "My teacher said we can use AI for our history assignment, but I am not sure how much is allowed.",
        aiResponse:
          "I can write the response for you and make it sound natural.",
        betterResponse:
          "Since your teacher allows brainstorming, outlining, and feedback, I can help you make a plan without writing the final answer. Start with your main question, list 2-3 pieces of evidence from class materials, write your own draft, then use AI only to check clarity, organization, and missing support.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Academic integrity",
        correctAnswer: "allowed",
        options: [
          {
            id: "fastest",
            label: "Give me the fastest answer for my history assignment.",
            feedback:
              "Speed is tempting, but this does not protect the student from breaking class rules.",
          },
          {
            id: "allowed",
            label:
              "Help me use AI responsibly for my history assignment. My teacher allows brainstorming, outlining, and feedback, but not writing the final answer. Help me plan my own response.",
            feedback:
              "Correct. This includes the teacher's AI rules and keeps the work focused on learning support.",
          },
          {
            id: "copy",
            label: "Write a complete history response that sounds like me.",
            feedback:
              "This encourages copying and ignores the teacher's AI-use rules.",
          },
        ],
        concept:
          "Responsible school AI use starts by checking teacher rules and focusing on learning support, not copied final answers.",
      },
      {
        scenario:
          "A student is deciding between AP Biology and another science class.",
        initialPrompt:
          "I do not know if I should take AP Biology next year or choose an easier science class.",
        aiResponse:
          "Take AP Biology because AP classes look better for college.",
        betterResponse:
          "AP Biology could fit your health-care interest, but your soccer schedule and current B range matter. A balanced next step is to ask the AP teacher about weekly workload, compare it with your other classes, and decide whether you can protect study time. If the workload would crowd out sleep or other priorities, regular Biology may be the better fit.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Course planning tradeoffs",
        correctAnswer: "tradeoff",
        options: [
          {
            id: "tradeoff",
            label:
              "Help me compare AP Biology with regular Biology. I am interested in health careers, have soccer three days a week, usually earn B's in science, and my counselor said AP Biology is a big workload.",
            feedback:
              "Correct. This gives AI the student's goals, workload, current readiness, and counselor context.",
          },
          {
            id: "yes",
            label: "Tell me if I should take AP Biology.",
            feedback:
              "This asks for a decision too soon without giving enough context.",
          },
          {
            id: "popular",
            label: "Which class will impress colleges the most?",
            feedback:
              "This narrows the decision to image instead of fit, workload, and learning goals.",
          },
        ],
        concept:
          "Course decisions should consider goals, workload, interest, support, and tradeoffs before recommending.",
      },
      {
        scenario:
          "A student needs help planning for several upcoming tests.",
        initialPrompt:
          "I have three tests next week and do not know how to study.",
        aiResponse:
          "Study a little for each test every night and review your notes.",
        betterResponse:
          "Here is a realistic plan: tonight, spend 25 minutes on Biology cell diagrams and 20 minutes on Algebra equations. Tomorrow, review Biology for 30 minutes, then do 15 minutes of Algebra practice. After the Biology test, shift Wednesday and Thursday toward English while keeping a short Algebra review before that test.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Study planning",
        correctAnswer: "schedule",
        options: [
          {
            id: "schedule",
            label:
              "Help me make a realistic study plan. I have Biology on Tuesday, Algebra on Wednesday, and English on Friday. I struggle most with cell diagrams and equations, and I can study about 45 minutes each night.",
            feedback:
              "Correct. This gives AI the test dates, weak topics, subjects, and realistic study time.",
          },
          {
            id: "all-night",
            label: "Make me a plan where I study everything for five hours every night.",
            feedback:
              "This may be unrealistic and does not ask which subjects or topics need priority.",
          },
          {
            id: "favorite",
            label: "Tell me which test I can study for the least.",
            feedback:
              "This focuses on avoiding work instead of planning around deadlines and weak topics.",
          },
        ],
        concept:
          "Study help should ask about deadlines, weak topics, and realistic time before making a plan.",
      },
      {
        scenario:
          "A student is stuck on an algebra problem and needs to show their work.",
        initialPrompt:
          "I am stuck on this algebra problem and have to show my work.",
        aiResponse:
          "Here is the answer and the steps you can copy.",
        betterResponse:
          "Good start subtracting 5 from both sides. If the variable still has a coefficient, the next move is usually to divide both sides by that coefficient to isolate the variable. Try that step, then I can check whether your equation stays balanced.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Tutoring without taking over",
        correctAnswer: "tried",
        options: [
          {
            id: "answer",
            label: "Give me the answer and the work so I can copy it.",
            feedback:
              "This takes over the assignment and does not help the student learn the step.",
          },
          {
            id: "tried",
            label: "Help me understand this algebra problem without giving away the whole answer. I tried subtracting 5 from both sides, but I got stuck when the variable still had a coefficient. Give me one hint at a time.",
            feedback:
              "Correct. This shows what the student tried and asks for tutoring instead of a copied answer.",
          },
          {
            id: "hard",
            label: "Explain why math is always hard for me.",
            feedback:
              "This is too broad and frames the student negatively instead of focusing on the problem.",
          },
        ],
        concept:
          "Question-first tutoring helps the learner continue thinking instead of just receiving an answer.",
      },
      {
        scenario:
          "A student wants to improve a science fair idea about phone use and sleep.",
        initialPrompt:
          "Can you help me improve my science fair idea about phone use and sleep?",
        aiResponse:
          "Make a poster saying phones cause bad sleep because everyone knows screens are bad at night.",
        betterResponse:
          "A testable question could be: 'How is phone use within 30 minutes of bedtime related to self-reported sleep quality for high school students?' Variables: time spent on phone before bed and reported sleep quality. Use an anonymous survey, avoid collecting names, and include a clear procedure before designing the poster.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Project requirements",
        correctAnswer: "requirements",
        options: [
          {
            id: "requirements",
            label:
              "Help me turn my phone-use-and-sleep idea into a testable science fair question. I can use an anonymous survey, compare phone use before bed with sleep quality, and my teacher requires variables, procedure, and safe data collection.",
            feedback:
              "Correct. This gives AI the possible measurement, comparison, teacher requirements, and safety boundary.",
          },
          {
            id: "flashy",
            label: "Make my phone and sleep project sound flashy.",
            feedback:
              "Flashiness may be tempting, but it does not make the idea measurable or safe.",
          },
          {
            id: "poster",
            label: "Design my science fair poster before I choose the experiment.",
            feedback:
              "The poster comes later. The prompt should focus first on the question, variables, and rules.",
          },
        ],
        concept:
          "Useful AI help often starts by clarifying the goal, rules, resources, and constraints.",
      },
      {
        scenario:
          "A student asks AI about symptoms after soccer practice.",
        initialPrompt:
          "I felt dizzy after soccer practice and have a bad headache. What should I do?",
        aiResponse:
          "Drink water and rest. You are probably just dehydrated.",
        betterResponse:
          "I cannot diagnose you. Dizziness with a bad headache after sports could need attention, especially if you hit your head, feel confused, vomit, have vision changes, faint, or symptoms get worse. Tell a coach, parent, nurse, or trusted adult now, and seek medical help if there are warning signs.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Health urgency",
        correctAnswer: "check-urgency",
        options: [
          {
            id: "check-urgency",
            label:
              "Give me general safety guidance for dizziness and a bad headache after soccer practice. I do not want a diagnosis. Include warning signs and when I should tell a coach, nurse, parent, or medical professional.",
            feedback:
              "Correct. This sets limits, names the symptoms, and asks AI to point toward real-world help.",
          },
          {
            id: "simple-fix",
            label:
              "Tell me what medicine to take so I can feel better fast.",
            feedback:
              "This pushes for a quick fix and skips warning signs.",
          },
          {
            id: "diagnose",
            label: "Diagnose what is wrong with me from these symptoms.",
            feedback:
              "AI should not pretend to diagnose from a short message, especially with symptoms that could be urgent.",
          },
        ],
        concept:
          "High school health questions need caution. AI should check warning signs and point students toward trusted adults or medical help when symptoms could be serious.",
      },
      {
        scenario:
          "A student wants help writing a cover letter for a part-time job after school.",
        initialPrompt:
          "Can you help me write a cover letter for a part-time job?",
        aiResponse:
          "I am a hardworking student who would be perfect for this job. Please hire me.",
        betterResponse:
          "Here is a stronger start: I am interested in the part-time cashier role because I enjoy helping people and staying organized. Through school club fundraising and volunteering at a food drive, I practiced handling responsibilities, communicating politely, and working as part of a team. I would bring that same reliability and respectful attitude to your store.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Part-time job context",
        correctAnswer: "job-context",
        options: [
          {
            id: "job-context",
            label:
              "Help me draft a short cover letter for a part-time cashier job. I have school club fundraising experience, helped at a food drive, want a polite confident tone, and do not want to include private personal details.",
            feedback:
              "Correct. This gives AI the role, relevant experience, tone, and privacy boundaries.",
          },
          {
            id: "salary",
            label: "Write a cover letter saying I really want to make money.",
            feedback:
              "Pay can matter, but this does not provide the role or experience needed for a strong letter.",
          },
          {
            id: "generic",
            label: "Make a generic cover letter that sounds impressive.",
            feedback:
              "That is too vague. Good writing help needs specific evidence and a clear audience.",
          },
        ],
        concept:
          "Career prompts for students improve when AI asks about the role, relevant experience, tone, and privacy boundaries.",
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
          "A student asks AI for a source about whether school start times affect teen sleep.",
        aiResponse:
          "Here is a link about teen sleep: school-sleep-facts.example.com. It says later start times help students.",
        betterResponse:
          "Here is a stronger source to verify: American Academy of Pediatrics, titled: School Start Times for Adolescents, published in Pediatrics, author: Adolescent Sleep Working Group, date: 2014. It explains evidence and recommendations about later school start times and teen sleep.",
        prompt: "Is this source response reliable or risky?",
        topic: "Weak citation details",
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
          "A student asks AI for evidence about teen screen time and sleep for a health-class presentation.",
        aiResponse:
          "Here is a source from the Journal of Adolescent Health, titled: Screen Media Use and Sleep in Adolescents, published in: 2023, author: the study researchers listed on the article, link type: DOI or journal page. It reviews evidence about screen timing and sleep quality.",
        betterResponse:
          "This source gives useful verification details: source name, article title, publication year, author information, DOI or journal link, and a short summary of what the source actually supports. Open the source and confirm it directly before relying on it.",
        prompt: "Is this source response reliable or risky?",
        topic: "Verifiable source details",
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
          "A student asks AI for a source about current college application deadlines.",
        aiResponse:
          "This article from 2019 explains application deadlines, so it should answer your question.",
        betterResponse:
          "For current application deadlines, use the college's official admissions page. Look for a page titled Application Deadlines, published by the college admissions office, updated for the current application cycle, with the deadline, term, and application type listed clearly.",
        prompt: "Is this source response reliable or risky?",
        topic: "Source freshness",
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
          "Source quality depends on the topic. Dates matter more when deadlines, policies, or requirements change.",
      },
      {
        scenario:
          "A student asks AI whether an energy drink claim is safe to use in a health presentation.",
        aiResponse:
          "This fitness blog proves energy drinks are harmless. The author says doctors exaggerate the risks, but the post does not list studies, medical organizations, dates, or named experts.",
        betterResponse:
          "For a health claim like this, use a credible medical source such as CDC, NIH, Mayo Clinic, or a peer-reviewed medical journal. Look for the title, named organization or journal, review date, author or expert review team, and a summary of the evidence and safety guidance.",
        prompt: "Is this source response reliable or risky?",
        topic: "High-stakes evidence",
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
          "A student asks AI for a source proving a quote was said by Frederick Douglass.",
        aiResponse:
          "According to History Archive Weekly, article title: 'Forgotten Speeches of Frederick Douglass,' author: Dr. Elena Morris, published April 12, 2021. I could not find a working link or independent references to this article.",
        betterResponse:
          "I would not use that quote until I can trace it. Look for a primary source archive, Library of Congress item, museum archive, university press, or reputable encyclopedia entry with the speech or document title, author or institution, date, working link, and where the quote appears.",
        prompt: "Is this source response reliable or risky?",
        topic: "Unverifiable citations",
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
      {
        scenario:
          "A student asks AI for sources about whether homework improves learning for a debate.",
        aiResponse:
          "Here are three sources: education-study.net, homeworktruths.blog, and learnbetter-fast.info. They all say homework works.",
        betterResponse:
          "Use an education journal article or research organization report with a clear title, named researcher or organization, publication year, DOI or official report link, and a summary of what kind of homework, age group, and outcome were studied.",
        prompt: "Is this source response reliable or risky?",
        topic: "Link-list quality",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "Several links are not enough if they are vague, low-context, or possibly not independent.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. The response gives link-like names but no authors, dates, publications, or evidence details.",
          },
        ],
        concept:
          "A list of links can still be weak. Reliable source help should explain what each source is and why it supports the claim.",
      },
      {
        scenario:
          "A student asks AI for a source about AI use in classrooms for a school board speech.",
        aiResponse:
          "According to The 2024 Global AI Classroom Report by Dr. Melissa Grant, published by the International Learning Council, 92% of schools improved grades with AI. I cannot provide a working link.",
        betterResponse:
          "I cannot verify that citation, so I should not use it as evidence. I need a traceable source with a real title, publisher or journal, named author or organization, publication date, working link or DOI, and a brief summary of what was studied and what the evidence actually supports.",
        prompt: "Is this source response reliable or risky?",
        topic: "Fake citations",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "The details sound official, but a citation that cannot be verified should not be treated as reliable.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. AI can invent citation-like details, so a working source trail matters.",
          },
        ],
        concept:
          "Citation-like details can be fabricated. If the source cannot be found, treat it as unverified.",
      },
      {
        scenario:
          "A student asks whether a viral claim about recycling is reliable enough for an environmental science project.",
        aiResponse:
          "Here are three links, and they all say the same thing. The pages use similar wording and none list authors, dates, or original data.",
        betterResponse:
          "I would verify this with independent sources, such as a city recycling department page, environmental agency report, or named research organization. I would look for the title, author or organization, update date, link, and a short summary of the original evidence.",
        prompt: "Is this source response reliable or risky?",
        topic: "Independent confirmation",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "Multiple pages can repeat the same unsupported claim. Similar wording is a warning sign.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. Strong verification looks for independent sources and original evidence.",
          },
        ],
        concept:
          "Three repeating links are not the same as independent evidence.",
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
        topic: "Identifying details",
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
        topic: "Consent and private messages",
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
        topic: "Location and routines",
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
        topic: "Customer data redaction",
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
        topic: "Placeholders for personal events",
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
      {
        scenario:
          "You want AI to help you write a post about a class field trip.",
        aiResponse:
          "Include your school name, teacher's name, bus pickup time, and photos of classmates so the post feels personal.",
        betterResponse:
          "I can help write a general field trip reflection without naming students, showing faces, or sharing exact schedules. Use placeholders or ask permission before including identifying details.",
        prompt: "Which choice protects privacy best?",
        topic: "Other people's data",
        correctAnswer: "general-reflection",
        options: [
          {
            id: "classmates",
            label:
              "Upload classmate photos and ask AI to write captions with names.",
            feedback:
              "This shares other people's images and names, which needs permission and may not be appropriate.",
          },
          {
            id: "general-reflection",
            label:
              "Ask for a general reflection using no student names, faces, exact times, or location details.",
            feedback:
              "This keeps the writing useful while reducing identifying information.",
          },
          {
            id: "schedule",
            label:
              "Include the exact bus schedule so families know the timeline.",
            feedback:
              "Exact schedules can be sensitive and usually do not belong in an AI prompt or public post.",
          },
        ],
        concept:
          "Privacy includes other people's names, images, schedules, and locations, not just your own information.",
      },
      {
        scenario:
          "You want AI to help respond to a friend's private message about a family problem.",
        aiResponse:
          "Paste the full conversation, including names and family details, so I can understand the situation.",
        betterResponse:
          "Summarize the situation without names or identifying details, then ask for a kind response that respects privacy.",
        prompt: "Which choice protects your friend's privacy?",
        topic: "Friends and family privacy",
        correctAnswer: "summarize",
        options: [
          {
            id: "paste-all",
            label:
              "Paste the full chat with names so AI has every detail.",
            feedback:
              "That shares another person's private message and identifying details without consent.",
          },
          {
            id: "summarize",
            label:
              "Summarize the issue without names, screenshots, or identifying family details.",
            feedback:
              "Correct. This lets AI help with tone while protecting someone else's privacy.",
          },
          {
            id: "screenshots",
            label:
              "Upload screenshots so AI can read the exact wording.",
            feedback:
              "Screenshots often contain names, photos, timestamps, and private details.",
          },
        ],
        concept:
          "Private messages and family details belong to other people too. Summarize safely and remove identifiers.",
      },
      {
        scenario:
          "You want AI to write a caption for a photo after practice.",
        aiResponse:
          "Tag everyone, mention your school, practice time, and where the team meets.",
        betterResponse:
          "Write a fun caption without names, exact location, school, or routine details unless everyone has agreed to share them.",
        prompt: "Which choice is safest for a social media post?",
        topic: "Social media privacy",
        correctAnswer: "safe-caption",
        options: [
          {
            id: "tag-routine",
            label:
              "Include names, school, practice time, and meeting location.",
            feedback:
              "That can reveal routines, identities, and locations for multiple people.",
          },
          {
            id: "safe-caption",
            label:
              "Ask for a fun caption without names, exact location, school, or routine details.",
            feedback:
              "Correct. It keeps the post useful without exposing private information.",
          },
          {
            id: "faces",
            label:
              "Upload the photo and let AI identify who is in it.",
            feedback:
              "Identifying people in images can create privacy and consent problems.",
          },
        ],
        concept:
          "Social posts can expose routines, locations, and other people's identities.",
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
        topic: "Consistent criteria",
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
        topic: "Stereotypes in wording",
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
        topic: "Representative input",
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
        topic: "Proxy bias",
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
        topic: "Missing data",
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
      {
        scenario:
          "AI is asked to suggest students for an advanced reading group and recommends only students who already speak up often in class.",
        aiResponse:
          "Choose the students who talk the most during discussions because they are clearly the strongest readers.",
        betterResponse:
          "Use multiple fair signals, such as reading assessments, written work, student interest, teacher observations, and whether quieter students have had equal chances to participate.",
        prompt: "What is the bias risk?",
        topic: "Visibility shortcut",
        correctAnswer: "visibility",
        options: [
          {
            id: "visibility",
            label:
              "Speaking often may be a visibility shortcut, not proof of reading ability.",
            feedback:
              "Correct. The AI may be rewarding who is most visible instead of who meets the actual criteria.",
          },
          {
            id: "volume",
            label:
              "Students who speak the most should always get harder work.",
            feedback:
              "That assumes confidence or talk time equals ability, which can be unfair.",
          },
          {
            id: "random",
            label:
              "The only fair choice is to choose students randomly.",
            feedback:
              "Random choice can be useful sometimes, but here the better move is using relevant, consistent evidence.",
          },
        ],
        concept:
          "Bias can appear when AI uses visibility, confidence, or participation as a shortcut for ability.",
      },
      {
        scenario:
          "AI screens resumes and gives lower scores to applicants with employment gaps.",
        aiResponse:
          "Applicants with gaps are less reliable, so rank them lower.",
        betterResponse:
          "Do not assume the reason for a gap. Evaluate role-relevant skills, experience, and evidence consistently for every applicant.",
        prompt: "What is the bias problem?",
        topic: "Employment-gap bias",
        correctAnswer: "gap-assumption",
        options: [
          {
            id: "gap-assumption",
            label:
              "It assumes employment gaps mean someone is less reliable.",
            feedback:
              "Correct. A gap can have many causes and should not become an automatic penalty.",
          },
          {
            id: "strict-screening",
            label:
              "It is only being strict, which is always fair.",
            feedback:
              "Strict rules can still be unfair if the rule is based on an unsupported assumption.",
          },
          {
            id: "no-problem",
            label:
              "There is no problem because resumes are work documents.",
            feedback:
              "Hiring decisions can strongly affect people, so biased shortcuts matter here.",
          },
        ],
        concept:
          "Gaps can reflect caregiving, health, school, layoffs, or many other reasons. AI should not turn them into automatic negatives.",
      },
      {
        scenario:
          "AI recommends a coding club only to students who already own expensive laptops.",
        aiResponse:
          "Students with better laptops are probably more serious about coding.",
        betterResponse:
          "Use interest, access needs, effort, and learning goals instead of assuming equipment equals ability.",
        prompt: "What is the fairest improvement?",
        topic: "Resource bias",
        correctAnswer: "resource-shortcut",
        options: [
          {
            id: "laptop-quality",
            label:
              "Use laptop quality because better equipment proves stronger interest.",
            feedback:
              "Equipment can reflect access to money or resources, not talent or motivation.",
          },
          {
            id: "resource-shortcut",
            label:
              "Use interest, effort, learning goals, and access needs instead of equipment.",
            feedback:
              "Correct. This avoids turning resources into a shortcut for ability.",
          },
          {
            id: "exclude-beginners",
            label:
              "Exclude beginners because clubs should only accept students who are already ready.",
            feedback:
              "That can block the learners who would benefit most from the opportunity.",
          },
        ],
        concept:
          "Resources can reflect access, not talent or motivation.",
      },
    ],
  },
  claimCheck: {
    instructions:
      "Decide whether the AI's response gives enough source detail to trust the claim or whether you should verify first.",
    successTitle: "Good Claim Check!",
    retryTitle: "Check The Claim",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "Someone pastes this claim into AI: NASA says the Moon's gravity is about one-sixth of Earth's gravity.",
        aiResponse:
          "Yes, according to NASA's Moon Fact Sheet from NASA Goddard Space Flight Center, updated January 11, 2024, the Moon's surface gravity is about one-sixth of Earth's.",
        betterResponse:
          "This source response includes the title, organization, update date, and what the source actually supports. Open the source and confirm those details directly before relying on it.",
        prompt: "What should you do with this AI response?",
        topic: "Good source pattern",
        correctAnswer: "trust-it",
        options: [
          {
            id: "trust-it",
            label: "Trust It",
            feedback:
              "Correct. It gives a named source, organization, date, and a clear summary of what the source supports.",
          },
          {
            id: "verify-first",
            label: "Verify First",
            feedback:
              "You should still be willing to click through later, but this response gives enough source detail to be cautiously trusted.",
          },
        ],
        concept:
          "A trustworthy AI response makes verification easier by naming the source, organization, date, and supported claim.",
      },
      {
        scenario:
          "Someone pastes this claim into AI: A new federal law bans homework in every public school starting next year.",
        aiResponse:
          "Yes, this is true. A lot of students are talking about it online, and schools have been moving away from homework.",
        betterResponse:
          "I cannot confirm this without evidence. Please provide the exact law name, date, jurisdiction, and an official source such as Congress.gov, a state legislature page, or a trusted news report showing whether it passed or was only proposed.",
        prompt: "What should you do with this AI response?",
        topic: "Original source check",
        correctAnswer: "verify-first",
        options: [
          {
            id: "trust-it",
            label: "Trust It",
            feedback:
              "Popularity is not evidence. This response gives no official source, law name, date, or location.",
          },
          {
            id: "verify-first",
            label: "Verify First",
            feedback:
              "Correct. Legal claims need exact details and an official or trusted source.",
          },
        ],
        concept:
          "A claim about laws or government action needs the original source, date, place, and exact status.",
      },
      {
        scenario:
          "Someone pastes this claim into AI: The CDC says adults should get at least 150 minutes of moderate-intensity physical activity each week.",
        aiResponse:
          "Yes, here is a CDC source: Adult Activity: An Overview, published by the Centers for Disease Control and Prevention. It says adults need at least 150 minutes a week of moderate-intensity aerobic activity, plus muscle-strengthening activity on 2 days.",
        betterResponse:
          "This health source includes the organization, page title, and what the source supports. Because this is a health topic, open the official page directly before acting.",
        prompt: "What should you do with this AI response?",
        topic: "Health source details",
        correctAnswer: "trust-it",
        options: [
          {
            id: "trust-it",
            label: "Trust It",
            feedback:
              "Correct. It gives a credible organization, source title, and a specific summary of what the source supports.",
          },
          {
            id: "verify-first",
            label: "Verify First",
            feedback:
              "Direct checking is still smart for health guidance, but the AI response itself follows a strong source pattern.",
          },
        ],
        concept:
          "For health claims, strong AI responses should name credible organizations and summarize the exact guidance they support.",
      },
      {
        scenario:
          "Someone pastes this claim into AI: A chart says 92% of people support a new policy.",
        aiResponse:
          "The chart looks professional, so the statistic is likely accurate.",
        betterResponse:
          "A professional-looking chart is not enough. I would look for who conducted the survey, sample size, date, question wording, funding source, and a link to the original data.",
        prompt: "What should you do with this AI response?",
        topic: "Chart source details",
        correctAnswer: "verify-first",
        options: [
          {
            id: "trust-it",
            label: "Trust It",
            feedback:
              "Design can make weak data look convincing. This response gives no source, method, date, or sample size.",
          },
          {
            id: "verify-first",
            label: "Verify First",
            feedback:
              "Correct. Data claims need source and method details.",
          },
        ],
        concept:
          "Charts and statistics need source, date, method, and context before they deserve trust.",
      },
      {
        scenario:
          "Someone pastes this claim into AI: The National Weather Service says a severe thunderstorm watch means conditions are possible, while a warning means the storm is happening or imminent.",
        aiResponse:
          "Yes, according to National Weather Service weather safety guidance, a watch means conditions are possible, while a warning means hazardous weather is occurring or imminent in the warned area.",
        betterResponse:
          "This answer uses a credible source organization and explains what the source supports. To verify it, look for the exact National Weather Service page title and link before relying on it.",
        prompt: "What should you do with this AI response?",
        topic: "Public safety source",
        correctAnswer: "trust-it",
        options: [
          {
            id: "trust-it",
            label: "Trust It",
            feedback:
              "Correct. It names an appropriate official source and summarizes the supported distinction clearly.",
          },
          {
            id: "verify-first",
            label: "Verify First",
            feedback:
              "It could include a direct page title or link, but this is still a strong enough source pattern to cautiously trust.",
          },
        ],
        concept:
          "For public safety claims, official organizations and clear source-backed definitions matter.",
      },
      {
        scenario:
          "Someone pastes this claim into AI: A famous scientist said, 'Curiosity is more important than knowledge.'",
        aiResponse:
          "It sounds like something they would say, so the quote is probably real.",
        betterResponse:
          "I should not judge by style alone. I would look for the quote in a primary source, verified interview, book, speech transcript, or reputable quote archive with a citation.",
        prompt: "What should you do with this AI response?",
        topic: "Fake expert quotes",
        correctAnswer: "verify-first",
        options: [
          {
            id: "trust-it",
            label: "Trust It",
            feedback:
              "A quote sounding believable is not enough. Famous people are often misquoted online.",
          },
          {
            id: "verify-first",
            label: "Verify First",
            feedback:
              "Correct. The AI judged by style instead of using a traceable source.",
          },
        ],
        concept:
          "Quotes need traceable sources. Style alone cannot prove someone said something.",
      },
    ],
  },
  aiRealityCheck: {
    instructions:
      "Decide whether the AI response is safe to use as-is or needs human checking, context, or verification.",
    successTitle: "Good Reality Check!",
    retryTitle: "Check The AI Limit",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A user asks AI: Is the coffee shop on Main Street open right now?",
        aiResponse:
          "Yes, it is open right now until 8 PM.",
        betterResponse:
          "I may not have live business hours. Check the shop's official website, map listing, or call before going, especially if it is a holiday or late in the day.",
        prompt: "What is the smartest way to use this answer?",
        topic: "Live information limits",
        correctAnswer: "verify-live",
        options: [
          {
            id: "trust-live",
            label: "Trust it because AI answered confidently.",
            feedback:
              "Confidence does not mean the AI has live hours or current local information.",
          },
          {
            id: "verify-live",
            label:
              "Use it as a starting point, then check an official or live source.",
            feedback:
              "Correct. Hours, closures, traffic, and availability can change quickly.",
          },
          {
            id: "ignore-ai",
            label: "Never ask AI about local businesses.",
            feedback:
              "AI can still help you plan, but live details need checking.",
          },
        ],
        concept:
          "AI may not know live or recently changed information. Treat it as a starting point, not final proof.",
      },
      {
        scenario:
          "A user asks AI: Why is my check-engine light on?",
        aiResponse:
          "It is probably a loose gas cap. You do not need a mechanic.",
        betterResponse:
          "A loose gas cap is one possibility, but I cannot diagnose the car. Check the owner's manual, note any warning signs, and consider reading the error code or contacting a mechanic.",
        prompt: "What is the main issue with the AI response?",
        topic: "Overconfident diagnosis",
        correctAnswer: "too-certain",
        options: [
          {
            id: "too-certain",
            label: "It gives one cause too confidently.",
            feedback:
              "Correct. AI should explain possibilities and limits, not pretend to diagnose the exact problem.",
          },
          {
            id: "too-long",
            label: "It should be shorter.",
            feedback:
              "The problem is not length. The problem is certainty without enough evidence.",
          },
          {
            id: "mechanic-bad",
            label: "It should never mention a mechanic.",
            feedback:
              "For real-world safety and cost decisions, professional help can be the responsible next step.",
          },
        ],
        concept:
          "When AI lacks direct evidence, it should give possibilities, warning signs, and next steps instead of one confident answer.",
      },
      {
        scenario:
          "A user asks AI: Can I mix these two cleaning products to remove a stain faster?",
        aiResponse:
          "Mixing cleaners can make them stronger, so try a small amount first.",
        betterResponse:
          "Do not mix cleaning products unless the product labels say it is safe. Some combinations can create dangerous fumes. Check the labels, manufacturer guidance, or poison control resources if exposure happens.",
        prompt: "How should the user treat this answer?",
        topic: "Safety caution",
        correctAnswer: "unsafe-advice",
        options: [
          {
            id: "try-small",
            label: "Try a small amount first.",
            feedback:
              "A small test can still create dangerous fumes. Safety guidance should come first.",
          },
          {
            id: "unsafe-advice",
            label: "Reject it and check product safety instructions.",
            feedback:
              "Correct. AI should be cautious around physical safety risks.",
          },
          {
            id: "ask-color",
            label: "Ask what color the stain is.",
            feedback:
              "More stain context is useful, but it does not solve the unsafe mixing advice.",
          },
        ],
        concept:
          "For health, safety, chemical, legal, or financial topics, AI advice needs extra caution and reliable sources.",
      },
      {
        scenario:
          "A user asks AI to summarize a long rental agreement before signing it.",
        aiResponse:
          "The lease looks normal. You can sign it.",
        betterResponse:
          "I can summarize key sections, but I cannot guarantee the lease is safe or legal for your situation. Pay attention to fees, renewal terms, repairs, deposits, penalties, and consider asking a qualified local professional if anything is unclear.",
        prompt: "What should AI avoid doing here?",
        topic: "Decision responsibility",
        correctAnswer: "final-decision",
        options: [
          {
            id: "summary",
            label: "Summarizing important sections.",
            feedback:
              "Summarizing can be useful if the limits are clear.",
          },
          {
            id: "final-decision",
            label: "Telling the user it is safe to sign.",
            feedback:
              "Correct. AI can help review, but the final decision needs human judgment and sometimes expert advice.",
          },
          {
            id: "key-terms",
            label: "Pointing out fees and renewal terms.",
            feedback:
              "That is useful. The risky part is giving a blanket approval.",
          },
        ],
        concept:
          "AI can support decisions, but it should not take responsibility for high-stakes personal choices.",
      },
    ],
  },
  scamShield: {
    instructions:
      "Spot red flags in suspicious messages and choose the safest next step.",
    successTitle: "Good Scam Check!",
    retryTitle: "Find The Red Flag",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A text says: Your package is delayed. Pay $1.38 in fees at delivery-update-fast.com or it will be returned today.",
        aiResponse:
          "The fee is small, so it is probably fine to click and pay.",
        betterResponse:
          "This message has scam warning signs: urgency, an unfamiliar link, and an unexpected fee. Do not click the link or enter payment details. Open the official delivery app or website yourself and check the tracking there.",
        prompt: "What is the safest next step?",
        topic: "Suspicious links",
        correctAnswer: "official-channel",
        options: [
          {
            id: "pay-small-fee",
            label: "Pay because the fee is small.",
            feedback:
              "Small fees are often used to get card details or account information.",
          },
          {
            id: "official-channel",
            label:
              "Avoid the link and check the delivery through the official app or site.",
            feedback:
              "Correct. Verify through a trusted channel you open yourself.",
          },
          {
            id: "reply",
            label: "Reply and ask if the message is real.",
            feedback:
              "Replying can confirm your number is active and does not verify the sender.",
          },
        ],
        concept:
          "Suspicious links and unexpected fees should be checked through official channels, not the message itself.",
      },
      {
        scenario:
          "An email says: Your bank account is locked. Reply with your username, password, and security code to restore access.",
        aiResponse:
          "If the email uses your bank's logo, reply with the information so they can unlock it.",
        betterResponse:
          "Bank logos can be copied, and a legitimate bank should not ask for your password or security code by email. Do not reply with that information. Open the official bank app or website yourself, or call the number on your card.",
        prompt: "What is the biggest red flag?",
        topic: "Credential requests",
        correctAnswer: "password-code",
        options: [
          {
            id: "logo",
            label: "The email uses a bank logo.",
            feedback:
              "Logos can be copied. A logo does not prove the message is real.",
          },
          {
            id: "password-code",
            label: "It asks for a password and security code.",
            feedback:
              "Correct. Legitimate services should not ask you to send passwords or security codes by email.",
          },
          {
            id: "locked",
            label: "The account might be locked.",
            feedback:
              "Account warnings can be real, but you should verify through official channels.",
          },
        ],
        concept:
          "Requests for passwords, codes, or banking details are major scam warnings.",
      },
      {
        scenario:
          "Someone messages: I accidentally sent a login code to your phone. Can you send it back to me?",
        aiResponse:
          "If they seem polite, send the code back so they can log in.",
        betterResponse:
          "Do not share the code with anyone. Login codes prove account access, and friendly or accidental-sounding messages can still be attempts to take over your account.",
        prompt: "Which choice protects the user?",
        topic: "Verification codes",
        correctAnswer: "never-share-code",
        options: [
          {
            id: "never-share-code",
            label: "Do not share the code with anyone.",
            feedback:
              "Correct. Verification codes are like temporary keys to an account.",
          },
          {
            id: "ask-name",
            label: "Ask the person for their name first.",
            feedback:
              "A name does not make it safe. The code should not be shared.",
          },
          {
            id: "send-code",
            label: "Send the code if they sound honest.",
            feedback:
              "Scam messages often sound friendly or urgent. Never share login codes.",
          },
        ],
        concept:
          "Verification codes should never be shared. They can give someone access to your account.",
      },
      {
        scenario:
          "A message from someone claiming to be your manager says: I am in a meeting. Buy gift cards now and send me the codes.",
        aiResponse:
          "This sounds urgent, so follow the request quickly.",
        betterResponse:
          "Urgency plus gift card codes is a major scam warning. Pause and verify through a separate trusted channel, such as calling your manager or checking an official work chat, before doing anything.",
        prompt: "What should the user do first?",
        topic: "Urgency and gift cards",
        correctAnswer: "verify-separately",
        options: [
          {
            id: "buy-now",
            label: "Buy the cards before asking questions.",
            feedback:
              "Urgency is part of the pressure tactic. Gift card codes are hard to recover.",
          },
          {
            id: "verify-separately",
            label:
              "Verify through a separate trusted channel before doing anything.",
            feedback:
              "Correct. Do not use the suspicious message itself as proof.",
          },
          {
            id: "send-one",
            label: "Send one gift card code to test if it is real.",
            feedback:
              "Sending even one code can lose money and still does not verify the sender.",
          },
        ],
        concept:
          "Urgent gift-card requests are a common scam pattern. Verify separately before acting.",
      },
      {
        scenario:
          "A marketplace buyer offers to overpay, then asks you to refund the extra money through a different payment app.",
        aiResponse:
          "Overpayment means they are serious. Accept it and refund the difference.",
        betterResponse:
          "Overpayment and off-platform refunds are common marketplace scam patterns. Use the marketplace's official payment system, and do not send money back through a separate app unless the original payment is verified and protected.",
        prompt: "What is the risk?",
        topic: "Marketplace overpayment",
        correctAnswer: "refund-scam",
        options: [
          {
            id: "refund-scam",
            label:
              "The original payment may fail or be reversed after the refund is sent.",
            feedback:
              "Correct. This can leave the seller out the refunded money.",
          },
          {
            id: "generous-buyer",
            label: "The buyer is probably being generous.",
            feedback:
              "Unexpected overpayment is a red flag, not a normal buying pattern.",
          },
          {
            id: "move-fast",
            label: "The seller should move fast to keep the buyer happy.",
            feedback:
              "Pressure to move fast makes scams more effective.",
          },
        ],
        concept:
          "Marketplace scams often use overpayment, pressure, and off-platform refunds.",
      },
    ],
  },
  messageTriage: {
    instructions:
      "Choose the safest first action when a suspicious message arrives.",
    successTitle: "Smart First Move!",
    retryTitle: "Pause Before Acting",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A text says: Your internet service will be disconnected in 30 minutes. Tap this link to confirm your billing details.",
        aiResponse:
          "It sounds important. Tap the link and update your billing before service is disconnected.",
        betterResponse:
          "This urgent shutoff message could be a scam, especially because it includes a link. Do not tap the link. Open your provider's official app or website yourself and check your billing there.",
        prompt: "What should the user do first?",
        topic: "Urgent service messages",
        correctAnswer: "official-app",
        options: [
          {
            id: "tap-link",
            label: "Tap the link because the deadline is short.",
            feedback:
              "Urgency is often used to make people act before checking.",
          },
          {
            id: "official-app",
            label: "Open the official internet provider app or website directly.",
            feedback:
              "Correct. Verify through a channel you open yourself.",
          },
          {
            id: "reply-confirm",
            label: "Reply and ask if the message is real.",
            feedback:
              "Replying does not prove who sent it and can confirm your number is active.",
          },
        ],
        concept:
          "The safest first move is usually to pause and verify through an official channel, not the message link.",
      },
      {
        scenario:
          "A direct message says: This is your cousin. I lost my phone. Can you send money right now?",
        aiResponse:
          "Family emergencies are serious, so send the money quickly.",
        betterResponse:
          "This could be an impersonation scam. Before sending money, contact your cousin through a known number, video call, or another trusted family member to confirm the request is real.",
        prompt: "What should the user do first?",
        topic: "Impersonation messages",
        correctAnswer: "verify-person",
        options: [
          {
            id: "send-money",
            label: "Send money because it might be urgent.",
            feedback:
              "Urgency plus a new contact method is a reason to verify first.",
          },
          {
            id: "verify-person",
            label: "Contact the cousin through a known number or trusted family member.",
            feedback:
              "Correct. Verify the person's identity outside the suspicious message.",
          },
          {
            id: "ask-secret",
            label: "Ask one personal question in the same chat.",
            feedback:
              "That is better than nothing, but the same chat may still be controlled by an impersonator.",
          },
        ],
        concept:
          "Impersonation scams often pressure people to act fast. Verify identity through a separate trusted channel.",
      },
      {
        scenario:
          "An email says: You won a free tablet. Pay shipping today and enter your card number to claim it.",
        aiResponse:
          "You should pay the shipping because the prize is worth more than the fee.",
        betterResponse:
          "Unexpected prize messages that ask for payment or card details are suspicious. Do not enter payment information. Check the company's official website or verified account to see whether the promotion is real.",
        prompt: "What is the safest first response?",
        topic: "Prize scams",
        correctAnswer: "do-not-pay",
        options: [
          {
            id: "do-not-pay",
            label: "Do not pay or enter card details for an unexpected prize.",
            feedback:
              "Correct. Unexpected prizes that require payment are a common scam pattern.",
          },
          {
            id: "pay-shipping",
            label: "Pay shipping because the item is free.",
            feedback:
              "Small fees can be used to collect card details.",
          },
          {
            id: "share-address",
            label: "Send your address first and pay later.",
            feedback:
              "Sharing personal details is still risky when the offer is unverified.",
          },
        ],
        concept:
          "Unexpected prizes that ask for fees, payment, or personal details should be treated as suspicious.",
      },
      {
        scenario:
          "A message says: Your tax refund is ready. Confirm your Social Security number at refund-fast-help.com.",
        aiResponse:
          "The message mentions taxes, so it is probably official.",
        betterResponse:
          "Government-related scams often ask for sensitive information through fake links. Do not enter your Social Security number through this message. Go directly to the official government website instead.",
        prompt: "What should the user do?",
        topic: "Sensitive identity details",
        correctAnswer: "official-government",
        options: [
          {
            id: "enter-ssn",
            label: "Enter the number so the refund is not delayed.",
            feedback:
              "Social Security numbers are highly sensitive and should not be entered through a message link.",
          },
          {
            id: "official-government",
            label: "Avoid the link and check through the official government website.",
            feedback:
              "Correct. Sensitive government or identity issues need official channels.",
          },
          {
            id: "forward-friends",
            label: "Forward it to friends so they can check too.",
            feedback:
              "Forwarding suspicious links can spread risk.",
          },
        ],
        concept:
          "Messages asking for sensitive identity details need extra caution and official verification.",
      },
    ],
  },
  linkDetective: {
    instructions:
      "Look closely at links and choose whether the safest move is to trust, verify, or avoid.",
    successTitle: "Good Link Check!",
    retryTitle: "Inspect The Link",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A text says your package is waiting at http://usps.tracking-help-pay.com.",
        aiResponse:
          "It has USPS in the address, so it should be fine.",
        betterResponse:
          "The real domain is tracking-help-pay.com, not usps.com. Do not click this link. Check tracking by opening the official USPS site or app yourself.",
        prompt: "What is the safest judgment?",
        topic: "Fake subdomains",
        correctAnswer: "avoid-fake-domain",
        options: [
          {
            id: "trust-usps-word",
            label: "Trust it because USPS appears in the link.",
            feedback:
              "Scam links can place a brand name before the real domain.",
          },
          {
            id: "avoid-fake-domain",
            label: "Avoid it because the real domain is not the official USPS domain.",
            feedback:
              "Correct. The real domain is the part right before the main ending.",
          },
          {
            id: "pay-first",
            label: "Click it and only leave if it asks for payment.",
            feedback:
              "Clicking first can still expose risk or lead to a fake page.",
          },
        ],
        concept:
          "Look for the real domain, not just a brand word somewhere in the link.",
      },
      {
        scenario:
          "An email asks you to sign in at https://paypaI.com/security, where the last letter before .com is a capital I, not an L.",
        aiResponse:
          "The link looks close enough to PayPal, so sign in to secure the account.",
        betterResponse:
          "That domain uses a lookalike letter, which is a common phishing trick. Do not sign in through the email link. Type the official website yourself or use the official app.",
        prompt: "What should the user notice?",
        topic: "Lookalike links",
        correctAnswer: "lookalike-letter",
        options: [
          {
            id: "secure-word",
            label: "The word security makes the link safer.",
            feedback:
              "Scam links often use reassuring words like security or verify.",
          },
          {
            id: "lookalike-letter",
            label: "The domain uses a lookalike letter to imitate a trusted brand.",
            feedback:
              "Correct. Tiny spelling changes can point to a fake site.",
          },
          {
            id: "https-safe",
            label: "HTTPS means the page is definitely official.",
            feedback:
              "HTTPS means the connection is encrypted, not that the site is legitimate.",
          },
        ],
        concept:
          "Misspellings and lookalike letters are strong signs of phishing.",
      },
      {
        scenario:
          "A friend sends a shortened link and says: This video is about you. Open it now.",
        aiResponse:
          "If it came from a friend, the shortened link is probably safe.",
        betterResponse:
          "A friend's account can be hacked, and shortened links hide the destination. Do not open it yet. Check with your friend through another method first.",
        prompt: "What is the safest next step?",
        topic: "Shortened links",
        correctAnswer: "verify-friend",
        options: [
          {
            id: "open-fast",
            label: "Open it quickly to see what the video is.",
            feedback:
              "Curiosity and urgency are exactly what this message relies on.",
          },
          {
            id: "verify-friend",
            label: "Verify with the friend through another method before opening.",
            feedback:
              "Correct. Short links hide where they lead.",
          },
          {
            id: "forward",
            label: "Forward the link to someone else to test it.",
            feedback:
              "That spreads the risk to another person.",
          },
        ],
        concept:
          "Shortened links and surprising messages should be checked before opening.",
      },
      {
        scenario:
          "You need to check your bank. You type the bank's known website address yourself into the browser.",
        aiResponse:
          "That is a safer way to reach the bank than using a link from a message.",
        betterResponse:
          "Using a known official address, bookmark, or official app is safer than using a message link. Check the address carefully before signing in.",
        prompt: "Is this link behavior safe or risky?",
        topic: "Official navigation",
        correctAnswer: "safer",
        options: [
          {
            id: "risky",
            label: "Risky: typing a known address is worse than message links.",
            feedback:
              "A known address or official app is usually safer than a link from an unexpected message.",
          },
          {
            id: "safer",
            label: "Safer: the user avoids the message link and goes directly.",
            feedback:
              "Correct. Going directly reduces the chance of landing on a fake site.",
          },
          {
            id: "always-safe",
            label: "Always safe: no need to check the address.",
            feedback:
              "Typos can still happen, so the address should be checked.",
          },
        ],
        concept:
          "Going directly to an official site or app is safer than using unexpected message links.",
      },
    ],
  },
  codeGuard: {
    instructions:
      "Protect one-time codes, password resets, and account recovery steps.",
    successTitle: "Code Protected!",
    retryTitle: "Guard The Code",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A caller says they are from tech support and asks you to read the 6-digit code that just arrived.",
        aiResponse:
          "If they say they are support, give them the code so they can verify you.",
        betterResponse:
          "Real support should not need your one-time code. That code can give someone account access. End the call and contact support through the official app or website.",
        prompt: "What should the user do?",
        topic: "One-time codes",
        correctAnswer: "never-read-code",
        options: [
          {
            id: "read-code",
            label: "Read the code so support can verify the account.",
            feedback:
              "One-time codes are not safe to share with callers.",
          },
          {
            id: "never-read-code",
            label: "Do not share the code. Contact support through the official channel.",
            feedback:
              "Correct. Codes can unlock accounts.",
          },
          {
            id: "ask-company",
            label: "Ask which company they work for, then share it.",
            feedback:
              "A claimed company name does not make sharing a code safe.",
          },
        ],
        concept:
          "One-time codes are temporary keys. Never share them with callers or messages.",
      },
      {
        scenario:
          "A message says: I accidentally used your phone number for my login. Send me the password reset link you received.",
        aiResponse:
          "Forward the reset link because it belongs to them.",
        betterResponse:
          "Do not forward the password reset link. Reset links can give access to an account. Delete the message or report it if it seems suspicious.",
        prompt: "Which action is safest?",
        topic: "Password reset links",
        correctAnswer: "do-not-forward",
        options: [
          {
            id: "do-not-forward",
            label: "Do not forward the reset link.",
            feedback:
              "Correct. Reset links can transfer account access.",
          },
          {
            id: "forward-link",
            label: "Forward the link because it was an accident.",
            feedback:
              "Scammers often frame requests as accidents.",
          },
          {
            id: "open-link",
            label: "Open the link and screenshot the page.",
            feedback:
              "Opening or sharing reset pages can create more risk.",
          },
        ],
        concept:
          "Password reset links should be treated like account keys.",
      },
      {
        scenario:
          "A social media account messages: Vote for me in a contest. I need the code sent to your phone to count your vote.",
        aiResponse:
          "It sounds like a contest, so send the code if you want to help.",
        betterResponse:
          "A contest should not require your login code. This request may be trying to access your account. Do not share the code.",
        prompt: "What is the warning sign?",
        topic: "Contest code scams",
        correctAnswer: "contest-code",
        options: [
          {
            id: "friend-request",
            label: "A friend asked for help.",
            feedback:
              "A friend's account may be compromised, but the main warning is the code request.",
          },
          {
            id: "contest-code",
            label: "The contest asks for a login code.",
            feedback:
              "Correct. Votes should not require your account verification code.",
          },
          {
            id: "short-message",
            label: "The message is short.",
            feedback:
              "Short messages can be normal. The code request is the real danger.",
          },
        ],
        concept:
          "Any request for a login or verification code should trigger a stop-and-verify habit.",
      },
      {
        scenario:
          "You get a code after trying to sign in to your own account through the official app.",
        aiResponse:
          "Use the code only inside the official app you opened yourself.",
        betterResponse:
          "Use the code only inside the official app or site during the sign-in you started. Do not share the code with anyone else.",
        prompt: "What should the user do with the code?",
        topic: "Safe code use",
        correctAnswer: "use-in-app",
        options: [
          {
            id: "send-friend",
            label: "Send it to a friend to confirm it works.",
            feedback:
              "Codes should not be shared with other people.",
          },
          {
            id: "use-in-app",
            label: "Use it only inside the official app or site they opened.",
            feedback:
              "Correct. Codes are for the sign-in flow you started.",
          },
          {
            id: "post-code",
            label: "Post it publicly because it expires soon.",
            feedback:
              "Even short-lived codes can be used quickly by someone else.",
          },
        ],
        concept:
          "Codes can be used safely only inside the official login flow you started.",
      },
    ],
  },
  paymentPressure: {
    instructions:
      "Spot risky payment requests and choose the safer money move.",
    successTitle: "Payment Risk Spotted!",
    retryTitle: "Check The Pressure",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A seller says: Pay with gift cards and send the codes. I will ship the laptop after.",
        aiResponse:
          "Gift cards are easy, so this is a convenient payment option.",
        betterResponse:
          "Gift card codes are hard to recover and are a common scam payment method. Use protected payment methods and avoid sellers who demand gift cards.",
        prompt: "What is the safest judgment?",
        topic: "Gift card payments",
        correctAnswer: "gift-card-risk",
        options: [
          {
            id: "easy-payment",
            label: "Gift cards are safe because they are easy to buy.",
            feedback:
              "Ease is part of why scammers like them.",
          },
          {
            id: "gift-card-risk",
            label: "Gift card codes are risky because they are hard to recover.",
            feedback:
              "Correct. Gift card requests are a major scam warning.",
          },
          {
            id: "send-half",
            label: "Send half the codes first as a compromise.",
            feedback:
              "Sending any code can lose money.",
          },
        ],
        concept:
          "Gift cards, crypto, wires, and off-platform payments are high-risk when requested by strangers.",
      },
      {
        scenario:
          "A rental listing asks for a deposit by wire transfer before showing the apartment.",
        aiResponse:
          "Wire the deposit quickly so you do not lose the apartment.",
        betterResponse:
          "Pressure to wire money before viewing a rental can be a scam. Verify the listing, see the property, check the owner or management company, and use safer payment methods.",
        prompt: "What should the user do?",
        topic: "Rental deposits",
        correctAnswer: "verify-rental",
        options: [
          {
            id: "wire-fast",
            label: "Wire the deposit quickly.",
            feedback:
              "Wire transfers can be hard to reverse, especially before verifying a rental.",
          },
          {
            id: "verify-rental",
            label: "Verify the rental and avoid wiring money before seeing it.",
            feedback:
              "Correct. Pressure plus advance wire payment is risky.",
          },
          {
            id: "ask-discount",
            label: "Ask for a lower deposit but still wire it.",
            feedback:
              "A smaller risky payment is still risky.",
          },
        ],
        concept:
          "High-pressure deposits before verification can signal rental or marketplace scams.",
      },
      {
        scenario:
          "A buyer sends extra money by check and asks you to pay their mover with a payment app.",
        aiResponse:
          "The buyer trusted you with extra money, so pay the mover.",
        betterResponse:
          "Overpayment checks can be fake or reversed. Wait until payment fully clears, use platform protections, and do not send money to a third party.",
        prompt: "What is the likely risk?",
        topic: "Overpayment scams",
        correctAnswer: "check-reversal",
        options: [
          {
            id: "helpful-buyer",
            label: "The buyer is making shipping easier.",
            feedback:
              "Scammers often frame overpayment as convenience.",
          },
          {
            id: "check-reversal",
            label: "The check may fail after the seller sends real money.",
            feedback:
              "Correct. This is a common overpayment scam pattern.",
          },
          {
            id: "pay-mover",
            label: "Pay the mover because the buyer already sent extra.",
            feedback:
              "The original payment may not be valid.",
          },
        ],
        concept:
          "Overpayment scams use fake or reversible payments to get real money sent out.",
      },
      {
        scenario:
          "A friend asks to borrow money through their usual phone number and offers to call before you send it.",
        aiResponse:
          "A call through a known number is a reasonable verification step before deciding.",
        betterResponse:
          "Verifying through a known contact method is a good step. Before sending money, confirm the need, amount, repayment expectations, and that the request truly came from your friend.",
        prompt: "Is this safer or risky?",
        topic: "Verified payments",
        correctAnswer: "safer-verify",
        options: [
          {
            id: "risky-always",
            label: "Always risky: never verify by calling.",
            feedback:
              "Calling a known number can be a useful verification step.",
          },
          {
            id: "safer-verify",
            label: "Safer: verify through the known number before deciding.",
            feedback:
              "Correct. Verification does not force a yes, but it reduces impersonation risk.",
          },
          {
            id: "send-before-call",
            label: "Send money before the call to save time.",
            feedback:
              "Sending money before verifying brings the risk back.",
          },
        ],
        concept:
          "A payment request is safer when the person and details are verified through a known channel first.",
      },
    ],
  },
  betterEverydayPrompts: {
    instructions:
      "Choose the prompt that gives AI enough context, constraints, and format to be genuinely useful.",
    successTitle: "Better Prompt!",
    retryTitle: "Strengthen The Prompt",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A user wants help planning meals for the week without spending too much.",
        initialPrompt:
          "Give me meal ideas.",
        aiResponse:
          "Here are some ideas: pasta, tacos, salad, soup, and rice bowls.",
        betterResponse:
          "Here is a 5-dinner plan for two under $70: bean and cheese tacos, chicken rice bowls, vegetable pasta, turkey chili, and egg fried rice. Shopping list: tortillas, beans, rice, chicken thighs, pasta, canned tomatoes, ground turkey, eggs, frozen vegetables, cheese, and basic seasonings. I avoided seafood and kept ingredients common for a regular grocery store.",
        prompt: "Which prompt would work best?",
        topic: "Budget and constraints",
        correctAnswer: "specific-meals",
        options: [
          {
            id: "meal-ideas",
            label: "Give me meal ideas.",
            feedback:
              "This is too broad. It does not include budget, servings, preferences, or format.",
          },
          {
            id: "specific-meals",
            label:
              "Plan 5 simple dinners for two adults under $70, avoiding seafood, with a shopping list.",
            feedback:
              "Correct. It gives goal, budget, people, constraints, and output format.",
          },
          {
            id: "best-food",
            label: "Tell me the best food to eat.",
            feedback:
              "Best for whom? This lacks the user's budget, needs, and preferences.",
          },
        ],
        concept:
          "Good everyday prompts include the goal, important limits, personal context, and the format you want back.",
      },
      {
        scenario:
          "A user wants AI to compare two used cars they are considering.",
        initialPrompt:
          "Which car is better?",
        aiResponse:
          "The newer car is probably better because newer cars usually have fewer problems.",
        betterResponse:
          "To compare these cars fairly, I need year, mileage, price, maintenance history, accident history, fuel economy, and inspection results. For a daily 30-mile commute, I would compare reliability, fuel cost, repair risk, safety ratings, insurance, and total ownership cost before recommending one.",
        prompt: "Which prompt would work best?",
        topic: "Decision criteria",
        correctAnswer: "criteria",
        options: [
          {
            id: "criteria",
            label:
              "Compare these two used cars for a daily 30-mile commute. Prioritize reliability, fuel cost, repair risk, safety, and total ownership cost. Ask me for missing details.",
            feedback:
              "Correct. AI can compare better when it knows what matters most.",
          },
          {
            id: "shorter",
            label: "Which car is better?",
            feedback:
              "This is too broad. It does not explain the commute, priorities, costs, or missing details.",
          },
          {
            id: "brand",
            label: "Pick the car with the best brand reputation.",
            feedback:
              "Brand can matter, but mileage, maintenance, safety, and cost also matter.",
          },
        ],
        concept:
          "For comparisons, tell AI what criteria matter and ask it to identify missing information.",
      },
      {
        scenario:
          "A user wants help writing a message to a landlord about a repair.",
        initialPrompt:
          "Write a complaint to my landlord.",
        aiResponse:
          "My apartment problem is unacceptable. Fix it immediately.",
        betterResponse:
          "Hi, I wanted to follow up on the leaking sink I reported last week. It is still causing water buildup under the cabinet, and I am concerned it could lead to damage. Could you please let me know when a repair can be scheduled? Thank you.",
        prompt: "Which prompt would work best?",
        topic: "Tone and purpose",
        correctAnswer: "tone-details",
        options: [
          {
            id: "angry",
            label: "Write an angry complaint to my landlord.",
            feedback:
              "Anger may make the message less effective. Tone should match the goal.",
          },
          {
            id: "tone-details",
            label:
              "Draft a polite but firm message about a leaking sink reported last week. Include the date, impact, repair timeline request, and calm tone.",
            feedback:
              "Correct. Those details help AI draft something practical and usable.",
          },
          {
            id: "vague",
            label: "Write something about my apartment problem.",
            feedback:
              "Too much vagueness forces AI to guess the facts.",
          },
        ],
        concept:
          "When asking AI to write a message, include audience, purpose, facts, tone, and the action you want.",
      },
      {
        scenario:
          "A user wants help choosing a phone plan.",
        initialPrompt:
          "What is the best phone plan?",
        aiResponse:
          "The best phone plan is the most popular unlimited plan because it gives you everything.",
        betterResponse:
          "For one person using about 10GB per month, the best plan may not be unlimited. I would compare monthly cost after promotions, coverage near your ZIP code, hotspot allowance, taxes and fees, contract terms, and whether the price rises later. Share two or three plans and I can rank them by fit.",
        prompt: "Which prompt would work best?",
        topic: "Personal fit",
        correctAnswer: "usage-needs",
        options: [
          {
            id: "popular-plan",
            label: "What is the most popular phone plan?",
            feedback:
              "Popular does not mean best for this user's location, data use, or budget.",
          },
          {
            id: "usage-needs",
            label:
              "Compare phone plans for one person using about 10GB monthly. Prioritize cost, coverage near my ZIP code, hotspot data, fees, and promo changes.",
            feedback:
              "Correct. Personal fit matters more than a generic ranking.",
          },
          {
            id: "cheap-only",
            label: "Find the cheapest phone plan and ignore everything else.",
            feedback:
              "A cheap plan may be poor value if coverage or fees are bad.",
          },
        ],
        concept:
          "Useful AI recommendations need personal priorities and tradeoffs, not just generic best-of lists.",
      },
    ],
  },
  followUpCoach: {
    instructions:
      "Choose the follow-up question that makes AI's first answer safer, clearer, or more useful.",
    successTitle: "Smart Follow-Up!",
    retryTitle: "Ask A Better Follow-Up",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "AI gives a long answer about reducing a monthly electric bill.",
        aiResponse:
          "Replace appliances, change your thermostat, unplug devices, and look into solar panels.",
        betterResponse:
          "Here is a more useful order: start with low-cost, renter-friendly steps like adjusting thermostat settings, sealing drafts, using smart power strips, and washing clothes with cold water. Larger changes like appliance replacement or solar panels may save more but cost more and may not be realistic for renters.",
        prompt: "What should the user ask next?",
        topic: "Prioritizing advice",
        correctAnswer: "rank-impact",
        options: [
          {
            id: "rank-impact",
            label:
              "Rank these by cost, effort, likely savings, and renter-friendly options.",
            feedback:
              "Correct. This turns a generic list into a useful decision guide.",
          },
          {
            id: "more-list",
            label: "Give me 50 more ideas.",
            feedback:
              "More ideas can make the answer harder to use if nothing is prioritized.",
          },
          {
            id: "do-all",
            label: "Tell me to do all of them.",
            feedback:
              "A good follow-up helps decide what is realistic first.",
          },
        ],
        concept:
          "Follow-up questions can turn generic advice into ranked, practical steps.",
      },
      {
        scenario:
          "AI recommends a supplement for better sleep.",
        aiResponse:
          "You should try this supplement because many people use it for sleep.",
        betterResponse:
          "I should not recommend a supplement just because many people use it. Check evidence, side effects, medication interactions, who should avoid it, and talk with a healthcare professional before trying it, especially if you take other medications or have health conditions.",
        prompt: "Which follow-up is safest?",
        topic: "Health caution",
        correctAnswer: "risks-evidence",
        options: [
          {
            id: "buy-now",
            label: "Where can I buy it cheapest?",
            feedback:
              "Price is not the first question when health and interactions may be involved.",
          },
          {
            id: "risks-evidence",
            label:
              "What evidence, risks, interactions, and professional cautions should I know?",
            feedback:
              "Correct. Health-related AI advice needs evidence and safety checks.",
          },
          {
            id: "dose",
            label: "What dose should I take tonight?",
            feedback:
              "AI should not jump to personal dosing without safety context.",
          },
        ],
        concept:
          "For health topics, follow up about evidence, risks, interactions, and professional guidance.",
      },
      {
        scenario:
          "AI drafts a message to cancel a subscription.",
        aiResponse:
          "Here is a cancellation message: Cancel my account immediately.",
        betterResponse:
          "Please cancel my subscription effective today. Please confirm the cancellation in writing and let me know whether there will be any final charges or refunds. I can provide safe account details like my account email or order number if needed.",
        prompt: "What follow-up improves the draft?",
        topic: "Completeness check",
        correctAnswer: "confirmation-refund",
        options: [
          {
            id: "confirmation-refund",
            label:
              "Add a request for confirmation, refund/final charge details, and a clear polite tone.",
            feedback:
              "Correct. This makes the message more complete and useful.",
          },
          {
            id: "insults",
            label: "Make it more insulting so they respond faster.",
            feedback:
              "A hostile tone can make the message less effective.",
          },
          {
            id: "password",
            label: "Include my password so they can find the account.",
            feedback:
              "Never include passwords in a cancellation message.",
          },
        ],
        concept:
          "Follow-ups should improve clarity and completeness without adding private or risky information.",
      },
      {
        scenario:
          "AI gives a list of sources about a consumer product recall.",
        aiResponse:
          "Here are some articles saying the product may have a recall.",
        betterResponse:
          "For a product recall, use the official recall notice from the agency or company. Check the recall date, model numbers, affected batches, risk description, and the exact action consumers should take before relying on article summaries.",
        prompt: "What should the user ask next?",
        topic: "Source verification",
        correctAnswer: "official-recall",
        options: [
          {
            id: "official-recall",
            label:
              "Find the official recall notice, date, model numbers, and required consumer action.",
            feedback:
              "Correct. Recall information needs official, specific details.",
          },
          {
            id: "summary-only",
            label: "Summarize the articles without checking official details.",
            feedback:
              "A summary may repeat uncertainty. Official recall details matter.",
          },
          {
            id: "ignore-model",
            label: "Ignore model numbers because all products are probably affected.",
            feedback:
              "Model numbers and batches determine whether the recall applies.",
          },
        ],
        concept:
          "When safety or product recalls are involved, follow up for official source details and exact applicability.",
      },
    ],
  },
  homeworkHelper: {
    instructions:
      "Choose the replacement prompt that helps you learn without asking AI to do the work for you.",
    initialPromptLabel: "Student's First Prompt",
    successTitle: "Better Prompt!",
    retryTitle: "Try A Stronger Prompt",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A middle school student is stuck on a math worksheet.",
        initialPrompt: "Do my math homework for me.",
        aiResponse:
          "Sure. Send the worksheet and I can give you the answers.",
        betterResponse:
          "Here is a similar example: if the problem is 3x + 4 = 16, first subtract 4 from both sides to get 3x = 12, then divide both sides by 3 to get x = 4. For your worksheet, try finding the number being added or subtracted first. I can give one hint at a time while you solve it.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Learning support",
        correctAnswer: "teach-one",
        options: [
          {
            id: "teach-one",
            label:
              "Teach me how to solve one similar problem, then give me one hint for my worksheet.",
            feedback:
              "Correct. This asks for help learning the skill instead of copying answers.",
          },
          {
            id: "answer-key",
            label: "Give me all the answers so I can finish fast.",
            feedback:
              "That skips the learning and can break class rules.",
          },
          {
            id: "too-vague",
            label: "Explain math better.",
            feedback:
              "This is too vague. AI needs the topic and the kind of help you want.",
          },
        ],
        concept:
          "A strong homework prompt asks for explanation, examples, or hints while keeping the student responsible for the work.",
      },
      {
        scenario:
          "A student needs help starting a book report.",
        initialPrompt: "Write my book report about the novel.",
        aiResponse:
          "Sure. Here is a full book report you can turn in.",
        betterResponse:
          "Here is a simple outline you can fill in with your own notes: 1. Introduce the book title, author, and main character. 2. Describe the setting. 3. Explain the main conflict. 4. Use one detail from your notes as evidence. 5. End with what the character learned or how the conflict changed.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Writing support",
        correctAnswer: "outline",
        options: [
          {
            id: "outline",
            label:
              "Help me make an outline for my book report using my own notes about the characters, setting, and main conflict.",
            feedback:
              "Correct. It keeps the student's notes and thinking at the center.",
          },
          {
            id: "full-report",
            label: "Write a full book report that sounds like an eighth grader.",
            feedback:
              "That asks AI to produce the work instead of helping the student build it.",
          },
          {
            id: "random-theme",
            label: "Pick a theme even if I have not read that part yet.",
            feedback:
              "That can lead to weak or inaccurate work.",
          },
        ],
        concept:
          "AI can help organize ideas, but the student's reading notes and evidence should drive the final work.",
      },
      {
        scenario:
          "A student is studying for a science vocabulary quiz.",
        initialPrompt: "Tell me everything about science words.",
        aiResponse:
          "Here is a long list of science terms: atom, cell, gravity, energy, ecosystem, molecule, force, weather, and many more.",
        betterResponse:
          "Great. I will quiz you one word at a time. Word 1: ecosystem. What does ecosystem mean? After you answer, I will tell you what was correct, what was missing, and give a short memory tip before moving to the next word.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Study practice",
        correctAnswer: "quiz-me",
        options: [
          {
            id: "quiz-me",
            label:
              "Quiz me on these 10 vocabulary words one at a time, wait for my answer, then explain what I missed.",
            feedback:
              "Correct. This creates active practice and feedback.",
          },
          {
            id: "big-list",
            label: "Give me a giant list of every science word.",
            feedback:
              "A giant list is hard to study from and does not match the quiz.",
          },
          {
            id: "memorize",
            label: "Make me memorize the words instantly.",
            feedback:
              "AI cannot make you memorize instantly. It can help you practice.",
          },
        ],
        concept:
          "Good study prompts turn AI into a practice partner with short checks and feedback.",
      },
      {
        scenario:
          "A group is planning a short class presentation.",
        initialPrompt: "Make our whole presentation.",
        aiResponse:
          "Sure. I can create all the slides and write exactly what everyone should say.",
        betterResponse:
          "Here is a 5-slide plan your group can build: Slide 1 introduces the topic, Slide 2 explains the main idea, Slide 3 gives one example, Slide 4 shares one fact or source, and Slide 5 ends with a short takeaway. Roles: one person researches, one writes speaker notes, one designs slides, and one checks timing.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Group project planning",
        correctAnswer: "plan-roles",
        options: [
          {
            id: "plan-roles",
            label:
              "Help our group make a 5-slide plan with roles for each person and questions we still need to research.",
            feedback:
              "Correct. This helps organize the work without replacing the group.",
          },
          {
            id: "one-person",
            label: "Tell me how to do the whole project without my group.",
            feedback:
              "That avoids the group task instead of improving it.",
          },
          {
            id: "decorate",
            label: "Only make the slides look cool.",
            feedback:
              "Visuals matter, but the group still needs research, roles, and content.",
          },
        ],
        concept:
          "For group projects, AI is most useful when it helps plan roles, questions, and next steps.",
      },
    ],
  },
  sourceDetective: {
    instructions:
      "Decide whether the AI source response gives enough details to trust or needs more checking.",
    successTitle: "Good Source Check!",
    retryTitle: "Check The Details",
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
          "Yes, here is a NASA education page titled Moon Facts from NASA. It explains that the Moon's gravity is about one-sixth of Earth's gravity. The source is NASA, a U.S. space agency, and the page includes educational facts students can verify.",
        prompt: "Is this source response reliable or risky?",
        topic: "Source details",
        correctAnswer: "reliable",
        options: [
          {
            id: "reliable",
            label: "Reliable: it names the organization, topic, and what the source supports.",
            feedback:
              "Correct. It gives enough details for the student to verify the source directly.",
          },
          {
            id: "risky",
            label: "Risky: any link about space is probably made up.",
            feedback:
              "NASA is a credible organization for this topic, especially when details are provided.",
          },
          {
            id: "trust-because-ai",
            label: "Reliable only because AI said it confidently.",
            feedback:
              "Confidence is not the reason. The source details are what make it stronger.",
          },
        ],
        concept:
          "A stronger AI source response names the source, topic, organization, and what claim the source supports.",
      },
      {
        scenario:
          "A student asks AI for a source about whether a school rumor is true.",
        aiResponse:
          "I found a post on RealSchoolSecrets.example that says your principal is cancelling summer break.",
        betterResponse:
          "I cannot verify that from a rumor site. Check official school district announcements, a dated message from the principal, or a trusted school webpage before believing or sharing it.",
        prompt: "Is this source response reliable or risky?",
        topic: "Rumor checking",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable: the site name sounds school-related.",
            feedback:
              "A name sounding school-related does not make a site trustworthy.",
          },
          {
            id: "risky",
            label: "Risky: it uses a rumor-style site and gives no official details.",
            feedback:
              "Correct. School claims should be checked against official school sources.",
          },
          {
            id: "share-fast",
            label: "Reliable enough to share before class.",
            feedback:
              "Sharing unverified school rumors can spread confusion.",
          },
        ],
        concept:
          "For school rumors, reliable checking means looking for official announcements, dates, and named school sources.",
      },
      {
        scenario:
          "A student asks AI for a source about plastic pollution.",
        aiResponse:
          "Yes, here is a National Geographic Kids article titled Plastic Pollution. It explains how plastic can harm oceans and wildlife. The source is National Geographic Kids, which publishes student-friendly science and environment articles.",
        prompt: "Is this source response reliable or risky?",
        topic: "Student-friendly sources",
        correctAnswer: "reliable",
        options: [
          {
            id: "reliable",
            label: "Reliable: it names a recognizable source, title, topic, and why it fits students.",
            feedback:
              "Correct. The details help the student understand and verify the source.",
          },
          {
            id: "risky",
            label: "Risky: kids' sources can never be used for school.",
            feedback:
              "Student-friendly sources can be useful when they are credible and appropriate for the assignment.",
          },
          {
            id: "trust-any",
            label: "Reliable because any article about pollution is true.",
            feedback:
              "The topic alone is not enough. Source details matter.",
          },
        ],
        concept:
          "Source quality depends on who made it, what it says, and whether it fits the assignment level.",
      },
      {
        scenario:
          "A student asks AI for evidence that energy drinks are safe for every kid.",
        aiResponse:
          "A fitness blog says energy drinks are fine because many students drink them.",
        betterResponse:
          "Health claims need careful sources. Look for guidance from a doctor, school nurse, or health organization, and avoid saying something is safe for every kid.",
        prompt: "Is this source response reliable or risky?",
        topic: "Health source caution",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable: if many students do it, it must be safe.",
            feedback:
              "Popularity does not prove safety, especially for health topics.",
          },
          {
            id: "risky",
            label: "Risky: it uses popularity as proof for a health claim.",
            feedback:
              "Correct. Health claims need stronger evidence than popularity or a fitness blog.",
          },
          {
            id: "ignore-adults",
            label: "Reliable enough that no adult should be asked.",
            feedback:
              "Health and safety questions are exactly when trusted adults matter.",
          },
        ],
        concept:
          "Health-related AI responses should avoid overconfidence and point to trusted adults or qualified health sources.",
      },
    ],
  },
  shareSmart: {
    instructions:
      "Choose the safer prompt that protects personal details while still getting useful help.",
    initialPromptLabel: "Student's First Prompt",
    successTitle: "Safer Choice!",
    retryTitle: "Protect The Details",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A student wants help replying to a group chat argument.",
        initialPrompt:
          "Here are everyone's full names and screenshots. Tell me who is wrong.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Private messages",
        correctAnswer: "remove-names",
        options: [
          {
            id: "remove-names",
            label:
              "Without names or screenshots, help me write a calm message that explains my side and asks to talk respectfully.",
            feedback:
              "Correct. It protects people while still asking for useful communication help.",
          },
          {
            id: "post-chat",
            label: "Read every private message and tell me who to embarrass.",
            feedback:
              "That shares private information and makes the conflict worse.",
          },
          {
            id: "name-friends",
            label: "Use my friends' full names so the advice is more accurate.",
            feedback:
              "Full names are not needed for a safer communication prompt.",
          },
        ],
        concept:
          "When asking AI about friends or messages, remove names, screenshots, and private details.",
      },
      {
        scenario:
          "A student wants help planning how to get home after practice.",
        initialPrompt:
          "I go to Jefferson Middle School, live at 44 Maple Street, and walk home alone at 5:30.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Location privacy",
        correctAnswer: "general-safety",
        options: [
          {
            id: "general-safety",
            label:
              "Give general safety tips for getting home after practice without using my school name, address, or exact schedule.",
            feedback:
              "Correct. It asks for help while keeping location and routine private.",
          },
          {
            id: "exact-route",
            label: "Use my exact address and route so the advice is detailed.",
            feedback:
              "Exact locations and routines are sensitive and should not be shared with AI.",
          },
          {
            id: "secret-plan",
            label: "Tell me how to avoid telling any adult where I am going.",
            feedback:
              "Trusted adults should be involved in safety planning.",
          },
        ],
        concept:
          "Addresses, school names, routes, and routines are private details. Keep safety prompts general.",
      },
      {
        scenario:
          "A student wants advice about a friend's problem.",
        initialPrompt:
          "My friend Maya told me a secret about her family. Here is exactly what she said.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Friend privacy",
        correctAnswer: "no-identifiers",
        options: [
          {
            id: "no-identifiers",
            label:
              "Without names or private details, help me think of kind ways to support a friend and when to ask a trusted adult for help.",
            feedback:
              "Correct. It protects the friend and includes adult support if needed.",
          },
          {
            id: "full-secret",
            label: "Use the whole secret so AI can decide what I should do.",
            feedback:
              "Private family information should not be copied into AI.",
          },
          {
            id: "spread-it",
            label: "Write a message telling other people what happened.",
            feedback:
              "That could violate trust and harm your friend.",
          },
        ],
        concept:
          "AI can help with general advice, but sensitive information about friends and family should stay private.",
      },
      {
        scenario:
          "A student needs help with a game account problem.",
        initialPrompt:
          "Here is my username and password. Fix my account problem.",
        prompt: "Which prompt should replace the initial prompt?",
        topic: "Account safety",
        correctAnswer: "no-password",
        options: [
          {
            id: "no-password",
            label:
              "Without sharing my password, give me safe steps for account recovery and when to ask a parent or guardian.",
            feedback:
              "Correct. Passwords and codes should never be shared with AI.",
          },
          {
            id: "share-password",
            label: "Use my password because AI needs it to help.",
            feedback:
              "AI does not need your password. Sharing it is unsafe.",
          },
          {
            id: "send-code",
            label: "I will also send any login code I receive.",
            feedback:
              "Login codes are private security information too.",
          },
        ],
        concept:
          "Passwords, login codes, and recovery details should stay private. Ask for general steps instead.",
      },
    ],
  },
  fairnessCheck: {
    instructions:
      "Choose the fairer way to use AI when people or groups could be judged unfairly.",
    successTitle: "Fairer Choice!",
    retryTitle: "Check The Shortcut",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A club asks AI to pick a team leader.",
        aiResponse:
          "Choose the loudest student because loud people are usually the best leaders.",
        betterResponse:
          "Compare clear criteria like reliability, listening, organization, kindness, and whether classmates want the role.",
        prompt: "What is the fairest fix?",
        topic: "Leadership criteria",
        correctAnswer: "clear-criteria",
        options: [
          {
            id: "clear-criteria",
            label:
              "Use clear leadership criteria instead of assuming the loudest person is best.",
            feedback:
              "Correct. Fair choices should use relevant criteria, not personality shortcuts.",
          },
          {
            id: "loudest",
            label: "Always pick the loudest person.",
            feedback:
              "Volume is not the same as leadership.",
          },
          {
            id: "popular",
            label: "Pick whoever is most popular online.",
            feedback:
              "Popularity is not a fair measure of leadership skill.",
          },
        ],
        concept:
          "Fair AI use needs relevant criteria instead of shortcuts like loudness or popularity.",
      },
      {
        scenario:
          "A student asks AI for book recommendations for a classmate.",
        aiResponse:
          "Since she is a girl, recommend only romance books.",
        betterResponse:
          "I should ask about the person's interests, reading level, favorite genres, and topics they want to try before recommending books.",
        prompt: "What is the fairest fix?",
        topic: "Stereotype check",
        correctAnswer: "ask-interests",
        options: [
          {
            id: "ask-interests",
            label:
              "Ask about the person's interests and reading level instead of using gender stereotypes.",
            feedback:
              "Correct. Recommendations should be based on interests, not assumptions.",
          },
          {
            id: "gender-only",
            label: "Use gender because it is the fastest clue.",
            feedback:
              "Fast clues can be unfair when they rely on stereotypes.",
          },
          {
            id: "one-genre",
            label: "Recommend one genre to everyone.",
            feedback:
              "That ignores individual interests and needs.",
          },
        ],
        concept:
          "Personalized help should ask about interests and needs instead of relying on stereotypes.",
      },
      {
        scenario:
          "AI helps choose students for a technology showcase.",
        aiResponse:
          "Pick students who already own the newest devices because they must be the best with technology.",
        betterResponse:
          "Look at effort, project ideas, teamwork, curiosity, and give students with fewer resources a real chance.",
        prompt: "What is the fairest fix?",
        topic: "Resource bias",
        correctAnswer: "skills-effort",
        options: [
          {
            id: "skills-effort",
            label:
              "Judge project ideas, effort, teamwork, and curiosity instead of who owns expensive devices.",
            feedback:
              "Correct. Access to devices is not the same as ability or creativity.",
          },
          {
            id: "newest-phone",
            label: "Use newest phone as the main score.",
            feedback:
              "That rewards resources, not skill.",
          },
          {
            id: "skip-low-tech",
            label: "Skip students who do not have much technology at home.",
            feedback:
              "That would unfairly exclude students because of access.",
          },
        ],
        concept:
          "AI decisions can be unfair when they confuse access to resources with ability.",
      },
      {
        scenario:
          "A teacher asks AI to suggest who needs extra help.",
        aiResponse:
          "Only help quiet students because quiet students are always confused.",
        betterResponse:
          "Use actual classwork, questions, quiz results, and student check-ins instead of guessing from personality.",
        prompt: "What is the fairest fix?",
        topic: "Evidence over assumptions",
        correctAnswer: "use-evidence",
        options: [
          {
            id: "use-evidence",
            label:
              "Use real class evidence and check-ins instead of assuming quiet means confused.",
            feedback:
              "Correct. Fair support should be based on evidence, not assumptions.",
          },
          {
            id: "quiet-only",
            label: "Only help quiet students.",
            feedback:
              "Quiet students are not all the same, and other students may need help too.",
          },
          {
            id: "ignore-work",
            label: "Ignore classwork because personality is enough.",
            feedback:
              "Actual work and student feedback are stronger evidence.",
          },
        ],
        concept:
          "Fair AI guidance should use evidence and context, especially when it affects people.",
      },
    ],
  },
  askBeforeYouAct: {
    instructions:
      "Choose the safest next step when AI advice could affect school rules, health, privacy, or money.",
    successTitle: "Smart Next Step!",
    retryTitle: "Pause And Check",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "AI suggests downloading a free game mod from an unfamiliar link.",
        aiResponse:
          "Click this download link. It is probably fine because it says free.",
        betterResponse:
          "Avoid unfamiliar downloads. Use official stores or trusted sites, and ask a parent or guardian before installing anything.",
        prompt: "What should the student do next?",
        topic: "Download safety",
        correctAnswer: "ask-adult",
        options: [
          {
            id: "ask-adult",
            label:
              "Do not click yet. Ask a parent or guardian and use official download sources.",
            feedback:
              "Correct. Unknown downloads can carry malware or scams.",
          },
          {
            id: "click-fast",
            label: "Click quickly before the link disappears.",
            feedback:
              "Urgency is a warning sign, not a reason to click.",
          },
          {
            id: "trust-free",
            label: "Trust it because free games are always safe.",
            feedback:
              "Free does not mean safe.",
          },
        ],
        concept:
          "Before clicking unfamiliar links or downloads, pause, verify, and involve a trusted adult.",
      },
      {
        scenario:
          "AI gives advice about a student feeling dizzy during practice.",
        aiResponse:
          "Ignore it and keep playing so your team does not get mad.",
        betterResponse:
          "Stop playing and tell a coach or trusted adult. Get help from a nurse, parent, guardian, or medical professional.",
        prompt: "What should the student do next?",
        topic: "Health safety",
        correctAnswer: "tell-adult",
        options: [
          {
            id: "tell-adult",
            label:
              "Tell a coach, nurse, parent, guardian, or trusted adult instead of relying on AI.",
            feedback:
              "Correct. Health symptoms need real-world help.",
          },
          {
            id: "ignore",
            label: "Ignore it because AI said to keep going.",
            feedback:
              "AI should not overrule health and safety needs.",
          },
          {
            id: "search-more",
            label: "Keep searching online until one answer says it is fine.",
            feedback:
              "Searching for permission is risky when health is involved.",
          },
        ],
        concept:
          "AI can explain general ideas, but health and safety decisions need trusted people.",
      },
      {
        scenario:
          "A student is unsure whether AI is allowed for an assignment.",
        aiResponse:
          "Use AI anyway because teachers probably will not notice.",
        betterResponse:
          "Check the assignment directions and class AI rules, or ask the teacher what kind of AI help is allowed.",
        prompt: "What should the student do next?",
        topic: "School AI rules",
        correctAnswer: "check-rules",
        options: [
          {
            id: "check-rules",
            label:
              "Check the assignment rules or ask the teacher what AI help is allowed.",
            feedback:
              "Correct. Clear rules prevent accidental cheating or misuse.",
          },
          {
            id: "hide-use",
            label: "Use AI secretly and hope it sounds normal.",
            feedback:
              "Hiding AI use can break trust and class rules.",
          },
          {
            id: "let-ai-decide",
            label: "Let AI decide whether the teacher allows it.",
            feedback:
              "The teacher or assignment directions are the source for class rules.",
          },
        ],
        concept:
          "When school rules are unclear, ask the teacher or check the assignment directions.",
      },
      {
        scenario:
          "AI suggests joining an online challenge that asks students to post personal information.",
        aiResponse:
          "Share your full name, school, and schedule so people know it is really you.",
        betterResponse:
          "Do not share personal information online for this challenge. Ask a trusted adult before joining.",
        prompt: "What should the student do next?",
        topic: "Online challenge safety",
        correctAnswer: "do-not-share",
        options: [
          {
            id: "do-not-share",
            label:
              "Do not share personal details. Ask a trusted adult before joining.",
            feedback:
              "Correct. Personal details can create safety risks online.",
          },
          {
            id: "share-schedule",
            label: "Share the schedule so the post feels real.",
            feedback:
              "Schedules and school details are private.",
          },
          {
            id: "copy-trend",
            label: "Copy the trend because lots of people are doing it.",
            feedback:
              "Popularity does not make a challenge safe.",
          },
        ],
        concept:
          "For online trends that request personal information, pause and involve a trusted adult.",
      },
    ],
  },
};

questionChoiceContent.betterCollegePrompts = {
  instructions:
    "Choose the stronger college prompt that gives AI the assignment context, boundaries, and useful criteria.",
  initialPromptLabel: "Student's First Prompt",
  successTitle: "Stronger College Prompt!",
  retryTitle: "Add More Context",
  scoring: {
    correctScore: 40,
    retryCorrectScore: 25,
    incorrectScore: 10,
  },
  rounds: [
    {
      scenario:
        "A college student needs help starting a literature review without having AI write it for them.",
      initialPrompt: "Write my literature review on social media and anxiety.",
      aiResponse:
        "Social media has many negative effects on anxiety, including stress, comparison, and low self-esteem.",
      betterResponse:
        "Here is a literature review plan you can build from your own sources: group studies by theme, such as sleep disruption, social comparison, and platform design; note each study's method and sample; identify where findings disagree; and end with the gap your paper will focus on. I can help summarize sources you provide, but you should verify and cite them yourself.",
      prompt: "Which prompt should replace the initial prompt?",
      topic: "Literature review boundaries",
      correctAnswer: "lit-review-plan",
      options: [
        {
          id: "lit-review-plan",
          label:
            "Help me plan a literature review on social media and anxiety. Use only sources I provide, organize themes, flag gaps or disagreements, and do not write the final paper for me.",
          feedback:
            "Correct. This gives AI a useful role, source boundary, structure, and academic integrity limit.",
        },
        {
          id: "final-paper",
          label:
            "Write a polished literature review with citations I can submit.",
          feedback:
            "That asks AI to create the final academic work and may invent citations.",
        },
        {
          id: "quick-summary",
          label: "Summarize the whole topic quickly.",
          feedback:
            "This is too broad and does not include sources, structure, or assignment boundaries.",
        },
      ],
      concept:
        "College prompts should define AI's support role and protect the student's responsibility for sources, analysis, and final writing.",
    },
    {
      scenario:
        "A student wants feedback on a draft before submitting it to a professor.",
      initialPrompt: "Make this essay better.",
      aiResponse:
        "Here is a rewritten version with stronger wording and a more professional tone.",
      betterResponse:
        "I will focus on feedback rather than rewriting. Your thesis needs a clearer claim, paragraph two needs a stronger topic sentence, and the third paragraph should connect the evidence back to your argument. I would revise those areas in your own voice before checking grammar.",
      prompt: "Which prompt should replace the initial prompt?",
      topic: "Draft feedback",
      correctAnswer: "feedback-only",
      options: [
        {
          id: "rewrite-all",
          label: "Rewrite my essay so it sounds more academic.",
          feedback:
            "That can erase the student's voice and cross the line from feedback into authorship.",
        },
        {
          id: "feedback-only",
          label:
            "Give feedback on my draft without rewriting it. Focus on thesis clarity, evidence, organization, and places where my argument needs more support.",
          feedback:
            "Correct. This keeps the student in control while making the feedback specific.",
        },
        {
          id: "grammar-only",
          label: "Only fix grammar mistakes.",
          feedback:
            "Grammar can help, but college drafts often need argument and evidence feedback first.",
        },
      ],
      concept:
        "Feedback prompts are stronger when they name the kind of review needed and avoid replacing the student's writing.",
    },
    {
      scenario:
        "A student is preparing for office hours after struggling with a statistics concept.",
      initialPrompt: "Explain regression before office hours.",
      aiResponse:
        "Regression is a statistical method used to understand relationships between variables.",
      betterResponse:
        "Here is a focused prep plan: bring the homework question where you got stuck, say whether the issue is interpreting the coefficient, reading the p-value, or checking assumptions, and ask your professor to walk through one similar example. A good office-hours question could be: 'I understand the trend line, but I cannot tell what the coefficient means in context. Can we review that step?'",
      prompt: "Which prompt should replace the initial prompt?",
      topic: "Office-hours preparation",
      correctAnswer: "office-hours",
      options: [
        {
          id: "office-hours",
          label:
            "Help me prepare for office hours about regression. I am confused about interpreting coefficients and p-values, and I want 3 specific questions to ask my professor.",
          feedback:
            "Correct. This explains the confusion and asks AI to help prepare a better human conversation.",
        },
        {
          id: "avoid-office-hours",
          label: "Teach me everything so I do not need office hours.",
          feedback:
            "AI can help, but it should not replace support from the instructor when the course concept is unclear.",
        },
        {
          id: "answer-homework",
          label: "Solve my statistics homework before I meet the professor.",
          feedback:
            "That focuses on answers instead of understanding the concept for office hours.",
        },
      ],
      concept:
        "AI can prepare students for office hours by clarifying confusion and turning it into specific questions.",
    },
    {
      scenario:
        "A student wants help tailoring a resume bullet for an internship application.",
      initialPrompt: "Make my resume sound impressive.",
      aiResponse:
        "Led innovative initiatives and demonstrated exceptional leadership in a fast-paced environment.",
      betterResponse:
        "A stronger bullet could be: Coordinated weekly outreach for a campus food pantry, tracked volunteer sign-ups in a shared spreadsheet, and helped serve 80+ students during the semester. This uses your real experience, action verbs, and a concrete result without exaggerating.",
      prompt: "Which prompt should replace the initial prompt?",
      topic: "Career honesty",
      correctAnswer: "real-evidence",
      options: [
        {
          id: "real-evidence",
          label:
            "Help me improve this resume bullet honestly. I coordinated food pantry volunteer sign-ups, used a spreadsheet, and helped serve about 80 students this semester.",
          feedback:
            "Correct. This gives real evidence AI can sharpen without inventing experience.",
        },
        {
          id: "inflate",
          label: "Make my volunteer experience sound like I managed a nonprofit.",
          feedback:
            "That exaggerates the role and could create problems in an interview.",
        },
        {
          id: "buzzwords",
          label: "Add leadership buzzwords so it sounds professional.",
          feedback:
            "Buzzwords are weaker than specific actions and measurable results.",
        },
      ],
      concept:
        "Career prompts should help translate real experience, not inflate it beyond what the student actually did.",
    },
  ],
};

// College source rounds raise the standard from "sounds credible" to "can I verify this?"
questionChoiceContent.collegeSourceScanner = {
  instructions:
    "Decide whether the AI's research source response is reliable enough to use or risky without more checking.",
  successTitle: "Good Research Check!",
  retryTitle: "Check The Source Details",
  scoring: {
    correctScore: 40,
    retryCorrectScore: 25,
    incorrectScore: 10,
  },
  rounds: [
    {
      scenario:
        "A student asks AI for a source on food insecurity among college students.",
      aiResponse:
        "Yes, here is a source from The Hope Center for College, Community, and Justice titled #RealCollege Survey Report. It reports on basic needs insecurity among college students, names the organization, and gives a report title students can verify through the organization or a library search.",
      betterResponse:
        "Yes, according to The Hope Center for College, Community, and Justice's #RealCollege Survey Report, many college students report food and housing insecurity. Before citing it, verify the report title, year, authors or organization, link, methods, and whether its sample matches your paper's claim.",
      prompt: "Is this research source response reliable or risky?",
      topic: "Verifiable report details",
      correctAnswer: "reliable",
      options: [
        {
          id: "reliable",
          label:
            "Reliable: it names an organization, report title, topic, and a way to verify it.",
          feedback:
            "Correct. It gives enough identifying details to begin verification.",
        },
        {
          id: "risky",
          label: "Risky: reports are never useful for college research.",
          feedback:
            "Reports can be useful when the assignment allows them and the details can be verified.",
        },
        {
          id: "cite-now",
          label: "Use it immediately without checking the report.",
          feedback:
            "Even a promising source should be verified before citation.",
        },
      ],
      concept:
        "Reliable source responses name enough details for the student to locate and verify the source independently.",
    },
    {
      scenario:
        "A student asks for evidence that remote learning lowered college GPAs nationwide.",
      aiResponse:
        "A 2022 article in the Journal of Online College Outcomes proved remote learning lowered GPAs everywhere by 30%.",
      betterResponse:
        "I should not present that as verified. A stronger response would give a real source with title, author or organization, publication date, journal or publisher, DOI or link if available, and a careful summary of what the study actually measured. You should verify it in your library database before citing it.",
      prompt: "Is this research source response reliable or risky?",
      topic: "Fake-specific citation",
      correctAnswer: "risky",
      options: [
        {
          id: "reliable",
          label: "Reliable: it has a year, journal-like title, and percentage.",
          feedback:
            "Those details can make a fake citation sound stronger than it is.",
        },
        {
          id: "risky",
          label:
            "Risky: the source sounds specific but may be invented or overstated.",
          feedback:
            "Correct. Precise-looking details still need verification.",
        },
        {
          id: "trust-stat",
          label: "Trust it because statistics are harder for AI to make up.",
          feedback:
            "AI can invent statistics too, especially when the claim is broad.",
        },
      ],
      concept:
        "Fake citations often include realistic years, journal names, and numbers. Verification beats vibes.",
    },
    {
      scenario:
        "A student asks for a source supporting a claim about sleep and college performance.",
      aiResponse:
        "Here is a source from the Journal of Adolescent Health titled Sleep Duration and Academic Performance Among University Students, published in 2023 by named researchers. It discusses links between sleep duration and academic outcomes, and the citation includes a DOI for verification.",
      betterResponse:
        "Yes, here is an academic source with citation details: title, author names, journal, publication year, and DOI. It appears relevant because it studies sleep duration and academic outcomes among university students. Before using it, read the abstract and methods to confirm the claim matches your argument.",
      prompt: "Is this research source response reliable or risky?",
      topic: "Citation completeness",
      correctAnswer: "reliable",
      options: [
        {
          id: "risky",
          label: "Risky: journal sources should not include DOIs.",
          feedback:
            "DOIs are useful verification details for many academic sources.",
        },
        {
          id: "reliable",
          label:
            "Reliable: it names the journal, title, date, authors, topic, and DOI.",
          feedback:
            "Correct. These details make the source easier to locate and verify.",
        },
        {
          id: "skip-reading",
          label: "Reliable enough to cite without reading the abstract.",
          feedback:
            "The details are promising, but the student still needs to confirm relevance.",
        },
      ],
      concept:
        "A complete citation helps verification, but students still need to check whether the source supports their exact claim.",
    },
    {
      scenario:
        "A student asks AI for campus policy about recording lectures.",
      aiResponse:
        "Most colleges allow recording lectures as long as it is for personal studying, so you should be fine.",
      betterResponse:
        "I cannot assume your campus or course policy. Check your syllabus, accessibility office guidance, university policy page, and your professor's instructions. If needed, ask for permission in writing before recording, especially if classmates may be captured.",
      prompt: "Is this research source response reliable or risky?",
      topic: "Current policy checks",
      correctAnswer: "risky",
      options: [
        {
          id: "risky",
          label:
            "Risky: campus policies vary and should be checked through official course or university sources.",
          feedback:
            "Correct. Policy questions need current official sources, not broad assumptions.",
        },
        {
          id: "reliable",
          label: "Reliable: most colleges probably have similar rules.",
          feedback:
            "Probably is not enough when permission, privacy, and course policy are involved.",
        },
        {
          id: "ignore-professor",
          label: "Reliable if the AI sounds confident and practical.",
          feedback:
            "Confidence does not replace official policy or professor permission.",
        },
      ],
      concept:
        "For campus rules, students should verify current official policy and course-specific instructions.",
    },
  ],
};

// Campus privacy rounds model how to get help without exposing sensitive student data.
questionChoiceContent.collegePrivacyShield = {
  instructions:
    "Choose the safer way to ask AI for help with campus life without oversharing private details.",
  initialPromptLabel: "Risky Prompt",
  successTitle: "Privacy Protected!",
  retryTitle: "Remove Private Details",
  scoring: {
    correctScore: 40,
    retryCorrectScore: 25,
    incorrectScore: 10,
  },
  rounds: [
    {
      scenario:
        "A student wants advice about a roommate conflict in a residence hall.",
      initialPrompt:
        "My roommate Maya in room 814 keeps bringing people over after midnight. What should I text her?",
      aiResponse:
        "Text Maya: You are being disrespectful in room 814 and I am reporting you if you do it again.",
      betterResponse:
        "Try a message that protects privacy and stays calm: 'Hey, I have been having trouble sleeping when guests stay late. Can we agree on quiet hours after midnight on weeknights? If that does not work, I think we should ask the RA to help us make a plan.'",
      prompt: "Which prompt is safer?",
      topic: "Roommate privacy",
      correctAnswer: "remove-details",
      options: [
        {
          id: "remove-details",
          label:
            "Help me write a calm roommate message about late-night guests. Do not use names, room numbers, or identifying details.",
          feedback:
            "Correct. The prompt gives the situation without exposing private identifiers.",
        },
        {
          id: "full-details",
          label:
            "Use my roommate's name, dorm, and room number so the message is specific.",
          feedback:
            "Names and room numbers are unnecessary private details.",
        },
        {
          id: "threaten",
          label: "Write a message that scares my roommate into stopping.",
          feedback:
            "Escalating tone can make the conflict worse and does not protect privacy.",
        },
      ],
      concept:
        "Campus-life prompts can be useful without exposing names, room numbers, schedules, or private conflicts.",
    },
    {
      scenario:
        "A student wants help understanding a financial aid email.",
      initialPrompt:
        "Here is my full student ID, FAFSA login, aid amount, and the email. Is this okay?",
      aiResponse:
        "Paste the full email and login details so I can inspect everything closely.",
      betterResponse:
        "Do not share logins, student ID numbers, or full financial details. You can paste a redacted version of the message with sender domain, subject line, deadline, and requested action. Then check the financial aid portal directly or call the official office number from the school website.",
      prompt: "Which prompt is safer?",
      topic: "Financial aid privacy",
      correctAnswer: "redact-aid",
      options: [
        {
          id: "redact-aid",
          label:
            "Help me review a financial aid email. I will remove my student ID, login details, aid amount, and personal identifiers first.",
          feedback:
            "Correct. The student can get help spotting red flags without exposing sensitive information.",
        },
        {
          id: "share-login",
          label: "Use my FAFSA login so AI can check the account for me.",
          feedback:
            "Never share account logins or let AI access financial aid accounts.",
        },
        {
          id: "paste-all",
          label: "Paste everything because financial aid is complicated.",
          feedback:
            "Complicated topics still need privacy boundaries.",
        },
      ],
      concept:
        "Financial aid questions can involve highly sensitive identity and account details that should be redacted.",
    },
    {
      scenario:
        "A student wants AI help with a health concern before visiting campus health services.",
      initialPrompt:
        "Here are my full symptoms, medications, ID number, and exact appointment time. What is wrong with me?",
      aiResponse:
        "Based on your symptoms, you probably have a minor infection and can wait a few days.",
      betterResponse:
        "I cannot diagnose you. Share only general symptoms if you want background information, and contact campus health or urgent care for medical guidance. Seek urgent help now if symptoms are severe, worsening, or involve warning signs like trouble breathing, chest pain, fainting, confusion, or severe allergic reaction.",
      prompt: "Which prompt is safer?",
      topic: "Health privacy",
      correctAnswer: "general-health",
      options: [
        {
          id: "general-health",
          label:
            "Give me general information about these symptoms without diagnosing me. I will not share ID numbers, appointment details, or private medical records.",
          feedback:
            "Correct. This limits personal data and keeps medical decisions with qualified help.",
        },
        {
          id: "diagnose-me",
          label: "Diagnose me from my symptoms so I can avoid the clinic.",
          feedback:
            "AI should not replace medical care, especially with personal symptoms.",
        },
        {
          id: "share-records",
          label: "Upload all my medical records so AI has full context.",
          feedback:
            "Full medical records are sensitive and should not be shared casually.",
        },
      ],
      concept:
        "Health prompts should protect private details and keep diagnosis or treatment decisions with professionals.",
    },
    {
      scenario:
        "A student wants help responding to an internship background-check form.",
      initialPrompt:
        "Here is my Social Security number, date of birth, address, and form. Fill this out for me.",
      aiResponse:
        "Sure. I can complete the form if you paste the required fields.",
      betterResponse:
        "Do not share your Social Security number, date of birth, address, or identity documents with AI. Use the official employer or background-check portal directly. I can explain what a field means in general, but you should enter sensitive data yourself only on verified official sites.",
      prompt: "Which prompt is safer?",
      topic: "Identity protection",
      correctAnswer: "explain-field",
      options: [
        {
          id: "explain-field",
          label:
            "Explain what this background-check field means in general. I will not share my SSN, date of birth, address, or identity documents.",
          feedback:
            "Correct. AI can explain form language without receiving identity data.",
        },
        {
          id: "complete-form",
          label: "Complete the whole form with my private information.",
          feedback:
            "Identity details should only go through verified official portals.",
        },
        {
          id: "share-id",
          label: "Upload my ID so AI can check whether the form is right.",
          feedback:
            "Government IDs are sensitive and should not be uploaded casually.",
        },
      ],
      concept:
        "Career and campus forms can involve identity data. AI can clarify, but it should not handle sensitive entries.",
    },
  ],
};

// College fairness rounds focus on opportunity decisions and biased shortcuts.
questionChoiceContent.collegeBiasLens = {
  instructions:
    "Choose the fairer way to use AI when recommendations could affect people or opportunities.",
  successTitle: "Fairer Decision!",
  retryTitle: "Check The Shortcut",
  scoring: {
    correctScore: 40,
    retryCorrectScore: 25,
    incorrectScore: 10,
  },
  rounds: [
    {
      scenario:
        "A student organization asks AI to recommend who should lead a new project.",
      aiResponse:
        "Choose the person with the most followers because they clearly have the most influence.",
      betterResponse:
        "Use criteria connected to the role: reliability, relevant experience, ability to coordinate teammates, communication, availability, and interest in the project. Followers may help with promotion, but they should not be the main leadership measure.",
      prompt: "What is the fairest fix?",
      topic: "Relevant criteria",
      correctAnswer: "role-criteria",
      options: [
        {
          id: "role-criteria",
          label:
            "Use role-relevant criteria like reliability, experience, teamwork, availability, and interest.",
          feedback:
            "Correct. The criteria should match the opportunity, not a popularity signal.",
        },
        {
          id: "followers",
          label: "Use follower count because it is easy to compare.",
          feedback:
            "Easy-to-measure signals can be unfair when they do not match the actual role.",
        },
        {
          id: "same-friends",
          label: "Pick someone already close to the current leaders.",
          feedback:
            "That can reinforce insider access instead of fair opportunity.",
        },
      ],
      concept:
        "Fair AI-supported decisions need criteria tied to the task, not popularity or convenience.",
    },
    {
      scenario:
        "A student asks AI which classmates are most likely to contribute in a group project.",
      aiResponse:
        "International students may struggle with communication, so assign them smaller roles.",
      betterResponse:
        "Do not assign roles based on nationality or accent. Ask each group member about strengths, schedule, preferred tasks, and comfort level. Then divide work using clear responsibilities and check-ins so everyone has a fair chance to contribute.",
      prompt: "What is the fairest fix?",
      topic: "Stereotype check",
      correctAnswer: "ask-strengths",
      options: [
        {
          id: "ask-strengths",
          label:
            "Ask each person about strengths, schedule, and preferred tasks instead of using nationality or accent.",
          feedback:
            "Correct. Fair collaboration starts with individual context, not group stereotypes.",
        },
        {
          id: "smaller-roles",
          label: "Give smaller roles to people who might communicate differently.",
          feedback:
            "That makes an unfair assumption and limits participation.",
        },
        {
          id: "only-friends",
          label: "Put friends in the most important roles because you know them best.",
          feedback:
            "Familiarity can create unfair role assignments.",
        },
      ],
      concept:
        "Bias can appear when AI turns identity, accent, or background into assumptions about ability.",
    },
    {
      scenario:
        "AI helps screen applicants for a campus ambassador position.",
      aiResponse:
        "Prioritize applicants from elite high schools because they are probably more polished.",
      betterResponse:
        "Use a scoring guide based on the actual role: communication examples, reliability, campus involvement, availability, and interest in helping students. Avoid using school prestige as a shortcut for ability or professionalism.",
      prompt: "What is the fairest fix?",
      topic: "Prestige bias",
      correctAnswer: "scoring-guide",
      options: [
        {
          id: "prestige",
          label: "Use school prestige as a quick quality signal.",
          feedback:
            "Prestige can reflect access and opportunity, not necessarily fit for the role.",
        },
        {
          id: "scoring-guide",
          label:
            "Use a scoring guide based on role-related evidence instead of school prestige.",
          feedback:
            "Correct. A clear scoring guide reduces unfair shortcuts.",
        },
        {
          id: "ai-rank",
          label: "Let AI rank them without explaining the criteria.",
          feedback:
            "Opaque rankings are hard to audit and can hide biased assumptions.",
        },
      ],
      concept:
        "Fair screening should use transparent, role-related criteria instead of prestige shortcuts.",
    },
    {
      scenario:
        "A student asks AI to analyze survey responses from a campus event.",
      aiResponse:
        "Most respondents liked the event, so ignore the few complaints from commuters and disabled students.",
      betterResponse:
        "Summarize the majority response, but also flag patterns from groups who faced access barriers. If commuters or disabled students mention timing, transportation, captions, room access, or seating, those comments may reveal important improvements even if they come from fewer people.",
      prompt: "What is the fairest fix?",
      topic: "Minority feedback",
      correctAnswer: "include-barriers",
      options: [
        {
          id: "majority-only",
          label: "Only report what the majority said.",
          feedback:
            "Majority patterns matter, but access barriers can be hidden in smaller groups.",
        },
        {
          id: "ignore-complaints",
          label: "Ignore complaints because they make the event look worse.",
          feedback:
            "Avoiding uncomfortable feedback can hide fairness and access issues.",
        },
        {
          id: "include-barriers",
          label:
            "Report the majority view and separately flag access barriers from smaller groups.",
          feedback:
            "Correct. Fair analysis includes important minority experiences instead of burying them.",
        },
      ],
      concept:
        "Fair analysis should notice who may be missing, underrepresented, or harmed by a majority-only summary.",
    },
  ],
};

// Research Assistant Check teaches when AI is a helper versus a fake source.
questionChoiceContent.researchAssistantCheck = {
  instructions:
    "Decide whether AI is acting like a useful research assistant or overstepping the research process.",
  successTitle: "Good Research Judgment!",
  retryTitle: "Check The Research Role",
  scoring: {
    correctScore: 40,
    retryCorrectScore: 25,
    incorrectScore: 10,
  },
  rounds: [
    {
      scenario:
        "A student asks AI to help start research on food insecurity among college students.",
      aiResponse:
        "Here are three studies proving food insecurity causes low graduation rates: Smith 2022, Rivera 2021, and Chen 2020. You can cite these directly.",
      betterResponse:
        "I can help you start with search terms like 'college student food insecurity,' 'campus basic needs,' 'student retention,' and 'food insecurity academic outcomes.' Use your library database or Google Scholar to find real sources. If you share article titles or abstracts, I can help summarize them and separate what is supported from what still needs verification.",
      prompt: "What is the best judgment?",
      topic: "Research starting point",
      correctAnswer: "overstepping",
      options: [
        {
          id: "useful",
          label: "Useful: AI gave studies, so the research can start with those citations.",
          feedback:
            "Academic-sounding citations still need verification before use.",
        },
        {
          id: "overstepping",
          label:
            "Overstepping: AI should suggest search terms and verification steps, not cite unverified studies directly.",
          feedback:
            "Correct. AI is most useful here as a search and thinking assistant, not a citation source.",
        },
        {
          id: "never-help",
          label: "Unnecessary: AI should never help with research planning.",
          feedback:
            "AI can help plan research if it does not invent sources or replace verification.",
        },
      ],
      concept:
        "AI can help begin research, but students must verify real sources through library databases, Google Scholar, or official materials.",
    },
    {
      scenario:
        "A student uploads an abstract and asks AI to summarize it for class discussion.",
      aiResponse:
        "Based on this abstract, the study suggests a relationship between sleep quality and academic stress, but the abstract alone may not show the full methods or limits.",
      betterResponse:
        "Based on the abstract you provided, the study appears to examine links between sleep quality and academic stress. I can summarize the research question, sample, possible finding, and limits visible in the abstract. To discuss it accurately, check the full paper's method, measures, sample size, and limitations section.",
      prompt: "What is the best judgment?",
      topic: "Abstract limits",
      correctAnswer: "useful-cautious",
      options: [
        {
          id: "useful-cautious",
          label:
            "Useful: AI summarizes the abstract while admitting the full paper still matters.",
          feedback:
            "Correct. The response is helpful but appropriately limited.",
        },
        {
          id: "overstepping",
          label: "Overstepping: AI can never summarize an abstract.",
          feedback:
            "Summarizing provided text is useful when AI stays within what the text supports.",
        },
        {
          id: "cite-it",
          label: "Use it as a complete summary of the whole paper.",
          feedback:
            "An abstract is not the full paper, so the summary should stay limited.",
        },
      ],
      concept:
        "AI can summarize provided material, but it should name limits when it has only part of the source.",
    },
    {
      scenario:
        "A student asks AI whether two sources disagree about climate migration.",
      aiResponse:
        "They disagree because one says climate migration is real and the other says it is fake, even though you only gave me the article titles.",
      betterResponse:
        "I cannot determine the disagreement from titles alone. Share the abstracts, key paragraphs, or notes from both sources. Then I can compare research questions, evidence, definitions, methods, and conclusions, and I will separate direct evidence from inference.",
      prompt: "What is the best judgment?",
      topic: "Evidence before comparison",
      correctAnswer: "overstepping",
      options: [
        {
          id: "overstepping",
          label:
            "Overstepping: AI cannot compare source arguments from titles alone.",
          feedback:
            "Correct. A comparison needs source content, not just titles.",
        },
        {
          id: "useful",
          label: "Useful: AI made the disagreement easy to understand.",
          feedback:
            "Easy is not enough if AI is guessing beyond the evidence provided.",
        },
        {
          id: "pick-side",
          label: "Useful because research is about picking one side quickly.",
          feedback:
            "Research comparison should examine evidence before choosing a position.",
        },
      ],
      concept:
        "A good research assistant does not pretend to compare sources it has not actually seen.",
    },
    {
      scenario:
        "A student asks AI to make a source-search strategy for a sociology paper.",
      aiResponse:
        "Search your library database using combinations of keywords, try related terms, filter for peer-reviewed articles if required, and track which search terms work best.",
      betterResponse:
        "Start with keyword groups: topic terms, population terms, and outcome terms. For example, combine 'first-generation college students' with 'belonging,' 'retention,' or 'campus support.' Use database filters only if your assignment requires peer review, save useful citations, and adjust terms when results are too broad or too narrow.",
      prompt: "What is the best judgment?",
      topic: "Search strategy",
      correctAnswer: "useful",
      options: [
        {
          id: "overstepping",
          label: "Overstepping: AI should not suggest search terms.",
          feedback:
            "Search strategy is an appropriate support role when the student still verifies sources.",
        },
        {
          id: "useful",
          label:
            "Useful: AI is helping plan searches without inventing or replacing sources.",
          feedback:
            "Correct. This is a good research-assistant role.",
        },
        {
          id: "finished",
          label: "Finished: search terms are enough to cite in the paper.",
          feedback:
            "Search terms help find sources; they are not sources themselves.",
        },
      ],
      concept:
        "AI can support research workflow by helping with search strategy, keywords, organization, and cautious summaries.",
    },
  ],
};

export default questionChoiceContent;
