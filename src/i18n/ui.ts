/**
 * Semua teks antarmuka (selain produk) untuk Bahasa Indonesia & Inggris.
 * Produk punya teksnya sendiri di file masing-masing (src/content/products).
 */

export const languages = {
  id: "Indonesia",
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "id";

export const ui = {
  id: {
    // Navigasi
    "nav.home": "Beranda",
    "nav.products": "Produk",
    "nav.advantages": "Keunggulan",
    "nav.about": "Tentang",
    "nav.contact": "Hubungi Kami",
    "nav.order": "Pesan Sekarang",

    // Umum
    "cta.buy": "Beli Sekarang",
    "cta.viewProducts": "Lihat Produk",
    "cta.viewDetail": "Lihat Detail",
    "cta.askWhatsapp": "Tanya via WhatsApp",
    "common.from": "Mulai",
    "common.allCategories": "Semua",

    // Hero
    "hero.badge": "HOTEL LUXURY SLEEP EXPERIENCE",
    "hero.title": "Tidur Berkualitas, Layanan Berkelas",
    "hero.subtitle":
      "Bantal dan guling memory foam premium yang mengikuti lekuk tubuh Anda — menjaga leher dan tulang belakang tetap sejajar untuk tidur lebih nyenyak dan bebas pegal, dengan kenyamanan khas hotel bintang lima.",

    // Keunggulan
    "adv.title": "Kenapa Memilih Softtin",
    "adv.subtitle": "Dirancang untuk menyangga tubuh Anda dan menghadirkan istirahat yang benar-benar memulihkan.",
    "adv.1.title": "Topangan Mengikuti Tubuh",
    "adv.1.desc": "Memory foam mengikuti lekuk kepala dan leher, menjaga tulang belakang tetap sejajar sepanjang malam.",
    "adv.2.title": "Meredakan Titik Tekan",
    "adv.2.desc": "Tekanan tubuh terdistribusi merata sehingga otot leher dan bahu rileks — bangun terasa segar tanpa pegal.",
    "adv.3.title": "Higienis & Anti-Tungau",
    "adv.3.desc": "Struktur busa yang padat menahan debu, tungau, dan bakteri; ramah bagi kulit sensitif dan penderita alergi.",
    "adv.4.title": "Kenyamanan Standar Hotel",
    "adv.4.desc": "Kepadatan dan kelembutan yang terukur menghadirkan rasa tidur di hotel bintang lima, malam demi malam.",
    "adv.5.title": "Awet & Tahan Lama",
    "adv.5.desc": "Busa berkualitas yang kembali ke bentuk semula dan tetap nyaman untuk pemakaian harian bertahun-tahun.",

    // Produk unggulan
    "products.featuredLabel": "PRODUK UNGGULAN",
    "products.featuredTitle": "Bantal & Guling Luxury",
    "products.featuredSubtitle":
      "Dirancang dari memory foam berkualitas tinggi untuk menyangga tubuh dengan sempurna — tidur lebih nyenyak setiap malam.",
    "products.allTitle": "Semua Produk",
    "products.allSubtitle": "Pilih produk yang paling sesuai dengan kebutuhan tidur Anda.",
    "products.empty": "Belum ada produk pada kategori ini.",
    "products.specs": "Spesifikasi",
    "products.related": "Produk Lainnya",

    // Partner
    "partners.title": "Dipercaya oleh Standar Hotel Ternama",

    // Testimoni
    "testi.title": "Apa Kata Mereka",
    "testi.subtitle": "Pengalaman nyata dari pelanggan Softtin.",

    // CTA bawah
    "cta.bottomTitle": "Siap Tidur Lebih Berkualitas?",
    "cta.bottomSubtitle":
      "Konsultasikan kebutuhan tidur Anda langsung lewat WhatsApp. Tim kami siap membantu memilih bantal atau guling yang paling pas untuk Anda.",

    // Tentang
    "about.title": "Tentang Softtin",
    "about.body":
      "Softtin lahir dari satu keyakinan sederhana: tidur berkualitas adalah hak setiap orang. Kami menghadirkan bantal dan guling memory foam berstandar hotel mewah — dirancang untuk mengikuti lekuk tubuh, menjaga kesejajaran leher dan tulang belakang, serta meredakan titik-titik tekan agar Anda bangun lebih segar. Dibuat dari material premium yang higienis dan tahan lama, setiap produk Softtin menghadirkan ketenangan tidur kelas bintang lima ke kamar Anda.",

    // Kontak
    "contact.title": "Hubungi Kami",
    "contact.subtitle":
      "Punya pertanyaan atau ingin memesan? Hubungi kami langsung lewat WhatsApp.",
    "contact.emailLabel": "Email",
    "contact.waLabel": "WhatsApp",
    "contact.locationLabel": "Lokasi",

    // Footer
    "footer.tagline": "Tidur berkualitas, layanan berkelas.",
    "footer.menu": "Menu",
    "footer.products": "Produk",
    "footer.contact": "Kontak",
    "footer.follow": "Ikuti Kami",
    "footer.rights": "Hak cipta dilindungi.",

    // Pesan WhatsApp otomatis
    "wa.general": "Halo Softtin, saya ingin bertanya tentang produk Anda.",
    "wa.orderPrefix": "Halo Softtin, saya mau pesan:",
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.advantages": "Advantages",
    "nav.about": "About",
    "nav.contact": "Contact Us",
    "nav.order": "Order Now",

    // Common
    "cta.buy": "Buy Now",
    "cta.viewProducts": "View Products",
    "cta.viewDetail": "View Detail",
    "cta.askWhatsapp": "Ask via WhatsApp",
    "common.from": "From",
    "common.allCategories": "All",

    // Hero
    "hero.badge": "HOTEL LUXURY SLEEP EXPERIENCE",
    "hero.title": "Quality Sleep, Premium Service",
    "hero.subtitle":
      "Premium memory foam pillows and bolsters that contour to your body — keeping your neck and spine aligned for deeper, ache-free sleep, with signature five-star hotel comfort.",

    // Advantages
    "adv.title": "Why Choose Softtin",
    "adv.subtitle": "Engineered to support your body and deliver truly restorative rest.",
    "adv.1.title": "Body-Contouring Support",
    "adv.1.desc": "Memory foam follows the curve of your head and neck, keeping your spine aligned all night.",
    "adv.2.title": "Pressure-Point Relief",
    "adv.2.desc": "Weight is distributed evenly so neck and shoulder muscles relax — wake up fresh, not stiff.",
    "adv.3.title": "Hygienic & Dust-Mite Resistant",
    "adv.3.desc": "The dense foam structure resists dust, mites, and bacteria; friendly for sensitive skin and allergy sufferers.",
    "adv.4.title": "Hotel-Grade Comfort",
    "adv.4.desc": "Carefully tuned density and softness bring a five-star hotel feel, night after night.",
    "adv.5.title": "Durable & Long-lasting",
    "adv.5.desc": "Quality foam that springs back to shape and stays comfortable through years of daily use.",

    // Featured products
    "products.featuredLabel": "FEATURED PRODUCTS",
    "products.featuredTitle": "Luxury Pillows & Bolsters",
    "products.featuredSubtitle":
      "Engineered from high-quality memory foam to support your body perfectly — for deeper sleep every night.",
    "products.allTitle": "All Products",
    "products.allSubtitle": "Choose the product that best fits your sleep needs.",
    "products.empty": "No products in this category yet.",
    "products.specs": "Specifications",
    "products.related": "Other Products",

    // Partners
    "partners.title": "Trusted to Meet Renowned Hotel Standards",

    // Testimonials
    "testi.title": "What They Say",
    "testi.subtitle": "Real experiences from Softtin customers.",

    // Bottom CTA
    "cta.bottomTitle": "Ready for Better Quality Sleep?",
    "cta.bottomSubtitle":
      "Tell us about your sleep needs directly via WhatsApp. Our team is ready to help you choose the pillow or bolster that fits you best.",

    // About
    "about.title": "About Softtin",
    "about.body":
      "Softtin was born from one simple belief: quality sleep is everyone's right. We craft luxury-hotel-standard memory foam pillows and bolsters — designed to contour to your body, keep your neck and spine aligned, and relieve pressure points so you wake up fresher. Made from premium, hygienic, and durable materials, every Softtin product brings five-star calm to your bedroom.",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Have a question or want to order? Reach us directly via WhatsApp.",
    "contact.emailLabel": "Email",
    "contact.waLabel": "WhatsApp",
    "contact.locationLabel": "Location",

    // Footer
    "footer.tagline": "Quality sleep, premium service.",
    "footer.menu": "Menu",
    "footer.products": "Products",
    "footer.contact": "Contact",
    "footer.follow": "Follow Us",
    "footer.rights": "All rights reserved.",

    // Automatic WhatsApp messages
    "wa.general": "Hello Softtin, I would like to ask about your products.",
    "wa.orderPrefix": "Hello Softtin, I would like to order:",
  },
} as const;

export type UIKey = keyof (typeof ui)["id"];
