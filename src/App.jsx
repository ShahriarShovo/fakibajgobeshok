import {
  AtSign,
  ArrowRight,
  BookOpenText,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquareText,
  Menu,
  Phone,
  Send,
  Sprout,
  User,
} from 'lucide-react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const focusAreas = [
  {
    icon: BookOpenText,
    title: 'Research teaching',
    text: 'From choosing a question to designing methods, reading papers, writing findings, and preparing confident presentations.',
  },
  {
    icon: Code2,
    title: 'Research-based software',
    text: 'We transform field problems, academic ideas, and student experiments into practical apps, dashboards, and digital tools.',
  },
  {
    icon: GraduationCap,
    title: 'Student skill development',
    text: 'Hands-on learning for data thinking, coding, documentation, collaboration, and portfolio-ready project work.',
  },
]

const process = [
  'Find a real research problem',
  'Teach the method behind the work',
  'Prototype software from the insight',
  'Train students to ship and explain it',
]

const aboutPillars = [
  {
    icon: BookOpenText,
    title: 'Teach',
    text: 'Research methods, paper reading, academic writing, and presentation practice.',
  },
  {
    icon: Code2,
    title: 'Build',
    text: 'Software prototypes, dashboards, automation, and small tools from real findings.',
  },
  {
    icon: GraduationCap,
    title: 'Grow',
    text: 'Student confidence, technical habits, collaboration, and portfolio-ready work.',
  },
]

const team = [
  {
    avatar: 'avatar-a',
    name: 'Research Mentor',
    role: 'Methods and writing',
    text: 'Guides students through research design, literature review, data collection, and publication-ready communication.',
  },
  {
    avatar: 'avatar-b',
    name: 'Software Lead',
    role: 'Product and engineering',
    text: 'Turns research outcomes into usable web tools, automation workflows, and lightweight product prototypes.',
  },
  {
    avatar: 'avatar-c',
    name: 'Skill Coach',
    role: 'Student development',
    text: 'Runs practical sessions on coding, data literacy, documentation, teamwork, and career-ready technical habits.',
  },
  {
    avatar: 'avatar-d',
    name: 'Project Coordinator',
    role: 'Community and delivery',
    text: 'Keeps learners, mentors, projects, and partners connected from the first idea to the final demo.',
  },
]

function App() {
  return (
    <main className="bg-white text-slate-950">
      <Header />
      <Hero />
      <FocusAreas />
      <About />
      <Upcoming />
      <Team />
      <Contact />
    </main>
  )
}

