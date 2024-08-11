
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import CategoriesSection from './components/CategoriesSection'
import CelebritySection from './components/CelebritySection'
import PromotionsSection from './components/PromotionsSection'
import CustomFittingSection from './components/CustomFittingSection'


export default function Home() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      
      {/* Start of Navbar Content */}
      <div className="drawer-content">
        
       
        <Hero/>
  
        <FeaturedProducts/>
        <CelebritySection />
        <CategoriesSection />
        <PromotionsSection />
        <CustomFittingSection/>
        
      </div>
      {/* End of Navbar Content */}
      
      {/* Start of Drawer */}
      {/* <Drawer/> */}
      {/* End of Drawer */}
      
      {/* Start of Footer */}
    
      {/* End of Footer */}
    </div>
  )
}
