import Section from './Section'

const craftItems = [
  {
    title: 'Heritage & Storytelling',
    description:
      'Each piece carries the stories and traditions passed down through generations, connecting you to Indonesia\'s rich cultural heritage.',
    icon: '📜',
  },
  {
    title: 'Handcrafted Excellence',
    description:
      'Meticulously crafted by skilled artisans using time-honored techniques, ensuring every item is a testament to exceptional quality.',
    icon: '✨',
  },
  {
    title: 'Sustainable Sourcing',
    description:
      'Committed to ethical practices and sustainable materials, supporting local communities and preserving traditional methods.',
    icon: '🌿',
  },
]

export default function CraftSection() {
  return (
    <Section className="bg-beige">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brick text-center mb-12">
          Our Craft
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {craftItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4 text-center">{item.icon}</div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-brick mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

