import { useRef, } from "react";
import mansion from "../assets/mansions.jpg";
import boat from "../assets/boats.jpg";
import luxe from "../assets/luxe.jpg";
import piano from "../assets/grandPianos.jpg";
import lake from "../assets/lake.jpg";
import skiing from "../assets/skiing.jpg";
import tree from "../assets/treeHouse.jpg";
import omg from "../assets/omg.jpg";
import pool from "../assets/amazingPool.jpg";
import amazing from "../assets/Amazing views.png";
import cabin from "../assets/cabins.jpg";
import beach from "../assets/beach.jpg";
import island from "../assets/island.jpg"
import castle from "../assets/castles.jpg"
import riads from "../assets/riads.jpg"
import adapted from "../assets/adapted.jpg"
import container from "../assets/containers.jpg"
import cave from "../assets/caves.jpg"
import chef from "../assets/chef'sKitchen.jpg"
import camper from "../assets/campers.jpg"
import trulli from "../assets/truli.jpg"
import creative from "../assets/creativeSpaces.jpg"
import arctic from "../assets/arctic.jpg"
import barn from "../assets/barns.jpg"
import bed from "../assets/bed&Breakfast.jpg"
import country from "../assets/countrySide.jpg"
import yurt from "../assets/yurts.jpg"
import wind from "../assets/windMills.jpg"
import vinyard from "../assets/vinyards.jpg"
import tropical from "../assets/tropical.jpg"
import trending from "../assets/trending.jpg"
import towers from "../assets/towers.jpg"
import topcities from "../assets/topCities.jpg"
import top from "../assets/top of the world.jpg"
import tiny from "../assets/tinyHomes.jpg"
import surfing from "../assets/surfing.jpg"
import skin from "../assets/skinout.jpg"
import shephard from "../assets/shephardHuts.jpg"
import ryokans from "../assets/ryokans.jpg"
import rooms from "../assets/rooms.jpg"
import play from "../assets/play.jpg"
import off from "../assets/off-the-grid.jpg"
import neww from "../assets/new.jpg"
import national from "../assets/nationalParks.jpg"
import minus from "../assets/minus.jpg"
import lakefront from "../assets/lakeFront.jpg"
import house from "../assets/houseBoats.jpg"
import historical from "../assets/historical.jpg"
import hanoks from "../assets/hanoks.jpg"
import golfing from "../assets/golfing.jpg"
import farm from "../assets/farms.jpg"
import earth from "../assets/eatthHomes.jpg"
import domes from "../assets/domes.jpg"
import design from "../assets/design.jpg"
import dessert from "../assets/deserts.jpg"
import damm from "../assets/dammusi.jpg"
import cycladic from "../assets/cycladic.jpg"
import camping from "../assets/camping.jpg"
import frame from "../assets/a-Frames.jpg"
import casa from "../assets/casas.jpg"
import beachfront from "../assets/beachFront.jpg"







import { CircleChevronRight, CircleChevronLeft,  } from "lucide-react";

