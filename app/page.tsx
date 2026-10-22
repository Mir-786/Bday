 "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Music2, Sparkles, Gift, ArrowRight, ChevronLeft, ChevronRight, Volume2 } from "lucide-react";

const memories = [
  { image: "https://images.unsplash.com/photo-151198-?auto=format&fit=crop&w=900&q=85", title: "Little moments", caption: "The ordinary days that became our favourites." },
  { image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85", title: "A happy place", caption: "Some memories feel like sunshine." },
  { image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85", title: "Always us", caption: "More laughter, more adventures, more everything." },
  { image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=85", title: "For the scrapbook", caption: "A little snapshot of a beautiful story." },
];

const wishes = [
  "May this year bring you the kind of happiness that stays.",
  "May your biggest dreams feel a little closer every day.",
  "May you always find a reason to laugh until your cheeks hurt.",
  "And may you never forget how loved you are. 💗",
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [page, setPage] = useState(0);
  const [opened, setOpened] = useState(false);
  const [music, setMusic] = useState(false);
  const [compliment, setCompliment] = useState("You make ordinary moments feel magical.");
  const [answer, setAnswer] = useState<number | null>(null);

  const celebrate = () => {
    confetti({ particleCount: 140, spread: 90, origin: { y: 0.65 }, colors: ["#ff8fb1", "#ffd166", "#cdb4db", "#ffffff"] });
    setOpened(true);
  };

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <nav className="nav">
        <a className="brand" href="#"><span className="brand-icon"><Heart size={17} fill="currentColor" /></span> little moments</a>
        <button className={`music-toggle ${music ? "is-playing" : ""}`} onClick={() => setMusic(!music)} aria-label="Toggle music">
          <Music2 size={16} /> {music ? "Music on" : "Music off"} <span className="music-bars"><i/><i/><i/></span>
        </button>
      </nav>

      <AnimatePresence mode="wait">
        {!started ? (
          <motion.section className="hero" key="welcome" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }}>
            <motion.div className="eyebrow" initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ delay: .2 }}><Sparkles size={14}/> A LITTLE SURPRISE FOR YOU</motion.div>
            <motion.div className="hero-art" animate={{ y: [0, -9, 0], rotate: [-1, 1, -1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <div className="sun-disc"/><div className="cake-shadow"/>
              <div className="cake"><div className="icing"><span className="drip d1"/><span className="drip d2"/><span className="drip d3"/></div><div className="cake-top"/>
                <div className="candle"><span className="flame"/></div><div className="cake-line"/></div>
              <span className="art-heart heart-a">♥</span><span className="art-heart heart-b">♡</span><span className="art-star star-a">✦</span><span className="art-star star-b">✧</span>
              <div className="art-note">made with love</div>
            </motion.div>
            <p className="kicker">to someone very special</p>
            <h1>Today is all about <em>you.</em></h1>
            <p className="hero-copy">A little collection of love, memories, and wishes—<br className="desktop-break"/> made just to make you smile.</p>
            <button className="primary-btn" onClick={() => setStarted(true)}>Open your surprise <ArrowRight size={17}/></button>
            <div className="tiny-note"><Heart size={12} fill="currentColor"/> take a deep breath and make a wish</div>
          </motion.section>
        ) : (
          <motion.div key="experience" className="experience" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="progress"><span style={{ width: `${((step + 1) / 4) * 100}%` }}/></div>
            <div className="step-label">A LITTLE JOURNEY <span>0{step + 1} / 04</span></div>
            <AnimatePresence mode="wait">
              {step === 0 && <motion.section className="content-card" key="letter" initial={{ x: 24, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -24, opacity: 0 }}>
                <div className="section-icon"><Heart size={23} fill="currentColor"/></div><p className="kicker">FIRST THINGS FIRST</p>
                <h2>Happy Birthday,<br/><em>beautiful human.</em></h2>
                <div className="letter-paper"><span className="paper-flower">✿</span><p>Some people make the world softer just by being in it. You are one of those people.</p><p>I hope today reminds you of all the good you bring into this world, all the hearts you have touched, and all the wonderful things still waiting for you.</p><p>Here’s to a year full of tiny joys, brave beginnings, and memories you’ll want to keep forever.</p><strong>With so much love, always ♡</strong></div>
                <button className="primary-btn" onClick={() => setStep(1)}>Turn the page <ArrowRight size={17}/></button>
              </motion.section>}
              {step === 1 && <motion.section className="content-card" key="memories" initial={{ x: 24, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -24, opacity: 0 }}>
                <div className="section-icon"><Sparkles size={23}/></div><p className="kicker">A FEW LITTLE MOMENTS</p><h2>Memories worth<br/><em>keeping close.</em></h2>
                <div className="memory-book">
                  <button className="book-arrow left" onClick={() => setPage((page + memories.length - 1) % memories.length)} aria-label="Previous memory"><ChevronLeft/></button>
                  <motion.div className="polaroid" key={page} initial={{ opacity: 0, rotate: -4, scale: .96 }} animate={{ opacity: 1, rotate: page % 2 ? 2 : -2, scale: 1 }} transition={{ duration: .3 }}>
                    <img src={memories[page].image} alt={memories[page].title}/><h3>{memories[page].title}</h3><p>{memories[page].caption}</p>
                  </motion.div>
                  <button className="book-arrow right" onClick={() => setPage((page + 1) % memories.length)} aria-label="Next memory"><ChevronRight/></button>
                </div><div className="dots">{memories.map((m, i) => <button key={m.title} className={page === i ? "active" : ""} onClick={() => setPage(i)} aria-label={`Show memory ${i + 1}`}/>)}</div>
                <button className="primary-btn" onClick={() => setStep(2)}>One more thing <ArrowRight size={17}/></button>
              </motion.section>}
              {step === 2 && <motion.section className="content-card" key="quiz" initial={{ x: 24, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -24, opacity: 0 }}>
                <div className="section-icon"><Gift size={23}/></div><p className="kicker">A VERY IMPORTANT QUESTION</p><h2>Ready for your<br/><em>birthday wish?</em></h2>
                <p className="body-copy">Before the final surprise, choose the wish you want most this year.</p>
                <div className="wish-options">{["More adventures ✈️", "A little extra peace ☁️", "Big beautiful dreams ✨", "All of the above 💗"].map((w, i) => <button key={w} className={answer === i ? "chosen" : ""} onClick={() => { setAnswer(i); setCompliment(["Adventure is calling your name!", "You deserve a softer, calmer kind of joy.", "Your dreams look good on you.", "That’s the birthday spirit! You deserve it all."][i]); }}>{w}<span>{answer === i ? "✓" : "＋"}</span></button>)}</div>
                {answer !== null && <motion.div className="compliment" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><Sparkles size={16}/>{compliment}</motion.div>}
                <button className="primary-btn" onClick={() => setStep(3)}>The final surprise <ArrowRight size={17}/></button>
              </motion.section>}
              {step === 3 && <motion.section className="content-card finale" key="finale" initial={{ scale: .96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <div className="section-icon"><Heart size={23} fill="currentColor"/></div><p className="kicker">YOUR DAY. YOUR MAGIC.</p><h2>Make a wish,<br/><em>then let it fly.</em></h2>
                {!opened ? <><div className="wish-jar"><span>✧</span><span>♡</span><span>✦</span><span>✧</span><div>💌</div></div><p className="body-copy">Close your eyes for a moment. Think of something that would make your heart happy.</p><button className="primary-btn" onClick={celebrate}>Make my wish ✨</button></> : <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}><div className="big-heart">💖</div><h3 className="final-message">Happy Birthday!</h3><p className="body-copy">{wishes[answer ?? 3]}</p><p className="signature">You deserve all the lovely things. ♡</p><button className="secondary-btn" onClick={() => { setStarted(false); setStep(0); setOpened(false); }}>Replay the surprise ↺</button></motion.div>}
              </motion.section>}
            </AnimatePresence>
            {step > 0 && <button className="back-btn" onClick={() => setStep(step - 1)}><ChevronLeft size={15}/> Back</button>}
          </motion.div>
        )}
      </AnimatePresence>
      <footer><span>made with <Heart size={11} fill="currentColor"/> and a little bit of magic</span><span>✦ birthday edition ✦</span></footer>
    </main>
  );
}