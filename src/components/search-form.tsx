"use client"
import { useSearchStore } from "@/stores/search-store";
import { useState } from "react";
export default function SearchForm() {
  const search = useSearchStore(state=> state.search)
  const set = useSearchStore(state=> state.setSearch)
  return (
    <form action="" className="w-full h-full">
      <input
        type="search"
        value={search}
        onChange={e=>set(e.target.value)}
        className="w-full h-full bg-white rounded-md px-4 focus:outline-main"
        placeholder="Search for a guest"
      />
    </form>
  );
}
