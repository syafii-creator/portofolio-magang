import Head from 'next/head';
import { motion } from 'framer-motion';

const technicalSkills = [
  'Python',
  'Flutter',
  'Dart',
  'Golang',
  'Laravel',
  'MySQL',
  'GitHub',
  'Postman',
  'Visual Studio Code'
];

const softSkills = ['Communication', 'Team Collaboration', 'Adaptability', 'Time Management'];

const projects = [
  {
    title: 'Mahasiswa-Appstivity',
    date: 'Juli 2025',
    category: 'Flutter | Dart | Supabase | Mobile Development',
    description:
      'Aplikasi mobile untuk membantu mahasiswa mengelola tugas, jadwal, dan kegiatan akademik dengan antarmuka yang responsif.',
    highlights: [
      'Mengembangkan tampilan aplikasi menggunakan Flutter.',
      'Mengintegrasikan Supabase untuk pengelolaan data secara real-time.',
      'Menerapkan autentikasi dan manajemen data pengguna.'
    ],
    image: '/images/project-mahasiswa-appstivity.jpeg'
  },
  {
    title: 'Ashoes Infinity',
    date: 'Juli 2025',
    category: 'E-Commerce System | Web Development | Database',
    description:
      'Sistem e-commerce berbasis web untuk mendukung transaksi, katalog produk, dan pengelolaan inventaris.',
    highlights: [
      'Mengembangkan fitur katalog produk, detail produk, dan pengelolaan inventaris.',
      'Merancang penyimpanan data untuk kebutuhan operasional aplikasi.',
      'Membuat antarmuka yang mudah digunakan oleh pelanggan.'
    ],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'E-Legalisir MAN 2',
    date: 'Juni 2026',
    category: 'Web Application | Database Management | Information System',
    description:
      'Aplikasi web untuk digitalisasi proses pengajuan dan pengelolaan legalisir dokumen.',
    highlights: [
      'Mengembangkan fitur pengajuan, verifikasi, pelacakan status, dan pengarsipan dokumen.',
      'Merancang basis data untuk mengelola data pemohon dan riwayat legalisir.',
      'Membantu mengurangi proses pencatatan manual pada administrasi.'
    ],
    image: '/images/project-man.jpeg'
  }
];

const timeline = [
  {
    year: '2023 - Sekarang',
    title: 'S1 Sistem Informasi',
    description: 'Universitas Duta Bangsa Surakarta.'
  },
  {
    year: 'Juli 2025',
    title: 'Mahasiswa-Appstivity',
    description: 'Mengembangkan aplikasi mobile mahasiswa menggunakan Flutter, Dart, dan Supabase.'
  },
  {
    year: 'Juli 2025',
    title: 'Ashoes Infinity',
    description: 'Membangun sistem e-commerce berbasis web dengan fokus pada katalog, transaksi, dan data inventaris.'
  },
  {
    year: 'Juni 2026',
    title: 'E-Legalisir MAN 2',
    description: 'Mengembangkan sistem informasi legalisir untuk pengajuan, verifikasi, pelacakan, dan arsip dokumen.'
  }
];

