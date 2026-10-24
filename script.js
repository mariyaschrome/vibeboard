// ================== VIBEBOARD ==================

// ---------- All the vibes ----------
// Each palette has 5 colors:
// [0] = board background, [2] = accent, [4] = text color
const vibes = [
  {
    name: "Dark Academia",
    emoji: "📚",
    tagline: "Candlelight, old libraries, and secrets in the margins.",
    palettes: [
      ["#1e1712", "#4a3426", "#b08d57", "#7a5c3e", "#eadfc8"],
      ["#20261f", "#3d4a3a", "#c2a878", "#6b5a3a", "#efe6d2"],
    ],
    fonts: [
      { heading: "Cormorant Garamond", body: "EB Garamond", fallback: "serif" },
      { heading: "Playfair Display", body: "Lora", fallback: "serif" },
    ],
    words: [
      "candlelit",
      "ink-stained",
      "scholarly",
      "wistful",
      "antique",
      "rainy",
      "velvet",
      "forbidden",
    ],
    quotes: [
      "Some stories are only found in the margins.",
      "She kept her secrets between the pages of old books.",
      "The library never sleeps, and neither do I.",
    ],
  },
  {
    name: "Mafia Glam",
    emoji: "🥂",
    tagline: "Black cars, gold rings, and loyalty that costs everything.",
    palettes: [
      ["#0a0a0a", "#3b0a14", "#d4af37", "#8b1a2b", "#f5efe6"],
      ["#111111", "#2a2a2a", "#c9a227", "#5c0f1d", "#ffffff"],
    ],
    fonts: [
      { heading: "Abril Fatface", body: "Montserrat", fallback: "sans-serif" },
      { heading: "Playfair Display", body: "Josefin Sans", fallback: "serif" },
    ],
    words: [
      "ruthless",
      "gilded",
      "untouchable",
      "magnetic",
      "dangerous",
      "midnight",
      "silk",
      "devoted",
    ],
    quotes: [
      "Love me, fear me, but never forget me.",
      "Every empire is built on one dangerous promise.",
      "He wore power like a tailored suit.",
    ],
  },
  {
    name: "Moonlit Forest",
    emoji: "🌲",
    tagline: "Silver light, whispering trees, and something watching.",
    palettes: [
      ["#0d1b1a", "#1f3d3a", "#8fd6c4", "#4a7c6f", "#e3f2ee"],
      ["#0f1a26", "#23394f", "#9ec5e6", "#3f5f7d", "#e8f1f8"],
    ],
    fonts: [
      { heading: "Cinzel", body: "Lora", fallback: "serif" },
      { heading: "Cormorant Garamond", body: "Quicksand", fallback: "serif" },
    ],
    words: [
      "mossy",
      "ethereal",
      "silver",
      "hushed",
      "ancient",
      "misty",
      "enchanted",
      "wild",
    ],
    quotes: [
      "The trees remember everything the moon has seen.",
      "Follow the silver light, but never look back.",
      "In the deep woods, even silence has a heartbeat.",
    ],
  },
  {
    name: "Cottagecore",
    emoji: "🌼",
    tagline: "Warm bread, wildflowers, and slow golden afternoons.",
    palettes: [
      ["#f6eedd", "#d9c7a0", "#a65e46", "#7c9a6d", "#3b2e24"],
      ["#fbf3ea", "#f0d4c5", "#b5654f", "#8aa27a", "#43342b"],
    ],
    fonts: [
      { heading: "Dancing Script", body: "Quicksand", fallback: "cursive" },
      { heading: "Lora", body: "EB Garamond", fallback: "serif" },
    ],
    words: [
      "cozy",
      "blooming",
      "gentle",
      "sun-warmed",
      "handmade",
      "breezy",
      "honeyed",
      "tender",
    ],
    quotes: [
      "Happiness smells like bread and wildflowers.",
      "Slow mornings are a kind of magic.",
      "Plant something small and wait for the sunshine.",
    ],
  },
  {
    name: "Neon Noir",
    emoji: "🌆",
    tagline: "Rain on glass, city lights, and trouble after dark.",
    palettes: [
      ["#0b0620", "#2a0f4f", "#ff2bd6", "#00e5ff", "#f3eaff"],
      ["#08080f", "#1a1a3a", "#39ff88", "#ff3d71", "#eaffff"],
    ],
    fonts: [
      { heading: "Bebas Neue", body: "Inter", fallback: "sans-serif" },
      { heading: "Special Elite", body: "Space Mono", fallback: "monospace" },
    ],
    words: [
      "electric",
      "rain-slick",
      "restless",
      "glitching",
      "after-hours",
      "chrome",
      "reckless",
      "buzzing",
    ],
    quotes: [
      "The city never sleeps, it just changes colors.",
      "Trouble looks good in neon.",
      "We were all running from something under these lights.",
    ],
  },
  {
    name: "Gothic Romance",
    emoji: "🥀",
    tagline: "Crimson roses, crumbling halls, and a love that haunts.",
    palettes: [
      ["#14060b", "#3a0d1e", "#c0405f", "#6e1a36", "#f3dde2"],
      ["#120c18", "#2d1a3a", "#d67aa0", "#5e3a73", "#f4e6ef"],
    ],
    fonts: [
      { heading: "Cinzel", body: "Cormorant Garamond", fallback: "serif" },
      { heading: "Playfair Display", body: "EB Garamond", fallback: "serif" },
    ],
    words: [
      "haunted",
      "crimson",
      "tragic",
      "velvet",
      "tender",
      "ruined",
      "longing",
      "moonstruck",
    ],
    quotes: [
      "Even ghosts fall in love with the living.",
      "Our love was a rose that bloomed in the dark.",
      "She was beautiful, cursed, and entirely his.",
    ],
  },
  {
    name: "Soft Sunset",
    emoji: "🌅",
    tagline: "Peach skies, pastel dreams, and quiet good vibes.",
    palettes: [
      ["#fff1ec", "#ffd3c4", "#e56b8c", "#b9a1e6", "#4a2f45"],
      ["#fdf2fa", "#ffd9ec", "#d9669b", "#a8c5f0", "#47304a"],
    ],
    fonts: [
      { heading: "Dancing Script", body: "Josefin Sans", fallback: "cursive" },
      { heading: "Quicksand", body: "Lora", fallback: "sans-serif" },
    ],
    words: [
      "dreamy",
      "rosy",
      "airy",
      "daydreaming",
      "pastel",
      "glowing",
      "soft",
      "hopeful",
    ],
    quotes: [
      "Today is a good day to bloom.",
      "Chase the sunset and let the sky answer.",
      "Be soft, stay golden, glow anyway.",
    ],
  },
  {
    name: "Old Money",
    emoji: "🏛️",
    tagline: "Quiet luxury, ivy-covered estates, and effortless poise.",
    palettes: [
      ["#14231d", "#2f4a3f", "#c8b37a", "#e8dfc9", "#f7f3e8"],
      ["#101a2b", "#26395c", "#c9ae6f", "#8a97b5", "#f5f1e6"],
    ],
    fonts: [
      { heading: "Playfair Display", body: "Montserrat", fallback: "serif" },
      {
        heading: "Cormorant Garamond",
        body: "Josefin Sans",
        fallback: "serif",
      },
    ],
    words: [
      "refined",
      "timeless",
      "understated",
      "polished",
      "heirloom",
      "poised",
      "classic",
      "composed",
    ],
    quotes: [
      "True elegance never raises its voice.",
      "Some things are inherited, and some are earned in silence.",
      "Quiet luxury needs no announcement.",
    ],
  },
];

