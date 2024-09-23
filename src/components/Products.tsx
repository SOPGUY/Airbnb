import  { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


interface IApartmentData {
  title: string;
  Location: string;
  Duration: string;
  price: string;
  images: string[];
}

function Products() {
  const [apartmentData, setApartmentData] = useState<IApartmentData[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const data = await response.json();
      console.log(data);
      setApartmentData(data);
    }
    void fetchData();
  }, []);
  console.log("apartmentData: ", apartmentData);

  function renderCards() {
    return apartmentData.map((data) => {
      function renderSlides () {
        return data.images.map((img, idx)=>(
          <SwiperSlide key={idx}>
            <img src={img} alt="slides" className="object-cover w-full aspect-square rounded-md relative " />
            
            

          </SwiperSlide>
        ))
      }
      return (
        <div className=" rounded-md  ">
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {renderSlides()}
        
      </Swiper>
          <p className="font-semibold"> {data.title}</p>
          <p> {data.Location}</p>
          <p> {data.Duration}</p>
          <p> {data.price}</p>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5 w-full">
        {apartmentData.length > 0 ? renderCards() : <p>No data yet</p>}
      </div>
    </div>
  );
}

export default Products;
