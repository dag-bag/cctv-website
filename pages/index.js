import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features";
import { Header } from "../components/Header";
import ServiceCard from "../components/ServiceCard";

export default function Home({ bookings }) {
  return (
    <div>
      <Head>
        <title>Ks Security Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Best security services in Delhi." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Seattle",
                addressRegion: "WA",
                postalCode: "98052",
                streetAddress: "20341 Whitworth Institute 405 N. Whitworth",
              },
              colleague: [
                "http://www.xyz.edu/students/alicejones.html",
                "http://www.xyz.edu/students/bobsmith.html",
              ],
              email: "mailto:jane-doe@xyz.edu",
              image: "janedoe.jpg",
              jobTitle: "Professor",
              name: "Jane Doe",
              telephone: "(425) 123-4567",
              url: "http://www.janedoe.com",
            }),
          }}
        />
      </Head>
      <Header bookings={bookings} />
      <Features />
      <ServiceCard />
    </div>
  );
}