// ---------- Page elements ----------
const vibesBox = document.getElementById("vibes");
const boardTitle = document.getElementById("board-title");
const boardTagline = document.getElementById("board-tagline");
const paletteBox = document.getElementById("palette");
const fontHeading = document.getElementById("font-heading");
const fontBody = document.getElementById("font-body");
const wordsBox = document.getElementById("words");
const quoteBox = document.getElementById("quote");
const toast = document.getElementById("toast");

// ---------- Current board ----------
let currentVibe = null;
let board = null;

// ---------- Helpers ----------
function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Picks something different from the last choice, so Shuffle always changes things
function pickDifferent(list, current) {
  if (list.length < 2) return list[0];
  let choice = pick(list);
  while (choice === current) {
    choice = pick(list);
  }
  return choice;
}

function pickWords(list, count) {
  return list
    .slice()
    .sort(function () {
      return Math.random() - 0.5;
    })
    .slice(0, count);
}

function fontStack(name, fallback) {
  return "'" + name + "', " + fallback;
}

// ---------- Toast (little popup) ----------
let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 1800);
}

// ---------- Build the vibe buttons ----------
function buildVibeButtons() {
  vibesBox.innerHTML = "";
  vibes.forEach(function (vibe) {
    const btn = document.createElement("button");
    btn.className = "vibe-btn";
    btn.textContent = vibe.emoji + " " + vibe.name;
    btn.addEventListener("click", function () {
      selectVibe(vibe);
    });
    vibesBox.appendChild(btn);
  });
}

