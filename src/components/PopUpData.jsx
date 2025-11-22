import classNames from 'classnames';
function PopUpData({revwPopData,Product})
{
    
    return <div>
            <span>Name : {revwPopData.name}</span>
            <br/><span>Email: {revwPopData.email}</span>
            <br/><span>Phone: {revwPopData.phone}</span>
            <br/><span>Product: {Product.Products.find(i=>i.id==revwPopData.selVal)?.name}</span>
            <br/><span>Review:</span>
            <br/>
            <textarea disabled="true"  className="border-4 border-black overflow-auto h-30 w-full" 
            value={revwPopData.review}/>
            <br/><span>Rating: {revwPopData.rating}</span>
           </div>
    
}
export default PopUpData;