function Header() {
  const navItems = ['Work', 'About', 'Upcoming', 'Team', 'Contact']

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/75 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a className="flex items-center gap-3" href="#home" aria-label="fakibaz gobeshok home">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
            FG
          </span>
          <span className="text-lg font-bold lowercase">fakibaz gobeshok</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a className="transition hover:text-slate-950" href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <a
          className="hidden items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 md:inline-flex"
          href="#contact"
        >
          <Mail size={16} />
          Contact
        </a>

        <a
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 md:hidden"
          href="#contact"
          aria-label="Open contact section"
        >
          <Menu size={20} />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero-shell relative flex items-center overflow-hidden pt-24">
      <div className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase text-cyan-700">
            Research school and software lab
          </p>
          <h1 className="text-5xl font-black leading-none text-slate-950 sm:text-7xl lg:text-8xl">
            Fakibaz Gobeshok
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
            We teach research, turn research ideas into useful software, and help students build the skills to think,
            make, and present with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-coral px-5 py-3 font-bold text-white shadow-sm transition hover:bg-coral-dark"
              href="#work"
            >
              Explore our work
              <ArrowRight size={18} />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white/75 px-5 py-3 font-bold text-slate-950 backdrop-blur transition hover:border-slate-950"
              href="#upcoming"
            >
              <Sprout size={18} />
              Mangoseed preview
            </a>
          </div>

          <dl className="mt-10 hidden max-w-xl grid-cols-3 gap-5 border-t border-slate-200 pt-6 sm:grid">
            <div>
              <dt className="text-3xl font-black text-slate-950">01</dt>
              <dd className="text-sm leading-6 text-slate-600">Research learning path</dd>
            </div>
            <div>
              <dt className="text-3xl font-black text-slate-950">03</dt>
              <dd className="text-sm leading-6 text-slate-600">Core practice tracks</dd>
            </div>
            <div>
              <dt className="text-3xl font-black text-slate-950">Next</dt>
              <dd className="text-sm leading-6 text-slate-600">Mangoseed lab project</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

function FocusAreas() {
  return (
    <section id="work" className="border-y border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">What we do</p>
          <h2 className="section-title">A small identity with a broad research habit.</h2>
          <p className="section-copy">
            Fakibaz Gobeshok is built for students who want research to feel less distant and more usable. We combine
            structured guidance, project practice, and software thinking in one learning culture.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={title}>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about-section border-y border-slate-200 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title">We make research practical enough to learn and strong enough to build from.</h2>
          <p className="section-copy">
            Fakibaz Gobeshok is a learning and building space for students who want research to become clearer, more
            useful, and more visible. We teach the thinking, then turn the strongest insights into simple software and
            skill-building projects.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {aboutPillars.map(({ icon: Icon, title, text }) => (
              <article className="about-pillar" key={title}>
                <span className="about-pillar-icon">
                  <Icon size={20} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-process-card">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-extrabold uppercase text-cyan-700">Our rhythm</p>
              <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950">From question to working proof.</h3>
            </div>
            <span className="about-spark">
              <Sprout size={24} />
            </span>
          </div>

          <div className="mt-8 space-y-4">
            {process.map((item, index) => (
              <div className="about-step" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className="about-quote">
            The outcome is not only a report. It is a clearer thinker, a stronger builder, and a project that can be
            shown.
          </p>
        </div>
      </div>
    </section>
  )
}
function Upcoming() {
  return (
    <section id="upcoming" className="bg-amber-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="section-kicker text-green-700">Upcoming project</p>
          <h2 className="section-title">Mangoseed starts with one small idea and grows into a working product.</h2>
          <p className="section-copy">
            Mangoseed is our upcoming research-to-software project space. It will collect student ideas, guide them
            through research validation, and help the strongest concepts become simple deployable tools.
          </p>
        </div>

        <div className="mangoseed-panel rounded-lg border border-amber-200 bg-white p-7 shadow-sm">
          <Sprout className="mb-6 text-green-700" size={40} />
          <h3 className="text-2xl font-black text-slate-950">From seed to system</h3>
          <p className="mt-4 leading-7 text-slate-650">
            Idea intake, mentor review, prototype sprint, student demo, and practical documentation in one project flow.
          </p>
          <a
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 font-bold text-white transition hover:bg-green-800"
            href="#contact"
          >
            Join the waitlist
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="team" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Team</p>
            <h2 className="section-title">Built by mentors, makers, and student-first operators.</h2>
          </div>
          <p className="max-w-md leading-7 text-slate-600">
            A compact team model covering research mentoring, software development, student growth, and delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={member.name}>
              <div className={`avatar ${member.avatar}`} role="img" aria-label={`${member.name} portrait graphic`}>
                <span>{member.name.slice(0, 1)}</span>
              </div>
              <h3 className="mt-5 text-xl font-black text-slate-950">{member.name}</h3>
              <p className="mt-1 font-semibold text-coral">{member.role}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{member.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section py-20 text-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="contact-kicker">Contact</p>
          <h2 className="contact-title">Let&apos;s shape your next research idea.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Have a project in mind, a student batch to train, or a software idea rooted in research? We would love to
            hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="contact-info-card">
            <div>
              <h3 className="text-3xl font-bold">Let&apos;s Talk</h3>
              <p className="mt-5 leading-8 text-zinc-300">
                We are available for research mentoring, student workshops, product prototypes, and open-source
                contribution planning.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <ContactMethod icon={MapPin} label="Location" value="Dhaka, Bangladesh" />
              <ContactMethod icon={Phone} label="Phone" value="+880 1000 000 000" href="tel:+8801000000000" />
              <ContactMethod
                icon={Mail}
                label="Email"
                value="hello@fakibazgobeshok.com"
                href="mailto:hello@fakibazgobeshok.com"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <SocialLink icon={FaLinkedinIn} label="LinkedIn" />
              <SocialLink icon={FaGithub} label="GitHub" />
              <SocialLink icon={FaFacebookF} label="Facebook" />
              <SocialLink icon={FaInstagram} label="Instagram" />
              <SocialLink icon={FaYoutube} label="YouTube" />
            </div>
          </aside>

          <form className="contact-form-card">
            <div className="grid gap-5 md:grid-cols-2">
              <ContactField icon={User} id="name" label="Your Name" placeholder="e.g. John Doe" />
              <ContactField icon={AtSign} id="email" label="Your Email" placeholder="e.g. john@example.com" type="email" />
            </div>

            <ContactField icon={MessageSquareText} id="subject" label="Subject" placeholder="What's this about?" />

            <label className="contact-field">
              <span>
                <MessageSquareText size={15} />
                Message
              </span>
              <textarea placeholder="Share your thoughts or project details..." rows={7} />
            </label>

            <button className="send-button" type="button">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-slate-200 px-5 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>&copy; 2026 fakibaz gobeshok. Research, software, and student skill development.</p>
        <a className="font-semibold text-slate-700 hover:text-slate-950" href="#home">
          Back to top
        </a>
      </footer>
    </section>
  )
}

function ContactMethod({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="contact-method-icon">
        <Icon size={20} />
      </span>
      <span>
        <span className="contact-method-label">{label}</span>
        <strong>{value}</strong>
      </span>
    </>
  )

  if (href) {
    return (
      <a className="contact-method" href={href}>
        {content}
      </a>
    )
  }

  return <div className="contact-method">{content}</div>
}

function SocialLink({ icon: Icon, label }) {
  return (
    <a className="social-link" href="#contact" aria-label={label}>
      <Icon size={17} />
    </a>
  )
}

function ContactField({ icon: Icon, id, label, placeholder, type = 'text' }) {
  return (
    <label className="contact-field" htmlFor={id}>
      <span>
        <Icon size={15} />
        {label}
      </span>
      <input id={id} type={type} placeholder={placeholder} />
    </label>
  )
}

export default App
