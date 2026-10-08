import Section from "./Section";

const craftItems = [
  {
    title: "Fair Trade",
    description:
      "We partner on fair trade principles so artisans are paid fairly and work with dignity, your purchase directly supports their craft and livelihood.",
    icon: "🤝",
  },
  {
    title: "Village Artisans",
    description:
      "Heritasia employs Indonesian artisans across village communities, keeping skills rooted where they began and strengthening local economies.",
    icon: "🏡",
  },
  {
    title: "Natural Materials",
    description:
      "Community craft sustained through rattan, teak, copper, and other natural materials—honoring tradition while caring for the environments we share.",
    icon: "🌿",
  },
];

export default function CraftSection() {
  return (
    <Section className="bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brick text-center mb-3 md:mb-4">
          Our Craft
        </h2>
        <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl mx-auto mb-8 md:mb-12 leading-[1.65] md:leading-relaxed">
          Ethical partnerships, village craftsmanship, and natural
          materials—how we bring Indonesia&apos;s heritage to your table.
        </p>
        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          {craftItems.map((item, index) => (
            <div
              key={index}
              className="bg-beige rounded-lg shadow-md p-4 sm:p-5 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-center">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg md:text-2xl font-semibold text-brick mb-2 md:mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center leading-[1.65] md:leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
