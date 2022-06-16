import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features";
import { Header } from "../components/Header";

export default function Home({ bookings }) {
  return (
    <div>
      <Header bookings={bookings} />
      <Features />
    </div>
  );
}
