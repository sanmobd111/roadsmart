import BannerSection from "@/components/Home/BannerSection";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import PopularService from "@/components/Home/PopularService";
import RequestSection from "@/components/Home/RequestSection";
import ClientTesimonials from "@/components/Home/ClientTesimonials";
import MobileappSection from "@/components/Home/mobileappSection";
import Container from "@/components/shared/container/Container";
export default function Home() {
  return (
    <div className="">
      <BannerSection></BannerSection>
      {/* Featured Products */}
      <Container>
        <div className="w-full">
          <FeaturedProducts></FeaturedProducts>
          <PopularService></PopularService>
          <RequestSection></RequestSection>
          <ClientTesimonials></ClientTesimonials>
          <MobileappSection></MobileappSection>
        </div>
      </Container>
    </div>
  );
}
