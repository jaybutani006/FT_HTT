import React from "react";

export default function CardComponent({email,fren}) {
  return (
    <div className="w-full p-4 shadow-md lg:max-w-lg flex flex-col justify-center">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">{email}</h3>
        <p className="text-gray-600">{fren}</p>
      </div>
    </div>
  );
}
