import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Building2, MapPin, Phone, Mail, MessageCircle,
  Filter, Ruler, Truck, ShieldCheck, SunMedium, Factory,
  CheckCircle2, Menu, X, ExternalLink
} from "lucide-react";

function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ asChild, className = "", children }) {
  if (asChild) return children;
  return <button className={className}>{children}</button>;
}

const WHATSAPP = "3939491244";
const PHONE = "+39 393 949 1244";
const EMAIL = "info@intermedia-immobiliare.it";
const WEBSITE = "https://www.intermedia-immobiliare.it/";

// Immagini progetto Paderno Business Hub
// Nota tecnica: il canvas non può leggere direttamente immagini locali con percorsi /mnt/data.
// Per la preview stabile uso immagini mockup esterne; nello sviluppo reale vanno sostituite
// con i file JPG che mi hai fornito, caricati sul server/CDN del sito.
const images = {
  hero: "/images/aerea.jpg",
  external: "/images/esterno1.jpg",
  external2: "/images/esterno2.jpg",
  interior1: "/images/interno1.jpg",
  interior2: "/images/interno2.jpg",
  interior3: "/images/interno3.jpg",
  interior4: "/images/interno4.jpg",
  aerial: "/images/aerea.jpg",
};
const units = [
  { code: "U1", mq: 428.74, area: 56.72, type: "Small Business", status: "Disponibile", price: "Su richiesta" },
  { code: "U2", mq: 425.12, area: 53.93, type: "Small Business", status: "Disponibile", price: "Su richiesta" },
  { code: "U3", mq: 428.41, area: 52.04, type: "Small Business", status: "Disponibile", price: "Su richiesta" },
  { code: "U4", mq: 424.03, area: 49.6, type: "Small Business", status: "Disponibile", price: "Su richiesta" },
  { code: "U5", mq: 435.88, area: 49.14, type: "Small Business", status: "Disponibile", price: "Su richiesta" },
  { code: "U6", mq: 423.65, area: 45.24, type: "Small Business", status: "Disponibile", price: "Su richiesta" },
  { code: "U7", mq: 652.25, area: 145.97, type: "Logistica leggera", status: "Disponibile", price: "Su richiesta" },
  { code: "U8", mq: 655.7, area: 69.68, type: "Logistica leggera", status: "Disponibile", price: "Su richiesta" },
  { code: "U9", mq: 1000.23, area: 85.59, type: "Industrial", status: "Disponibile", price: "Su richiesta" },
  { code: "U10", mq: 1037.15, area: 97.55, type: "Industrial", status: "Disponibile", price: "Su richiesta" },
  { code: "U11", mq: 856.31, area: 94.31, type: "Industrial", status: "Disponibile", price: "Su richiesta" },
];

