import IndexHero from "@/components/home/indexHero";
import How from "@/components/home/how";
import Faq from "@/components/home/faq";
import FooterAsset from "@/components/micro/footerAsset";
import BrowseByCategories from "@/components/major/stack";
import HomeCategories from "@/components/home/homeCategories";

const Index =() => {
  return (
    <>
      
      <IndexHero/>
      <BrowseByCategories/>
      <HomeCategories/>
      <How/>
      <Faq/>

      <FooterAsset/>
    </>
  )
}

export default Index;