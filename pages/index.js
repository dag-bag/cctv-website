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
      </Head>
      <Header bookings={bookings} />
      <Features />
      <ServiceCard />
    </div>
  );
}
