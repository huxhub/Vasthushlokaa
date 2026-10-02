import { useEffect, useState, type ReactNode, type FormEvent } from "react"

const photo = (id: string, width = 1600) =>
  `/images/${id}-${width === 1200 ? 1600 : width}.webp`
const images = {
  hero: "photo-1724582586529-62622e50c0b3",
  home: "photo-1724582586458-a51791349977",
  courtyard: "photo-1779697033885-f44063360b32",
  arches: "photo-1769538555388-bfcef28d4a4c",
  room: "photo-1704040686510-b747ff423ebb",
  office: "photo-1783315943625-6c00dc4b265b",
  dubai: "photo-1667592441284-b590021411e3",
}

type Service = {
  name: string
  slug: string
  heading: string
  description: string
  intro: string
  items: string[]
  image: string
  theme: string
}
const services: Service[] = [
  {
    name: "Residential Vastu",
    slug: "residential-vastu",
    heading: "Bring balance home.",
    description: "Spatial guidance for your living space.",
    intro:
      "A home is where life unfolds. Harmonize orientation, room placement, and light for everyday balance.",
    items: [
      "Buying a property",
      "Building a home",
      "Renovating",
      "Moving into a new house",
      "Existing apartments",
      "Villas",
      "Household flow",
    ],
    image: images.home,
    theme: "ivory",
  },
  {
    name: "Commercial Vastu",
    slug: "commercial-vastu",
    heading: "Built for momentum.",
    description: "Spatial clarity for your business.",
    intro:
      "Optimize entryways, layouts, and flow to enhance focus, productivity, and workplace growth.",
    items: [
      "Corporate Offices",
      "Retail Stores",
      "Factories",
      "Clinics",
      "Hospitality",
      "Institutions",
      "Commercial Buildings",
      "Plots",
    ],
    image: images.office,
    theme: "blue",
  },
  {
    name: "Numerology",
    slug: "numerology",
    heading: "Patterns in your path.",
    description: "Insights from names and dates.",
    intro:
      "A reflective look at numerical patterns in your name and birth date to illuminate personal timing.",
    items: [
      "Name Numerology",
      "Birth Date Analysis",
      "Personal Numbers",
      "Career",
      "Business",
      "Relationships",
      "Important Dates",
      "Name Correction",
    ],
    image: images.arches,
    theme: "gold",
  },
  {
    name: "Astro Numerology",
    slug: "astro-numerology",
    heading: "Numbers & cosmos.",
    description: "Harmonizing numerical and birth chart data.",
    intro:
      "Bridging birth chart details with numerical patterns for a comprehensive personal perspective.",
    items: [
      "Birth Details",
      "Numerological Pattern",
      "Astrological Influence",
      "Combined Analysis",
      "Personal Guidance",
    ],
    image: images.arches,
    theme: "blue",
  },
  {
    name: "Vastu",
    slug: "vastu",
    heading: "Spatial wisdom.",
    description: "Connecting space and well-being.",
    intro:
      "Rooted in traditional spatial architecture to bring directional alignment and balance to modern living.",
    items: [
      "Space",
      "Direction",
      "Energy",
      "Movement",
      "Natural Elements",
      "Human Activity",
    ],
    image: images.courtyard,
    theme: "gold",
  },
  {
    name: "Astro Vastu",
    slug: "astro-vastu",
    heading: "Space & planetary alignment.",
    description: "Personalized spatial analysis.",
    intro:
      "Combining physical surroundings with individual birth-chart insights for tailored recommendations.",
    items: [
      "Person",
      "Birth Information",
      "Planetary Influence",
      "Directional Energy",
      "Space",
      "Personalised Recommendations",
    ],
    image: images.courtyard,
    theme: "blue",
  },
  {
    name: "Geo Vastu — UAE",
    slug: "geo-vastu-uae",
    heading: "Location energy.",
    description: "Tailored for UAE properties.",
    intro:
      "Evaluating location, orientation, and environment for residential and commercial spaces across the UAE.",
    items: [
      "Location Analysis",
      "Property Orientation",
      "Environmental Influence",
      "Space Evaluation",
      "Spatial Recommendations",
    ],
    image: images.dubai,
    theme: "blue",
  },
  {
    name: "Plot Vastu",
    slug: "commercial-plot-vastu",
    heading: "Before you build.",
    description: "Assessing land and orientation.",
    intro:
      "Analyzing land shape, slope, directions, and entrances before construction begins.",
    items: [
      "Plot direction",
      "Plot shape",
      "Road position",
      "Slope",
      "Surrounding environment",
      "Entry possibilities",
      "Building placement",
      "Commercial suitability",
    ],
    image: images.office,
    theme: "ivory",
  },
]
const faqData = [
  [
    "Why am I facing repeated financial problems?",
    "Vastu assesses spatial organization to enhance focus. It supports balance, not financial guarantees.",
  ],
  [
    "Can Vastu be corrected without rebuilding my house?",
    "Yes. Adjustments focus on room placement, furniture, and daily routines without major demolition.",
  ],
  [
    "Can an existing apartment be analysed?",
    "Yes. Apartments are evaluated using accurate floor plans and directional orientation.",
  ],
  [
    "Is Vastu useful for commercial spaces?",
    "Yes. Entrances, key work zones, and circulation are tailored to your business operations.",
  ],
  [
    "Can you analyse a property before purchase?",
    "Yes. Properties can be evaluated prior to purchase to ensure directional alignment.",
  ],
  [
    "How does Astro Vastu differ from traditional Vastu?",
    "Traditional Vastu focuses on physical space; Astro Vastu adds birth details for personal alignment.",
  ],
  [
    "What information is required for Numerology?",
    "Your full name and date of birth are required. Birth time helps with Astro Numerology.",
  ],
  [
    "Is Geo Vastu available outside UAE?",
    "Geo Vastu on this platform is exclusive to properties within the UAE.",
  ],
]
const articles = [
  {
    title: "How Home Energy Influences Everyday Life",
    slug: "how-vastu-affects-home-energy",
    category: "Residential",
    image: images.room,
    excerpt: "The quiet relationship between your space and well-being.",
  },
  {
    title: "Understanding Directions in Vastu",
    slug: "understanding-directions-in-vastu",
    category: "Vastu",
    image: images.courtyard,
    excerpt: "Why orientation is the foundation of space.",
  },
  {
    title: "Choosing a Plot Through Vastu",
    slug: "choosing-a-plot-through-vastu",
    category: "Commercial",
    image: images.office,
    excerpt: "Essential considerations before laying your foundation.",
  },
  {
    title: "Can Vastu Help an Existing Home?",
    slug: "vastu-for-an-existing-home",
    category: "Lifestyle",
    image: images.home,
    excerpt: "Simple, practical adjustments for your current space.",
  },
  {
    title: "Numerology and Important Life Decisions",
    slug: "numerology-and-life-decisions",
    category: "Numerology",
    image: images.arches,
    excerpt: "Using numerical insights to guide your timing.",
  },
  {
    title: "Understanding Astro Vastu",
    slug: "understanding-astro-vastu",
    category: "Astro Vastu",
    image: images.courtyard,
    excerpt: "Connecting person and place in one conversation.",
  },
  {
    title: "Vastu for Commercial Spaces",
    slug: "vastu-for-commercial-spaces",
    category: "Commercial",
    image: images.office,
    excerpt: "Designing workplaces for movement and growth.",
  },
]

