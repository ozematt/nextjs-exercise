import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col gap-y-10 max-w-[1050px] mx-auto min-h-screen">
        <AppHeader />
        {children}
      </div>
    </>
  );
};

export default Layout;
