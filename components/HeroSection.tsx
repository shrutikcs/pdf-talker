import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="library-hero-card mb-12 md:mb-16">
      <div className="library-hero-content">
        {/* Left - Heading, Description, CTA */}
        <div className="library-hero-text">
          <h1 className="library-hero-title">Your Library</h1>
          <p className="library-hero-description">
            Convert your books into interactive AI conversations. <br />
            Listen, learn, and discuss your favorite reads.
          </p>
          <Link href="/books/new" className="library-cta-primary mt-2">
            <span className="text-xl leading-none font-medium mb-0.5">+</span>{" "}
            Add new book
          </Link>
        </div>

        {/* Center - Illustration Desktop */}
        <div className="library-hero-illustration-desktop">
          <Image
            src="/assets/hero-illustration.png"
            alt="Vintage books and globe illustration"
            width={380}
            height={280}
            priority
            quality={100}
            className="object-contain"
          />
        </div>

        {/* Right - Steps Card */}
        <div className="library-steps-card flex flex-col gap-6 py-6 px-5 min-w-[240px] shadow-soft-sm">
          <div className="library-step-item">
            <div className="library-step-number">1</div>
            <div>
              <h3 className="library-step-title">Upload PDF</h3>
              <p className="library-step-description">Add your book file</p>
            </div>
          </div>

          <div className="library-step-item">
            <div className="library-step-number">2</div>
            <div>
              <h3 className="library-step-title">AI Processing</h3>
              <p className="library-step-description">We analyze the content</p>
            </div>
          </div>

          <div className="library-step-item">
            <div className="library-step-number">3</div>
            <div>
              <h3 className="library-step-title">Voice Chat</h3>
              <p className="library-step-description">Discuss with AI</p>
            </div>
          </div>
        </div>

        {/* Mobile Illustration */}
        <div className="library-hero-illustration">
          <Image
            src="/assets/hero-illustration.png"
            alt="Vintage books and globe illustration"
            width={240}
            height={180}
            priority
            quality={100}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
