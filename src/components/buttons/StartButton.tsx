"use client";

import { useGoTo } from "@/hooks";

export function StartButton() {
  const goto = useGoTo();
  const handleClick = () => {
    goto("/login");
  };
  return (
    <button
      className="bg-blue-700 p-4 rounded-xl font-mono text-3xl shadow border-[6px] border-blue-900"
      onClick={handleClick}
    >
      Comenzar a jugar!
    </button>
  );
}
