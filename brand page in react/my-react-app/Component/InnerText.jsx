import flipkartlogo from '../images/flipkart.svg'
import amazonelogo from '../images/amazon.svg'
import shoelogo from '../images/shoe_image.svg'
import "../src/App.css"
export default function InnerText(){
    return (
        <>
<div className="all-content">
<div className="text-left">
<h1 className='heading'>YOUR FEET DESERVE THE BEST</h1>
        <p className='para'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="btn-div">
            <button className="shop-now">Shop Now</button>
            <button className="Category">Category</button>
        </div>
        <p className='para-text'>Also Available On</p>
        <div className="aval-store">
            <img src={flipkartlogo} alt="logo" className="flipkart" />
            <img src={amazonelogo} alt="logo" className="amazone" />
        </div>
</div>
      <div className="img-right">
      <img src={shoelogo} alt="shoe-image" className="shoe-img" />
      </div>
</div>
        </>
    )
}