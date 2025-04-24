# Slide 1: Title Slide
**MoodBoard 🎭**  
*An Emotion-Driven Visual Playground*

- Final Project for SI379
- Created by Zichen Zang

---

# Slide 2: Live Demo
**Project in Action**

🎥 Short screen recording showing:
- Webcam activation
- Mood changes when smiling / neutral
- Emoji animations responding to emotion
- Speed slider and emoji theme switcher

📌 Link to project (GitHub Pages/Vercel)

**Speaker Notes:**
- “This is how MoodBoard works. It uses your webcam to detect your facial expression and animates the page with emojis and colors that reflect your mood.”
- “You can also use the controls to change the speed and emoji style.”

---

# Slide 3: Tech Stack Overview
**What Powers MoodBoard**

- ✅ React.js for app structure and state
- ✅ p5.js for canvas drawing and animation
- ✅ ml5.js (FaceMesh) for emotion detection
- ✅ HTML/CSS for UI controls and layout

**Speaker Notes:**
- “I combined creative coding with front-end development to make a project that’s fun and expressive.”
- “Let’s look at how each library was used.”

---

# Slide 4: React.js – App Structure

**What React Does**
- Manages emotion state with `useState`
- Mounts canvas using `useRef`
- Controls setup with `useEffect`

**Speaker Notes:**
- “React helped keep everything modular and responsive. The canvas is mounted using `useRef`, and the speed and theme are stored as state.”

---

# Slide 5: p5.js – Visuals & Animation

**What p5 Does**
- Draws emojis and background
- Displays webcam on canvas
- Handles window resizing

```js
p.draw = () => {
  p.text("💖", x, y);
}
```

**Speaker Notes:**
- “p5 handles the visuals — emojis float around depending on your mood. It also draws the webcam feed and emotion label.”

---

# Slide 6: ml5.js + FaceMesh – Emotion Detection

**Real-time ML with no training required**

```js
faceMesh.detectStart(video.elt, results => {
  const lips = results[0].lips;
  const ratio = lips.width / lips.height;
  setEmotion(ratio > 2.5 || ratio < 1.6 ? "happy" : "sad");
});
```

**Speaker Notes:**
- “This is the heart of the emotion detection. It uses FaceMesh to track your mouth width and height — no server or AI training needed.”

---

# Slide 7: UI Controls – Sliders + Selectors

- 🎛 Slider to adjust speed
- 🎨 Dropdown to switch emoji style
- 📐 Styled with inline CSS + absolute layout

**Speaker Notes:**
- “This lets users customize the animation feel. You can go calm or intense, and switch between fun emoji themes.”

---

# Slide 8: Why This Project?

- I wanted to build something emotionally expressive
- Combines my interests in design, emotion, and playful tech
- Works entirely in-browser, accessible to anyone

**Speaker Notes:**
- “I love exploring how emotion can be visualized interactively. MoodBoard is a fun way to do that.”

---

# Slide 9: Try It Yourself!

- 🌐 GitHub Pages / Vercel link to run live
- 💻 Source code on GitHub
- 📝 README with setup instructions

**Speaker Notes:**
- “You can try it right now from your browser — and the code is open if you want to remix it!”

---

# Slide 10: Thank You!
**Questions? Feedback? Mood suggestions?**  
😄 😢 🌈 💧

- Zichen Zang, SI379 Final Project