function highlightButton() {
  const buttons = vibesBox.querySelectorAll(".vibe-btn");
  buttons.forEach(function (btn, index) {
    btn.classList.toggle("active", vibes[index] === currentVibe);
  });
}

// ---------- Choose a vibe ----------
function selectVibe(vibe) {
  currentVibe = vibe;
  board = {
    palette: pick(vibe.palettes),
    font: pick(vibe.fonts),
    words: pickWords(vibe.words, 5),
    quote: pick(vibe.quotes),
  };
  highlightButton();
  render();
}

// ---------- Shuffle ----------
function shuffle() {
  if (!currentVibe) return;
  board = {
    palette: pickDifferent(currentVibe.palettes, board.palette),
    font: pickDifferent(currentVibe.fonts, board.font),
    words: pickWords(currentVibe.words, 5),
    quote: pickDifferent(currentVibe.quotes, board.quote),
  };
  render();
}

// ---------- Copy a color ----------
function copyColor(hex) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(hex).then(
      function () {
        showToast("Copied " + hex);
      },
      function () {
        showToast(hex);
      },
    );
  } else {
    showToast(hex);
  }
}

// ---------- Draw the board ----------
function render() {
  const root = document.documentElement.style;
  const colors = board.palette;

  // Colors and fonts for the whole board
  root.setProperty("--board-bg", colors[0]);
  root.setProperty("--accent", colors[2]);
  root.setProperty("--board-text", colors[4]);
  root.setProperty(
    "--heading-font",
    fontStack(board.font.heading, board.font.fallback),
  );
  root.setProperty(
    "--body-font",
    fontStack(board.font.body, board.font.fallback),
  );

  // Title and tagline
  boardTitle.textContent = currentVibe.name;
  boardTagline.textContent = currentVibe.tagline;

  // Palette swatches
  paletteBox.innerHTML = "";
  colors.forEach(function (hex) {
    const swatch = document.createElement("div");
    swatch.className = "swatch";
    swatch.style.background = hex;
    swatch.title = "Click to copy " + hex;

    const label = document.createElement("span");
    label.textContent = hex.toUpperCase();
    swatch.appendChild(label);

    swatch.addEventListener("click", function () {
      copyColor(hex.toUpperCase());
    });
    paletteBox.appendChild(swatch);
  });

  // Fonts
  fontHeading.textContent = board.font.heading;
  fontBody.textContent = "with " + board.font.body;

  // Mood words
  wordsBox.innerHTML = "";
  board.words.forEach(function (w) {
    const span = document.createElement("span");
    span.className = "word";
    span.textContent = w;
    wordsBox.appendChild(span);
  });

  // Quote
  quoteBox.textContent = "\u201C" + board.quote + "\u201D";
}

// ---------- Buttons ----------
document.getElementById("btn-shuffle").addEventListener("click", shuffle);

// ---------- Start ----------
buildVibeButtons();
selectVibe(pick(vibes));

// ---------- Save as image ----------
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";

  words.forEach(function (word) {
    const test = line ? line + " " + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
    } else {
      line = test;
    }
  });

  ctx.fillText(line, x, y);
  return y;
}

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

