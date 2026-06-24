import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Skema data produk. Setiap produk adalah satu file .json di src/content/products/.
 * Field name/description/specs berisi dua bahasa (id & en).
 */
const localized = z.object({ id: z.string(), en: z.string() });

const products = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/products" }),
  schema: z.object({
    // Kategori produk (mis. "bantal", "guling"). Dipakai untuk filter katalog.
    category: z.string(),
    // Harga dalam Rupiah (angka saja, tanpa titik). Contoh: 699000
    price: z.number(),
    // Nama file gambar di folder public/products/. Yang pertama jadi gambar utama.
    images: z.array(z.string()).default([]),
    // Tampilkan di bagian "produk unggulan" pada Beranda?
    featured: z.boolean().default(false),
    // Urutan tampil (kecil = lebih dulu).
    order: z.number().default(99),
    // Teks dwibahasa
    name: localized,
    tagline: localized.optional(),
    description: localized,
    // Daftar spesifikasi (poin-poin), per bahasa.
    specs: z
      .object({
        id: z.array(z.string()).default([]),
        en: z.array(z.string()).default([]),
      })
      .optional(),
  }),
});

export const collections = { products };
