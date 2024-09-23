
import policy from "../assets/policy1.png"
import resources from "../assets/Airbnb-Resources-Web.png"
function ExploreMore() {
  return (
    <div className='px-3 gap-4'>
        <h3>Explore more</h3>
        <div className='bg-red-300 flex gap-5 rounded-md  '>
            <div className=''><img src={policy} alt=""  className='h-[140px]  rounded-l-lg ' /></div>
           <div> <p>Our community policies</p>
           <p>How we build a foundation of trust</p>
           </div>
        </div>
        <div className='bg-red-300 flex gap-5 rounded-md  '>
            <div className=''><img src={resources} alt=""  className='h-[140px]  rounded-l-lg ' /></div>
           <div> <p>Resources for </p>
           <p> Experience Hosts</p>
           <p>Find tips and inspiration.</p>
           </div>
        </div>
    </div>
  )
}

export default ExploreMore