function Icon({
  name = "arrow",
  className = "",
}: {
  name?: string
  className?: string
}) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      {name === "instagram" ? (
        <>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="17" cy="7" r=".6" fill="currentColor" />
        </>
      ) : name === "menu" ? (
        <>
          <path d="M3 8h18M3 16h18" />
        </>
      ) : name === "close" ? (
        <path d="m6 6 12 12M18 6 6 18" />
      ) : name === "down" ? (
        <path d="m7 10 5 5 5-5" />
      ) : name === "sun" ? (
        <>
          <circle cx="12" cy="12" r="3.5" strokeWidth=".9" />
          <path
            d="M12 1v6m0 10v6M1 12h6m10 0h6M4.2 4.2l4.3 4.3m7 7 4.3 4.3M4.2 19.8l4.3-4.3m7-7 4.3-4.3"
            strokeWidth=".9"
          />
        </>
      ) : name === "check" ? (
        <path d="m5 12 4 4 10-10" />
      ) : name === "left" ? (
        <path d="M20 12H5m6-6-6 6 6 6" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  )
}
function Compass({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`compass ${className}`}
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="70" cy="70" r="49" />
      <circle cx="70" cy="70" r="42" strokeDasharray="1 6" />
      <path d="M70 26v88M26 70h88M39 39l62 62M39 101l62-62" opacity=".3" />
      <path className="compass-needle" d="m70 38 8 32-8 32-8-32Z" />
      <circle cx="70" cy="70" r="3" fill="currentColor" />
      <text x="70" y="15" textAnchor="middle">
        N
      </text>
      <text x="70" y="133" textAnchor="middle">
        S
      </text>
      <text x="9" y="74" textAnchor="middle">
        W
      </text>
      <text x="131" y="74" textAnchor="middle">
        E
      </text>
    </svg>
  )
}
function Picture({
  id,
  alt,
  className = "",
  eager = false,
}: {
  id: string
  alt: string
  className?: string
  eager?: boolean
}) {
  return (
    <img
      className={className}
      src={photo(id)}
      srcSet={`${photo(id, 600)} 600w, ${photo(id, 1000)} 1000w, ${photo(id, 1600)} 1600w`}
      sizes="(max-width: 700px) 100vw, 60vw"
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
    />
  )
}
function Link({
  to,
  children,
  className = "",
  ...rest
}: {
  to: string
  children: ReactNode
  className?: string
  [key: string]: unknown
}) {
  return (
    <a href={to} className={className} {...rest}>
      {children}
    </a>
  )
}
function CTA({
  children = "Book Consultation",
  to = "/book-consultation",
  light = false,
  text = false,
}: {
  children?: ReactNode
  to?: string
  light?: boolean
  text?: boolean
}) {
  return (
    <Link
      to={to}
      className={`${text ? "text-link" : "button"} ${light ? "light" : ""}`}
    >
      {children}
      <Icon />
    </Link>
  )
}
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="tiny-mark" />
      {children}
    </div>
  )
}
function Header({ path }: { path: string }) {
  const [mobile, setMobile] = useState(false)
  const [dropdown, setDropdown] = useState("")
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 30)
    listener()
    window.addEventListener("scroll", listener, { passive: true })
    return () => window.removeEventListener("scroll", listener)
  }, [])
  useEffect(() => {
    setMobile(false)
    setDropdown("")
  }, [path])
  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : ""
    if (!mobile) return
    const previousFocus = document.activeElement as HTMLElement | null
    const background = document.querySelectorAll<HTMLElement>("main, footer")
    background.forEach((element) => {
      element.inert = true
    })
    document.querySelector<HTMLElement>("#mobile-menu a")?.focus()
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobile(false)
      if (event.key !== "Tab") return
      const targets = [
        ...document.querySelectorAll<HTMLElement>(
          ".site-header a, .site-header button, #mobile-menu a",
        ),
      ].filter((element) => element.getClientRects().length > 0)
      const first = targets[0]
      const last = targets[targets.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      background.forEach((element) => {
        element.inert = false
      })
      document.removeEventListener("keydown", handleKey)
      previousFocus?.focus()
    }
  }, [mobile])
  const groups = [
    { label: "Numerology", items: [services[2], services[3]] },
    { label: "Vastu", items: [services[4], services[5]] },
    { label: "Residential Vastu", items: [services[0], services[6]] },
    { label: "Commercial Vastu", items: [services[1], services[7]] },
  ]
  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <button
          className="mobile-toggle icon-button"
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          aria-controls="mobile-menu"
          onClick={() => setMobile(!mobile)}
        >
          <Icon name={mobile ? "close" : "menu"} />
        </button>
        <Link to="/" className="brand" aria-label="Vasthushlokaa home">
          <img src="/logo.png" alt="Vasthushlokaa Logo" className="brand-logo-img" />
          <span>
            Vasthushlokaa
            <span className="brand-caption">
              SPACES. NUMBERS. POSSIBILITIES.
            </span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link to="/" className={path === "/" ? "active" : ""}>
            Home
          </Link>
          {groups.map((group) => (
            <div
              className="nav-group"
              key={group.label}
              onMouseEnter={() => setDropdown(group.label)}
              onMouseLeave={() => setDropdown("")}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setDropdown("")
              }}
            >
              <button
                onClick={() =>
                  setDropdown(dropdown === group.label ? "" : group.label)
                }
                onKeyDown={(e) => {
                  if (e.key === "Escape") setDropdown("")
                }}
                aria-expanded={dropdown === group.label}
              >
                {group.label}
                <Icon name="down" />
              </button>
              {dropdown === group.label && (
                <div className="nav-dropdown">
                  {group.items.map((s) => (
                    <Link key={s.slug} to={`/${s.slug}`}>
                      {s.name}
                      <Icon />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/vasthushlokaa">Vasthushlokaa</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        <div className="header-actions">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="instagram-link"
            aria-label="Open Instagram (profile to be supplied)"
          >
            <Icon name="instagram" />
          </a>
          <Link to="/book-consultation" className="header-book">
            <span className="desktop-book">Book Consultation</span>
            <span className="mobile-book">Book</span>
            <Icon />
          </Link>
        </div>
      </header>
      {mobile && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") setMobile(false)
          }}
        >
          <Link to="/">Home</Link>
          {services.map((s) => (
            <Link key={s.slug} to={`/${s.slug}`}>
              {s.name}
            </Link>
          ))}
          <Link to="/vasthushlokaa">Vasthushlokaa</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <CTA>Book a Consultation</CTA>
        </nav>
      )}
    </>
  )
}
const heroSlides = [
  {
    eyebrow: "ANCIENT WISDOM. A NEW PERSPECTIVE.",
    titleLead: "Transform",
    titleEm: "space.",
    titleSubLead: "Transform",
    titleSubEm: "life.",
    desc: "Thoughtful Vastu, Astro Vastu & Numerology for clarity and balance.",
    ctaText: "Book Consultation",
    ctaLink: "/book-consultation",
    secCtaText: "Explore Your Space",
    secCtaLink: "#home-energy",
    imageId: images.hero,
    imageAlt: "Warm, sunlit contemporary living room with natural materials and expansive windows",
    tag: "A MORE INTENTIONAL WAY OF LIVING",
  },
  {
    eyebrow: "RESIDENTIAL HARMONY",
    titleLead: "Align your",
    titleEm: "home.",
    titleSubLead: "Elevate your",
    titleSubEm: "sanctuary.",
    desc: "Living spaces aligned for peace of mind, well-being, and family prosperity.",
    ctaText: "Explore Residential Vastu",
    ctaLink: "/residential-vastu",
    secCtaText: "Book Consultation",
    secCtaLink: "/book-consultation",
    imageId: images.room,
    imageAlt: "Spacious luxury home with natural textures and thoughtful room placement",
    tag: "RESPONSIVE ARCHITECTURE & VASTU",
  },
  {
    eyebrow: "COMMERCIAL & BUSINESS GROWTH",
    titleLead: "Build for",
    titleEm: "momentum.",
    titleSubLead: "Design for",
    titleSubEm: "success.",
    desc: "Workplaces optimized for focus, productivity, and business momentum.",
    ctaText: "Explore Commercial Vastu",
    ctaLink: "/commercial-vastu",
    secCtaText: "Consultation Request",
    secCtaLink: "/book-consultation",
    imageId: images.office,
    imageAlt: "Considered contemporary commercial architecture with strong natural light",
    tag: "STRATEGIC COMMERCIAL SPACES",
  },
  {
    eyebrow: "ASTRO VASTU & NUMEROLOGY",
    titleLead: "Discover your",
    titleEm: "pattern.",
    titleSubLead: "Unlock your",
    titleSubEm: "potential.",
    desc: "Harmonize spatial elements and numbers with your true life direction.",
    ctaText: "Explore Numerology",
    ctaLink: "/numerology",
    secCtaText: "Book Consultation",
    secCtaLink: "/book-consultation",
    imageId: images.courtyard,
    imageAlt: "Sunlit stone architecture, an illustration of Vasthushlokaa’s spatial approach",
    tag: "NUMEROLOGY & ASTRO VASTU",
  },
]

function Hero() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [isPaused])

  const slide = heroSlides[current]
  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section
      className="hero hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-copy">
        <Eyebrow>{slide.eyebrow}</Eyebrow>
        <h1>
          {slide.titleLead}
          <br />
          your <em>{slide.titleEm}</em>
          <br />
          {slide.titleSubLead}
          <br />
          your <em>{slide.titleSubEm}</em>
        </h1>
        <p>{slide.desc}</p>
        <div className="hero-buttons">
          <CTA to={slide.ctaLink}>{slide.ctaText}</CTA>
          <CTA to={slide.secCtaLink} text>
            {slide.secCtaText}
          </CTA>
        </div>
        <div className="hero-slider-controls">
          <button className="slider-arrow" onClick={prevSlide} aria-label="Previous slide">
            <Icon name="left" />
          </button>
          <div className="slider-dots">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                className={`slider-dot ${current === i ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="slider-arrow" onClick={nextSlide} aria-label="Next slide">
            <Icon />
          </button>
          <span className="slide-counter">0{current + 1} / 0{heroSlides.length}</span>
        </div>
        <div className="hero-bottom">
          <span className="hero-note">
            IN HARMONY WITH YOUR SPACE.
            <br />
            IN ALIGNMENT WITH YOURSELF.
          </span>
          <a href="#home-energy" className="scroll-cue">
            SCROLL TO DISCOVER <span>↓</span>
          </a>
        </div>
      </div>
      <div className="hero-visual">
        {heroSlides.map((s, i) => (
          <div key={i} className={`hero-slide-img ${current === i ? "active" : ""}`}>
            <Picture id={s.imageId} alt={s.imageAlt} eager={i === 0} />
          </div>
        ))}
        <div className="hero-arch" />
        <div className="visual-label">
          <span>{slide.tag}</span>
          <span>0{current + 1} / 0{heroSlides.length}</span>
        </div>
        <div className="hero-compass">
          <Compass />
        </div>
      </div>
    </section>
  )
}
function EnergySection() {
  return (
    <section id="home-energy" className="energy-section section-pad">
      <div className="energy-photo reveal">
        <Picture
          id={images.home}
          alt="Natural light falling across a calm, thoughtfully arranged living room"
        />
        <span className="photo-caption">THE ART OF LIVING IN ALIGNMENT</span>
        <span className="photo-index">01 — THE SPACE WITHIN</span>
      </div>
      <div className="energy-copy reveal">
        <Eyebrow>MORE THAN FOUR WALLS</Eyebrow>
        <h2>
          Your home carries
          <br />
          <em>energy & purpose.</em>
        </h2>
        <p>
          Vastu aligns orientation, natural light, and spatial flow to bring lasting balance and clarity to your environment.
        </p>
        <CTA to="/residential-vastu" text>
          Discover Your Space
        </CTA>
        <div className="energy-signoff">
          <Compass />
          <span>
            BETTER BALANCE.
            <br />
            NEW POSSIBILITIES.
          </span>
        </div>
      </div>
    </section>
  )
}
function FloorPlan({ labelled = false }: { labelled?: boolean }) {
  return (
    <svg
      className={`floor-plan ${labelled ? "labelled" : ""}`}
      viewBox="0 0 640 480"
      fill="none"
      aria-label="Illustrative architectural floor plan showing room placement and directions"
      role="img"
    >
      <defs>
        <pattern
          id="plan-grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path d="M32 0H0v32" stroke="currentColor" opacity=".08" />
        </pattern>
      </defs>
      <rect width="640" height="480" fill="url(#plan-grid)" />
      <g stroke="currentColor" strokeWidth="2">
        <path d="M130 80h380v330H130zM130 245h180M310 80v95m0 55v180M310 275h200M420 275V80M130 350h180" />
        <path
          d="M210 410v-45a45 45 0 0 1 45 45M310 175h55a55 55 0 0 1-55 55M420 155h-45a45 45 0 0 0 45 45"
          strokeWidth="1"
        />
        <path
          d="M157 98h126v81H157zM157 108h126m-90-10v18m55-18v18M150 266h70v60h-70zM225 280h47v20h-47zM440 100h45v143h-45zM337 309h95v72h-95zM343 317h83m-48 17h22v27h-22z"
          opacity=".5"
        />
        <path d="M130 63h380M113 80v330" strokeWidth=".5" />
        <path d="M130 58v10m380-10v10M108 80h10m-10 330h10" strokeWidth=".5" />
        <path
          d="M230 410q0-120 110-160t80-170"
          strokeDasharray="5 8"
          opacity=".4"
        />
      </g>
      <circle
        cx="320"
        cy="240"
        r="160"
        stroke="currentColor"
        strokeDasharray="2 8"
        opacity=".25"
      />
      <g fill="currentColor" className="plan-text">
        <text x="320" y="28" textAnchor="middle">
          N
        </text>
        <text x="320" y="464" textAnchor="middle">
          S
        </text>
        <text x="32" y="245">
          W
        </text>
        <text x="597" y="245">
          E
        </text>
        {labelled && (
          <>
            <text x="168" y="213">
              BEDROOM
            </text>
            <text x="445" y="262">
              KITCHEN
            </text>
            <text x="170" y="340">
              LIVING ROOM
            </text>
            <text x="348" y="395">
              WORK SPACE
            </text>
            <text x="175" y="447">
              ENTRANCE
            </text>
            <text x="330" y="132">
              PRAYER AREA
            </text>
          </>
        )}
      </g>
    </svg>
  )
}
function Concerns() {
  return (
    <section className="concerns section-pad">
      <div className="center-heading reveal">
        <Eyebrow>WHEN LIFE FEELS OUT OF ALIGNMENT</Eyebrow>
        <h2>
          Sometimes the problem
          <br />
          <em>isn't visible.</em>
        </h2>
      </div>
      <div className="concerns-map reveal">
        <FloorPlan />
        <span className="concern c1">Constant financial pressure</span>
        <span className="concern c2">Career stagnation</span>
        <span className="concern c3">Family conflicts</span>
        <span className="concern c4">Sleep disturbance</span>
        <span className="concern c5">Business instability</span>
        <span className="concern c6">Lack of focus</span>
        <span className="concern c7">Repeated obstacles</span>
      </div>
      <div className="center-footer">
        <p>Your environment may be influencing more than you realize.</p>
        <CTA to="/vastu" text>
          Understand Your Space
        </CTA>
      </div>
    </section>
  )
}
function Philosophy() {
  const steps = [
    {
      num: "01",
      title: "Space",
      subtitle: "Structural Alignment",
      desc: "Orientation, room placement, and spatial balance that allow positive energy to breathe.",
    },
    {
      num: "02",
      title: "Energy",
      subtitle: "Elemental Dynamics",
      desc: "Harmonizing Fire, Water, Earth, Air, and Space throughout your living environment.",
    },
    {
      num: "03",
      title: "Behaviour",
      subtitle: "Human Experience",
      desc: "How your daily habits, focus, and peace of mind naturally reflect your surroundings.",
    },
    {
      num: "04",
      title: "Decisions",
      subtitle: "Clarity & Intention",
      desc: "Removing subconscious friction so choices feel aligned, confident, and clear.",
    },
    {
      num: "05",
      title: "Growth",
      subtitle: "Prosperity & Self",
      desc: "Long-term harmony, personal well-being, and sustained success in work and life.",
    },
  ]
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className="philosophy-creative section-pad">
      <div className="philosophy-header reveal">
        <Eyebrow>THE WISDOM OF VASTU</Eyebrow>
        <h2>
          Not just where things are placed.
          <br />
          <em>How life moves around them.</em>
        </h2>
        <p className="philosophy-intro-p">
          Space, direction, natural elements, and human activity are deeply connected.
          Vastu helps us see the whole picture — and consider the small shifts that can change how we experience it.
        </p>
      </div>

      <div className="wisdom-cards-container reveal">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className={`wisdom-card ${activeCard === i ? "active" : ""}`}
            onMouseEnter={() => setActiveCard(i)}
            onClick={() => setActiveCard(i)}
          >
            <div className="wisdom-card-num">{s.num}</div>
            <div className="wisdom-card-icon">
              <Icon name="sun" />
            </div>
            <h3 className="wisdom-card-title">{s.title}</h3>
            <span className="wisdom-card-subtitle">{s.subtitle}</span>
            <p className="wisdom-card-desc">{s.desc}</p>
            {i < 4 && (
              <div className="wisdom-card-connector">
                <Icon />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function VastuServicesPair() {
  const residential = services[0]
  const commercial = services[4]

  const resItems = [
    "Directional analysis",
    "Room placement",
    "Energy balancing",
    "Entrance & layout alignment",
  ]

  const comItems = [
    "Plot orientation",
    "Office layout",
    "Entrance positioning",
    "Workplace productivity",
  ]

  return (
    <section className="vastu-cards-section section-pad">
      <div className="vastu-cards-header reveal">
        <Eyebrow>TAILORED CONSULTATIONS</Eyebrow>
        <h2>
          Harmonize your <em>home & workspace.</em>
        </h2>
      </div>

      <div className="vastu-cards-grid reveal">
        {/* Residential Vastu Card */}
        <div className="vastu-service-card theme-residential">
          <Picture
            id={images.room}
            alt="Spacious luxury home with natural textures and thoughtful room placement"
          />
          <div className="vastu-card-overlay" />
          <div className="vastu-card-content">
            <Eyebrow>RESIDENTIAL VASTU</Eyebrow>
            <h2>
              A home should support
              <br />
              the life you <em>want to build.</em>
            </h2>
            <p>
              From a new beginning to a familiar space — discover a considered approach
              to making your home feel more in harmony with you.
            </p>
            <div className="feature-items">
              {resItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="vastu-card-actions">
              <CTA to={`/${residential.slug}`} light>
                Explore Residential Vastu
              </CTA>
              <CTA to="/book-consultation" text light>
                Book Consultation
              </CTA>
            </div>
          </div>
        </div>

        {/* Commercial Vastu Card */}
        <div className="vastu-service-card theme-commercial">
          <Picture
            id={images.office}
            alt="Considered contemporary commercial architecture with strong natural light"
          />
          <div className="vastu-card-overlay" />
          <div className="vastu-card-content">
            <Eyebrow>COMMERCIAL VASTU</Eyebrow>
            <h2>
              Spaces designed for
              <br />
              <em>business momentum.</em>
            </h2>
            <p>
              Bring greater intention to the spaces where ideas grow, people connect,
              and your business takes shape.
            </p>
            <div className="feature-items">
              {comItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="vastu-card-actions">
              <CTA to={`/${commercial.slug}`} light>
                Explore Commercial Vastu
              </CTA>
              <CTA to="/book-consultation" text light>
                Book Consultation
              </CTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section
      className={`about-section section-pad ${full ? "profile-intro" : ""}`}
    >
      <div className="about-visual reveal">
        <Picture
          id={images.courtyard}
          alt="Sunlit stone architecture, an illustration of Vasthushlokaa’s thoughtful spatial approach"
        />
        <div className="about-monogram">
          V<span>A PERSONAL PERSPECTIVE</span>
        </div>
        <div className="portrait-note">VASTUSHLOKAA · PORTRAIT TO BE ADDED</div>
      </div>
      <div className="about-copy reveal">
        <Eyebrow>VASTU & NUMEROLOGY CONSULTANT</Eyebrow>
        <h2>
          {full ? (
            <>
              A personal approach.
              <br />
              <em>A considered perspective.</em>
            </>
          ) : (
            <>
              Every space has a story.
              <br />
              <em>
                The first step is
                <br />
                understanding it.
              </em>
            </>
          )}
        </h2>
        <p>
          Bringing ancient spatial wisdom into contemporary living. Personal guidance focused on clarity, balance, and intentional design for your space.
        </p>
        <div className="practice-tags">
          <span>VASTU</span>
          <span>ASTRO VASTU</span>
          <span>NUMEROLOGY</span>
        </div>
        <CTA to={full ? "/book-consultation" : "/vasthushlokaa"} text>
          {full ? "Consult with Vasthushlokaa" : "Meet Vasthushlokaa"}
        </CTA>
      </div>
    </section>
  )
}
function ServiceDiscovery() {
  const [active, setActive] = useState(0)
  return (
    <section className="service-discovery section-pad">
      <div className="service-heading">
        <Eyebrow>FIND YOUR ALIGNMENT</Eyebrow>
        <h2>
          Different paths.
          <br />
          <em>A shared intention.</em>
        </h2>
        <p>A more harmonious relationship with your space and yourself.</p>
      </div>
      <div className="service-layout">
        <div className="service-list">
          {services.slice(0, 7).map((s, i) => (
            <Link
              to={`/${s.slug}`}
              className={`service-row ${active === i ? "selected" : ""}`}
              key={s.slug}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="service-number">0{i + 1}</span>
              <span>{s.name}</span>
              <Icon />
            </Link>
          ))}
        </div>
        <div className="service-preview">
          <Picture
            key={services[active].image}
            id={services[active].image}
            alt={`Architecture illustrating ${services[active].name}`}
          />
          <span>{services[active].description}</span>
          <Compass />
        </div>
      </div>
    </section>
  )
}
function FeatureSection({ commercial = false }: { commercial?: boolean }) {
  const s = services[commercial ? 1 : 0]
  const items = commercial
    ? s.items
    : [
        "Existing houses",
        "Apartments & villas",
        "New construction",
        "Renovation",
        "Floor-plan analysis",
        "Directional analysis",
        "Room placement",
        "Energy balancing",
      ]
  return (
    <section className={`feature-section ${commercial ? "commercial" : ""}`}>
      <Picture
        id={commercial ? images.office : images.room}
        alt={
          commercial
            ? "Considered contemporary commercial architecture with strong natural light"
            : "Spacious luxury home with natural textures and thoughtful room placement"
        }
      />
      <div className="feature-copy">
        <Eyebrow>
          {commercial ? "COMMERCIAL VASTU" : "RESIDENTIAL VASTU"}
        </Eyebrow>
        <h2>
          {commercial ? (
            <>
              Spaces designed for
              <br />
              <em>business momentum.</em>
            </>
          ) : (
            <>
              A home should support
              <br />
              the life you
              <br />
              <em>want to build.</em>
            </>
          )}
        </h2>
        <p>
          {commercial
            ? "Bring greater intention to the spaces where ideas grow, people connect, and your business takes shape."
            : "From a new beginning to a familiar space — discover a considered approach to making your home feel more in harmony with you."}
        </p>
        <div className="feature-items">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <CTA to={`/${s.slug}`} light>
          Explore {s.name}
        </CTA>
        <CTA text light>
          Book Consultation
        </CTA>
      </div>
    </section>
  )
}
const numberMeaning = [
  "New beginnings & individuality",
  "Connection & cooperation",
  "Expression & creativity",
  "Structure & grounded effort",
  "Change & exploration",
  "Care & responsibility",
  "Reflection & understanding",
  "Ambition & organisation",
  "Compassion & perspective",
]
function Numerology({ standalone = false }: { standalone?: boolean }) {
  const [number, setNumber] = useState(1)
  return (
    <section
      className={`numerology-section section-pad ${
        standalone ? "standalone" : ""
      }`}
    >
      <div className="number-copy">
        <Eyebrow>THE LANGUAGE OF NUMBERS</Eyebrow>
        <h2>
          Every number
          <br />
          carries <em>a pattern.</em>
        </h2>
        <p>
          Discover core numerical patterns in your name, birth date, and personal timing.
        </p>
        <div className="number-topics">
          Name & birth date · Career & business · Important dates
        </div>
        <CTA to={standalone ? "/book-consultation" : "/numerology"} text>
          {standalone ? "Book Numerology Consultation" : "Explore Numerology"}
        </CTA>
      </div>
      <div className="numbers-visual">
        <span className="large-number" key={number}>
          0{number}
        </span>
        <div className="number-orbit" />
        <div className="number-controls" aria-label="Explore numbers">
          {Array.from({ length: 9 }, (_, i) => (
            <button
              key={i}
              aria-label={`Explore number ${i + 1}`}
              aria-pressed={number === i + 1}
              className={number === i + 1 ? "active" : ""}
              onClick={() => setNumber(i + 1)}
            >
              0{i + 1}
            </button>
          ))}
        </div>
        <span className="number-meaning">{numberMeaning[number - 1]}</span>
        <small>TRADITIONAL NUMEROLOGICAL THEMES</small>
      </div>
    </section>
  )
}
function OrbitGraphic() {
  return (
    <div className="orbit-graphic" aria-hidden="true">
      <div className="orbit o1" />
      <div className="orbit o2" />
      <div className="orbit o3" />
      <div className="orbit o4" />
      <span className="orbit-center">∞</span>
      <span className="orbit-point p1">01</span>
      <span className="orbit-point p2">09</span>
      <span className="orbit-coordinate">
        23° 26′ · A PERSONAL CONSTELLATION
      </span>
    </div>
  )
}
function AstroSection() {
  return (
    <section className="astro-section section-pad">
      <OrbitGraphic />
      <div className="astro-copy">
        <Eyebrow>ASTRO NUMEROLOGY</Eyebrow>
        <h2>
          When numbers meet
          <br />
          <em>
            the movement
            <br />
            of the cosmos.
          </em>
        </h2>
        <p>
          Aligning birth information and planetary influences with your spatial environment.
        </p>
        <div className="mini-journey">
          Birth data <span>↓</span> Numerical pattern <span>↓</span>{" "}
          Planetary alignment <span>↓</span> Spatial guidance
        </div>
        <CTA to="/astro-numerology" text>
          Explore Astro Numerology
        </CTA>
      </div>
    </section>
  )
}
function GeoSection() {
  return (
    <section className="geo-section section-pad">
      <div className="geo-copy">
        <Eyebrow>AVAILABLE EXCLUSIVELY IN THE UAE</Eyebrow>
        <h2>
          Geography changes.
          <br />
          <em>Energy principles adapt.</em>
        </h2>
        <p>
          UAE-specific consultations tailored for homes, commercial offices, and development plots.
        </p>
        <div className="geo-topics">
          Location analysis · Property orientation · Space evaluation
        </div>
        <CTA to="/book-consultation" text>
          Request UAE Consultation
        </CTA>
        <Link to="/geo-vastu-uae" className="subtle-link">
          Discover Geo Vastu ↗
        </Link>
      </div>
      <div className="geo-image">
        <Picture
          id={images.dubai}
          alt="Dubai’s Museum of the Future, contemporary UAE architecture"
        />
        <span>25.2194° N &nbsp; 55.2813° E</span>
      </div>
    </section>
  )
}
function Process() {
  const steps = [
    ["Understand", "Your space and primary goals."],
    ["Analyse", "Directional and spatial examination."],
    ["Identify", "Key priorities and energy patterns."],
    ["Recommend", "Practical, grounded guidance."],
    ["Align", "A clear, intentional path forward."],
  ]
  return (
    <section className="process-section section-pad">
      <div className="process-heading">
        <Eyebrow>A THOUGHTFUL PROCESS</Eyebrow>
        <h2>
          Clarity begins
          <br />
          <em>with a conversation.</em>
        </h2>
        <CTA text>Start Yours</CTA>
      </div>
      <div className="process-steps">
        {steps.map(([name, detail], i) => (
          <div className="process-step reveal" key={name}>
            <span className="step-num">0{i + 1}</span>
            <h3>{name}</h3>
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
function Reviews() {
  const [index, setIndex] = useState(0)
  const quotes = [
    "“A calmer home. A clearer perspective. A more intentional way forward.”",
    "“The most meaningful guidance begins with understanding your everyday life.”",
    "“Small, thoughtful changes can offer a new way of seeing a familiar space.”",
  ]
  return (
    <section className="reviews-section section-pad">
      <Eyebrow>CLIENT EXPERIENCES</Eyebrow>
      <div className="review-heading">
        <h2>
          Experiences shared
          <br />
          <em>by our clients.</em>
        </h2>
        <span className="google-word">
          <b>G</b> Google Reviews
        </span>
      </div>
      <div className="review-content" aria-live="polite">
        <span
          className="review-stars"
          aria-label="Illustrative five-star review"
        >
          ★★★★★
        </span>
        <blockquote key={index}>{quotes[index]}</blockquote>
        <div className="review-bottom">
          <span>
            ILLUSTRATIVE REVIEW PREVIEW
            <small>Verified client reviews will be added here.</small>
          </span>
          <div className="review-controls">
            <button
              className="icon-button previous"
              aria-label="Previous preview"
              onClick={() => setIndex((index + 2) % 3)}
            >
              <Icon />
            </button>
            <span>0{index + 1} / 03</span>
            <button
              className="icon-button"
              aria-label="Next preview"
              onClick={() => setIndex((index + 1) % 3)}
            >
              <Icon />
            </button>
          </div>
        </div>
      </div>
      <div className="review-links">
        <a
          href="https://www.google.com/maps/search/Vasthushlokaa+Vastu+consultant"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Find Reviews on Google
          <Icon />
        </a>
        <CTA text>Book Consultation</CTA>
      </div>
    </section>
  )
}
function FAQ({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className={`faq-section section-pad ${compact ? "compact" : ""}`}>
      <div className="faq-heading">
        <Eyebrow>A LITTLE MORE CLARITY</Eyebrow>
        <h2>
          You may be here
          <br />
          because something
          <br />
          <em>doesn't feel right.</em>
        </h2>
        <p>Questions are a good place to begin.</p>
        <CTA text>Book Consultation</CTA>
      </div>
      <div className="faq-list">
        {faqData.map(([question, answer], i) => (
          <div
            className={`faq-item ${open === i ? "open" : ""}`}
            key={question}
          >
            <h3>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{question}</span>
                <span className="faq-plus">{open === i ? "−" : "+"}</span>
              </button>
            </h3>
            {open === i && (
              <div id={`faq-answer-${i}`} className="faq-answer">
                {answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
function Insights({ full = false }: { full?: boolean }) {
  const [category, setCategory] = useState("All")
  const list = full
    ? articles.filter((a) => category === "All" || a.category === category)
    : articles.slice(0, 3)
  return (
    <section
      className={`insights-section section-pad ${full ? "full-insights" : ""}`}
    >
      <div className="insights-heading">
        <div>
          <Eyebrow>THE JOURNAL</Eyebrow>
          {full ? (
            <h1>
              Knowledge
              <br />& <em>Insights.</em>
            </h1>
          ) : (
            <h2>
              Knowledge <em>& Insights.</em>
            </h2>
          )}
        </div>
        {!full && (
          <CTA to="/blog" text>
            View All Insights
          </CTA>
        )}
      </div>
      {full && (
        <div className="category-filters" aria-label="Filter articles">
          {[
            "All",
            "Vastu",
            "Residential",
            "Commercial",
            "Numerology",
            "Astro Vastu",
            "Lifestyle",
          ].map((c) => (
            <button
              key={c}
              className={category === c ? "active" : ""}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="insights-layout">
        {list.map((article, i) => (
          <Link
            to={`/blog/${article.slug}`}
            className={`article-preview ${i === 0 ? "featured" : ""}`}
            key={article.slug}
          >
            <div className="article-image">
              <Picture id={article.image} alt={article.title} />
              <span className="article-arrow">
                <Icon />
              </span>
            </div>
            <div className="article-meta">
              {article.category} <span>6 MIN READ</span>
            </div>
            <h3>{article.title}</h3>
            {(i === 0 || full) && <p>{article.excerpt}</p>}
          </Link>
        ))}
      </div>
      {list.length === 0 && <p>No articles in this category yet.</p>}
    </section>
  )
}
function FinalCTA() {
  return (
    <section className="final-cta section-pad">
      <Compass />
      <Eyebrow>YOUR NEXT CHAPTER</Eyebrow>
      <h2>
        Your space may already
        <br />
        be <em>telling you something.</em>
      </h2>
      <p>Let's understand it together.</p>
      <CTA />
    </section>
  )
}
function Footer() {
  return (
    <footer className="footer section-pad">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <img src="/logo.png" alt="Vasthushlokaa Logo" className="brand-logo-img" />
            <span>Vasthushlokaa</span>
          </Link>
          <p>
            Ancient knowledge.
            <br />
            Contemporary spaces.
            <br />
            Personal possibilities.
          </p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            <Icon name="instagram" />
            Instagram
          </a>
        </div>
        <div className="footer-column">
          <span>EXPLORE THE PRACTICE</span>
          {[
            services[4],
            services[5],
            services[0],
            services[1],
            services[6],
          ].map((s) => (
            <Link key={s.slug} to={`/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <span>MORE POSSIBILITIES</span>
          {[services[2], services[3], services[7]].map((s) => (
            <Link key={s.slug} to={`/${s.slug}`}>
              {s.name}
            </Link>
          ))}
          <Link to="/blog">Knowledge & Insights</Link>
          <Link to="/vasthushlokaa">Vasthushlokaa Profile</Link>
        </div>
        <div className="footer-column footer-contact">
          <span>LET'S CONNECT</span>
          <p>
            A thoughtful conversation
            <br />
            is the first step.
          </p>
          <Link to="/contact">
            Contact Vasthushlokaa
            <Icon />
          </Link>
          <Link to="/book-consultation">
            Book Consultation
            <Icon />
          </Link>
          <small>Direct contact details coming soon.</small>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Vasthushlokaa. All rights reserved.</span>
        <span>IN HARMONY WITH SPACE & SELF</span>
        <a href="#top">Back to top ↑</a>
      </div>
      <p className="disclaimer">
        Vastu, astrology, and numerology are traditional interpretive practices,
        not scientifically established methods. Guidance does not replace
        medical, financial, legal, or architectural advice and does not
        guarantee outcomes.
      </p>
    </footer>
  )
}
function Home() {
  return (
    <>
      <Hero />
      <div className="wisdom-strip">
        <span>ANCIENT KNOWLEDGE</span>
        <span className="strip-symbol">
          <Icon name="sun" />
        </span>
        <span>CONTEMPORARY SPACES</span>
        <span className="strip-symbol">
          <Icon name="sun" />
        </span>
        <span>PERSONAL TRANSFORMATION</span>
      </div>
      <EnergySection />
      <Concerns />
      <Philosophy />
      <AboutSection />
      <ServiceDiscovery />
      <VastuServicesPair />
      <Numerology />
      <AstroSection />
      <GeoSection />
      <Process />
      <Reviews />
      <FAQ />
      <Insights />
      <FinalCTA />
    </>
  )
}
function Elements() {
  const [element, setElement] = useState(0)
  const data = [
    [
      "Space",
      "Room to breathe.",
      "The openness that allows light, movement, and life to unfold.",
    ],
    [
      "Air",
      "Let life flow.",
      "Ventilation, freshness, and the quiet rhythm of movement through a space.",
    ],
    [
      "Fire",
      "A sense of vitality.",
      "Sunlight, warmth, and the places associated with activity and transformation.",
    ],
    [
      "Water",
      "Find your rhythm.",
      "Fluidity, calm, and the placement of water in a considered environment.",
    ],
    [
      "Earth",
      "Feel grounded.",
      "Stability, materiality, and a sense of connection to the place beneath your feet.",
    ],
  ]
  return (
    <section className={`elements-section element-${element} section-pad`}>
      <Eyebrow>THE FIVE ELEMENTS</Eyebrow>
      <div
        className="elements-tabs"
        role="tablist"
        aria-label="Five natural elements"
      >
        {data.map(([name], i) => (
          <button
            key={name}
            role="tab"
            id={`element-tab-${i}`}
            aria-controls="element-panel"
            aria-selected={element === i}
            onClick={() => setElement(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                const next = (element + (e.key === "ArrowRight" ? 1 : 4)) % 5
                setElement(next)
                document.getElementById(`element-tab-${next}`)?.focus()
              }
            }}
            tabIndex={element === i ? 0 : -1}
          >
            {name}
          </button>
        ))}
      </div>
      <div
        id="element-panel"
        role="tabpanel"
        aria-labelledby={`element-tab-${element}`}
        className="element-content"
      >
        <span className="element-number">0{element + 1}</span>
        <h2>{data[element][1]}</h2>
        <p>{data[element][2]}</p>
      </div>
      <Compass />
    </section>
  )
}
function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <section className={`page-hero theme-${service.theme}`}>
        <div className="page-hero-copy">
          <Eyebrow>{service.name.toUpperCase()}</Eyebrow>
          <h1>{service.heading}</h1>
          <p>{service.description}</p>
          <CTA>
            {service.slug === "geo-vastu-uae"
              ? "Request UAE Consultation"
              : `Book ${service.name.replace(" — UAE", "")} Consultation`}
          </CTA>
        </div>
        <div className="page-hero-image">
          <Picture
            id={service.image}
            alt={`${service.name}: natural light, orientation, and considered architectural space`}
            eager
          />
          <Compass />
        </div>
      </section>
      <section className="service-intro section-pad">
        <Eyebrow>A CONSIDERED PERSPECTIVE</Eyebrow>
        <div>
          <h2>
            {service.slug === "vastu"
              ? "What is Vastu?"
              : `A closer look at ${service.name.toLowerCase()}.`}
          </h2>
          <p>{service.intro}</p>
          <p>
            Every consultation starts with your questions. Recommendations are
            considered in the context of your circumstances, existing
            constraints, and practical possibilities — never as a
            one-size-fits-all answer.
          </p>
        </div>
      </section>
      {service.slug === "vastu" && (
        <>
          <Philosophy />
          <Elements />
        </>
      )}
      {service.slug === "residential-vastu" && (
        <section className="blueprint-section section-pad">
          <div>
            <Eyebrow>READING YOUR HOME</Eyebrow>
            <h2>
              A floor plan.
              <br />
              <em>A fuller picture.</em>
            </h2>
            <p>
              Entrance, kitchen, bedroom, living room, work space, prayer area,
              openings, and directions — considered together to understand how
              energy and daily activity move through your home.
            </p>
            <small>ILLUSTRATIVE FLOOR PLAN · NOT A PROPERTY ASSESSMENT</small>
          </div>
          <FloorPlan labelled />
        </section>
      )}
      {(service.slug === "astro-vastu" ||
        service.slug === "astro-numerology") && (
        <section className="service-orbit section-pad">
          <OrbitGraphic />
          <div>
            <Eyebrow>A PERSONAL JOURNEY</Eyebrow>
            <h2>
              Connected perspectives.
              <br />
              <em>Individual guidance.</em>
            </h2>
            <ol className="vertical-journey">
              {service.items.map((item, i) => (
                <li key={item}>
                  <span>0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
      {service.slug === "numerology" && <Numerology standalone />}
      <section className="coverage-section section-pad">
        <div>
          <Eyebrow>HOW WE CAN HELP</Eyebrow>
          <h2>
            {service.slug === "commercial-plot-vastu" ? (
              <>
                A thoughtful foundation.
                <br />
                <em>Before the first stone.</em>
              </>
            ) : (
              <>
                Your needs.
                <br />
                <em>Our starting point.</em>
              </>
            )}
          </h2>
          <p>
            Share your questions and the details of your space. Together, we can
            determine the right focus for your consultation.
          </p>
        </div>
        <ul className="coverage-list">
          {service.items.map((item, i) => (
            <li key={item}>
              <span>0{i + 1}</span>
              {item}
              <Icon />
            </li>
          ))}
        </ul>
      </section>
      <Process />
      <FAQ compact />
      <section className="related-services section-pad">
        <Eyebrow>CONTINUE EXPLORING</Eyebrow>
        <div>
          {services
            .filter((s) => s.slug !== service.slug)
            .slice(0, 3)
            .map((s) => (
              <Link key={s.slug} to={`/${s.slug}`}>
                {s.name}
                <Icon />
              </Link>
            ))}
        </div>
      </section>
      <FinalCTA />
    </>
  )
}
function Profile() {
  return (
    <>
      <section className="profile-heading section-pad">
        <Eyebrow>VASTU & NUMEROLOGY CONSULTANT</Eyebrow>
        <h1>
          Vasthushlokaa
          <span>
            Wisdom with a<br />
            <em>personal perspective.</em>
          </span>
        </h1>
      </section>
      <AboutSection full />
      <section className="profile-statement section-pad">
        <h2>
          Every person is different.
          <br />
          Every home is different.
          <br />
          <em>Every solution should be different.</em>
        </h2>
        <span>THE PHILOSOPHY BEHIND THE PRACTICE</span>
      </section>
      <section className="profile-story section-pad">
        <Eyebrow>HER STORY & JOURNEY</Eyebrow>
        <div>
          <h2>
            Understanding first.
            <br />
            <em>Guidance second.</em>
          </h2>
          <p>
            The practice brings Vastu, Astro Vastu, and Numerology into
            conversations about contemporary life. It is an approach shaped
            around the person, the place, and the questions that matter to them.
          </p>
          <p>
            Vasthushlokaa’s detailed biography, training, and professional milestones
            will be shared here once verified. In the meantime, explore the
            philosophy and areas of practice that guide a personal consultation.
          </p>
          <h3>A thoughtful approach</h3>
          <p>
            Listen carefully. Consider the whole picture. Offer practical
            guidance that respects the way you live and the decisions that
            remain yours to make.
          </p>
        </div>
      </section>
      <section className="timeline-section section-pad">
        <Eyebrow>THE PATH OF A PRACTICE</Eyebrow>
        <div className="profile-timeline">
          {[
            "Beginning",
            "Learning",
            "Practice",
            "Experience",
            "Consultations",
            "Today",
          ].map((step, i) => (
            <div key={step}>
              <span>0{i + 1}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
        <small>
          Detailed milestones to be added with Vasthushlokaa’s approved biography.
        </small>
      </section>
      <ServiceDiscovery />
      <Reviews />
      <FinalCTA />
    </>
  )
}
function Article({ slug }: { slug: string }) {
  const article = articles.find((a) => a.slug === slug)
  if (!article) return <NotFound />
  return (
    <>
      <article className="article-page">
        <div className="article-header section-pad">
          <Eyebrow>{article.category.toUpperCase()}</Eyebrow>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <div className="article-byline">
            <span>Vasthushlokaa Editorial</span>
            <span>
              Published <time dateTime="2026-06-01">1 June 2026</time>
            </span>
            <span>
              Updated <time dateTime="2026-06-01">1 June 2026</time>
            </span>
            <span>6 min read</span>
          </div>
        </div>
        <Picture
          id={article.image}
          alt={article.title}
          className="article-hero-photo"
          eager
        />
        <div className="article-body section-pad">
          <aside>
            <span>IN THIS ARTICLE</span>
            <a href="#perspective">A different perspective</a>
            <a href="#everyday">The everyday experience</a>
            <a href="#starting">Where to begin</a>
            <a href="#thoughtful">A thoughtful next step</a>
          </aside>
          <div className="article-prose">
            <p className="article-lead">
              {article.excerpt} The starting point is not a promise of change,
              but a willingness to look more carefully at what is already around
              you.
            </p>
            <h2 id="perspective">
              A different perspective on {article.category.toLowerCase()}
            </h2>
            <p>
              {article.category === "Numerology"
                ? "Numerology associates symbolic themes with numbers derived from names and birth dates. It can be approached as a traditional reflective practice: a prompt for thinking about your priorities, rather than a prediction or a rule that determines your future."
                : article.category === "Commercial"
                  ? "A commercial environment should serve the people and activities within it. Entrance placement, circulation, natural light, working zones, and the surrounding context all deserve consideration before decisions are made."
                  : article.category === "Astro Vastu"
                    ? "Astro Vastu brings two traditional interpretive perspectives together: spatial principles and birth-chart interpretation. The intention is to consider not just the property, but the person who experiences it each day."
                    : "Traditional Vastu invites us to consider orientation, room placement, natural elements, and the activities that take place inside a building. Modern life adds further considerations: comfort, accessibility, ventilation, and the particular needs of the people who use a space."}
            </p>
            <h2 id="everyday">The everyday experience matters</h2>
            <p>
              Notice where you feel comfortable and where a space feels
              difficult to use. Look at the light at different times of day.
              Consider noise, clutter, movement, and the way furniture supports
              — or interrupts — your routines. These observations make a
              consultation more useful and more personal.
            </p>
            <blockquote>
              “The first step is understanding what your space is asking of you
              — and what you need from it.”
            </blockquote>
            <h3>Practical questions worth asking</h3>
            <ul>
              <li>What would you like to understand more clearly?</li>
              <li>
                Which daily routines feel supported, and which feel difficult?
              </li>
              <li>
                What can reasonably change within your current circumstances?
              </li>
            </ul>
            <h2 id="starting">Where to begin</h2>
            <p>
              Start with accurate information. For a property assessment, an
              up-to-date floor plan and a reliable understanding of direction
              are helpful. For numerical or astrological interpretation, your
              name and birth information may be relevant. Your consultation
              requirements will be confirmed in advance.
            </p>
            <h2 id="thoughtful">A thoughtful next step</h2>
            <p>
              Traditional guidance works best when approached with perspective.
              It is not a substitute for architectural expertise, financial
              planning, medical care, or legal due diligence. Keep your own
              judgement at the centre of every important decision.
            </p>
            <CTA>Discuss Your Questions</CTA>
            <div className="article-related-service">
              <h3>Explore a related practice</h3>
              <CTA
                to={
                  article.category === "Numerology"
                    ? "/numerology"
                    : article.category === "Commercial"
                      ? "/commercial-vastu"
                      : article.category === "Astro Vastu"
                        ? "/astro-vastu"
                        : "/residential-vastu"
                }
                text
              >
                Find Your Consultation
              </CTA>
            </div>
          </div>
        </div>
      </article>
      <FAQ compact />
      <Insights />
      <FinalCTA />
    </>
  )
}
const consultationOptions = [
  "Residential Vastu",
  "Commercial Vastu",
  "Plot Vastu",
  "Geo Vastu — UAE",
  "Vastu",
  "Astro Vastu",
  "Numerology",
  "Astro Numerology",
]
type BookingData = {
  type: string
  name: string
  phone: string
  email: string
  location: string
  propertyType: string
  propertyLocation: string
  propertyStatus: string
  mode: string
  notes: string
  date: string
  time: string
}
const emptyBooking: BookingData = {
  type: "",
  name: "",
  phone: "",
  email: "",
  location: "",
  propertyType: "",
  propertyLocation: "",
  propertyStatus: "",
  mode: "",
  notes: "",
  date: "",
  time: "",
}
function Field({
  label,
  name,
  value,
  update,
  type = "text",
  required = false,
}: {
  label: string
  name: keyof BookingData
  value: string
  update: (name: keyof BookingData, value: string) => void
  type?: string
  required?: boolean
}) {
  return (
    <label className="form-field">
      <span>
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => update(name, e.target.value)}
        required={required}
        autoComplete={
          name === "name"
            ? "name"
            : name === "email"
              ? "email"
              : name === "phone"
                ? "tel"
                : "off"
        }
        min={
          type === "date" ? new Date().toLocaleDateString("en-CA") : undefined
        }
      />
    </label>
  )
}
function SelectField({
  label,
  name,
  value,
  update,
  options,
  required = false,
}: {
  label: string
  name: keyof BookingData
  value: string
  update: (name: keyof BookingData, value: string) => void
  options: string[]
  required?: boolean
}) {
  return (
    <label className="form-field">
      <span>
        {label}
        {required && " *"}
      </span>
      <select
        value={value}
        required={required}
        onChange={(e) => update(name, e.target.value)}
      >
        <option value="">Please select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  )
}
function Booking({ contact = false }: { contact?: boolean }) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<BookingData>(emptyBooking)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const update = (name: keyof BookingData, value: string) => {
    setData((d) => ({ ...d, [name]: value }))
    setError("")
  }
  const steps = [
    "Consultation Type",
    "Personal Details",
    "Consultation Details",
    "Preferred Date",
    "Preferred Time",
    "Review Details",
  ]
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!contact && step === 0 && !data.type) {
      setError("Please choose a consultation type.")
      return
    }
    if (
      data.type === "Geo Vastu — UAE" &&
      (contact || step === 2) &&
      !/uae|united arab emirates|dubai|abu dhabi|sharjah|ajman|fujairah|ras al khaimah|umm al quwain/i.test(
        data.propertyLocation || data.location,
      )
    ) {
      setError(
        "Geo Vastu is exclusive to UAE properties. Please enter the UAE emirate or location.",
      )
      return
    }
    if (!contact && step === 4 && !data.time) {
      setError("Please choose a preferred time.")
      return
    }
    if (contact || step === 5) {
      try {
        sessionStorage.setItem("vasthushlokaa-consultation", JSON.stringify(data))
        setSuccess(true)
      } catch {
        setError(
          "Your browser could not save the request. Please enable storage and try again.",
        )
      }
    } else {
      setStep((s) => s + 1)
    }
  }
  const isNumerical = data.type.includes("Numerology")
  const reviewLabels: Partial<Record<keyof BookingData, string>> = {
    type: "Consultation",
    name: "Name",
    phone: "Phone",
    email: "Email",
    location: "Location",
    propertyType: "Property type",
    propertyLocation: "Property location",
    propertyStatus: "Property status",
    mode: "Consultation mode",
    notes: "Additional notes",
    date: "Preferred date",
    time: "Preferred time (UAE)",
  }
  if (success)
    return (
      <section className="booking-success section-pad">
        <div className="success-symbol">
          <Icon name="check" />
        </div>
        <Eyebrow>YOUR NEXT CHAPTER</Eyebrow>
        <h1>
          Your consultation request
          <br />
          <em>has been received.</em>
        </h1>
        <p>
          Vasthushlokaa's team will contact you to confirm the appointment
          <br />
          once online submission is connected.
        </p>
        <div className="preview-notice">
          Preview mode: your request is saved in this browser session only. No
          details have been sent, and no appointment has been confirmed.
        </div>
        <CTA to="/">Return Home</CTA>
        <button
          className="text-link"
          onClick={() => {
            setSuccess(false)
            setStep(0)
            setData(emptyBooking)
          }}
        >
          Start a New Request
          <Icon />
        </button>
      </section>
    )
  return (
    <section
      className={`booking-page section-pad ${contact ? "contact-page" : ""}`}
    >
      <div className="booking-header">
        <Eyebrow>
          {contact ? "LET’S BEGIN A CONVERSATION" : "A MORE ALIGNED TOMORROW"}
        </Eyebrow>
        <h1>
          Let's understand
          <br />
          <em>your space.</em>
        </h1>
        <p>
          {contact
            ? "Share what is on your mind. A thoughtful conversation is the first step."
            : "Choose the type of consultation you need and share a few details with Vasthushlokaa."}
        </p>
      </div>
      <div className="booking-layout">
        <aside className="booking-sidebar">
          {contact ? (
            <>
              <h2>A personal connection.</h2>
              <p>
                For property questions, personal guidance, or simply to
                understand the right consultation for you.
              </p>
              <Link to="/book-consultation" className="text-link">
                Book a Consultation
                <Icon />
              </Link>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                <Icon name="instagram" />
                Instagram
              </a>
              <small>
                Verified phone, email, location, and Instagram profile to be
                added.
              </small>
            </>
          ) : (
            <>
              <div className="booking-step-list">
                {steps.map((name, i) => (
                  <button
                    key={name}
                    disabled={i > step}
                    onClick={() => setStep(i)}
                    className={`${i === step ? "current" : ""} ${
                      i < step ? "completed" : ""
                    }`}
                  >
                    <span>
                      {i < step ? <Icon name="check" /> : `0${i + 1}`}
                    </span>
                    {name}
                  </button>
                ))}
              </div>
              <div className="booking-note">
                <Compass />
                <p>
                  A considered beginning.
                  <br />
                  At your own pace.
                </p>
              </div>
            </>
          )}
        </aside>
        <form className="consultation-form" onSubmit={submit}>
          <div className="form-step-heading">
            <span>{contact ? "YOUR DETAILS" : `STEP 0${step + 1} OF 06`}</span>
            <h2>{contact ? "Request a consultation." : steps[step]}</h2>
          </div>
          {(contact || step === 0) &&
            (contact ? (
              <SelectField
                label="Consultation Type"
                name="type"
                value={data.type}
                update={update}
                options={consultationOptions}
                required
              />
            ) : (
              <div className="consultation-options">
                {consultationOptions.map((option, i) => (
                  <label
                    key={option}
                    className={`consultation-option ${
                      data.type === option ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="consultation"
                      value={option}
                      checked={data.type === option}
                      onChange={() => update("type", option)}
                    />
                    <span className="option-index">0{i + 1}</span>
                    <span>{option}</span>
                    <span className="radio-indicator">
                      {data.type === option && <Icon name="check" />}
                    </span>
                  </label>
                ))}
              </div>
            ))}
          {(contact || step === 1) && (
            <div className="form-grid">
              <Field
                label="Name"
                name="name"
                value={data.name}
                update={update}
                required
              />
              <Field
                label="Phone"
                name="phone"
                value={data.phone}
                update={update}
                type="tel"
                required
              />
              <Field
                label="Email"
                name="email"
                value={data.email}
                update={update}
                type="email"
                required
              />
              <Field
                label="Location"
                name="location"
                value={data.location}
                update={update}
                required
              />
            </div>
          )}
          {!contact && step === 2 && (
            <>
              <div className="form-grid">
                {!isNumerical && (
                  <>
                    <SelectField
                      label="Property Type"
                      name="propertyType"
                      value={data.propertyType}
                      update={update}
                      options={[
                        "Apartment",
                        "Villa / House",
                        "Office",
                        "Retail",
                        "Factory",
                        "Plot",
                        "Other",
                      ]}
                      required
                    />
                    <Field
                      label="Property Location"
                      name="propertyLocation"
                      value={data.propertyLocation}
                      update={update}
                      required
                    />
                    <SelectField
                      label="New or Existing Property"
                      name="propertyStatus"
                      value={data.propertyStatus}
                      update={update}
                      options={[
                        "New Property",
                        "Existing Property",
                        "Considering a Purchase",
                      ]}
                      required
                    />
                  </>
                )}
                <SelectField
                  label="Preferred Consultation Mode"
                  name="mode"
                  value={data.mode}
                  update={update}
                  options={[
                    "Online",
                    "Phone",
                    "In Person — subject to availability",
                  ]}
                  required
                />
              </div>
              {isNumerical && (
                <p className="field-help">
                  Detailed birth information can be shared privately after your
                  appointment is confirmed.
                </p>
              )}
            </>
          )}
          {(contact || step === 2) && (
            <label className="form-field notes-field">
              <span>{contact ? "Message" : "Additional Notes"}</span>
              <textarea
                rows={4}
                value={data.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Tell us a little about your questions or your space."
              />
            </label>
          )}
          {!contact && step === 3 && (
            <>
              <p className="field-help">
                Choose a preferred date. Availability will be confirmed
                personally.
              </p>
              <Field
                label="Preferred Date"
                name="date"
                value={data.date}
                update={update}
                type="date"
                required
              />
            </>
          )}
          {!contact && step === 4 && (
            <>
              <p className="field-help">
                Preferred times are shown in UAE time (UTC+4). This is a
                request, not a confirmed time slot.
              </p>
              <div className="time-options">
                {[
                  "09:00 AM",
                  "10:30 AM",
                  "12:00 PM",
                  "02:00 PM",
                  "03:30 PM",
                  "05:00 PM",
                ].map((time) => (
                  <label
                    className={data.time === time ? "selected" : ""}
                    key={time}
                  >
                    <input
                      type="radio"
                      name="time"
                      value={time}
                      checked={data.time === time}
                      onChange={() => update("time", time)}
                    />
                    {time}
                  </label>
                ))}
              </div>
            </>
          )}
          {!contact && step === 5 && (
            <div className="booking-review">
              {(Object.keys(reviewLabels) as Array<keyof BookingData>)
                .filter((k) => data[k])
                .map((key) => (
                  <div key={key}>
                    <span>{reviewLabels[key]}</span>
                    <strong>{data[key]}</strong>
                  </div>
                ))}
              <p>
                Your preferred appointment will be confirmed by the team. Please
                review your details before continuing.
              </p>
            </div>
          )}
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <div className="form-actions">
            {!contact && step > 0 && (
              <button
                type="button"
                className="text-link previous"
                onClick={() => setStep((s) => s - 1)}
              >
                <Icon />
                Back
              </button>
            )}
            <button className="button" type="submit">
              {contact
                ? "Request Consultation"
                : step === 5
                  ? "Book Consultation"
                  : "Continue"}
              <Icon />
            </button>
          </div>
          <p className="form-privacy">
            Your details remain in this browser during the preview. Online
            submission is not connected. Please do not enter sensitive
            information.
          </p>
        </form>
      </div>
    </section>
  )
}
function NotFound() {
  return (
    <section className="not-found section-pad">
      <Eyebrow>A DIFFERENT DIRECTION</Eyebrow>
      <h1>
        This path
        <br />
        <em>is still unfolding.</em>
      </h1>
      <p>The page you are looking for could not be found.</p>
      <CTA to="/">Return Home</CTA>
    </section>
  )
}
function usePageMetadata(path: string) {
  useEffect(() => {
    const service = services.find((s) => path === `/${s.slug}`)
    const article = path.startsWith("/blog/")
      ? articles.find((a) => path === `/blog/${a.slug}`)
      : null
    const title = service
      ? `${service.name} Consultation | Vasthushlokaa`
      : article
        ? `${article.title} | Vasthushlokaa Insights`
        : path === "/vasthushlokaa" || path === "/sunandha"
          ? "Meet Vasthushlokaa | Vastu & Numerology Consultant"
          : path === "/blog"
            ? "Knowledge & Insights | Vasthushlokaa"
            : path === "/contact"
              ? "Contact Vasthushlokaa | Start a Conversation"
              : path === "/book-consultation"
                ? "Book a Consultation | Vasthushlokaa"
                : "Vasthushlokaa | Vastu, Astro Vastu & Numerology"
    const description =
      service?.description ||
      article?.excerpt ||
      "Thoughtful Vastu, Astro Vastu and Numerology guidance. Explore a more harmonious relationship with your space, your choices, and your personal journey with Vasthushlokaa."
    document.title = title
    const meta = (name: string, content: string, property = false) => {
      let tag = document.querySelector(
        `meta[${property ? "property" : "name"}="${name}"]`,
      )
      if (!tag) {
        tag = document.createElement("meta")
        tag.setAttribute(property ? "property" : "name", name)
        document.head.appendChild(tag)
      }
      tag.setAttribute("content", content)
    }
    meta("description", description)
    meta("og:title", title, true)
    meta("og:description", description, true)
    meta("og:type", article ? "article" : "website", true)
    meta("og:url", `${window.location.origin}${path}`, true)
    meta(
      "og:image",
      `${window.location.origin}${photo(service?.image || article?.image || images.hero)}`,
      true,
    )
    meta("twitter:card", "summary_large_image")
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", `${window.location.origin}${path}`)
    let schema = document.getElementById("page-schema")
    if (!schema) {
      schema = document.createElement("script")
      schema.id = "page-schema"
      schema.setAttribute("type", "application/ld+json")
      document.head.appendChild(schema)
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": article
        ? "Article"
        : service
          ? "Service"
          : "ProfessionalService",
      name: title,
      description,
      url: `${window.location.origin}${path}`,
      ...(service
        ? {
            serviceType: service.name,
            provider: { "@type": "Organization", name: "Vasthushlokaa" },
            ...(service.slug === "geo-vastu-uae"
              ? { areaServed: "United Arab Emirates" }
              : {}),
          }
        : {}),
      ...(article
        ? {
            headline: article.title,
            author: { "@type": "Organization", name: "Vasthushlokaa Editorial" },
            image: `${window.location.origin}${photo(article.image)}`,
            datePublished: "2026-06-01",
            dateModified: "2026-06-01",
          }
        : {}),
    })
  }, [path])
}
export default function App() {
  const [path, setPath] = useState(
    window.location.pathname.replace(/\/$/, "") || "/",
  )
  usePageMetadata(path)
  useEffect(() => {
    const navigate = () => {
      setPath(window.location.pathname.replace(/\/$/, "") || "/")
      window.scrollTo({ top: 0, behavior: "instant" })
    }
    const intercept = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a")
      if (
        !link ||
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        link.target === "_blank" ||
        link.hasAttribute("download")
      )
        return
      const url = new URL(link.href)
      if (
        url.origin !== window.location.origin ||
        (url.pathname === window.location.pathname && url.hash)
      )
        return
      e.preventDefault()
      window.history.pushState({}, "", url.pathname + url.hash)
      navigate()
    }
    document.addEventListener("click", intercept)
    window.addEventListener("popstate", navigate)
    return () => {
      document.removeEventListener("click", intercept)
      window.removeEventListener("popstate", navigate)
    }
  }, [])
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [path])
  const service = services.find((s) => path === `/${s.slug}`)
  let page: ReactNode = <NotFound />
  if (path === "/") page = <Home />
  else if (service) page = <ServicePage service={service} />
  else if (path === "/vasthushlokaa" || path === "/sunandha") page = <Profile />
  else if (path === "/blog")
    page = (
      <>
        <Insights full />
        <FinalCTA />
      </>
    )
  else if (path.startsWith("/blog/")) page = <Article slug={path.slice(6)} />
  else if (path === "/contact") page = <Booking contact />
  else if (path === "/book-consultation") page = <Booking />
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header path={path} />
      <main id="main" key={path}>
        {page}
      </main>
      <Footer />
    </div>
  )
}
