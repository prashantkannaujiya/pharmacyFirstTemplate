import { useContext, useEffect, useState } from 'react';
import data from './productDatabase';
import './productdisplay.css'
import Carousel from 'react-bootstrap/Carousel';
import { userInfo, usercart } from './App';


function Productdisplay()
{
  
  const requestOptions = {
    method: "GET",
   
  };
  const u=useContext(userInfo)
  var [list,setlist]=useState([])
  const c=useContext(usercart);

  useEffect(()=>{
    console.log(typeof(data))
    console.log(data)
      fetch('https://mlm.jpsw.in/product/get')
      .then(res=>res.json())
      .then((data)=>{
   
   const u=JSON.parse(data)
   console.log(u)
       setlist(u)
       
      }).catch(e=>{console.log(e)})
    

  },[])
  const src = "https://www.youtube.com/watch?v=LSRNmhLS76o";

  const Video = () => {
    return (
      <iframe
        width="560"
        height="315"
        src={'https://www.youtube.com/embed/6x2pBKBjJ7k?playsinline=1&iv_load_policy=3&rel=0&showinfo=0&controls=1&fs=0&start=${start}&autoplay=1&enablejsapi=1&widgetid=1'}
        title="Youtube Player"
        frameborder="0"
        allowFullScreen
      />
    );
  };
  function cartAdd( k)
  {
    let f=false;
      k['QTY']=1;
      c.cart.filter((a)=>{
if(a.NAME==k.NAME)
  {f=true;
    return a.QTY=a.QTY+1;}

      })
     if(!f){c.cart=[...c.cart,k]}
c.setcart([...c.cart])
    window.localStorage.setItem('cartlist',JSON.stringify(c.cart))
  }
    return(
        <div className='col-9 container'>
            <div id='carousel' className='wow fadeInUp' data-wow-delay='0.1s' style={{animationDelay:'0.1s',animationName:"fadeInUp"}}>
            <Carousel style={{height:'60vh'}}> 
        <Carousel.Item interval={1500}> 
        <Carousel.Caption><h2 className='cc display-5' >Focus on overall Health</h2></Carousel.Caption>
          <img 
            className="d-block w-100 " style={{height:'60vh'}}
src="https://www.euroschoolindia.com/wp-content/uploads/2023/10/importance-of-eating-a-variety-of-fruits-for-kids-health-jpg.webp"
            alt="Image One"
          /> 
            
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
        <Carousel.Caption><h2 className='cc display-5' >Great collection of drugs </h2></Carousel.Caption>
          <img 
            className="d-block w-100 " style={{height:'60vh'}}
src="https://s8296.pcdn.co/wp-content/uploads/images/headline/140219_prescription.jpg"
            alt="Image Two"
          /> 
        
        </Carousel.Item> 
      </Carousel> 

            </div>


<div className='row row-cols-3 '  style={{marginTop:'4vh'}}>
    { 
list.length!=0 && list.map((a)=>{ 
    return <div className='col-4 mb-3'> 
    <div className='card border-0 pt-2'>
        
            <img src={a.IMAGE} className='card-img-top mx-auto' style={{height:'25vh',width:'50%'}} />
          
            
                <div className='card-title text-success fs-5'>{a.NAME}</div>
                <p><i className="bi bi-currency-rupee"></i> {a.Price}</p>
                <p><button className='btn btn-success text-white' onClick={()=>{cartAdd(a)}}>Add to Cart</button></p>
    </div>
    </div>
})
    }
</div>

        </div>
    )
}
export default Productdisplay;