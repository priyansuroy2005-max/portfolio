import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

export default function PortfolioWebsite() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Rolex Daytona",
      category: "Product Design",
      image: "/rolex.jpg",
      link: "https://www.artstation.com/artwork/mAJnYv",
    },
    {
      title: "Vintage Study Room",
      category: "Game Environment Art",
      image: "/interior.jpg",
      link: "https://www.artstation.com/artwork/8BYyvw",
    },
    {
      title: "Forgotten Signal",
      category: "Game Props Design",
      image: "/traffic.jpg",
      link: "https://www.artstation.com/artwork/8B0A0O",
    },
    {
      title: "The Curious Bot",
      category: "Character Design",
      image: "/robot.jpg",
      link: "https://www.artstation.com/artwork/Bk0A0A",
    },
    {
      title: "Old Village Shop",
      category: "Game Environment Art",
      image: "/shop.jpg",
      link: "https://www.artstation.com/artwork/oJY1Zq",
    },
    {
      title: "Event Horizon",
      category: "VFX Stuff",
      image: "/blackhole.jpg",
      link: "https://www.artstation.com/artwork/AZxnJN",
    },
  ];

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center overflow-hidden relative text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,211,238,0.2),transparent_40%)]"></div>

        <div className="relative flex flex-col items-center z-10">
          <div className="relative w-52 h-52 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping"></div>
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-cyan-300 animate-spin"></div>
            <div className="absolute inset-10 rounded-full border border-cyan-400 animate-[spin_10s_linear_infinite_reverse]"></div>

            <div className="w-24 h-24 rounded-full bg-cyan-300 shadow-[0_0_60px_rgba(34,211,238,0.9)] flex items-center justify-center animate-pulse">
              <span className="text-black text-2xl font-black">PR</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
            PRIYANSU
            </h1>

          <p className="mt-5 text-cyan-300/70 uppercase tracking-[0.4em] text-sm">
            Loading Portfolio Experience
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative font-sans animate-[revealPage_1.4s_ease]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-center gap-10 uppercase tracking-[0.2em] text-sm">
          {['Home','Projects','Skills','About','Contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                const section = document.getElementById(item.toLowerCase());
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative text-zinc-300 hover:text-cyan-300 hover:scale-110 transition-all duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </nav>

      <section id="home" className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm mb-5">
            3D Artist & Generalist
          </p>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
            PRIYANSU <span className="text-cyan-300">ROY</span>
          </h1>

          <p className="text-zinc-300 text-lg leading-relaxed max-w-xl mb-10">
            I’m Priyansu Roy, a passionate 3D Artist and Multimedia Designer specializing in cinematic product visualization, environment art, and digital storytelling. With a strong eye for lighting, composition, and realism, I create visually immersive experiences that blend creativity with technical precision. My workflow focuses on delivering high-quality renders, futuristic concepts, and professional visual experiences inspired by modern games, films, and digital art.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] transition-all duration-500"
            >
              View Showreel
            </a>

            <button
              onClick={() => {
                const section = document.getElementById('projects');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative overflow-hidden px-8 py-4 rounded-2xl border border-cyan-400/30 hover:bg-cyan-400 hover:text-black hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] transition-all duration-500"
            >
              See Portfolio
            </button>
          </div>
        </div>

        <div className="relative flex justify-end lg:justify-end">
          <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

          <img
            src="/priyansu.jpg"
            alt="Priyansu Roy"
            className="relative w-[320px] md:w-[380px] h-[420px] object-cover rounded-[30px] border border-cyan-400/20 shadow-[0_0_50px_rgba(34,211,238,0.25)] hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500"
          />
        </div>
      </section>

      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-center text-5xl font-bold mb-14">
          Explore My Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-black/60 hover:scale-105 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] transition-all duration-500 cursor-pointer block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-cyan-300 text-xs uppercase tracking-[0.2em] mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>

                <div className="w-10 h-10 rounded-full border border-cyan-300 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-300 group-hover:text-black transition duration-300">
                  ↗
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section
  id="skills"
  className="relative z-10 max-w-7xl mx-auto px-6 py-24"
>
  <h2 className="text-center text-5xl font-bold mb-14">
    My Skills
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="p-8 rounded-3xl border border-cyan-400/20 bg-black/60 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-500">
      <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
        Graphic Design
      </h3>
      <p className="text-zinc-400">
        Creative visual design, branding, layouts, and digital artwork.
      </p>
    </div>

    <div className="p-8 rounded-3xl border border-cyan-400/20 bg-black/60 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-500">
      <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
        3D Modeling
      </h3>
      <p className="text-zinc-400">
        High-quality hard surface and environment modeling workflows.
      </p>
    </div>

    <div className="p-8 rounded-3xl border border-cyan-400/20 bg-black/60 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-500">
      <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
        Texturing
      </h3>
      <p className="text-zinc-400">
        Realistic and stylized texture creation using modern workflows.
      </p>
    </div>

    <div className="p-8 rounded-3xl border border-cyan-400/20 bg-black/60 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-500">
      <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
        Lighting
      </h3>
      <p className="text-zinc-400">
        Cinematic lighting setup for realistic and dramatic scenes.
      </p>
    </div>

    <div className="p-8 rounded-3xl border border-cyan-400/20 bg-black/60 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-500">
      <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
        Rendering
      </h3>
      <p className="text-zinc-400">
        High-quality final renders with strong composition and realism.
      </p>
    </div>

    <div className="p-8 rounded-3xl border border-cyan-400/20 bg-black/60 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-500">
      <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
        Animation
      </h3>
      <p className="text-zinc-400">
        Smooth animation workflows and cinematic motion presentation.
      </p>
    </div>

  </div>
</section>

      <section id="contact" className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm mb-4">
          Contact
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-8">
          Let’s Build Something Amazing
        </h2>

        <p className="text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Available for freelance projects, internships, collaborations, and creative opportunities.
        </p>

        <div className="flex justify-center flex-wrap gap-5">
          <a
            href="mailto:priyansuroy2005@gmail.com"
            className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] transition-all duration-500"
          >
            Email Me
          </a>

          <a
            href="https://www.artstation.com/priyansuroy1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl border border-cyan-400/30 hover:bg-cyan-400 hover:text-black hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] transition-all duration-500"
          >
            ArtStation
          </a>
        </div>
      </section>
      <section className="relative z-10 py-16 text-center">

  <h2 className="text-4xl font-bold mb-10">
    Connect With Me
  </h2>

  <div className="flex justify-center gap-6 flex-wrap">

    <a
      href="https://www.instagram.com/world_of_vertex?igsh=MTM4NzAyNDZpMnp5ZA=="
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 rounded-2xl border border-cyan-400/20 bg-black/60 flex items-center justify-center text-3xl text-cyan-300 hover:bg-cyan-300 hover:text-black hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] transition-all duration-500"
    >
      <FaInstagram />
    </a>

    <a
      href="https://www.linkedin.com/in/priyansu-roy-3a4171285/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 rounded-2xl border border-cyan-400/20 bg-black/60 flex items-center justify-center text-3xl text-cyan-300 hover:bg-cyan-300 hover:text-black hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] transition-all duration-500"
    >
      <FaLinkedin />
    </a>

    <a
      href="https://www.facebook.com/share/1HYJPayPmt/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 rounded-2xl border border-cyan-400/20 bg-black/60 flex items-center justify-center text-3xl text-cyan-300 hover:bg-cyan-300 hover:text-black hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] transition-all duration-500"
    >
      <FaFacebook />
    </a>

  </div>

</section>

      <footer className="border-t border-cyan-400/10 py-8 text-center text-cyan-300/70 text-sm">
        © 2026 Priyansu Roy — 3D Artist Portfolio
      </footer>
    </div>
  );
}
