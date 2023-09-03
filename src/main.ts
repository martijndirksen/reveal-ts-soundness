import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Math from 'reveal.js/plugin/math/math.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/plugin/highlight/reveal.css';
import 'main.css';

let deck = new Reveal({
  hash: true,
  slideNumber: true,
  plugins: [Markdown, Highlight, Notes, Math]
});

deck.initialize();
