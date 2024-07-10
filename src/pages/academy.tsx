import Dictionary from "@/components/Dictionary";
import GridCard from "@/components/GridCard";
import HeroSection from "@/components/HeroSection";
import Map from "@/components/Map";
import { PublicLayout } from "@/layouts";
import React from "react";

const academy = () => {
  return (
    <PublicLayout title="Intract | Academy" description="">
      <HeroSection />
      <Map />
      <GridCard />
      <Dictionary />
    </PublicLayout>
  );
};

export default academy;