async function saveImage() {
  if (!board) return;

  const W = 1080;
  const H = 1350;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const colors = board.palette;
  const heading = "'" + board.font.heading + "', " + board.font.fallback;
  const body = "'" + board.font.body + "', " + board.font.fallback;
  const mono = "'Space Mono', monospace";

  // Make sure the fonts are ready before drawing
  try {
    await Promise.all([
      document.fonts.load("60px '" + board.font.heading + "'"),
      document.fonts.load("30px '" + board.font.body + "'"),
      document.fonts.load("20px 'Space Mono'"),
    ]);
  } catch (e) {
    // If fonts fail, the fallback fonts are used.
  }

  // Background and frame
  ctx.fillStyle = colors[0];
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = colors[2];
  ctx.globalAlpha = 0.4;
  ctx.lineWidth = 3;
  roundedRect(ctx, 30, 30, W - 60, H - 60, 24);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Title (shrinks if the name is long)
  ctx.textBaseline = "alphabetic";
  let titleSize = 104;
  ctx.font = titleSize + "px " + heading;
  while (ctx.measureText(currentVibe.name).width > W - 180 && titleSize > 40) {
    titleSize -= 4;
    ctx.font = titleSize + "px " + heading;
  }
  ctx.fillStyle = colors[2];
  ctx.fillText(currentVibe.name, 90, 175);

  // Tagline
  ctx.font = "32px " + body;
  ctx.fillStyle = colors[4];
  ctx.globalAlpha = 0.8;
  wrapText(ctx, currentVibe.tagline, 90, 235, W - 180, 44);
  ctx.globalAlpha = 1;

  // Palette
  const px = 90,
    py = 320,
    pw = W - 180,
    ph = 230;
  ctx.save();
  roundedRect(ctx, px, py, pw, ph, 24);
  ctx.clip();
  const sw = pw / colors.length;
  colors.forEach(function (hex, i) {
    ctx.fillStyle = hex;
    ctx.fillRect(px + i * sw, py, sw + 1, ph);
  });
  ctx.restore();

  colors.forEach(function (hex, i) {
    const label = hex.toUpperCase();
    ctx.font = "20px " + mono;
    const tw = ctx.measureText(label).width;
    const cx = px + i * sw + sw / 2;
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    roundedRect(ctx, cx - tw / 2 - 10, py + ph - 48, tw + 20, 32, 10);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(label, cx, py + ph - 25);
    ctx.textAlign = "left";
  });

  // Two cards: fonts and mood words
  const cardY = 590,
    cardH = 300,
    cardW = (W - 180 - 30) / 2;
  const leftX = 90,
    rightX = 90 + cardW + 30;

  ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
  roundedRect(ctx, leftX, cardY, cardW, cardH, 24);
  ctx.fill();
  roundedRect(ctx, rightX, cardY, cardW, cardH, 24);
  ctx.fill();

  ctx.fillStyle = colors[4];
  ctx.globalAlpha = 0.6;
  ctx.font = "20px " + mono;
  ctx.fillText("FONTS", leftX + 30, cardY + 50);
  ctx.fillText("MOOD WORDS", rightX + 30, cardY + 50);
  ctx.globalAlpha = 1;

  // Font card
  let fontSize = 56;
  ctx.font = fontSize + "px " + heading;
  while (
    ctx.measureText(board.font.heading).width > cardW - 60 &&
    fontSize > 28
  ) {
    fontSize -= 2;
    ctx.font = fontSize + "px " + heading;
  }
  ctx.fillStyle = colors[2];
  ctx.fillText(board.font.heading, leftX + 30, cardY + 140);

  ctx.font = "28px " + body;
  ctx.fillStyle = colors[4];
  ctx.fillText("with " + board.font.body, leftX + 30, cardY + 195);

  ctx.font = "90px " + heading;
  ctx.fillStyle = colors[2];
  ctx.globalAlpha = 0.5;
  ctx.fillText("Aa", leftX + 30, cardY + 275);
  ctx.globalAlpha = 1;

  // Mood word pills
  ctx.font = "26px " + body;
  let wx = rightX + 30;
  let wy = cardY + 100;
  board.words.forEach(function (w) {
    const pillW = ctx.measureText(w).width + 36;
    if (wx + pillW > rightX + cardW - 30) {
      wx = rightX + 30;
      wy += 58;
    }
    ctx.strokeStyle = colors[2];
    ctx.lineWidth = 2;
    roundedRect(ctx, wx, wy, pillW, 44, 22);
    ctx.stroke();
    ctx.fillStyle = colors[2];
    ctx.fillText(w, wx + 18, wy + 30);
    wx += pillW + 12;
  });

  // Quote
  ctx.fillStyle = colors[2];
  ctx.fillRect(90, 960, 6, 250);

  ctx.fillStyle = colors[4];
  ctx.font = "48px " + heading;
  wrapText(ctx, "\u201C" + board.quote + "\u201D", 130, 1030, W - 260, 68);

  // Footer
  ctx.font = "20px " + mono;
  ctx.globalAlpha = 0.45;
  ctx.textAlign = "center";
  ctx.fillText("VIBEBOARD", W / 2, H - 60);
  ctx.textAlign = "left";
  ctx.globalAlpha = 1;

  // Download it
  const fileName =
    "vibeboard-" +
    currentVibe.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") +
    ".png";

  canvas.toBlob(function (blob) {
    if (!blob) {
      showToast("Couldn't save. Try again!");
      return;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 2000);
    showToast("Saved! 📸");
  }, "image/png");
}

