const privacySafety = {
  "privatePrompts": {
    "instructions": "Keep the useful context. Leave out private details.",
    "successTitle": "Privacy Protected",
    "retryTitle": "Take Another Look",
    "scoring": {
      "correctScore": 40,
      "retryCorrectScore": 25,
      "incorrectScore": 10
    },
    "rounds": [
      {
        "scenario": "You want AI to help draft a message about a delayed delivery. Your order screenshot includes your address and phone number.",
        "prompt": "What is the best next step?",
        "topic": "Share less",
        "concept": "Use placeholders and only the details needed for the task.",
        "correctAnswer": "b",
        "options": [
          {
            "id": "a",
            "label": "Upload the whole screenshot so nothing is missed.",
            "feedback": "The address and phone number are unnecessary for drafting a general message."
          },
          {
            "id": "b",
            "label": "Describe the delay and use [order number] as a placeholder.",
            "feedback": "You can get a useful draft without uploading identifying details."
          },
          {
            "id": "c",
            "label": "Remove your name but keep the address.",
            "feedback": "An address can still identify you even without your name."
          }
        ]
      },
      {
        "scenario": "You want help explaining a confusing line on a household bill.",
        "prompt": "What is the best next step?",
        "topic": "Share less",
        "concept": "Ask about a term or a small, de-identified excerpt instead of an entire personal document.",
        "correctAnswer": "a",
        "options": [
          {
            "id": "a",
            "label": "Type the confusing term and a short general question.",
            "feedback": "The term is enough to ask for an explanation; account details add no value."
          },
          {
            "id": "b",
            "label": "Paste every page, including the account number.",
            "feedback": "The rest of the bill may expose details unrelated to the question."
          },
          {
            "id": "c",
            "label": "Upload it and ask the AI to forget it afterward.",
            "feedback": "A request in a chat is not a reliable control over how a service handles data."
          }
        ]
      },
      {
        "scenario": "An AI planning tool asks for your exact address, birth date, and daily schedule to suggest a weekly cleaning routine.",
        "prompt": "What is the best next step?",
        "topic": "Share less",
        "concept": "Question requests for personal details that are not needed for the task.",
        "correctAnswer": "c",
        "options": [
          {
            "id": "a",
            "label": "Supply everything because more detail always helps.",
            "feedback": "Extra personal information can add risk without improving the plan."
          },
          {
            "id": "b",
            "label": "Give a nearby friend's address instead.",
            "feedback": "Replacing your details with someone else's still exposes private information."
          },
          {
            "id": "c",
            "label": "Use room count, available time, and general preferences instead.",
            "feedback": "These describe the task without revealing identity or routines tied to a location."
          }
        ]
      },
      {
        "scenario": "You removed your name from a prompt, but it still lists your small neighborhood, job title, and exact work hours.",
        "prompt": "What is the best next step?",
        "topic": "Identifying combinations",
        "concept": "Several ordinary details together may identify a person; removing a name alone is not enough.",
        "correctAnswer": "a",
        "options": [
          {
            "id": "a",
            "label": "Generalize the location, role, and schedule before sending.",
            "feedback": "This reduces identifying combinations while keeping the relevant context."
          },
          {
            "id": "b",
            "label": "Send it because it no longer contains a name.",
            "feedback": "The remaining combination can still point to you."
          },
          {
            "id": "c",
            "label": "Add your employer so the AI has more context.",
            "feedback": "That makes the information more identifying, not less."
          }
        ]
      }
    ]
  },
  "sharedPrivacy": {
    "instructions": "Protect other people's details when using AI or sharing online.",
    "successTitle": "Thoughtful Choice",
    "retryTitle": "Consider Their Privacy",
    "scoring": {
      "correctScore": 40,
      "retryCorrectScore": 25,
      "incorrectScore": 10
    },
    "rounds": [
      {
        "scenario": "You want advice on replying to a friend's personal message. The screenshot includes their name and a sensitive family situation.",
        "prompt": "What is the best next step?",
        "topic": "Other people's privacy",
        "concept": "Summarize only what is needed, without exposing someone else's private message.",
        "correctAnswer": "b",
        "options": [
          {
            "id": "a",
            "label": "Post the screenshot because they sent it to you.",
            "feedback": "Receiving a message does not mean the sender agreed to wider sharing."
          },
          {
            "id": "b",
            "label": "Describe the communication problem in general terms without identifying details.",
            "feedback": "You can ask for tone suggestions without copying the private conversation."
          },
          {
            "id": "c",
            "label": "Hide their name but leave all the sensitive details.",
            "feedback": "The details can still expose their situation or identity."
          }
        ]
      },
      {
        "scenario": "You are preparing a neighborhood event invitation. A photo shows children and readable house numbers.",
        "prompt": "What is the best next step?",
        "topic": "Photo privacy",
        "concept": "Check images for people and location details before sharing; use a less revealing alternative when possible.",
        "correctAnswer": "c",
        "options": [
          {
            "id": "a",
            "label": "Share it because the event is friendly.",
            "feedback": "A friendly purpose does not remove the privacy implications."
          },
          {
            "id": "b",
            "label": "Add the children's names so neighbors recognize them.",
            "feedback": "That links identity to location and exposes more information."
          },
          {
            "id": "c",
            "label": "Use a simple illustration or an agreed photo without identifying background details.",
            "feedback": "The invitation does not need to expose people or home locations."
          }
        ]
      },
      {
        "scenario": "An AI travel planner could organize a family trip. You have everyone's passport images in a shared folder.",
        "prompt": "What is the best next step?",
        "topic": "Other people's privacy",
        "concept": "Planning rarely requires identity documents; avoid sharing other people's sensitive records.",
        "correctAnswer": "a",
        "options": [
          {
            "id": "a",
            "label": "Provide destination, approximate dates, and preferences without passport images.",
            "feedback": "These details support planning without exposing identity documents."
          },
          {
            "id": "b",
            "label": "Upload the folder to save time typing.",
            "feedback": "Convenience does not justify sharing highly sensitive records."
          },
          {
            "id": "c",
            "label": "Upload only the children's passports.",
            "feedback": "Children's identity documents also need protection."
          }
        ]
      },
      {
        "scenario": "You want AI to summarize a club meeting. Your recording includes a private discussion after the meeting ended.",
        "prompt": "What is the best next step?",
        "topic": "Consent and scope",
        "concept": "Agree on recording and sharing, and limit material to the purpose people accepted.",
        "correctAnswer": "b",
        "options": [
          {
            "id": "a",
            "label": "Upload the full recording because you own the phone.",
            "feedback": "Owning the device does not establish agreement to share everyone's conversation."
          },
          {
            "id": "b",
            "label": "Confirm permission and the tool's suitability; use only the agreed meeting material.",
            "feedback": "Permission and a limited scope help protect participants and unrelated conversations."
          },
          {
            "id": "c",
            "label": "Rename the audio file so the private part is hidden.",
            "feedback": "A file name does not remove the private audio."
          }
        ]
      }
    ]
  },
  "accessCheck": {
    "instructions": "Check what a tool can access before connecting accounts or sharing results.",
    "successTitle": "Access Checked",
    "retryTitle": "Check the Scope",
    "scoring": {
      "correctScore": 40,
      "retryCorrectScore": 25,
      "incorrectScore": 10
    },
    "rounds": [
      {
        "scenario": "A writing helper asks to read and send all your email. You only need help rewriting one sentence.",
        "prompt": "What is the best next step?",
        "topic": "Permission scope",
        "concept": "Choose the least account access needed for the task; decline unnecessary permissions.",
        "correctAnswer": "c",
        "options": [
          {
            "id": "a",
            "label": "Allow it because the tool looks professional.",
            "feedback": "Appearance does not explain why broad email access is needed."
          },
          {
            "id": "b",
            "label": "Allow it and promise yourself not to use the email feature.",
            "feedback": "The permission still grants access even if you do not intend to use it."
          },
          {
            "id": "c",
            "label": "Decline and paste a non-sensitive sentence into a tool that needs no email access.",
            "feedback": "A sentence rewrite does not require control of an email account."
          }
        ]
      },
      {
        "scenario": "An AI chat says, \"Everything you tell me is completely private.\" You are considering uploading a personal document.",
        "prompt": "What is the best next step?",
        "topic": "Privacy controls",
        "concept": "Check the service's actual privacy settings and policies rather than relying on a generated promise.",
        "correctAnswer": "a",
        "options": [
          {
            "id": "a",
            "label": "Check the service's data handling and privacy controls, and avoid uploading unnecessary sensitive details.",
            "feedback": "The service's rules and controls matter; a chat response cannot guarantee confidentiality."
          },
          {
            "id": "b",
            "label": "Trust the promise and upload the document.",
            "feedback": "Generated reassurance is not evidence of how the service handles data."
          },
          {
            "id": "c",
            "label": "Ask the chatbot to promise twice.",
            "feedback": "Repeating the promise does not change the service's settings or policies."
          }
        ]
      },
      {
        "scenario": "You created a share link for an AI conversation, then notice it includes a private detail.",
        "prompt": "What is the best next step?",
        "topic": "Sharing controls",
        "concept": "Review shared content and access settings; removing a link cannot undo copies someone already made.",
        "correctAnswer": "b",
        "options": [
          {
            "id": "a",
            "label": "Delete the conversation title only.",
            "feedback": "The detail may still be visible in the shared content."
          },
          {
            "id": "b",
            "label": "Turn off sharing if available, remove sensitive content, and check what remains accessible.",
            "feedback": "Reduce further exposure and remember that existing copies may remain."
          },
          {
            "id": "c",
            "label": "Assume a long link means nobody else can open it.",
            "feedback": "A hard-to-guess link can still be forwarded to others."
          }
        ]
      },
      {
        "scenario": "You stopped using an assistant that was connected to your calendar.",
        "prompt": "What is the best next step?",
        "topic": "Permission scope",
        "concept": "Review connected apps and revoke access that is no longer needed.",
        "correctAnswer": "c",
        "options": [
          {
            "id": "a",
            "label": "Just close the browser tab.",
            "feedback": "Closing a tab does not necessarily remove account permissions."
          },
          {
            "id": "b",
            "label": "Change the assistant's display name.",
            "feedback": "A name change does not revoke its access."
          },
          {
            "id": "c",
            "label": "Open your account's connected-app settings and revoke the assistant's access.",
            "feedback": "Use the account's permission controls to remove the connection you no longer need."
          }
        ]
      }
    ]
  }
};

export default privacySafety;