const features = [
  { icon: Factory, title: "Spazi modulari", text: "Unità da circa 420 mq a oltre 1.000 mq, con possibilità di aggregazione." },
  { icon: Truck, title: "Portoni sezionali", text: "Accessi funzionali per attività produttive, magazzino e logistica leggera." },
  { icon: SunMedium, title: "Luce naturale", text: "Ambienti ampi e luminosi grazie a lucernari e grandi superfici finestrate." },
  { icon: ShieldCheck, title: "Riqualificazione completa", text: "Nuova immagine architettonica, aree esterne ordinate e finiture industriali moderne." },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

function formatMq(value) {
  return new Intl.NumberFormat("it-IT", { maximumFractionDigits: 2 }).format(value);
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Progetto", "Spazi", "Location", "Gallery", "Contatti"];
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-sm font-black text-neutral-950 shadow-lg shadow-cyan-400/20">PBH</div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white">Paderno</div>
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Business Hub</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-neutral-300 transition hover:text-white">{link}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild className="rounded-full bg-white px-5 text-neutral-950 hover:bg-cyan-100">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp</a>
          </Button>
        </div>
        <button className="text-white lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-neutral-950 px-5 py-5 lg:hidden">
          <div className="grid gap-4">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="text-neutral-200">{link}</a>
            ))}
            <a href={`https://wa.me/${WHATSAPP}`} className="rounded-full bg-cyan-400 px-5 py-3 text-center font-semibold text-neutral-950">Contatta ora</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <img src={images.hero} alt="Paderno Business Hub" className="h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/55 to-neutral-950/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-28 lg:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
            <MapPin className="h-4 w-4" /> Via Como angolo via Serrati · Paderno Dugnano
          </div>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">Nuovi spazi industriali riqualificati a nord di Milano.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-200 md:text-xl">Capannoni modulari da circa 420 a oltre 1.000 mq, aree private, portoni sezionali e immagine corporate per aziende, logistica leggera e investitori.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-cyan-400 px-7 text-base font-semibold text-neutral-950 hover:bg-cyan-300">
              <a href="#spazi">Scopri gli spazi <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/5 px-7 text-base text-white hover:bg-white/10 hover:text-white">
              <a href="#contatti">Prenota una visita</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    ["11", "unità previste"],
    ["420+", "mq tagli minimi"],
    ["1.000+", "mq tagli principali"],
    ["MI Nord", "location strategica"],
  ];
  return (
    <section className="bg-white px-5 py-12 text-neutral-950 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {stats.map(([n, l]) => (
          <Card key={l} className="rounded-3xl border border-neutral-200 bg-neutral-50 text-neutral-950 shadow-sm">
            <CardContent className="p-6">
              <div className="text-4xl font-semibold text-cyan-300">{n}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-400">{l}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Project() {
  return (
    <section id="progetto" className="bg-neutral-950 px-5 py-24 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div {...fadeUp}>
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Il progetto</div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Un polo industriale rigenerato, moderno e immediatamente riconoscibile.</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">Paderno Business Hub nasce dalla riqualificazione di un importante complesso industriale tra via Como e via Serrati. L’intervento valorizza l’immobile con una nuova immagine architettonica, spazi modulari, portoni sezionali, aree private e ambienti interni luminosi.</p>
          <p className="mt-4 text-lg leading-8 text-neutral-300">La comunicazione del progetto è pensata per aziende che cercano una sede efficiente, rappresentativa e funzionale, ma anche per investitori interessati a un prodotto frazionabile in una zona ad alta domanda.</p>
        </motion.div>
        <motion.div {...fadeUp} className="grid gap-4 sm:grid-cols-2">
          <img src={images.external} alt="Render esterno principale" className="h-72 w-full rounded-[2rem] object-cover shadow-2xl" />
          <img src={images.interior1} alt="Interno capannone" className="h-72 w-full rounded-[2rem] object-cover shadow-2xl sm:mt-12" />
          <img src={images.external2} alt="Facciata strada" className="h-72 w-full rounded-[2rem] object-cover shadow-2xl" />
          <img src={images.interior2} alt="Spazio industriale" className="h-72 w-full rounded-[2rem] object-cover shadow-2xl sm:mt-12" />
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="max-w-3xl">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Performance operative</div>
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">Progettato per lavorare meglio.</h2>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} {...fadeUp}>
              <Card className="h-full rounded-[2rem] border-neutral-200 bg-neutral-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-7">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-cyan-300"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-xl font-semibold text-neutral-950">{title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spaces() {
  const [filter, setFilter] = useState("Tutti");
  const filtered = useMemo(() => filter === "Tutti" ? units : units.filter((u) => u.type === filter), [filter]);
  const types = ["Tutti", ...Array.from(new Set(units.map((u) => u.type)))];
  return (
    <section id="spazi" className="bg-neutral-100 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Spazi disponibili</div>
            <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">Tagli flessibili per produzione, magazzino, showroom e logistica leggera.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <button key={t} onClick={() => setFilter(t)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${filter === t ? "bg-neutral-950 text-white" : "bg-white text-neutral-700 hover:bg-neutral-200"}`}>
                {t}
              </button>
            ))}
          </div>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((unit) => (
            <motion.div key={unit.code} {...fadeUp}>
              <Card className="overflow-hidden rounded-[2rem] border-0 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="bg-neutral-950 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-semibold">{unit.code}</div>
                      <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-950">{unit.status}</span>
                    </div>
                    <div className="mt-2 text-sm text-neutral-400">{unit.type}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-6">
                    <div className="rounded-2xl bg-neutral-100 p-4">
                      <Ruler className="mb-3 h-5 w-5 text-cyan-700" />
                      <div className="text-2xl font-semibold text-neutral-950">{formatMq(unit.mq)}</div>
                      <div className="text-sm text-neutral-500">mq capannone</div>
                    </div>
                    <div className="rounded-2xl bg-neutral-100 p-4">
                      <Building2 className="mb-3 h-5 w-5 text-cyan-700" />
                      <div className="text-2xl font-semibold text-neutral-950">{formatMq(unit.area)}</div>
                      <div className="text-sm text-neutral-500">mq area privata</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-neutral-100 px-6 py-5">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">Prezzo</div>
                      <div className="font-semibold text-neutral-950">{unit.price}</div>
                    </div>
                    <Button asChild className="rounded-full bg-neutral-950 hover:bg-cyan-700">
                      <a href={`https://wa.me/${WHATSAPP}?text=Buongiorno,%20vorrei%20informazioni%20sul%20capannone%20${unit.code}%20di%20Paderno%20Business%20Hub.`}>Info</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const items = ["Paderno Dugnano · Milano Nord", "Accessibilità da via Como e via Serrati", "Contesto misto produttivo e urbano", "Soluzione adatta a mezzi commerciali e logistica leggera"];
  return (
    <section id="location" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div {...fadeUp}>
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Location</div>
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">Una posizione concreta per aziende che lavorano con Milano e l’hinterland.</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">La posizione a Paderno Dugnano consente di intercettare domanda produttiva, artigianale e logistica del quadrante nord milanese, con un equilibrio raro tra accessibilità, visibilità e disponibilità di superfici riqualificate.</p>
          <div className="mt-8 grid gap-3">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-3 text-neutral-700"><CheckCircle2 className="h-5 w-5 text-cyan-700" /> {item}</div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="overflow-hidden rounded-[2rem] bg-neutral-950 shadow-2xl">
          <img src={images.aerial} alt="Vista aerea" className="h-[460px] w-full object-cover opacity-90" />
        </motion.div>
      </div>
    </section>
  );
}

function Gallery() {
  const gallery = [
    images.external,
    images.external2,
    images.interior1,
    images.interior2,
    images.interior3,
    images.interior4,
    images.aerial,
  ];
  return (
    <section id="gallery" className="bg-neutral-950 px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="max-w-3xl">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Gallery</div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Immagini pensate per far percepire valore, scala e qualità del progetto.</h2>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {gallery.map((img, index) => (
            <motion.div
              key={img}
              {...fadeUp}
              className={index === 0 || index === 1 ? "md:col-span-2" : ""}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className={`w-full rounded-[2rem] object-cover shadow-2xl ${index === 0 || index === 1 ? "h-[520px]" : "h-80"}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contatti" className="bg-neutral-100 px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div {...fadeUp}>
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Contatti</div>
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">Richiedi disponibilità, prezzi e visita in cantiere.</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">Per informazioni commerciali, appuntamenti e documentazione tecnica, contatta Agenzia Immobiliare Intermedia.</p>
          <div className="mt-8 grid gap-4">
            <a href={`tel:${PHONE.replaceAll(" ", "")}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"><Phone className="h-5 w-5 text-cyan-700" /> {PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"><Mail className="h-5 w-5 text-cyan-700" /> {EMAIL}</a>
            <a href={WEBSITE} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"><ExternalLink className="h-5 w-5 text-cyan-700" /> Sito ufficiale Intermedia</a>
          </div>
        </motion.div>
        <motion.div {...fadeUp}>
          <Card className="rounded-[2rem] border-0 bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="grid gap-4">
                <input className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-cyan-600" placeholder="Nome e cognome" />
                <input className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-cyan-600" placeholder="Telefono" />
                <input className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-cyan-600" placeholder="Email" />
                <select className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-cyan-600">
                  <option>Interesse principale</option>
                  <option>Acquisto per azienda</option>
                  <option>Investimento</option>
                  <option>Logistica / magazzino</option>
                  <option>Showroom + deposito</option>
                </select>
                <textarea rows={5} className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none focus:border-cyan-600" placeholder="Messaggio" />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button className="rounded-full bg-neutral-950 px-7 py-6 hover:bg-cyan-700">Invia richiesta</Button>
                  <Button asChild variant="outline" className="rounded-full px-7 py-6">
                    <a href={`https://wa.me/${WHATSAPP}?text=Buongiorno,%20vorrei%20informazioni%20su%20Paderno%20Business%20Hub.`} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp</a>
                  </Button>
                </div>
                <p className="text-xs leading-5 text-neutral-400">Il form è un mockup grafico: nello sviluppo definitivo andrà collegato a email, CRM o sistema di raccolta lead.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-950 px-5 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="text-lg font-semibold">Paderno Business Hub</div>
          <div className="mt-1 text-sm text-neutral-400">Commercializzazione a cura di Agenzia Immobiliare Intermedia</div>
        </div>
        <div className="flex gap-3">
          <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
            <a href="#spazi"><Filter className="mr-2 h-4 w-4" /> Disponibilità</a>
          </Button>
          <Button asChild className="rounded-full bg-cyan-400 text-neutral-950 hover:bg-cyan-300">
            <a href={`https://wa.me/${WHATSAPP}`}><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp</a>
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default function PadernoBusinessHub() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <Stats />
      <Project />
      <Features />
      <Spaces />
      <Location />
      <Gallery />
      <Contacts />
      <Footer />
    </main>
  );
}
