import type { Metadata } from "next";
import CategoryList from "@/app/ui/home/category-list";
import Collections from "@/app/ui/home/collections";
import SectionTitle from "@/app/ui/section-title";
import { Suspense } from "react";
import {
  CategoriesSkeleton,
  CampaignBannerSkeleton,
  CollectionSkeleton,
} from "@/app/ui/skeletons";
import CampaignList from "./ui/home/campaign-list";

export const metadata: Metadata = {
  title: "Gst3d",
  description: "next app",
};
export default function Home() {
  return (
    <>
      <div className="bg-wall bg-cover bg-center min-h-screen text-white">
        <div className="bg-black/60 backdrop-blur-sm min-h-screen p-6">     
          <Suspense fallback={<CategoriesSkeleton />}>
            <CategoryList />
          </Suspense>
          <Suspense fallback={<CampaignBannerSkeleton />}>
            <CampaignList />
          </Suspense>
          <SectionTitle title="Productos" />
          <Suspense fallback={<CollectionSkeleton />}>
            <Collections />
          </Suspense>
        </div>
      </div>
    </>
  );
}
