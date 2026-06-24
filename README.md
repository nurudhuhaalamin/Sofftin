# Softtin

Website resmi **Softtin** — bantal & guling *memory foam* premium dengan tema
"Hotel Luxury Sleep Experience". Pemesanan dilakukan **langsung via WhatsApp**.

## Tentang Proyek Ini

Situs **statis** dwibahasa (Indonesia & Inggris) yang ringan, cepat, dan gratis
di-host di Cloudflare Pages. Tidak ada backend, database, atau pembayaran online —
setiap tombol "Beli Sekarang" membuka WhatsApp dengan pesan otomatis berisi produk.

### Stack

- **[Astro](https://astro.build)** — framework situs statis
- **Tailwind CSS v4** — styling
- **Astro Content Collections** — data produk berbasis file (`src/content/products/`)
- **Astro i18n** — dukungan dua bahasa (`/id` & `/en`)
- **Cloudflare Pages** — hosting gratis (build: `npm run build`, output: `dist`)

## Menjalankan Secara Lokal

```bash
npm install
npm run dev      # buka http://localhost:4321
npm run build    # hasil final di folder dist/
```

## Struktur Penting

```
src/
├─ config.ts              # nomor WhatsApp, kontak, sosial media, partner
├─ content/products/      # 1 file JSON per produk
├─ i18n/                  # teks antarmuka ID & EN
├─ components/            # Header, Footer, ProductCard, WhatsAppFloat
├─ layouts/Layout.astro   # kerangka halaman
└─ pages/[lang]/          # Beranda, Produk, Detail, Tentang, Kontak
public/                   # logo & gambar produk
```

## Cara Mengubah Konten

Lihat **[CARA-UPDATE.md](./CARA-UPDATE.md)** — panduan langkah demi langkah dalam
bahasa sederhana untuk mengganti harga, menambah produk, mengubah nomor WhatsApp, dll.
