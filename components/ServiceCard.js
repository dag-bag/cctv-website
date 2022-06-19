import React from "react";
import Card from "./Card";
import { SiFsecure } from "react-icons/si";
export default function ServiceCard() {
  const cards = [
    {
      key: 1,
      src: "https://images.unsplash.com/photo-1523191504937-f00111b11d8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      icon: SiFsecure,
    },
    {
      key: 2,
      src: "https://images.unsplash.com/photo-1523191504937-f00111b11d8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      icon: SiFsecure,
    },
    {
      key: 3,
      src: "https://images.unsplash.com/photo-1523191504937-f00111b11d8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      icon: SiFsecure,
    },
    {
      key: 4,
      src: "https://images.unsplash.com/photo-1523191504937-f00111b11d8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      icon: SiFsecure,
    },
  ];
  return (
    <div className="py-10">
      <div className="text-center space-x-4 mb-8">
        <h1 className="text-4xl">
          Premium Security <span className="text-purple-500">Departments</span>
          <div className="">
            <span className="inline-block w-40 h-1 rounded-full bg-purple-500"></span>
            <span className="inline-block w-3 h-1 ml-1 rounded-full bg-purple-500"></span>
            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-purple-500"></span>
          </div>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {cards.map((card) => {
          return <Card key={card.key} src={card.src} Icon={card.icon} />;
        })}
      </div>
    </div>
  );
}
