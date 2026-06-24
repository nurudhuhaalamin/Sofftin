/**
 * Konfigurasi pusat website Softtin.
 *
 * 🔧 BAGIAN YANG BOLEH ANDA UBAH SENDIRI:
 * - whatsappNumber : nomor WhatsApp penerima order (format internasional tanpa "+" atau "0" di depan).
 *                    Contoh: nomor 0812-3456-7890 ditulis "6281234567890".
 * - email, instagram, dll : info kontak & sosial media.
 *
 * Setelah mengubah, website perlu di-"build" ulang (lihat CARA-UPDATE.md).
 */

export const SITE = {
  name: "Softtin",
  tagline: {
    id: "Hotel Luxury Sleep Experience",
    en: "Hotel Luxury Sleep Experience",
  },

  // ⬇️ Nomor WhatsApp penerima order (+62 851-8680-0193).
  whatsappNumber: "6285186800193",

  // Info kontak
  email: "halo@softtin.id",
  city: {
    id: "Jl. Intan 1, Cidokom, Gunung Sindur, Kabupaten Bogor",
    en: "Jl. Intan 1, Cidokom, Gunung Sindur, Kabupaten Bogor",
  },

  // Sosial media (kosongkan "" jika belum ada — link akan disembunyikan)
  social: {
    instagram: "https://instagram.com/softtin.id",
    tiktok: "https://tiktok.com/@softtin.id",
    facebook: "",
    shopee: "",
    tokopedia: "",
  },
} as const;

/**
 * Membuat tautan WhatsApp dengan pesan otomatis.
 * Dipakai oleh tombol "Beli Sekarang" dan tombol WhatsApp mengambang.
 */
export function waLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
