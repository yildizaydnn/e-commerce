import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";
import { footerColumns, paymentLogos, socialLinks } from "./FooterData";
import FooterColumn from "./FooterColumn";
import Image from "next/image";
import Link from "next/link";

const IconMap: Record<string, any> = {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
};

export default function Footer() {
  return (
    <footer className="bg-[#FCEDE6] text-[#222] mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left columns (1..8) */}
          <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {footerColumns.map((col) => (
              <FooterColumn
                key={col.title}
                title={col.title}
                links={col.links}
              />
            ))}
          </div>

          {/* Right support / apps area */}
          <div className="md:col-span-3">
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Mobil Uygulamalar</h4>
              <div className="space-y-3">
                <a
                  className="flex items-center gap-3 border rounded-md px-3 py-2"
                  href="#"
                >
                  <Image
                    src="/assets/icons/apple.svg"
                    alt="appstore"
                    width={24}
                    height={24}
                  />
                  <div className="text-xs">
                    <div>APP STORE'dan</div>
                    <div className="font-semibold">İNDİREBİLİRSİNİZ</div>
                  </div>
                </a>

                <a
                  className="flex items-center gap-3 border rounded-md px-3 py-2"
                  href="#"
                >
                  <Image
                    src="/assets/icons/google-play.svg"
                    alt="play"
                    width={24}
                    height={24}
                  />
                  <div className="text-xs">
                    <div>GOOGLE PLAY'den</div>
                    <div className="font-semibold">İNDİREBİLİRSİNİZ</div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Bizi Takip Edin</h4>
              <div className="flex gap-3 items-center">
                {socialLinks.map((s) => {
                  const Icon = IconMap[s.icon] ?? FaInstagram;
                  return (
                    <Link
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="p-2 rounded-full bg-white shadow"
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t mt-8 mb-6" />

        {/* Payment logos / small icons row */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-3 items-center flex-wrap">
            {paymentLogos.map((src, idx) => (
              <div key={idx} className="h-6">
                <Image
                  src={src}
                  alt={`logo-${idx}`}
                  width={60}
                  height={24}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-xs opacity-70">
            © 2025 Şirket Adı. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
}
