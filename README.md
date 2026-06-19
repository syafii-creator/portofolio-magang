# Portfolio - Muhammad Syafii Maarif

Situs portofolio berbasis Next.js + TypeScript + Tailwind CSS.

## Cara Menjalankan (Development)

1. Install dependencies:

```bash
npm install
```

2. Jalankan server development:

```bash
npm run dev
```

Buka `http://localhost:3000`.

## Build dan Start (Production)

```bash
npm run build
npm run start
```

## Deploy ke Vercel

1. Buat repository GitHub dan push project.
2. Di Vercel, buat proyek baru dan pilih repository.
3. Atur framework ke `Next.js`, build command `npm run build`, dan output directory (biarkan default).

Vercel akan otomatis melakukan deploy pada setiap push ke branch default.

## Docker

Build image lokal:

```bash
docker build -t portfolio-syafii .
```

Jalankan container:

```bash
docker run -p 3000:3000 portfolio-syafii
```

