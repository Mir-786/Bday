# Birthday Surprise — Next.js

A responsive, animated birthday-surprise experience built with **Next.js App Router, React, TypeScript, Tailwind CSS 4, Framer Motion**, Lucide icons and canvas-confetti.

## Features
- Animated welcome screen and cake illustration
- Multi-step birthday journey with letter, photo-memory flip navigation, interactive wish quiz, and confetti finale
- Mobile-responsive layout
- Easily replaceable copy and photo URLs

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy to Vercel
Push this folder to GitHub, import the repository in Vercel, and deploy. The default Next.js build settings work.

## Personalise it
- Edit the name/message text in `app/page.tsx`.
- Replace the sample images in the `memories` array with your own images. For best results, place them in `public/images/` and use paths such as `/images/memory-1.jpg`.
- The music toggle is currently a visual UI toggle. To play a real track, add an audio file in `public/music.mp3` and wire it to an `HTMLAudioElement` after a user gesture.
- Replace sample letter and wishes with your own personal text.

This is an original implementation inspired by the general idea of an interactive birthday surprise, not a pixel-perfect copy of the referenced site.
