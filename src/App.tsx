import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Button, InputField, Modal, TextareaField, ThemeProvider } from "@figma/astraui";
import { ArrowDown, ArrowRight, Instagram, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { Bodies, Body, Composite, Engine } from "matter-js";
import heroLeftImage from "@/imports/IMG_8884.jpeg";
import heroRightImage from "@/imports/IMG_1958.jpeg";
import aboutImage from "@/imports/IMG_1014.JPG";
import storyImageOne from "@/imports/IMG_2688.jpg";
import storyImageTwo from "@/imports/IMG_2687.jpg";
import datathonImage from "@/imports/datathon-2026.jpg";
import ftuLogo from "@/imports/ftu-logo.jpg";
import kellaImage from "@/imports/kella-in-life.png";
import diaryImage01 from "@/imports/film-diary-01.png";
import diaryImage02 from "@/imports/film-diary-02.png";
import diaryImage03 from "@/imports/film-diary-03.png";
import diaryImage04 from "@/imports/film-diary-04.png";
import diaryImage05 from "@/imports/film-diary-05.png";
import diaryImage06 from "@/imports/film-diary-06.png";
import diaryImage07 from "@/imports/film-diary-07.png";
import diaryImage08 from "@/imports/film-diary-08.png";
import diaryImage09 from "@/imports/film-diary-09.png";
import diaryImage10 from "@/imports/film-diary-10.jpg";
import diaryImage11 from "@/imports/film-diary-11.jpg";
import diaryImage12 from "@/imports/film-diary-12.jpg";
import diaryImage13 from "@/imports/film-diary-13.jpg";
import diaryImage14 from "@/imports/film-diary-14.jpg";
import diaryImage15 from "@/imports/film-diary-15.jpg";
import diaryImage16 from "@/imports/film-diary-16.jpg";
import diaryImage17 from "@/imports/film-diary-17.jpg";
import diaryImage18 from "@/imports/film-diary-18.jpg";
import diaryImage19 from "@/imports/film-diary-19.jpg";

const memories = [
  { id: 1, src: diaryImage01, note: "The cold day felt warmer with you in it.", place: "schoolyard / 01" },
  { id: 2, src: diaryImage02, note: "Some versions of me only exist between frames.", place: "double exposure / 02" },
  { id: 3, src: diaryImage03, note: "The photographer finally made it into the photograph.", place: "mirror proof / 03" },
  { id: 4, src: diaryImage04, note: "Blue doors and a borrowed afternoon.", place: "blue hour / 04" },
  { id: 5, src: diaryImage05, note: "The garden made a little room for me.", place: "in bloom / 05" },
  { id: 6, src: diaryImage06, note: "A face, a frame, and all the noise between.", place: "silver grain / 06" },
  { id: 7, src: diaryImage07, note: "Soft focus. Sharp memory.", place: "contact sheet / 07" },
  { id: 8, src: diaryImage08, note: "Proof I was on both sides of the camera.", place: "self portrait / 08" },
  { id: 9, src: diaryImage09, note: "The table kept the whole night for us.", place: "after dinner / 09" },
  { id: 10, src: diaryImage10, note: "A crowd, one color, a hundred small stories.", place: "school colors / 10" },
  { id: 11, src: diaryImage11, note: "The camera came with us into every room.", place: "girls on film / 11" },
  { id: 12, src: diaryImage12, note: "Night made the flash tell the truth.", place: "after dark / 12" },
  { id: 13, src: diaryImage13, note: "A very good reason to stop walking.", place: "street friend / 13" },
  { id: 14, src: diaryImage14, note: "A beginning looks ordinary while you’re living it.", place: "first days / 14" },
  { id: 15, src: diaryImage15, note: "We dressed for the part and became a team.", place: "field notes / 15" },
  { id: 16, src: diaryImage16, note: "Some roads are easier with company.", place: "green miles / 16" },
  { id: 17, src: diaryImage17, note: "The photographer, caught in the act.", place: "behind the lens / 17" },
  { id: 18, src: diaryImage18, note: "A horizon with nowhere else to be.", place: "sea air / 18" },
  { id: 19, src: diaryImage19, note: "The city keeps cooking after dark.", place: "night market / 19" },
  { id: 20, image: 7, note: "The roll ends. The feeling doesn’t.", place: "end of roll / 20" },
  { id: 21, image: 1, note: "A little light to take home.", place: "light leak / 21" },
  { id: 22, image: 5, note: "The quiet moments stay, too.", place: "slow afternoon / 22" },
  { id: 23, image: 3, note: "One more song before we go.", place: "after hours / 23" },
  { id: 24, image: 4, note: "Familiar faces, a brand-new memory.", place: "my people / 24" },
  { id: 25, image: 6, note: "Another candle. Another little wish.", place: "birthday roll / 25" },
  { id: 26, image: 2, note: "Not sharp, but still so clear to me.", place: "soft focus / 26" },
  { id: 27, image: 7, note: "Some days bloom in retrospect.", place: "flowers / 27" },
  { id: 28, image: 1, note: "Keeping a pocketful of sunshine.", place: "warm roll / 28" },
  { id: 29, image: 3, note: "The night was better with you in it.", place: "night roll / 29" },
  { id: 30, image: 5, note: "A pause worth pressing the shutter for.", place: "ordinary magic / 30" },
  { id: 31, image: 4, note: "This is what belonging looks like.", place: "in between / 31" },
  { id: 32, image: 2, note: "Life moved. I kept a little of it.", place: "motion blur / 32" },
  { id: 33, image: 6, note: "The sweetest part was being together.", place: "little rituals / 33" },
  { id: 34, image: 7, note: "Soft things deserve a place here.", place: "soft edges / 34" },
  { id: 35, image: 1, note: "Almost the last frame. Still chasing light.", place: "golden hour / 35" },
  { id: 36, image: 5, note: "Until the next roll, keep this feeling.", place: "end of roll / 36" },
];

function memorySource(memory: (typeof memories)[number]) {
  return "src" in memory ? memory.src : `/assets/film-${memory.image}.png`;
}

const workExperience = [
  {
    period: "2025 — NOW",
    role: "IELTS Mentor",
    place: "Inception · Writing Consultancy Platform",
    copy: "I teach one-to-one and group classes across all four IELTS skills, focusing on Writing and Listening. More than 20 learners have reached overall 6.5+, with top scores of 8.0–8.5.",
    tag: "education / confidence",
  },
  {
    period: "SIDE JOB · NOW",
    role: "Independent Film Seller",
    place: "A small analogue-photo side project",
    copy: "I source and sell film rolls for people who want to try analogue photography, pairing each order with practical guidance and the kind of care I would want for my own first roll.",
    tag: "film / tiny business",
  },
];

const communityExperience = [
  {
    period: "2024 — NOW",
    role: "Deputy Secretary",
    place: "Class Youth Union Branch · Foreign Trade University",
    copy: "I support class Youth Union activities and help keep communication, coordination, and student participation moving across the cohort.",
    tag: "student leadership / community",
  },
  {
    period: "2025 — 2026",
    role: "MarCom Member",
    place: "Social Business Creation · Vietnam Hub",
    copy: "I designed visual and multimedia stories for a social entrepreneurship community: 1.2M+ views, 2,200 new likes and followers, 22,500 interactions, and a 42% engagement lift.",
    tag: "visual storytelling / impact",
  },
  {
    period: "2024 — NOW",
    role: "Co-founder",
    place: "IELTS Slayer",
    copy: "A personal education project built with my closest friends. I develop learner-centered lessons and individual study paths; 10+ learners have achieved Writing 6.5 or higher.",
    tag: "building / teaching",
  },
  {
    period: "2023 — 2024",
    role: "Vice President",
    place: "Minh Khai Badminton Club",
    copy: "I managed people and operations, coordinated cross-team events, and organized ten hours of weekly training alongside the small rituals that turn a club into a community.",
    tag: "leadership / community",
  },
  {
    period: "2021 — 2023",
    role: "Academic & Teaching Team",
    place: "The Synesthetes",
    copy: "I developed Cambridge-aligned curricula and taught primary and lower-secondary students in rural and underserved areas of Northern Vietnam.",
    tag: "access / education",
  },
  {
    period: "2021 — 2022",
    role: "Human Resources Member",
    place: "Guide.",
    copy: "I managed records for 30+ members, welcomed 10–20 new recruits each term, ran orientation programs, and gave feedback that helped a young team grow together.",
    tag: "people / operations",
  },
  {
    period: "2022",
    role: "Finance & External Relations",
    place: "Gen Project",
    copy: "For an LGBTQ+ youth project, I researched leads, pitched sponsors, negotiated benefits, secured 5,000,000 VND, and stayed close to partners through delivery.",
    tag: "advocacy / partnerships",
  },
];

const journey = [...workExperience, ...communityExperience];

const gravityLines = ["LEAVE A LITTLE", "SOMETHING IN MY STORY."];
const gravityMessage = gravityLines.join(" ");

const honors = [
  {
    year: "2024",
    result: "FIRST PRIZE",
    title: "Kella In Life",
    detail: "City-level competition",
    image: kellaImage,
  },
  {
    year: "2026",
    result: "TOP 10%",
    title: "DATATHON",
    detail: "Among 500+ teams · VinTelligence Club, VinUniversity",
    image: datathonImage,
  },
  {
    year: "2024 — 2025",
    result: "MERIT",
    title: "Academic Scholarship",
    detail: "Recipient for consecutive semesters",
    image: ftuLogo,
  },
];

const workNotes = [
  {
    number: "01",
    kind: "LEARNING DESIGN",
    title: "Making progress feel possible.",
    context: "At Inception and IELTS Slayer, learners arrived with different gaps, rhythms, and definitions of confidence.",
    approach: "I built individual study paths, translated feedback into small next steps, and designed lessons around the learner rather than the template.",
    evidence: "20+ learners reached 7.0+ overall · top scores of 8.0–8.5",
    note: "Teach the person, not only the test.",
  },
  {
    number: "02",
    kind: "STORYTELLING FOR IMPACT",
    title: "Turning a community into a story people could feel.",
    context: "Social Business Creation needed its social-enterprise work to travel beyond the people already in the room.",
    approach: "I shaped visual and multimedia stories for the Vietnam Hub, connecting useful information with a warmer, more human editorial voice.",
    evidence: "1.2M+ views · 22,500 interactions · 42% engagement lift",
    note: "Make the meaning visible.",
  },
  {
    number: "03",
    kind: "PEOPLE & OPERATIONS",
    title: "Leading through the work nobody applauds.",
    context: "A student club becomes a community through both visible events and the quiet systems that hold people together.",
    approach: "As Vice President of Minh Khai Badminton Club, I coordinated people, cross-team events, and ten hours of weekly training while protecting the small rituals that create belonging.",
    evidence: "10 hours of training each week · one team moving together",
    note: "Leadership is remembering who needs room.",
  },
];

const toolkit = [
  { index: "A", title: "Learning design", items: ["Curriculum building", "Individual study paths", "Feedback systems", "Facilitation"] },
  { index: "B", title: "Editorial storytelling", items: ["Content direction", "Visual narratives", "Multimedia stories", "Audience empathy"] },
  { index: "C", title: "Trade operations", items: ["Customs declaration fundamentals", "Import–export documentation", "Commercial correspondence", "International commercial contracts"] },
  { index: "D", title: "Trade research", items: ["Trade policy analysis", "Rules of origin & tariffs", "SPS/TBT screening", "Market access research"] },
  { index: "E", title: "Community operations", items: ["Team coordination", "Event delivery", "Onboarding", "People care"] },
  { index: "F", title: "Partnerships", items: ["Lead research", "Sponsor pitching", "Negotiation", "Partner follow-through"] },
];

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

function GravityText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const staticLetterRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [hasDropped, setHasDropped] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const engine = Engine.create();
    engine.gravity.y = 0;
    const letters = Array.from(gravityMessage);
    const letterBodies = letters.flatMap((letter, index) => {
      const element = letterRefs.current[index];
      const staticElement = staticLetterRefs.current[index];
      if (!element || !staticElement || letter === " ") return [];

      const width = element.offsetWidth;
      const height = element.offsetHeight;
      const bounds = container.getBoundingClientRect();
      const staticBounds = staticElement.getBoundingClientRect();
      const x = staticBounds.left - bounds.left + staticBounds.width / 2;
      const y = staticBounds.top - bounds.top + staticBounds.height / 2;
      const body = Bodies.rectangle(x, y, width * 0.82, height * 0.76, {
        chamfer: { radius: Math.min(width, height) * 0.12 },
        friction: 0.72,
        frictionAir: 0.018,
        isStatic: true,
        restitution: 0.42,
      });

      return [{ body, element, staticElement, width, height, index }];
    });

    const getWalls = () => {
      const { width, height } = container.getBoundingClientRect();
      return [
        Bodies.rectangle(width / 2, height + 28, width + 120, 56, {
          isStatic: true,
        }),
        Bodies.rectangle(-28, height / 2, 56, height * 2, {
          isStatic: true,
        }),
        Bodies.rectangle(width + 28, height / 2, 56, height * 2, {
          isStatic: true,
        }),
      ];
    };

    let walls = getWalls();
    Composite.add(engine.world, [
      ...letterBodies.map(({ body }) => body),
      ...walls,
    ]);

    let previousTime = performance.now();
    let animationFrame = 0;
    const update = (time: number) => {
      Engine.update(engine, Math.min(time - previousTime, 1000 / 60));
      previousTime = time;

      letterBodies.forEach(({ body, element, width, height }) => {
        element.style.transform = `translate3d(${body.position.x - width / 2}px, ${body.position.y - height / 2}px, 0) rotate(${body.angle}rad)`;
      });
      animationFrame = window.requestAnimationFrame(update);
    };
    animationFrame = window.requestAnimationFrame(update);

    let dropped = false;
    let dropTimer: number | undefined;
    let contactTimer: number | undefined;
    const beginDrop = () => {
      if (dropTimer || dropped) return;
      container.classList.add("is-counting-down");
      dropTimer = window.setTimeout(() => {
        dropped = true;
        engine.gravity.y = 1.55;
        container.classList.add("is-physics-ready", "has-dropped");
        setHasDropped(true);
        contactTimer = window.setTimeout(() => setShowContact(true), 500);
        letterBodies.forEach(({ body, index }) => {
          Body.setStatic(body, false);
          Body.setVelocity(body, {
            x: ((index % 5) - 2) * 0.32,
            y: 1.1 + (index % 3) * 0.18,
          });
          Body.setAngularVelocity(body, ((index % 7) - 3) * 0.02);
          Body.applyForce(body, body.position, {
            x: ((index % 5) - 2) * body.mass * 0.00015,
            y: body.mass * 0.004,
          });
        });
      }, 10000);
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          beginDrop();
          intersectionObserver.disconnect();
        }
      },
      { threshold: 0.01 },
    );
    intersectionObserver.observe(container);

    const repelLetters = (event: PointerEvent) => {
      if (!dropped) return;
      const bounds = container.getBoundingClientRect();
      const mouseX = event.clientX - bounds.left;
      const mouseY = event.clientY - bounds.top;
      const radius = Math.min(150, bounds.width * 0.22);

      letterBodies.forEach(({ body }) => {
        const dx = body.position.x - mouseX;
        const dy = body.position.y - mouseY;
        const distance = Math.max(Math.hypot(dx, dy), 12);
        if (distance >= radius) return;

        const falloff = 1 - distance / radius;
        const strength = body.mass * 0.0032 * falloff;
        Body.applyForce(body, body.position, {
          x: (dx / distance) * strength,
          y: (dy / distance - 0.38) * strength,
        });
        Body.setAngularVelocity(
          body,
          body.angularVelocity + (dx >= 0 ? 1 : -1) * 0.035 * falloff,
        );
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      walls.forEach((wall) => Composite.remove(engine.world, wall));
      walls = getWalls();
      Composite.add(engine.world, walls);
      if (!dropped) {
        const bounds = container.getBoundingClientRect();
        letterBodies.forEach(({ body, staticElement }) => {
          const staticBounds = staticElement.getBoundingClientRect();
          Body.setPosition(body, {
            x: staticBounds.left - bounds.left + staticBounds.width / 2,
            y: staticBounds.top - bounds.top + staticBounds.height / 2,
          });
        });
      }
    });
    resizeObserver.observe(container);
    container.addEventListener("pointermove", repelLetters);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      if (dropTimer) window.clearTimeout(dropTimer);
      if (contactTimer) window.clearTimeout(contactTimer);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener("pointermove", repelLetters);
      container.classList.remove(
        "is-counting-down",
        "is-physics-ready",
        "has-dropped",
      );
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  const sendMessage = () => {
    const subject = encodeURIComponent(
      `Portfolio hello from ${senderName || "a visitor"}`,
    );
    const body = encodeURIComponent(
      `${senderMessage}\n\nFrom: ${senderName}\nEmail: ${senderEmail}`,
    );
    window.location.href = `mailto:nhildh.work@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`gravity-experience${hasDropped ? " has-dropped" : ""}`}>
      <div
        className="gravity-text"
        ref={containerRef}
        role="img"
        aria-label={gravityMessage}
      >
        <div className="gravity-static-message" aria-hidden="true">
          {gravityLines.map((line, lineIndex) => {
            const indexOffset =
              lineIndex === 0 ? 0 : gravityLines[0].length + 1;
            return (
              <div className="gravity-static-line" key={line}>
                {Array.from(line).map((letter, characterIndex) => {
                  const index = indexOffset + characterIndex;
                  return (
                    <span
                      key={`${letter}-${index}`}
                      ref={(element) => {
                        staticLetterRefs.current[index] = element;
                      }}
                    >
                      {letter === " " ? "\u00a0" : letter}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
        {Array.from(gravityMessage).map((letter, index) => (
          <span
            aria-hidden="true"
            className={`gravity-letter${letter === " " ? " gravity-letter-space" : ""}`}
            key={`${letter}-${index}`}
            ref={(element) => {
              letterRefs.current[index] = element;
            }}
          >
            {letter === " " ? "\u00a0" : letter}
          </span>
        ))}
        <span className="gravity-hint label" aria-hidden="true">
          MOVE THROUGH THE LETTERS · THEY WILL FIND THEIR WAY BACK
        </span>
      </div>

      {showContact && <div className="contact-reveal">
        <div className="contact-cards">
          <article className="contact-card">
            <Mail size={20} strokeWidth={1.5} />
            <div>
              <span className="label">WORK EMAIL</span>
              <strong>nhildh.work@gmail.com</strong>
            </div>
            <Button
              variant="subtle"
              size="small"
              onClick={() => void navigator.clipboard.writeText("nhildh.work@gmail.com")}
            >
              Copy
            </Button>
          </article>
          <article className="contact-card">
            <Phone size={20} strokeWidth={1.5} />
            <div>
              <span className="label">PHONE</span>
              <strong>+84 986187883</strong>
            </div>
            <Button
              variant="subtle"
              size="small"
              onClick={() => void navigator.clipboard.writeText("+84 986187883")}
            >
              Copy
            </Button>
          </article>
          <article className="contact-card">
            <Instagram size={20} strokeWidth={1.5} />
            <div>
              <span className="label">FILM DIARY</span>
              <strong>@photosof.kem_</strong>
            </div>
            <Button
              variant="subtle"
              size="small"
              iconEnd={<ArrowRight size={14} />}
              onClick={() =>
                window.open("https://www.instagram.com/photosof.kem_/", "_blank")
              }
            >
              Visit
            </Button>
          </article>
          <article className="contact-card">
            <Linkedin size={20} strokeWidth={1.5} />
            <div>
              <span className="label">LINKEDIN</span>
              <strong>Nicole Le</strong>
            </div>
            <Button
              variant="subtle"
              size="small"
              iconEnd={<ArrowRight size={14} />}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nicolele912/?isSelfProfile=true&trk=public-profile-join-page",
                  "_blank",
                )
              }
            >
              Visit
            </Button>
          </article>
        </div>

        <div className="contact-form">
          <div className="contact-form-heading">
            <span className="label">A QUICK NOTE, IF YOU FEEL LIKE IT</span>
            <div>Leave something in my inbox.</div>
          </div>
          <div className="contact-form-row">
            <InputField
              aria-label="Your name"
              placeholder="Your name or company"
              value={senderName}
              onChange={setSenderName}
            />
            <InputField
              aria-label="Your email"
              placeholder="Your email"
              type="email"
              value={senderEmail}
              onChange={setSenderEmail}
            />
          </div>
          <TextareaField
            aria-label="Your message"
            placeholder="A project, an opportunity, or simply a hello..."
            rows={5}
            value={senderMessage}
            onChange={setSenderMessage}
          />
          <Button
            variant="neutral"
            iconEnd={<ArrowRight size={16} />}
            onClick={sendMessage}
          >
            Send the note
          </Button>
        </div>
        <div className="contact-panel-footer">
          <Button variant="subtle" onClick={() => goTo("top")}>
            Back to the beginning ↑
          </Button>
          <div className="label">
            <span>© {new Date().getFullYear()} LÊ ĐOÀN HUYỀN NHI</span>
            <span>PERSONAL ARCHIVE / NEVER A FINISHED PRODUCT</span>
          </div>
        </div>
      </div>}
    </div>
  );
}

function Portfolio() {
  const [photo, setPhoto] = useState<(typeof memories)[number] | null>(null);
  const [introStage, setIntroStage] = useState<"question" | "film" | "done">("question");
  const [noPosition, setNoPosition] = useState(0);
  const [noAttempts, setNoAttempts] = useState(0);
  const [showAllMemories, setShowAllMemories] = useState(false);
  const filmTrailRef = useRef<HTMLDivElement>(null);
  const lastTrailPoint = useRef<{ x: number; y: number } | null>(null);
  const nextTrailImage = useRef(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const sprinkleLayerRef = useRef<HTMLDivElement>(null);
  const lastSprinklePoint = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (introStage === "done") return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const filmTimer =
      introStage === "film"
        ? window.setTimeout(
            () => setIntroStage("done"),
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 600 : 5200,
          )
        : undefined;
    return () => {
      if (filmTimer) window.clearTimeout(filmTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [introStage]);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const moveCursor = (event: PointerEvent) => {
      const cursor = cursorRef.current;
      if (!cursor) return;
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.classList.add("is-visible");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const previous = lastSprinklePoint.current;
      const distance = previous
        ? Math.hypot(event.clientX - previous.x, event.clientY - previous.y)
        : Number.POSITIVE_INFINITY;
      if (distance < 24) return;
      lastSprinklePoint.current = { x: event.clientX, y: event.clientY };

      const layer = sprinkleLayerRef.current;
      if (!layer) return;
      const sprinkle = document.createElement("span");
      const symbols = ["✦", "✧", "•"];
      const variant = Math.floor(Math.random() * symbols.length);
      sprinkle.className = `cursor-sprinkle sprinkle-${variant + 1}`;
      sprinkle.textContent = symbols[variant];
      sprinkle.style.setProperty("--sprinkle-x", `${event.clientX}px`);
      sprinkle.style.setProperty("--sprinkle-y", `${event.clientY}px`);
      sprinkle.style.setProperty("--sprinkle-drift-x", `${Math.round(Math.random() * 54 - 27)}px`);
      sprinkle.style.setProperty("--sprinkle-drift-y", `${Math.round(Math.random() * -42 - 12)}px`);
      sprinkle.style.setProperty("--sprinkle-rotation", `${Math.round(Math.random() * 120 - 60)}deg`);
      layer.append(sprinkle);
      while (layer.childElementCount > 32) layer.firstElementChild?.remove();
      window.setTimeout(() => sprinkle.remove(), 780);
    };
    const pressCursor = () => cursorRef.current?.classList.add("is-pressed");
    const releaseCursor = () => cursorRef.current?.classList.remove("is-pressed");
    const hideCursor = (event: MouseEvent) => {
      if (!event.relatedTarget) cursorRef.current?.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", moveCursor);
    window.addEventListener("pointerdown", pressCursor);
    window.addEventListener("pointerup", releaseCursor);
    window.addEventListener("mouseout", hideCursor);
    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerdown", pressCursor);
      window.removeEventListener("pointerup", releaseCursor);
      window.removeEventListener("mouseout", hideCursor);
    };
  }, []);

  const dodgeNo = () => {
    setNoPosition((current) => (current + 1 + Math.floor(Math.random() * 6)) % 8);
    setNoAttempts((current) => current + 1);
  };

  const drawFilmTrail = (event: ReactPointerEvent<HTMLElement>) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const previous = lastTrailPoint.current;
    const distance = previous
      ? Math.hypot(event.clientX - previous.x, event.clientY - previous.y)
      : Number.POSITIVE_INFINITY;
    if (distance < 52) return;
    lastTrailPoint.current = { x: event.clientX, y: event.clientY };

    const trail = filmTrailRef.current;
    if (!trail) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const memory = memories[nextTrailImage.current % memories.length];
    nextTrailImage.current += 1;

    const plane = document.createElement("div");
    const image = document.createElement("img");
    const caption = document.createElement("span");
    plane.className = "film-trail-plane";
    plane.setAttribute("aria-hidden", "true");
    plane.style.setProperty("--trail-x", `${event.clientX - bounds.left}px`);
    plane.style.setProperty("--trail-y", `${event.clientY - bounds.top}px`);
    plane.style.setProperty("--trail-rotation", `${(Math.random() * 18 - 9).toFixed(2)}deg`);
    image.src = memorySource(memory);
    image.alt = "";
    caption.textContent = String(memory.id).padStart(2, "0");
    plane.append(image, caption);
    trail.append(plane);

    while (trail.childElementCount > 16) trail.firstElementChild?.remove();
    requestAnimationFrame(() => plane.classList.add("is-visible"));
    window.setTimeout(() => plane.classList.add("is-leaving"), 620);
    window.setTimeout(() => plane.remove(), 1180);
  };

  return (
    <>
      <div className="sprinkle-layer" ref={sprinkleLayerRef} aria-hidden="true" />
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
        <span className="paw-print">
          <i className="paw-pad" />
          <i className="paw-toe paw-toe-one" />
          <i className="paw-toe paw-toe-two" />
          <i className="paw-toe paw-toe-three" />
          <i className="paw-toe paw-toe-four" />
        </span>
      </div>
      {introStage === "question" && (
        <div className="intro-gate" role="dialog" aria-modal="true" aria-labelledby="intro-question">
          <div className="intro-gate-grain" />
          <div className="intro-gate-leopard" />
          <div className="intro-popup">
            <div className="intro-popup-top label">
              <span>PRIVATE ARCHIVE</span>
              <span>QUESTION 01 / 01</span>
            </div>
            <span className="intro-popup-star" aria-hidden="true">✦</span>
            <div className="intro-question" id="intro-question">
              Wanna
              <br />
              know me?
            </div>
            <p className="intro-subtitle handwritten">
              {noAttempts === 0 && "be honest — but choose wisely."}
              {noAttempts === 1 && "not so fast."}
              {noAttempts === 2 && "the universe says try again."}
              {noAttempts >= 3 && "we both know you’re curious."}
            </p>
            <div className="intro-choices">
              <Button
                variant="neutral"
                size="large"
                iconEnd={<ArrowRight size={17} />}
                onClick={() => setIntroStage("film")}
              >
                Yes, let me in
              </Button>
              <div className={`runaway-zone no-position-${noPosition}`}>
                <Button
                  variant="subtle"
                  size="large"
                  aria-label="No — this answer keeps running away"
                  onMouseEnter={dodgeNo}
                  onFocus={dodgeNo}
                  onPointerDown={dodgeNo}
                  onClick={dodgeNo}
                >
                  No
                </Button>
              </div>
            </div>
            <div className="intro-popup-bottom label">
              <span>NHI / NICOLE</span>
              <span>HANOI · 2026</span>
            </div>
          </div>
        </div>
      )}
      {introStage === "film" && (
        <div className="intro-montage" role="dialog" aria-modal="true" aria-label="A short introduction to Nhi">
          <div className="montage-leopard" />
          <div className="montage-grain" />
          <div className="montage-label label">NHI / NICOLE · PERSONAL ARCHIVE</div>
          <figure className="montage-photo montage-photo-one">
            <img src={heroLeftImage} alt="Nhi holding a film camera" />
          </figure>
          <figure className="montage-photo montage-photo-two">
            <img src="/assets/childhood.png" alt="Nhi as a child" />
          </figure>
          <figure className="montage-photo montage-photo-three">
            <img src={heroRightImage} alt="A portrait of Nhi" />
          </figure>
          <div className="montage-line montage-line-one">A LITTLE GIRL</div>
          <div className="montage-line montage-line-two">WITH BIG QUESTIONS.</div>
          <div className="montage-handwritten handwritten">still becoming, always curious</div>
          <div className="montage-progress" aria-hidden="true"><span /></div>
          <div className="montage-skip">
            <Button variant="neutral" size="small" onClick={() => setIntroStage("done")}>
              Skip to portfolio <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      )}
      <main className="portfolio" id="top" inert={introStage !== "done" ? true : undefined}>
        <header className="masthead">
          <div className="masthead-brand">
            <span className="star-mark" aria-hidden="true">
              ✦
            </span>
            NHI / NICOLE
          </div>
          <nav className="masthead-nav" aria-label="Portfolio chapters">
            <Button variant="subtle" size="small" onClick={() => goTo("about")}>
              01 About
            </Button>
            <Button variant="subtle" size="small" onClick={() => goTo("story")}>
              02 Story
            </Button>
            <Button variant="subtle" size="small" onClick={() => goTo("journey")}>
              03 Experience
            </Button>
            <Button variant="subtle" size="small" onClick={() => goTo("proof")}>
              04 Honors
            </Button>
            <Button variant="subtle" size="small" onClick={() => goTo("work-notes")}>
              05 Work Notes
            </Button>
            <Button variant="subtle" size="small" onClick={() => goTo("toolkit")}>
              06 Skills
            </Button>
            <Button variant="subtle" size="small" onClick={() => goTo("film")}>
              07 Film
            </Button>
          </nav>
          <Button
            variant="neutral"
            size="small"
            iconEnd={<Mail size={15} />}
            onClick={() => {
              window.location.href = "mailto:nhildh.work@gmail.com";
            }}
          >
            Say hello
          </Button>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-meta label">PERSONAL ARCHIVE · HANOI · 2026</div>
          <div className="hero-title" id="hero-title">
            PORTFOLIO
          </div>
          <div className="hero-script">of a girl becoming</div>

          <div className="hero-leopard" aria-hidden="true" />
          <span className="hero-spark hero-spark-one" aria-hidden="true">✦</span>
          <span className="hero-spark hero-spark-two" aria-hidden="true">✧</span>
          <div className="hero-foot">
            <span className="hero-foot-copy">FILM · TEACHING · PEOPLE · SMALL BEAUTIFUL THINGS</span>
            <Button
              variant="neutral"
              size="small"
              iconEnd={<ArrowDown size={15} />}
              onClick={() => goTo("about")}
            >
              Open the diary
            </Button>
          </div>
        </section>

        <section className="about paper-section" id="about">
          <div className="section-index label">01 / WHO I AM</div>
          <div className="about-collage">
            <div className="torn-note">
              <span className="tape" aria-hidden="true" />
              <p className="label">A NOTE TO SELF</p>
              <p className="handwritten note-large">
                stay curious.
                <br />
                stay soft.
              </p>
              <p>
                I’m Huyền Nhi — Nicole when it’s easier. A teacher, a community
                builder, a girl with a film camera, and someone with an
                unreasonable amount of faith in people becoming more themselves.
              </p>
            </div>
            <figure className="about-photo">
              <img src={aboutImage} alt="A personal moment from Nhi's film archive" />
            </figure>
            <div className="about-copy">
              <p className="display-copy">
                MANY THREADS,
                <br />
                ONE PERSON.
              </p>
              <p>
                I am an International Business Economics student at Foreign
                Trade University, an IELTS teacher, a community builder, and
                the friend who brings a film camera everywhere. I like plans,
                but I care most about the humans living inside them.
              </p>
              <p>
                I can spend one afternoon shaping a lesson and the next reading
                a new knitting pattern, or waiting for a roll of film to come
                back. The through-line is attention: looking closely, asking
                why, and preserving what might otherwise be missed.
              </p>
              <div className="about-signature">with love, Nhi</div>
            </div>
          </div>
          <div className="identity-board">
            <article className="identity-card identity-card-dark">
              <p className="label">CURRENTLY</p>
              <div className="identity-title">Foreign Trade University</div>
              <p>Bachelor of International Business Economics · Hanoi</p>
              <div className="identity-stat">3.94<span>/ 4.00 GPA</span></div>
            </article>
            <article className="identity-card">
              <p className="label">WORDS I LIVE IN</p>
              <div className="language-list">
                <span>Vietnamese <b>Native</b></span>
                <span>English <b>C1 · IELTS 8.0</b></span>
                <span>French <b>A1</b></span>
                <span>Mandarin <b>HSK 2</b></span>
              </div>
            </article>
            <article className="identity-card identity-card-leopard">
              <p className="label">OFF THE CLOCK</p>
              <div className="identity-title">Film rolls, knitting & long conversations.</div>
              <p className="handwritten">small obsessions make a life</p>
            </article>
            <article className="identity-card">
              <p className="label">MY TOOLBOX</p>
              <div className="tool-cloud">
                <span>Figma</span><span>Illustrator</span><span>Excel</span>
                <span>R</span><span>Stata</span><span>Python</span>
                <span>Google Workspace</span>
              </div>
              <p>Design instinct, structured thinking, and just enough code to keep asking better questions.</p>
            </article>
          </div>
        </section>

        <section className="story paper-section" id="story">
          <div className="story-heading">
            <p className="label">02 / THE STORY BEHIND THE LISTS</p>
            <div className="section-title">
              I DIDN’T GROW
              <br />
              IN A STRAIGHT LINE.
            </div>
            <p className="handwritten">and I’m learning not to ask myself to.</p>
          </div>
          <div className="story-chapter story-chapter-child">
            <figure className="story-childhood-photo">
              <img src="/assets/childhood.png" alt="Nhi as a little girl" />
              <figcaption className="label">THE BEGINNING</figcaption>
            </figure>
            <div className="story-chapter-copy">
              <p className="label">CHAPTER ONE · THE LITTLE GIRL</p>
              <div className="story-title">Before the ambition, there was wonder.</div>
              <p>
                I keep returning to this photograph because she reminds me of
                the person underneath every deadline and achievement. She was
                curious, sensitive, a little stubborn, and always imagining a
                world larger than the one in front of her.
              </p>
              <p>
                Growing up did not mean leaving her behind. It meant learning
                to build a life where her softness could survive alongside my
                ambition.
              </p>
              <span className="handwritten">I’m doing this for both of us.</span>
            </div>
          </div>
          <div className="story-chapter story-chapter-between">
            <div className="story-quote">
              “I want to be taken seriously without becoming someone who takes
              life too seriously.”
            </div>
            <div className="story-chapter-copy">
              <p className="label">CHAPTER TWO · LEARNING TO BECOME</p>
              <div className="story-title">I found myself by trying many lives on.</div>
              <p>
                Teaching showed me that confidence can be built one honest
                conversation at a time. Leadership taught me that the invisible
                work matters: remembering names, noticing silence, and keeping
                promises when nobody is watching.
              </p>
              <p>
                University gave my curiosity structure. Communities gave it a
                purpose. None of these roles explains me alone, but together
                they show the kind of person I am becoming.
              </p>
            </div>
          </div>
          <div className="story-chapter story-chapter-camera">
            <div className="story-film-stack">
              <img src={storyImageOne} alt="Friends captured on film" />
              <img src={storyImageTwo} alt="A birthday memory captured on film" />
            </div>
            <div className="story-chapter-copy">
              <p className="label">CHAPTER THREE · WHAT I KEEP</p>
              <div className="story-title">My camera remembers what my mind might lose.</div>
              <p>
                Film photography asks me to surrender control. I cannot retake
                the exact laugh, correct every blur, or know whether the light
                landed perfectly. I press the shutter anyway.
              </p>
              <p>
                Months later, a frame comes back and an ordinary afternoon has
                become evidence: I was here, I loved these people, and this
                small life was worth noticing.
              </p>
              <span className="handwritten">imperfection is part of the memory.</span>
            </div>
          </div>
          <div className="story-values">
            <span><b>01</b> Curiosity before certainty</span>
            <span><b>02</b> People before performance</span>
            <span><b>03</b> Courage with a soft center</span>
            <span><b>04</b> Keep the ordinary moments</span>
          </div>
        </section>

        <section className="journey" id="journey">
          <div className="journey-heading">
            <div>
              <p className="label">03 / THE JOURNEY SO FAR</p>
              <div className="section-title">
                WORK, PEOPLE
                <br />
                & SHOWING UP.
              </div>
            </div>
            <p>
              Paid work has its own lane. Community work has another. Both
              taught me how to build with care, structure, and real people in mind.
            </p>
          </div>
          <div className="journey-group">
            <div className="journey-group-heading">
              <span className="label">WORK EXPERIENCE</span>
              <span>02 roles · including the side quest</span>
            </div>
            <div className="journey-list">
              {workExperience.map((item, index) => (
                <article className="journey-row" key={`${item.place}-${item.period}`}>
                  <div className="journey-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className="journey-time label">{item.period}</div>
                  <div className="journey-role">
                    <p className="label">{item.tag}</p>
                    <div>{item.role}</div>
                    <span>{item.place}</span>
                  </div>
                  <p className="journey-copy">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="journey-group journey-group-community">
            <div className="journey-group-heading">
              <span className="label">LEADERSHIP & EXTRACURRICULAR</span>
              <span>Communities, projects, and social impact</span>
            </div>
            <div className="journey-list">
            {communityExperience.map((item, index) => (
              <article className="journey-row" key={`${item.place}-${item.period}`}>
                <div className="journey-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="journey-time label">{item.period}</div>
                <div className="journey-role">
                  <p className="label">{item.tag}</p>
                  <div>{item.role}</div>
                  <span>{item.place}</span>
                </div>
                <p className="journey-copy">{item.copy}</p>
              </article>
            ))}
            </div>
          </div>
          <div className="journey-outro">
            <span className="handwritten">not a straight line. still moving forward.</span>
            <Button variant="neutral" size="small" iconEnd={<ArrowDown size={15} />} onClick={() => goTo("proof")}>
              See the wins
            </Button>
          </div>
        </section>

        <section className="proof paper-section" id="proof">
          <div className="proof-heading">
            <div>
              <p className="label">04 / HONORS, COMPETITIONS & ACADEMIC WORK</p>
              <div className="section-title">YES, I FLEX<br />A LITTLE.</div>
            </div>
            <p className="handwritten">earned, learned, kept moving.</p>
          </div>
          <div className="honors-flex">
            {honors.map((honor, index) => (
              <article className={`honor-card honor-card-${index + 1}`} key={honor.title}>
                <div className="honor-top">
                  <span className="label">{honor.year}</span>
                  <span className="honor-index">0{index + 1}</span>
                </div>
                {honor.image && (
                  <div className="honor-media">
                    <img
                      src={honor.image}
                      alt={`${honor.title} achievement`}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="honor-result">{honor.result}</div>
                <div className="honor-title">{honor.title}</div>
                <p>{honor.detail}</p>
              </article>
            ))}
          </div>
          <article className="academic-project">
            <div className="academic-project-side">
              <p className="label">ACADEMIC FIELDWORK · JUN 2026</p>
              <div className="academic-project-kicker">From one spice to a whole map of trade.</div>
              <span className="handwritten">HS 090961 / Vietnam → new markets</span>
            </div>
            <div className="academic-project-body">
              <p className="label">STUDENT RESEARCHER · INTERNATIONAL TRADE POLICY</p>
              <div className="academic-project-title">
                Identifying new export markets for Vietnamese star anise.
              </div>
              <p>
                Working with one research partner, I investigated how Vietnam
                could reduce the concentration risk created by relying on India
                for 68% of star-anise exports.
              </p>
              <div className="academic-project-points">
                <span>ITC TradeMap & Market Access Map</span>
                <span>0% MFN tariffs + CPTPP/EVFTA rules of origin</span>
                <span>35+ SPS/TBT regulatory measures screened</span>
                <span>Competitor and HS 0909 substitute benchmarking</span>
              </div>
            </div>
          </article>
        </section>

        <section className="work-notes paper-section" id="work-notes">
          <div className="work-notes-heading">
            <div>
              <p className="label">05 / SELECTED WORK NOTES</p>
              <div className="section-title">WHAT I DID,<br />WHAT IT CHANGED.</div>
            </div>
            <div className="work-notes-intro">
              <span className="handwritten">less like a résumé. more like field notes.</span>
              <p>Three close-ups on how I teach, tell stories, and lead people—with the thinking and evidence left in.</p>
            </div>
          </div>
          <div className="work-notes-list">
            {workNotes.map((note) => (
              <article className="work-note" key={note.number}>
                <div className="work-note-mark">
                  <span className="work-note-number">{note.number}</span>
                  <span className="label">{note.kind}</span>
                </div>
                <div className="work-note-body">
                  <div className="work-note-title">{note.title}</div>
                  <div className="work-note-columns">
                    <div><p className="label">THE SITUATION</p><p>{note.context}</p></div>
                    <div><p className="label">HOW I SHOWED UP</p><p>{note.approach}</p></div>
                  </div>
                  <div className="work-note-proof">
                    <span className="label">A LITTLE PROOF</span>
                    <strong>{note.evidence}</strong>
                  </div>
                </div>
                <div className="work-note-scribble handwritten">{note.note}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="toolkit" id="toolkit">
          <div className="toolkit-leopard" aria-hidden="true" />
          <div className="toolkit-heading">
            <p className="label">06 / THE WORKING TOOLKIT</p>
            <div className="section-title">THINGS I KNOW<br />HOW TO CARRY.</div>
            <p>Not a wall of software badges—just the practices I return to when a team, learner, or story needs care and structure.</p>
          </div>
          <div className="toolkit-grid">
            {toolkit.map((group) => (
              <article className="toolkit-card" key={group.index}>
                <div className="toolkit-card-top">
                  <span>{group.index}</span>
                  <span className="label">WORKING SET</span>
                </div>
                <div className="toolkit-title">{group.title}</div>
                <div className="toolkit-items">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="toolkit-note handwritten">soft skills are still skills. systems can still feel human.</div>
        </section>

        <section
          className="film"
          id="film"
          onPointerMove={drawFilmTrail}
          onPointerLeave={() => {
            lastTrailPoint.current = null;
          }}
        >
          <div className="film-trail" ref={filmTrailRef} aria-hidden="true" />
          <div className="film-heading">
            <div>
              <p className="label">07 / FILM DIARY · IMPERFECTIONS INCLUDED</p>
              <div className="section-title">
                LIFE, A LITTLE
                <br />
                OUT OF FOCUS.
              </div>
            </div>
            <div className="film-heading-note">
              <Sparkles size={20} strokeWidth={1.5} />
              <p>
                The people, places, and little accidents of light I want to
                remember.
              </p>
              <span className="film-trail-hint handwritten">move around — leave a trail.</span>
              <Button
                variant="subtle"
                size="small"
                iconEnd={<ArrowRight size={15} />}
                onClick={() =>
                  window.open("https://www.instagram.com/photosof.kem_/", "_blank")
                }
              >
                @photosof.kem_
              </Button>
              <Button
                variant="neutral"
                size="small"
                aria-expanded={showAllMemories}
                onClick={() => setShowAllMemories((current) => !current)}
              >
                {showAllMemories ? "Keep it to 12 frames" : "Show all 36 frames"}
              </Button>
            </div>
          </div>
          <div className="film-grid">
            {(showAllMemories ? memories : memories.slice(0, 12)).map((memory, index) => (
              <figure className={`film-frame frame-${index + 1}`} key={memory.id}>
                <div className="film-image">
                  <img
                    src={memorySource(memory)}
                    alt={memory.note}
                    loading="lazy"
                  />
                  <Button
                    variant="neutral"
                    size="small"
                    onClick={() => setPhoto(memory)}
                    aria-label={`Open ${memory.note}`}
                  >
                    View frame
                  </Button>
                </div>
                <figcaption>
                  <span className="label">{memory.place}</span>
                  <span className="handwritten">{memory.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          {showAllMemories && (
            <div className="film-collapse">
              <Button
                variant="neutral"
                iconEnd={<ArrowDown className="collapse-arrow" size={15} />}
                onClick={() => {
                  setShowAllMemories(false);
                  goTo("film");
                }}
              >
                Collapse to 12 frames
              </Button>
            </div>
          )}
        </section>

        <footer className="footer">
          <p className="label">MAYBE OUR ORBITS WERE MEANT TO CROSS.</p>
          <GravityText />
        </footer>
      </main>

      <Modal
        isOpen={photo !== null}
        onClose={() => setPhoto(null)}
        title={photo?.note}
        size="large"
      >
        {photo && (
          <div className="modal-memory">
            <img src={memorySource(photo)} alt={photo.note} />
            <p className="handwritten">a memory, not a perfect picture.</p>
          </div>
        )}
      </Modal>

    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
