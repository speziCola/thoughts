---
date: 2023-04-30
description: "The ChatGPT plugin for FigJam streamlines creating \"How might we\" questions from team insights, boosting problem-solving and innovation in one interface."
tags:
  - "ai"
  - "ux"
  - "workshop"
cover: ./assets/hero.png
---

# Speed up and improve your workshops through the use of WorkshopGPT (#13)

![The OpenAI logo on a white panel against a dark teal background.](<./assets/hero.png> "WorkshopGPT: Combining ChatGPT with FigJam can streamline workshop activities.")

## Motivation

Everyone is talking about AI, ChatGPT, and prompts. Integrations and plug-ins are a little quieter, although work is certainly in progress in many areas. And sometimes it doesn't take much effort to combine great tools via a plugin.<br><br>\*Note: Due to the rapid development, some flaws are no longer present. (31.12.2024)

---

## Challenge

As a retrospective facilitator, it is essential for me to evaluate and observe a variety of perspectives and thoughts. To be able to process these ideas better, I reformulate them with the team into "How could we" (HMW). This leads to more effective problem-solving and the development of innovative, practical solutions that address real team needs.<br><br>This step of reformulation takes time and needs practice. Could AI make this hurdle a thing of the past or significantly improve it overall? Let’s give it a try.

---

## Solution approach

Get ChatGPT integrated into FigJam via a plugin, so you can work with the content created, as the content written down on post-its, without leaving FigJam. This saves time and everything stays in one place.

![The WorkshopGPT FigJam plugin interface shows HMW and JTBD options, prompt controls, and a field for generated content.](<./assets/image-02.png> "WorkshopGPT plugin: Generate and refine “How might we” questions without leaving FigJam.")

**How does it work?**<br>After everyone presents their post-its, they are grouped and organized, with the plugin rephrasing the topics into "How might we" questions. The content is processed through a developed and refined prompt. Additionally, the "Rephrase" and "Abbreviate" buttons apply prompts to the generated HMWs, ensuring that everyone can create viable and well-structured questions. Ultimately, it’s important to review and validate the output. Think of the plugin as a collaborative companion designed to help you brainstorm and develop concepts without starting from scratch. While its primary purpose isn’t to solve your problems, it accelerates your progress and serves as your trusted “rubber duck” for creative thinking.

**Current flaws**

- It takes a few seconds to create an HMW. However, the current APIs also do not support the familiar typewriter effect seen in ChatGPT, which would enhances interactions by making them feel more conversational and dynamic.
- Prompt Misalignment: The 3.5 model doesn't consistently write the HMW in the language of the input and often defaults to the language of the prompt instead. The 4 model could handle it, but generating the HMW often took too long, sometimes exceeding 10 seconds.

**Next possible steps**<br>The plugin layout takes into account future functions that can be added. What features will follow remains to be seen. Due to the current shortcomings, I will wait for further improvements from the ChatGPT API.

---

**\*Update 31.12.2024**<br>As mentioned at the beginning, a lot has happened and Figma has now also added AI features to FigJam. Nevertheless, it remains interesting to use your own plugin with your own prompts in FigJam and especially how to handle sensitive data. I will follow up once I find time again.

---

**\*Update 20.11.2026**

![Figma introduces its built-in AI agent for FigJam, allowing users to analyze boards, generate diagrams, and work with existing workshop content.](./assets/image-03.png "FigJam AI Agent: Figma's native AI integration brings board analysis and content generation directly into collaborative workshops.")

It's great that we now have an AI agent directly in FigJam. But bad input still leads to bad output. You still need to understand what you're trying to achieve, which questions to ask, and how the AI should work with your content. Especially in workshops, where framing the right problem matters more than just generating something.

That said, AI is now much better integrated into FigJam, and the models have become significantly faster and more capable. So I might finally revisit my WorkshopGPT plugin and finish what I started a few years ago. The original idea was to help teams turn workshop insights into meaningful HMW questions, and I still think there's value in having more control over the prompts and the process.