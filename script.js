// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// HERO slideshow (10 images, change every 5 seconds)
const heroImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto=format&fit=crop"
];

const bgA = document.getElementById("heroBgA");
const bgB = document.getElementById("heroBgB");

if (bgA && bgB) {
  // Preload images (reduces flicker)
  heroImages.forEach((url) => { const img = new Image(); img.src = url; });

  let index = 0;
  let showingA = true;

  // Set initial
  bgA.style.backgroundImage = `url('${heroImages[0]}')`;

  setInterval(() => {
    index = (index + 1) % heroImages.length;
    const nextUrl = heroImages[index];

    const incoming = showingA ? bgB : bgA;
    const outgoing = showingA ? bgA : bgB;

    incoming.style.backgroundImage = `url('${nextUrl}')`;
    incoming.classList.add("active");
    outgoing.classList.remove("active");

    showingA = !showingA;
  }, 5000);
}
