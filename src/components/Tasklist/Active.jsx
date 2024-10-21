import React from "react";

function Active({data}) {
  return (
    <div className="w-1/4 flex-shrink-0 h-full bg-zinc-400/10  rounded-xl py-10 px-6">
      <div className="flex justify-between items-center mb-5">
        <h4 className="px-5 text-md py-2 font-medium bg-blue-400 rounded-lg">
          {data.category}
        </h4>
        <p className="text-xs">{data.date}</p>
      </div>
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-sm mt-2">
        {data.description}
      </p>
    </div>
  );
}

export default Active;
