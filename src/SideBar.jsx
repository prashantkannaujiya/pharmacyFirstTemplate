import { useEffect } from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';
function SideBar()
{
  
    return(
        <div className="col-3">
<div className='category-menu text-light'>
    <p><Link className='sidebar-menu'>Minerals</Link></p>
    <p><Link className='sidebar-menu'>Grocery</Link></p>
    <p><Link className='sidebar-menu'>Supplements</Link></p>
    <p><Link className='sidebar-menu'>Diet</Link></p>
    <p><Link className='sidebar-menu'>Sports Nutrition</Link></p>
    <p><Link className='sidebar-menu'>Body Bath</Link></p>
    <p><Link className='sidebar-menu'>Tea & Coffee</Link></p>
    <p> <Link className='sidebar-menu'>Vitamins</Link></p>
    <p> <Link className='sidebar-menu'>Health Concerns</Link></p>
</div>
<div className='card mt-5 h-35' id='freeShipBox' >
   
    <div className='card-text mt-5 fs-4 text-light fw-bold'>
        Free Shipping
    </div>
    
</div>
        </div>
    )
}
export default SideBar;