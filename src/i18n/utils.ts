import { ui, defaultLang, type Lang, type UIKey } from "./ui";

/** Pastikan sebuah string adalah bahasa yang didukung, jika tidak pakai default. */
export function getLang(value: string | undefined): Lang {
  if (value === "id" || value === "en") return value;
  return defaultLang;
}

/** Ambil fungsi penerjemah untuk sebuah bahasa: t("nav.home"). */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Buat URL dengan prefix bahasa, mis. localizePath("/produk", "en") -> "/en/produk". */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${clean === "/" ? "" : clean}`;
}

/** Format harga Rupiah, mis. 699000 -> "Rp 699.000". */
export function formatPrice(value: number): string {
  return "Rp " + value.toLocaleString("id-ID");
}