document.getElementById("btn-save").addEventListener("click", saveImage);

// ---------- Create your own vibe ----------
const fontPairs = [
  {
    label: "Playfair Display + Lora",
    heading: "Playfair Display",
    body: "Lora",
    fallback: "serif",
  },
  {
    label: "Cinzel + Cormorant Garamond",
    heading: "Cinzel",
    body: "Cormorant Garamond",
    fallback: "serif",
  },
  {
    label: "Cormorant Garamond + EB Garamond",
    heading: "Cormorant Garamond",
    body: "EB Garamond",
    fallback: "serif",
  },
  {
    label: "Abril Fatface + Montserrat",
    heading: "Abril Fatface",
    body: "Montserrat",
    fallback: "sans-serif",
  },
  {
    label: "Bebas Neue + Inter",
    heading: "Bebas Neue",
    body: "Inter",
    fallback: "sans-serif",
  },
  {
    label: "Dancing Script + Quicksand",
    heading: "Dancing Script",
    body: "Quicksand",
    fallback: "cursive",
  },
  {
    label: "Special Elite + Space Mono",
    heading: "Special Elite",
    body: "Space Mono",
    fallback: "monospace",
  },
];

const fontSelect = document.getElementById("custom-font");

fontPairs.forEach(function (pair, i) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = pair.label;
  fontSelect.appendChild(option);
});

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);

  function f(n) {
    const k = (n + h / 30) % 12;
    const c = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * c)
      .toString(16)
      .padStart(2, "0");
  }

  return "#" + f(0) + f(8) + f(4);
}

function randomColors() {
  const h = Math.floor(Math.random() * 360);
  const colors = [
    hslToHex(h, 30, 10),
    hslToHex(h, 30, 22),
    hslToHex((h + 30) % 360, 70, 65),
    hslToHex((h + 180) % 360, 40, 45),
    hslToHex(h, 30, 92),
  ];
  colors.forEach(function (hex, i) {
    document.getElementById("c" + i).value = hex;
  });
}

document
  .getElementById("btn-random-colors")
  .addEventListener("click", randomColors);

document.getElementById("btn-create").addEventListener("click", function () {
  const name = document.getElementById("custom-name").value.trim() || "My Vibe";
  const quote =
    document.getElementById("custom-quote").value.trim() ||
    "Make your own kind of magic.";
  const pair = fontPairs[fontSelect.value];

  const colors = [0, 1, 2, 3, 4].map(function (i) {
    return document.getElementById("c" + i).value;
  });

  let words = document
    .getElementById("custom-words")
    .value.split(",")
    .map(function (w) {
      return w.trim();
    })
    .filter(function (w) {
      return w.length > 0;
    });

  if (words.length === 0) {
    words = ["unique", "bold", "dreamy", "yours", "magic"];
  }

  const vibe = {
    name: name,
    emoji: "\u2728",
    tagline: "A vibe made by you.",
    palettes: [colors],
    fonts: [pair],
    words: words,
    quotes: [quote],
  };

  currentVibe = vibe;
  board = {
    palette: colors,
    font: pair,
    words: pickWords(words, 5),
    quote: quote,
  };

  highlightButton();
  render();
  document
    .getElementById("board")
    .scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("Your vibe is ready! ✨");
});
