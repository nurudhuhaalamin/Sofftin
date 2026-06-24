# 📘 Panduan Mengelola Website Softtin (Bahasa Sederhana)

Dokumen ini untuk pemilik website yang **tidak perlu paham koding**. Isinya cara
melakukan perubahan yang paling sering dibutuhkan.

> Semua perubahan baru muncul di website setelah di-**"build & deploy"** ulang
> (lihat bagian paling bawah). Jika ragu, minta bantuan teknis — file di bawah ini
> yang perlu disentuh.

---

## 1. Mengganti Nomor WhatsApp Penerima Order

1. Buka file: **`src/config.ts`**
2. Cari baris `whatsappNumber: "6281234567890"`
3. Ganti angkanya dengan nomor Anda.
   - Format: **kode negara + nomor tanpa angka 0 di depan, tanpa spasi/tanda**.
   - Contoh: nomor `0812-3456-7890` ditulis menjadi `"6281234567890"`.

Semua tombol "Beli Sekarang" dan tombol WhatsApp mengambang otomatis memakai nomor ini.

---

## 2. Mengubah Harga / Nama / Deskripsi Produk

Setiap produk = satu file di folder **`src/content/products/`**.
Contoh: `bantal-memory-foam-luxury.json`.

Buka filenya, ubah bagian yang diinginkan:

```json
{
  "category": "bantal",
  "price": 699000,              ← harga (angka saja, tanpa titik/Rp)
  "featured": true,             ← true = tampil di Beranda
  "name":        { "id": "Bantal Memory Foam Luxury", "en": "Luxury Memory Foam Pillow" },
  "description": { "id": "...", "en": "..." },
  "specs":       { "id": ["...", "..."], "en": ["...", "..."] }
}
```

- `id` = teks Bahasa Indonesia, `en` = teks Bahasa Inggris.
- Harga ditulis angka polos: `699000` → tampil otomatis jadi `Rp 699.000`.

---

## 3. Menambah Produk Baru

1. Masuk ke folder `src/content/products/`.
2. **Salin (copy)** salah satu file produk yang sudah ada.
3. **Ganti namanya** menjadi nama produk baru (huruf kecil, pakai tanda hubung),
   misalnya `bantal-anak-soft.json`. Nama file ini akan jadi alamat halaman produk.
4. Buka file baru itu, ubah isinya (harga, nama, deskripsi, kategori, dll).
5. Letakkan foto produk di folder `public/products/` lalu tulis nama file fotonya
   pada bagian `"images"`. Contoh: `"images": ["bantal-anak-soft.jpg"]`.

Produk otomatis muncul di halaman **Produk**. Jika kategorinya baru, tombol filter
kategori juga otomatis bertambah.

---

## 4. Mengganti Foto Produk / Logo

- **Foto produk**: taruh file gambar (`.jpg`, `.png`, `.webp`, atau `.svg`) di
  `public/products/`, lalu tulis nama filenya di bagian `"images"` pada file produk.
- **Logo**: ganti file `public/logo-softtin.png` (untuk header) dan
  `public/logo-softtin-white.png` (untuk footer gelap) dengan logo Anda.

---

## 5. Mengubah Nama Hotel/Partner & Sosial Media

Buka **`src/config.ts`**:
- `partners: [...]` → daftar nama hotel/partner di Beranda.
  ⚠️ Gunakan hanya partner yang benar-benar bekerja sama dengan Anda.
- `social: { instagram: "...", ... }` → isi link sosial media. Kosongkan `""`
  jika belum ada (otomatis disembunyikan).

---

## 6. Mengubah Teks Umum Website (menu, judul, dll)

Semua teks selain produk ada di **`src/i18n/ui.ts`**, dipisah `id:` (Indonesia)
dan `en:` (Inggris). Ubah teks di dalam tanda kutip, jangan ubah kata kunci di kirinya.

---

## 7. Cara Menerbitkan Perubahan (Build & Deploy)

Website ini di-host **gratis di Cloudflare Pages**.

**Cara termudah (otomatis):** setiap perubahan yang disimpan ke GitHub akan otomatis
diterbitkan oleh Cloudflare (jika sudah dihubungkan). Pengaturan di Cloudflare Pages:
- **Build command:** `npm run build`
- **Output directory:** `dist`

**Cara manual (di komputer):**
```bash
npm install      # cukup sekali di awal
npm run build    # membuat versi final di folder dist/
```
Lalu unggah isi folder `dist/` ke Cloudflare Pages.

**Melihat tampilan sebelum terbit (di komputer):**
```bash
npm run dev
```
Lalu buka alamat yang muncul (biasanya `http://localhost:4321`) di browser.

---

Butuh bantuan? Simpan dokumen ini dan tunjukkan ke siapa pun yang membantu Anda
secara teknis — semua yang mereka butuhkan ada di sini.
