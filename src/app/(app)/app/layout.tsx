"use client"

import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import useStoreUserEffect from "@/hooks/useStoreUser";
import { useUserStore } from "@/stores/user-store";
export default function Layout({ children }: { children: React.ReactNode }) {
  const id = useStoreUserEffect();
  const set = useUserStore(state=> state.setCurrentUserId)
  if(id) set(id);
  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col max-w-[1000px] mx-auto px-4 min-h-screen">
        <AppHeader />
        {children}
        <AppFooter />
      </div>
    </>
  );
}
