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
  email: "halo@softtin.com",
  city: {
    id: "Jakarta, Indonesia",
    en: "Jakarta, Indonesia",
  },

  // Sosial media (kosongkan "" jika belum ada — link akan disembunyikan)
  social: {
    instagram: "https://instagram.com/softtin",
    tiktok: "",
    facebook: "",
    shopee: "",
    tokopedia: "",
  },

  // Nama hotel/partner yang ditampilkan di bagian "Dipercaya oleh...".
  // ⚠️ Ini contoh placeholder. Ganti dengan partner yang BENAR-BENAR bekerja sama
  //    dengan Anda agar tidak melanggar merek dagang pihak lain.
  partners: ["The Grandeur", "Azure Suites", "Meridian", "Lumière", "Serena Resort"],
} as const;

/**
 * Membuat tautan WhatsApp dengan pesan otomatis.
 * Dipakai oleh tombol "Beli Sekarang" dan tombol WhatsApp mengambang.
 */
export function waLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
