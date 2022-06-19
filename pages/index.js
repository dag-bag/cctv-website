import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features";
import { Header } from "../components/Header";
import ServiceCard from "../components/ServiceCard";

export default function Home({ bookings }) {
  return (
    <div>
      <Header bookings={bookings} />
      <Features />
      <ServiceCard />
    </div>
  );
}
