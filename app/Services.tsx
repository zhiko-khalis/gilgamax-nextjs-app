import Image from "next/image";

const services = [
  {
    id: 1,
    title: "MUSIC",
    description: `Arbilia is a film production company that transforms your visions into reality with stunning visuals and immersive storytelling. Our skilled team of filmmakers and creatives break new ground by tackling intricate challenges, providing customized solutions that surpass expectations and captivate audiences.`,
    tags: ["SCRIPT", "EDITING", "COLOR GRADING"],
    image: "/Aourama Chained.jpg",
    bg: "#000000", // Peach
    textColor: "#FFFFFF", // Gold
    bgImage: "/Aourama Chained.jpg", // Example background image
  },
  {
    id: 2,
    title: "FILM",
    description: `We create cinematic experiences that move audiences. From concept to screen, our team delivers high-quality films with a focus on storytelling, visuals, and emotional impact.`,
    tags: ["DIRECTION", "PRODUCTION", "POST"],
    image: "/mainCover.PNG",
    bg: "#000000", // Light Mint
    textColor: "#FFFFFF", // Dark Gray
    bgImage: "/mainCover.PNG",
  },
  {
    id: 3,
    title: "MOVIES",
    description: `Our advertising services blend creativity and strategy to deliver compelling campaigns that resonate with your target audience and drive results.`,
    tags: ["IDEATION", "SHOOTING", "EDITING"],
    image: "/Aourama Chained.jpg",
    bg: "#000000", // Peach
    textColor: "#FFFFFF", // Gold
    bgImage: "/Aourama Chained.jpg", // Example background image
  },
  {
    id: 4,
    title: "EDITING",
    description: `Expert editing services to bring your vision to life. We refine, enhance, and perfect your footage for maximum impact and clarity.`,
    tags: ["CUTTING", "COLOR", "SOUND DESIGN"],
    image: "/mainCover.PNG",
    bg: "#000000", // Light Blue-Gray
    textColor: "#FFFFFF", // Deep Blue
    bgImage: "/mainCover.PNG",
  },
];

export default function Services() {
  return (
    <section className="w-full min-h-screen flex flex-col sticky-services">
      {services.map((service, idx) => (
        <div
          key={service.id}
          className="service-section flex flex-col md:flex-row items-center justify-between py-20 px-10 gap-10 min-h-[80vh] sticky-service-section relative overflow-hidden"
          style={{ background: service.bg }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: `url(${encodeURI(service.bgImage)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.30,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start max-w-2xl z-10">
            <h2 className="text-6xl md:text-7xl text-[#d3d2cf] font-black mb-8" style={{ fontFamily: 'var(--font-papyrus)' }}>
              <span className="text-7xl font-black  mr-4">{service.id}.</span> {service.title}
            </h2>
            <p className="text-2xl mb-8 leading-snug" style={{ color: service.textColor }}>
              {service.description}
            </p>
            <div className="flex gap-6 mt-4 text-xl font-bold tracking-wide" style={{ color: service.textColor, fontFamily: 'var(--font-papyrus)' }}>
              {service.tags.map((tag, i) => (
                <span key={i} className="uppercase">{tag}{i < service.tags.length - 1 && <span className="mx-2">•</span>}</span>
              ))}
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center max-w-2xl">
            <div className="relative w-full h-80 md:h-96 overflow-hidden shadow-xl rounded-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
                className="service-image-overlay"
                priority={idx === 0}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
} 