const contacts = [
  {
    label: 'WhatsApp',
    value: '+62 815-7839-4787',
    href: 'https://wa.me/6281578394787'
  },
  {
    label: 'Email',
    value: 'maarifsyafii42@gmail.com',
    href: 'mailto:maarifsyafii42@gmail.com'
  },
  {
    label: 'GitHub',
    value: 'syafii-creator',
    href: 'https://github.com/syafii-creator'
  },
  {
    label: 'Lokasi',
    value: 'Surakarta, Jawa Tengah',
    href: '#contact'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Syafii Ma&apos;arif | Portfolio</title>
        <meta
          name="description"
          content="Portfolio Syafii Ma'arif, mahasiswa Sistem Informasi Universitas Duta Bangsa Surakarta."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-10 left-1/2 h-60 w-60 translate-x-[-50%] rounded-full bg-[#38bdf8]/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-[#22c55e]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <header className="mb-14 flex flex-col gap-6 rounded-[24px] border border-white/10 bg-surface/80 p-6 shadow-soft backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Portfolio</p>
              <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Syafii Ma&apos;arif</h1>
              <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">
                Mahasiswa Sistem Informasi di Universitas Duta Bangsa Surakarta dengan minat pada pengembangan sistem informasi, aplikasi web, aplikasi mobile, dan pengelolaan database.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#portfolio" className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#a5f3fc]/95">
                Lihat Proyek
              </a>
              <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-accent">
                Hubungi Saya
              </a>
            </div>
          </header>

          <section className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-5"
              >
                <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-lg shadow-cyan-500/10">
                  Halo, saya Syafii Ma&apos;arif
                </p>
                <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  Information Systems Student.
                </h2>
                <div className="space-y-3 text-slate-300">
                  <p className="text-lg leading-8">
                    Saya tertarik membangun solusi digital yang membantu proses kerja menjadi lebih terstruktur, mulai dari aplikasi mobile, sistem e-commerce, sampai sistem pengelolaan dokumen.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                  <span className="rounded-full bg-white/5 px-4 py-2">Sistem Informasi</span>
                  <span className="rounded-full bg-white/5 px-4 py-2">Web Application</span>
                  <span className="rounded-full bg-white/5 px-4 py-2">Mobile Development</span>
                  <span className="rounded-full bg-white/5 px-4 py-2">Database Management</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[24px] border border-white/10 bg-card p-6 shadow-soft"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_35%)]" />
              <div className="relative flex flex-col items-center gap-5 rounded-[20px] bg-surface/95 p-6 text-center">
                <div className="h-40 w-40 overflow-hidden rounded-full border border-white/15 shadow-lg shadow-cyan-500/10">
                  <img
                    src="/images/profile-syafii.jpeg"
                    alt="Foto profil Syafii Ma'arif"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Syafii Ma&apos;arif</h3>
                  <p className="text-sm text-slate-400">Mahasiswa Sistem Informasi</p>
                </div>
                <div className="grid w-full grid-cols-3 gap-3 text-left text-sm text-slate-300">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-2xl font-semibold text-white">3</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">Proyek</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-2xl font-semibold text-white">9</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">Tools</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-2xl font-semibold text-white">2023</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">Kuliah</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mt-16 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="section-card rounded-[24px] border border-white/10 p-8"
            >
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Tentang Saya</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Ringkasan Profesional</h3>
              </div>
              <p className="leading-7 text-slate-300">
                Saya adalah mahasiswa S1 Sistem Informasi dengan peminatan Enterprise System. Saya memiliki ketertarikan pada analisis bisnis, pengembangan sistem informasi, dan transformasi digital organisasi. Dalam proyek yang pernah saya kerjakan, saya terbiasa merancang fitur, mengelola data, dan mengembangkan aplikasi berbasis web maupun mobile sesuai kebutuhan pengguna.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="section-card rounded-[24px] border border-white/10 p-8"
            >
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Pendidikan</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Universitas Duta Bangsa</h3>
              </div>
              <div className="space-y-2 text-slate-300">
                <p>S1 Sistem Informasi</p>
                <p>Surakarta, Jawa Tengah</p>
                <p>2023 - Sekarang</p>
              </div>
            </motion.div>
          </section>

          <section id="skills" className="mt-16">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Skills</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Keahlian</h3>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr]">
              <div className="section-card rounded-[24px] border border-white/10 p-8">
                <h4 className="mb-5 text-xl font-semibold text-white">Programming & Development</h4>
                <div className="flex flex-wrap gap-3">
                  {technicalSkills.map(skill => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="section-card rounded-[24px] border border-white/10 p-8">
                <h4 className="mb-5 text-xl font-semibold text-white">Soft Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map(skill => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="portfolio" className="mt-20">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Portfolio</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Pengalaman Proyek & Pengembangan</h3>
            </div>
            <div className="grid gap-6 xl:grid-cols-3">
              {projects.map(project => (
                <motion.article
                  key={project.title}
                  whileHover={{ y: -8 }}
                  className="section-card overflow-hidden rounded-[24px] border border-white/10 shadow-soft"
                >
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-500 hover:scale-105" />
                  </div>
                  <div className="space-y-4 p-6">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-2xl font-semibold text-white">{project.title}</h4>
                        <span className="text-sm text-cyan-200">{project.date}</span>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{project.category}</p>
                      <p className="mt-3 text-slate-300">{project.description}</p>
                    </div>
                    <ul className="space-y-2 text-sm leading-6 text-slate-300">
                      {project.highlights.map(item => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="experience" className="mt-20">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Experience & Education</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Perjalanan Belajar</h3>
            </div>
            <div className="relative border-l border-white/10 pl-8">
              {timeline.map(entry => (
                <motion.div
                  key={`${entry.year}-${entry.title}`}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -30 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className="mb-12 flex gap-6"
                >
                  <div className="relative mt-1 h-4 w-4 rounded-full bg-accent shadow-[0_0_0_8px_rgba(56,189,248,0.08)]" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">{entry.year}</p>
                    <h4 className="mt-2 text-xl font-semibold text-white">{entry.title}</h4>
                    <p className="mt-2 max-w-2xl text-slate-300">{entry.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="contact" className="mt-20 rounded-[24px] border border-white/10 bg-surface/90 p-8 shadow-soft">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Contact</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">Kontak</h3>
                </div>
                <p className="max-w-xl leading-7 text-slate-300">
                  Silakan hubungi saya untuk kebutuhan magang, kerja sama proyek, atau diskusi terkait pengembangan sistem informasi.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {contacts.map(contact => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left transition hover:-translate-y-1 hover:border-accent/60"
                    >
                      <p className="text-sm text-slate-400">{contact.label}</p>
                      <p className="mt-2 font-semibold text-white">{contact.value}</p>
                    </a>
                  ))}
                </div>
              </div>

              <form className="space-y-6 rounded-[20px] border border-white/10 bg-background/95 p-8 shadow-soft">
                <div>
                  <label className="text-sm font-medium text-slate-200">Nama</label>
                  <input
                    type="text"
                    placeholder="Nama lengkap"
                    className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-accent focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-200">Email</label>
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-accent focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-200">Pesan</label>
                  <textarea
                    rows={5}
                    placeholder="Tulis pesan Anda..."
                    className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-accent focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-accent px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#7dd3fc]/90"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
