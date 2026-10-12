import Navbar from "./Navbar";
import Footer from "./Footer";
import { EmailIcon, InstagramIcon, WhatsAppIcon } from "./ContactIcons";
import {
  CONTACT_EMAIL,
  HERITASIA_SLOGAN,
  INSTAGRAM_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_HREF,
  contactPageLinkClass,
} from "../data/contact";
import { usePageMeta } from "../hooks/usePageMeta";

export default function ContactPage() {
  usePageMeta(
    "Contact Us | Heritasia",
    "Reach Heritasia for collection details, product inquiries, and questions—Instagram, WhatsApp, or email.",
  );

  return (
    <div className="min-h-screen overflow-x-clip bg-beige">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-xl mx-auto min-w-0 text-center">
          <img
            src="/logo-no-bg.png"
            alt="Heritasia"
            className="h-16 sm:h-20 md:h-24 w-auto mx-auto mb-5 md:mb-6"
          />
          <p className="font-serif text-sm sm:text-base text-gray-600 italic mb-8 md:mb-10 leading-relaxed">
            {HERITASIA_SLOGAN}
          </p>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brick mb-4 md:mb-5 leading-tight">
            Contact Us
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 md:mb-10 max-w-md mx-auto">
            For more information about our collections, product inquiries, or
            any other questions, please feel free to reach out to us.
          </p>

          <ul className="space-y-3 md:space-y-4 text-left">
            <li>
              <a
                href={INSTAGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactPageLinkClass} group text-gray-700`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4405F]/12 text-[#E4405F]">
                  <InstagramIcon className="w-5 h-5" />
                </span>
                <span className="min-w-0 text-sm md:text-base leading-snug">
                  <span className="font-serif font-semibold text-brick">
                    Instagram:{" "}
                  </span>
                  <span className="group-hover:text-brick transition-colors duration-200">
                    @heritasia.id
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactPageLinkClass} group text-gray-700`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/12 text-[#25D366]">
                  <WhatsAppIcon className="w-5 h-5" />
                </span>
                <span className="min-w-0 text-sm md:text-base leading-snug">
                  <span className="font-serif font-semibold text-brick">
                    WhatsApp:{" "}
                  </span>
                  <span className="group-hover:text-brick transition-colors duration-200">
                    {WHATSAPP_DISPLAY}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`${contactPageLinkClass} group text-gray-700`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                  <EmailIcon className="w-5 h-5" />
                </span>
                <span className="min-w-0 text-sm md:text-base leading-snug break-all sm:break-normal">
                  <span className="font-serif font-semibold text-brick">
                    Email:{" "}
                  </span>
                  <span className="group-hover:text-brick transition-colors duration-200">
                    {CONTACT_EMAIL}
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
