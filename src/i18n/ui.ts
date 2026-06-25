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
    "hero.badge": "TIDUR SEHAT, TOPANGAN TEPAT",
    "hero.title": "Topangan Tepat, Tidur Berkualitas",
    "hero.subtitle":
      "Softtin menghadirkan bantal dan guling memory foam yang dirancang secara ergonomis untuk menyangga leher dan tulang belakang Anda — membantu meredakan pegal dan menghadirkan istirahat yang benar-benar memulihkan, malam demi malam.",

    // Keunggulan
    "adv.title": "Kenapa Memilih Softtin",
    "adv.subtitle": "Setiap produk kami dirancang dengan prinsip ergonomis untuk menyangga tubuh dan menghadirkan istirahat yang memulihkan.",
    "adv.1.title": "Topangan Mengikuti Tubuh",
    "adv.1.desc": "Memory foam mengikuti lekuk kepala dan leher, menjaga tulang belakang tetap sejajar sepanjang malam.",
    "adv.2.title": "Meredakan Titik Tekan",
    "adv.2.desc": "Tekanan tubuh terdistribusi merata sehingga otot leher dan bahu rileks — bangun terasa segar tanpa pegal.",
    "adv.3.title": "Higienis & Anti-Tungau",
    "adv.3.desc": "Struktur busa yang padat menahan debu, tungau, dan bakteri; ramah bagi kulit sensitif dan penderita alergi.",
    "adv.4.title": "Nyaman Sepanjang Malam",
    "adv.4.desc": "Kepadatan dan kelembutan yang seimbang menjaga kenyamanan tetap konsisten — dari Anda berbaring hingga bangun pagi.",
    "adv.5.title": "Awet & Tahan Lama",
    "adv.5.desc": "Busa berkualitas yang kembali ke bentuk semula dan tetap nyaman untuk pemakaian harian bertahun-tahun.",

    // Produk unggulan
    "products.featuredLabel": "PRODUK UNGGULAN",
    "products.featuredTitle": "Bantal & Guling Memory Foam Premium",
    "products.featuredSubtitle":
      "Dirancang dari memory foam berkualitas tinggi untuk menyangga tubuh dengan tepat — membantu Anda tidur lebih nyenyak setiap malam.",
    "products.allTitle": "Semua Produk",
    "products.allSubtitle": "Pilih produk yang paling sesuai dengan kebutuhan tidur Anda.",
    "products.empty": "Belum ada produk pada kategori ini.",
    "products.specs": "Spesifikasi",
    "products.related": "Produk Lainnya",

    // Partner
    "partners.title": "Dipercaya oleh Pelanggan di Berbagai Kota",

    // Testimoni
    "testi.title": "Apa Kata Mereka",
    "testi.subtitle": "Pengalaman nyata dari pelanggan Softtin.",

    // CTA bawah
    "cta.bottomTitle": "Siap Tidur Lebih Berkualitas?",
    "cta.bottomSubtitle":
      "Konsultasikan kebutuhan tidur Anda langsung lewat WhatsApp. Tim kami siap membantu memilih bantal atau guling yang paling pas untuk Anda.",

    // Tentang (company profile)
    "about.title": "Tentang Softtin",
    "about.body":
      "Softtin adalah brand perlengkapan tidur yang berfokus pada kesehatan dan kenyamanan istirahat Anda. Kami percaya tidur yang berkualitas adalah fondasi hari yang produktif — dan semua itu berawal dari topangan yang tepat. Karena itu, kami mengembangkan bantal dan guling memory foam yang dirancang secara ergonomis, dibuat dari material berkualitas yang higienis dan tahan lama, untuk membantu menjaga kesejajaran tubuh dan meredakan titik tekan sepanjang malam.",
    "about.visionTitle": "Visi",
    "about.vision":
      "Menjadi brand perlengkapan tidur tepercaya yang membantu setiap keluarga Indonesia menikmati tidur yang sehat dan berkualitas.",
    "about.missionTitle": "Misi",
    "about.mission1": "Menghadirkan produk tidur yang dirancang ergonomis dan teruji kenyamanannya.",
    "about.mission2": "Menggunakan material berkualitas yang higienis, aman, dan tahan lama.",
    "about.mission3": "Memberikan pelayanan yang ramah, cepat, dan jujur bagi setiap pelanggan.",
    "about.valuesTitle": "Nilai Kami",
    "about.value1.title": "Kualitas",
    "about.value1.desc": "Kami tidak berkompromi pada mutu material dan ketelitian di setiap produk.",
    "about.value2.title": "Kepercayaan",
    "about.value2.desc": "Transparan dalam informasi produk dan harga demi hubungan jangka panjang.",
    "about.value3.title": "Kepedulian",
    "about.value3.desc": "Kenyamanan dan kesehatan tidur Anda adalah prioritas utama kami.",

    // Kontak
    "contact.title": "Hubungi Kami",
    "contact.subtitle":
      "Punya pertanyaan atau ingin memesan? Hubungi kami langsung lewat WhatsApp.",
    "contact.emailLabel": "Email",
    "contact.waLabel": "WhatsApp",
    "contact.locationLabel": "Lokasi",

    // Footer
    "footer.tagline": "Topangan tepat untuk tidur berkualitas.",
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
    "hero.badge": "HEALTHY SLEEP, PROPER SUPPORT",
    "hero.title": "Proper Support, Quality Sleep",
    "hero.subtitle":
      "Softtin offers ergonomically designed memory foam pillows and bolsters that support your neck and spine — helping relieve aches and deliver truly restorative rest, night after night.",

    // Advantages
    "adv.title": "Why Choose Softtin",
    "adv.subtitle": "Every product is engineered on ergonomic principles to support your body and deliver truly restorative rest.",
    "adv.1.title": "Body-Contouring Support",
    "adv.1.desc": "Memory foam follows the curve of your head and neck, keeping your spine aligned all night.",
    "adv.2.title": "Pressure-Point Relief",
    "adv.2.desc": "Weight is distributed evenly so neck and shoulder muscles relax — wake up fresh, not stiff.",
    "adv.3.title": "Hygienic & Dust-Mite Resistant",
    "adv.3.desc": "The dense foam structure resists dust, mites, and bacteria; friendly for sensitive skin and allergy sufferers.",
    "adv.4.title": "Comfortable All Night",
    "adv.4.desc": "Balanced density and softness keep comfort consistent — from the moment you lie down to the moment you wake.",
    "adv.5.title": "Durable & Long-lasting",
    "adv.5.desc": "Quality foam that springs back to shape and stays comfortable through years of daily use.",

    // Featured products
    "products.featuredLabel": "FEATURED PRODUCTS",
    "products.featuredTitle": "Premium Memory Foam Pillows & Bolsters",
    "products.featuredSubtitle":
      "Engineered from high-quality memory foam to support your body precisely — for deeper sleep every night.",
    "products.allTitle": "All Products",
    "products.allSubtitle": "Choose the product that best fits your sleep needs.",
    "products.empty": "No products in this category yet.",
    "products.specs": "Specifications",
    "products.related": "Other Products",

    // Partners
    "partners.title": "Trusted by Customers Across the Country",

    // Testimonials
    "testi.title": "What They Say",
    "testi.subtitle": "Real experiences from Softtin customers.",

    // Bottom CTA
    "cta.bottomTitle": "Ready for Better Quality Sleep?",
    "cta.bottomSubtitle":
      "Tell us about your sleep needs directly via WhatsApp. Our team is ready to help you choose the pillow or bolster that fits you best.",

    // About (company profile)
    "about.title": "About Softtin",
    "about.body":
      "Softtin is a sleep essentials brand focused on the health and comfort of your rest. We believe quality sleep is the foundation of a productive day — and it all begins with proper support. That is why we develop ergonomically designed memory foam pillows and bolsters, made from quality materials that are hygienic and durable, to help keep your body aligned and relieve pressure points all night long.",
    "about.visionTitle": "Vision",
    "about.vision":
      "To become a trusted sleep essentials brand that helps every Indonesian family enjoy healthy, quality sleep.",
    "about.missionTitle": "Mission",
    "about.mission1": "Deliver sleep products that are ergonomically designed and tested for comfort.",
    "about.mission2": "Use quality materials that are hygienic, safe, and durable.",
    "about.mission3": "Provide friendly, fast, and honest service to every customer.",
    "about.valuesTitle": "Our Values",
    "about.value1.title": "Quality",
    "about.value1.desc": "We never compromise on material quality and attention to detail in every product.",
    "about.value2.title": "Trust",
    "about.value2.desc": "Transparent product information and pricing for a lasting relationship.",
    "about.value3.title": "Care",
    "about.value3.desc": "Your sleep comfort and health are our top priority.",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Have a question or want to order? Reach us directly via WhatsApp.",
    "contact.emailLabel": "Email",
    "contact.waLabel": "WhatsApp",
    "contact.locationLabel": "Location",

    // Footer
    "footer.tagline": "Proper support for quality sleep.",
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
