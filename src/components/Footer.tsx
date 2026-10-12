import {
  CONTACT_EMAIL,
  INSTAGRAM_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_HREF,
  contactLinkClass,
} from "../data/contact";
import { EmailIcon, InstagramIcon, WhatsAppIcon } from "./ContactIcons";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-beige-dark py-8 md:py-12 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto min-w-0">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 md:items-start">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="font-serif text-base md:text-lg font-semibold text-brick">
                Heritasia
              </span>
            </div>
            <p className="text-gray-600 text-sm italic leading-relaxed">
              Indonesia's First Fusion Crafts Atelier
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base md:text-lg font-semibold text-brick mb-2 md:mb-3">
              For more information
            </h3>
            <ul className="space-y-2 text-sm leading-snug">
              <li>
                <a
                  href={INSTAGRAM_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkClass}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E4405F]/12 text-[#E4405F]">
                    <InstagramIcon />
                  </span>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkClass}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]/12 text-[#25D366]">
                    <WhatsAppIcon />
                  </span>
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className={contactLinkClass}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                    <EmailIcon />
                  </span>
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 md:pt-5 border-t border-gray-300/70">
          <p className="text-gray-500 text-xs md:text-sm text-center">
            © {new Date().getFullYear()} heritasia.id. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
