import Category from"./Category";
import Hero from"./Hero";
import Featured from"./Featured";
import Prescription from "./Prescription";
function Home(){
    return(
    <div className="bg-[#F2FAFC]">
        <div>
            <Hero/>
            <Category/>
            <Featured/>
            <Prescription/>
        </div>
        </div>
        
    );
}
export default Home;