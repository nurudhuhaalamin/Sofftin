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
      "Bantal memory foam dan guling premium dirancang khusus untuk menghadirkan kenyamanan tidur standar hotel mewah di rumah Anda.",

    // Keunggulan
    "adv.title": "Kenapa Memilih Softtin",
    "adv.subtitle": "Kualitas standar hotel bintang lima untuk istirahat terbaik Anda.",
    "adv.1.title": "Memory Foam Premium",
    "adv.1.desc": "Busa berkualitas tinggi yang menyesuaikan bentuk kepala dan leher.",
    "adv.2.title": "Higienis & Anti-bakteri",
    "adv.2.desc": "Material bersih, anti-tungau, dan ramah untuk kulit sensitif.",
    "adv.3.title": "Standar Hotel Mewah",
    "adv.3.desc": "Dipercaya untuk menghadirkan pengalaman tidur kelas hotel.",
    "adv.4.title": "Garansi & Layanan",
    "adv.4.desc": "Garansi produk dan layanan pelanggan yang ramah via WhatsApp.",
    "adv.5.title": "Awet & Tahan Lama",
    "adv.5.desc": "Busa berkualitas yang mempertahankan bentuk dalam pemakaian jangka panjang.",

    // Produk unggulan
    "products.featuredLabel": "PRODUK UNGGULAN",
    "products.featuredTitle": "Bantal & Guling Luxury",
    "products.featuredSubtitle":
      "Dibuat dari memory foam berkualitas tinggi untuk kenyamanan tidur maksimal setiap malam.",
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
      "Pesan langsung lewat WhatsApp. Tim kami siap membantu memilihkan produk terbaik untuk Anda.",

    // Tentang
    "about.title": "Tentang Softtin",
    "about.body":
      "Softtin lahir dari satu keyakinan sederhana: setiap orang berhak atas tidur berkualitas. Kami menghadirkan bantal dan guling memory foam berstandar hotel mewah, dibuat dengan material premium yang higienis dan tahan lama. Setiap produk dirancang untuk menopang kepala, leher, dan tubuh Anda dengan sempurna — agar setiap malam terasa seperti menginap di hotel bintang lima.",

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
      "Premium memory foam pillows and bolsters designed to bring luxury-hotel sleep comfort right into your home.",

    // Advantages
    "adv.title": "Why Choose Softtin",
    "adv.subtitle": "Five-star hotel quality for your best rest.",
    "adv.1.title": "Premium Memory Foam",
    "adv.1.desc": "High-quality foam that adapts to the shape of your head and neck.",
    "adv.2.title": "Hygienic & Anti-bacterial",
    "adv.2.desc": "Clean, dust-mite resistant material, friendly for sensitive skin.",
    "adv.3.title": "Luxury Hotel Standard",
    "adv.3.desc": "Trusted to deliver a true hotel-class sleep experience.",
    "adv.4.title": "Warranty & Service",
    "adv.4.desc": "Product warranty and friendly customer service via WhatsApp.",
    "adv.5.title": "Durable & Long-lasting",
    "adv.5.desc": "Quality foam that keeps its shape through long-term use.",

    // Featured products
    "products.featuredLabel": "FEATURED PRODUCTS",
    "products.featuredTitle": "Luxury Pillows & Bolsters",
    "products.featuredSubtitle":
      "Made from high-quality memory foam for maximum sleeping comfort every night.",
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
      "Order directly via WhatsApp. Our team is ready to help you pick the best product.",

    // About
    "about.title": "About Softtin",
    "about.body":
      "Softtin was born from one simple belief: everyone deserves quality sleep. We bring luxury-hotel-standard memory foam pillows and bolsters, crafted from premium, hygienic, and durable materials. Every product is designed to perfectly support your head, neck, and body — so every night feels like a stay at a five-star hotel.",

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