function Frame() {
  const navRef = useRef<HTMLElement>(null);

  function left() {
    if (navRef.current) {
      navRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
  }

  function right() {
    if (navRef.current) {
      navRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    }
  }
  return (
    //     <main className="p-10">
    //  <div className='relative'>
    //         {/* <div  onClick={left}><CircleChevronLeft/></div> */}
    //         <button
    //           onClick={left}
    //           className="absolute rounded-full bg-white top-1/2 -translate-y-1/"
    //         >
    //           <CircleChevronLeft/>
    //         </button>

    //           <button
    //           onClick={right}
    //           className="absolute rounded-full bg-white top-1/2 -translate-y-1/"
    //         >
    //           <CircleChevronRight/>
    //         </button>

    //          <nav
    //           ref={navRef}
    //           className="flex navbar gap-5 py-10 w-full overflow-x-scroll px-20"
    //         >
    //         <div className='hidden md:block'>
    //             <img src={amazing} alt="" />
    //             <p className='text-xs pt-2'>Amazing views</p>
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={cabin} alt="" />
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={beach} alt="" />
    //             <p className='text-xs pt-2 '>Beachfront</p>
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={skiing} alt="" />
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={piano} alt="" />
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={mansion} alt="" />
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={omg} alt="" />
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={pool} alt="" />
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={luxe} alt="" />
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={boat} alt="" />
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={lake} alt="" />
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={tree} alt="" />
    //         </div>
    //           <div className='hidden md:block'>
    //             <img src={luxe} alt="" />
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={boat} alt="" />
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={lake} alt="" />
    //         </div>
    //         <div className='hidden md:block'>
    //             <img src={tree} alt="" />
    //         </div>
    //          </nav>
    //         {/* <div className='hidden md:block'>
    //             <img src={right} alt="" />
    //         </div> */}
    //         {/* <div onClick={right}><CircleChevronRight/></div> */}

    //         {/* <div className='hidden md:block'>
    //             <img src={button} alt="" />
    //         </div> */}

    //     </div>
    //     </main>

    <main className="p-1 ">
      <div className="relative">
        <button
          onClick={left}
          className="h-20 w-20 absolute rounded-full  top-1/2 -translate-y-1/2"
        >
          <CircleChevronLeft />
        </button>
        <button
          onClick={right}
          className="h- w- absolute  right-0 top-1/2 -translate-y-1/2 "
        >
          <CircleChevronRight />
        </button>
        <nav ref={navRef} className="flex items-center gap-5  overflow-hidden px-5">
          <div className=" flex-wrap ">
             <img src={island} className="h-6 mx-auto" alt="" /> 
            <p className="text-xs whitespace-nowrap">Islands</p>
            {" "}
          </div>
          <div className="flex-wrap ">
            <img src={omg} className="h-6" alt="" /> 
             <p className="text-xs">OMG!</p>
            {" "}
          </div>
          
          <div className='flex-wrap'>
            <img src={pool} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Amazing pools</p> </div>

             <div className='flex-wrap'>
            <img src={beach} className="h-6" alt="" />
             <p className="text-xs ">Beach</p></div>

             <div className='flex-wrap'>
            <img src={castle} className="h-6" alt="" />
             <p  className="text-xs ">Castles</p>        </div>
             <div className=''>
            <img src={tree} className="h-6" alt="" />
             <p className="text-xs whitespace-nowrap">Treehouses</p>        </div>
             <div className=''>
            <img src={lake} className="h-10" alt="" />
             <p className="text-xs whitespace-nowrap">Lake</p>        </div>
             <div className=''>
            <img src={skiing} className="h-6" alt="" />
             <p className="text-xs whitespace-nowrap">Skiing</p>        </div>
             <div className=''>
            <img src={cabin} className="h-6" alt="" />
             <p className="text-xs whitespace-nowrap">Cabins</p>        </div>
             <div className=''>
            <img src={piano} className="h-6" alt="" />
             <p className="text-xs whitespace-nowrap">Grand piano</p>        </div>
             <div className=''>
            <img src={boat} className="h-6" alt="" />
             <p className="text-xs whitespace-nowrap">Boats</p>        </div>
             <div className=''>
            <img src={luxe} className="h-6" alt="" />
             <p className="text-xs whitespace-nowrap">Luxe</p>        </div>
             <div className=''>
            <img src={mansion} className="h-6" alt="" />
             <p className="text-xs whitespace-nowrap">Mansions</p>        </div>
             <div className=''>
            <img src={amazing} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Amazing views</p>        </div>
             <div className=''>
            <img src={riads} className="h-6 mx-auto" alt="" />
             <p>Riads</p>        </div>
             <div className=''>
            <img src={camper} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Camper</p>        </div>
             <div className=''>
            <img src={adapted} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Adapted</p>        </div>
             <div className=''>
            <img src={farm} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Farms</p>        </div>
             <div className=''>
            <img src={camping} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Camping</p>        </div>
             <div className=''>
            <img src={country} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Countryside</p>        </div>
             <div className=''>
            <img src={top} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Top of the world</p>        </div><div className=''>
            <img src={towers} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Towers</p>        </div>
             <div className=''>
            <img src={topcities} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Top cities</p>        </div>
             <div className=''>
            <img src={barn} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Barn</p>        </div>
              <div className=''>
            <img src={bed} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Bed & breakfasts</p>        </div>
              <div className=''>
            <img src={ryokans} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Ryokans</p>        </div>
              <div className=''>
            <img src={rooms} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Rooms</p>        </div>
              <div className=''>
            <img src={shephard} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Shephard's huts</p>        </div>
              <div className=''>
            <img src={skin} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Ski-in/out</p>        </div>
              <div className=''>
            <img src={neww} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">New</p>        </div>
              <div className=''>
            <img src={damm} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Dammusi</p>        </div>
              <div className=''>
            <img src={design} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Design</p>        </div>
              <div className=''>
            <img src={dessert} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Desert</p>        </div>
              <div className=''>
            <img src={cycladic} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Cycladic homes</p>        </div>
              <div className=''>
            <img src={domes} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Domes</p>        </div>
              <div className=''>
            <img src={earth} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Earth homes</p>        </div>
              <div className=''>
            <img src={golfing} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Golfing</p>        </div>
              <div className=''>
            <img src={hanoks} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Hanoks</p>        </div>
              <div className=''>
            <img src={historical} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Historical homes</p>        </div>
              <div className=''>
            <img src={house} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Houseboats</p>        </div>
              <div className=''>
            <img src={lakefront} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Lakefront</p>        </div>
              <div className=''>
            <img src={minus} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Minus</p>        </div>
              <div className=''>
            <img src={national} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">National parks</p>        </div>
              <div className=''>
            <img src={off} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Off-the-grid</p>        </div>
              <div className=''>
            <img src={play} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Play</p>        </div>
              <div className=''>
            <img src={surfing} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Surfing</p>        </div>
              <div className=''>
            <img src={tiny} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Tiny homes</p>        </div>
              <div className=''>
            <img src={trending} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Trending</p>        </div>
              <div className=''>
            <img src={tropical} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Tropical</p>        </div>
              <div className=''>
            <img src={vinyard} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Vineyards</p>        </div>
              <div className=''>
            <img src={wind} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Windmills</p>        </div>
              <div className=''>
            <img src={yurt} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Yurts</p>        </div>
              <div className=''>
            <img src={arctic} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Arctic</p>        </div>
              <div className=''>
            <img src={creative} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Creative spaces</p>        </div>
              <div className=''>
            <img src={trulli} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Trulli</p>        </div>
              <div className=''>
            <img src={chef} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Chef's kitchen</p>        </div>
              <div className=''>
            <img src={cave} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Caves</p>        </div>
              <div className=''>
            <img src={container} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Containers</p>        </div>
              <div className=''>
            <img src={frame} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Containers</p>        </div>
              <div className=''>
            <img src={casa} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Containers</p>    </div>
              <div className=''>
            <img src={beachfront} className="h-6 mx-auto" alt="" />
             <p className="text-xs whitespace-nowrap">Containers</p>        </div>
          {" "}
          
        </nav>
      </div>
    </main>
  );
}

export default Frame;
