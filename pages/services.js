import React from "react";
import ServicePageCard from "../components/ServicePageCard";
import Head from "next/head";
export default function services() {
  const boxesData = [
    {
      key: Math.floor(Math.random() * new Date()),
      icon: "icon",
      title: "anything",
      para: "long",
    },
    {
      key: Math.floor(Math.random() * new Date()),
      icon: "icon",
      title: "anything",
      para: "long",
    },
    {
      key: Math.floor(Math.random() * new Date()),
      icon: "icon",
      title: "anything",
      para: "long",
    },
    {
      key: Math.floor(Math.random() * new Date()),
      icon: "icon",
      title: "anything",
      para: "long",
    },
  ];

  return (
    <div className="h-[80vh] w-full max-w-6xl m-auto p-5">
      <Head>
        <title>OUR SERVICES - Ks Security Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Best security services in Delhi." />
      </Head>
      <div className="text space-y-3">
        <h2 className="text-[#42394A] text-4xl font-semibold">
          We have web <br /> accesbility in mind.
        </h2>
        <p className="text-[#9899AC]">
          Our mission empower business to build their website.
          <br /> content the acct to the help people.
        </p>
      </div>
      <div className="grid grid-cols-3">
        <ServicePageCard />
      </div>
    </div>
  );
}
