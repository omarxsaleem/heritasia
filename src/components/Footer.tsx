export default function Footer() {
  return (
    <footer id="contact" className="bg-beige-dark py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-serif text-lg font-semibold text-brick">
                Heritasia
              </span>
            </div>
            <p className="text-gray-600 text-sm italic">
              The Indonesian Heritage Crafts' Atelier
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-brick mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/heritasia.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brick transition-colors duration-200 text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-brick transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-brick transition-colors duration-200 text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-brick mb-4">
              Reach Us
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              hello@heritasia.id
            </p>
            <p className="text-gray-600 text-sm">
              @heritasia.id
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-300">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} heritasia.id. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

