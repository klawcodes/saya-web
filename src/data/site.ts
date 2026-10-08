// Semua teks & link yang sering berubah ada di sini.
const repo = "https://github.com/klawcodes/saya"; // TODO: ganti dengan repo kamu
const version = "0.3.60-beta";
const sponsorUrl = "https://github.com/sponsors/klawcodes"; // TODO: ganti

export const site = {
  name: "Saya Browser",
  title: "Saya Browser",
  description:
    "Saya is a fast, private web browser with a built-in ad blocker. It's just a browser, no gimmick.",
  owner: "RIOT REVENGER",
  version,
  repo,
  // Ganti dengan link langsung ke file installer kalau sudah ada
  releaseUrl: `${repo}/releases/tag/v${version}`,
  nav: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "GitHub", href: repo },
    { label: "Sponsor", href: sponsorUrl },
  ],
  // Menu legal di footer. Halamannya perlu dibuat: src/pages/terms.astro dan src/pages/privacy.astro
  legal: [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export const ext = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

// Isi route gambar di sini (mis. "/images/hero.webp"). Kosong = tampil skeleton.
export const images = {
  logo: "/images/logo.png", //          42 x 42
  footerLogo: "/images/riot-logo.png", // logo pemilik di footer
  heroBackground: "/images/background.jpg",
  ctaBackground: "/images/background-2.jpg", // hero kecil sebelum footer
  heroScreenshot: "/images/ss-1.png", // 1116 x 700
  shotA: "", //          1116 x 700
  shotB: "", //          1116 x 700
  og: "", //             1200 x 630 (opsional, untuk preview link)
};

export const features = [
  {
    icon: "shield",
    title: "Ads and trackers, blocked",
    text: "A built-in blocker stops ads, trackers and popup spam, and shows how many it caught. Pause it for any site in one click.",
  },
  {
    icon: "globe",
    title: "Your DNS, your choice",
    text: "Use the DNS provider you trust, set right inside the browser.",
  },
  {
    icon: "moon",
    title: "Tabs that rest",
    text: "Inactive tabs can sleep to give memory back, and wake up when you return.",
  },
  {
    icon: "keyboard",
    title: "Keyboard first",
    text: "Start typing on a new tab and the words go straight to the address bar. Ctrl+T, Ctrl+D, Ctrl+J and Ctrl+E are all there.",
  },
  {
    icon: "sliders",
    title: "Site info up front",
    text: "Site details and permissions are one click away, right inside the address bar.",
  },
  {
    icon: "file",
    title: "Downloads that behave",
    text: "Drag a finished download to your desktop or an upload box. Images, text and PDF files open right in a tab.",
  },
];

export const faqs = [
  {
    q: "What is Saya?",
    a: "A web browser that sticks to the basics: browsing, with an ad blocker and a few well-chosen tools built in.",
  },
  {
    q: "What is Saya built on?",
    a: "Electron, which bundles the Chromium engine. Pages render the way they do in other Chromium browsers.",
  },
  {
    q: "Why is the download so large?",
    a: "Saya ships with its own copy of Chromium, so it doesn't depend on a browser already installed on your PC.",
  },
  {
    q: "How does the ad blocker work?",
    a: "It uses filter lists to block ads, trackers and popup spam before they load. The shield icon shows how many it blocked, and you can pause it for any site.",
  },
  {
    q: "Which systems are supported?",
    a: "Windows 10 and 11 (64-bit) today. A Linux build (AppImage and .deb) is on the way.",
  },
  {
    q: "Is it free and open source?",
    a: "Yes. Saya is released under the MIT license and the source is on GitHub.",
  },
  {
    q: "Where is my data kept?",
    a: "History, bookmarks and settings are stored on your own computer.",
  },
];
