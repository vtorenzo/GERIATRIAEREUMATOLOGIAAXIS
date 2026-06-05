import About from "@/components/About";
import Doctors from "@/components/Doctors";
import FAQ from "@/components/FAQ";
import FloatingCta from "@/components/FloatingCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeCare from "@/components/HomeCare";
import HormoneAndWeightLoss from "@/components/HormoneAndWeightLoss";
import Location from "@/components/Location";
import Scheduling from "@/components/Scheduling";
import Services from "@/components/Services";
import { siteConfig } from "@/content/siteConfig";
import { getPhone, getWhatsAppUrl } from "@/lib/links";
import { buildJsonLd } from "@/lib/seo";

export default function Home() {
  const jsonLd = buildJsonLd();
  const mainPhone = getPhone(siteConfig.phones, "main");
  const floatingWhatsApp = getWhatsAppUrl(
    mainPhone.number,
    siteConfig.whatsappMessages.general
  );

  return (
    <>
      <Header logoPath={siteConfig.logoPath} shortName={siteConfig.shortName} />
      <main id="conteudo" className="site-main">
        <Hero />
        <About />
        <Services />
        <HomeCare />
        <HormoneAndWeightLoss />
        <Doctors />
        <Scheduling />
        <Location />
        <FAQ />
      </main>
      <FloatingCta whatsappHref={floatingWhatsApp} />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
