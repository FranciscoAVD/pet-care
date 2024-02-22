import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
}
