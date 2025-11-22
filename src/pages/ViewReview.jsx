import React,{useEffect, useState} from "react";
import ReviewCard from "../components/ReviewCard";
import api from '../api/api';
import Notes from '../components/Notes';
import classNames from 'classnames';
import ModalPopUp from "../components/ModalPopUp";
import Product from '../data/Product.json';
import PopUpData from "../components/PopUpData";
import Pagination from "../components/Pagination";
import Filters from "../components/Filters";
function ViewReview() {
  //--------pagination
    const numbOfItems=4;
    const [pgStInd,SetPgStInd]=useState(0); //for data --parent
    const [pgEndInd,SetPgEndInd]=useState(numbOfItems-1); //for data --parent
   
    //----------
    const [filtVal,SetFiltVal]=useState({
      rating:"-1",
      date:"",
      product:"-1"
    })
    const [userDetailPopup,SetUserDetailPopUp]=useState(false);
    const [revwPopData,SetRevwPopData]=useState({
      "id": "",
      "productId": -1,
      "name": "",
      "email": "",
      "phone": "",
      "review": "",
      "rating": 0
    });
    const [reviewData,SetReviewData]=useState([{
      "id": "",
      "selVal": -1,
      "name": "",
      "email": "",
      "phone": "",
      "review": "",
      "rating": 0
    }]);
    const [displayData,SetDisplayData]=useState([]);

    const onClickPopup=(id)=>{
      SetUserDetailPopUp(true);
      SetRevwPopData(reviewData.find(i=>i.id==id));
    };
    const onClickPopupClose=()=>{
      SetUserDetailPopUp(false);
    };
    //pagination-func
   const stEndIndxSet=(st,end)=>{
    SetPgStInd(prev=>prev=st);
    SetPgEndInd(prev=>prev=end);
   }
    //----pgnation end

   
    const getData=async ()=>{ //with api ..
      const response = await api.get("/reviews");
      SetReviewData(response.data);
      SetDisplayData(response.data);
      return response.data;
    };
    const getDataWithoutApi=()=>{
      const response = JSON.parse(localStorage.getItem("data"));
      //console.log(response);
      SetReviewData(p=>response);
      //SetDisplayData(p=>response);
      return response;
    }

    useEffect(()=>{
      //getData();   //with api
      getDataWithoutApi() //without api from local storage
    },[]);
    
    useEffect(()=>{
      if(filtVal.rating==-1 && filtVal.product==-1)
      {
        //SetDisplayData(reviewData); //with api
        SetDisplayData(JSON.parse(localStorage.getItem("data"))); //wthout api
      }
      else
      {
        let dt=reviewData;
        if(filtVal.product!=-1)
        {
          dt=reviewData.filter(i=>i.selVal==filtVal.product);
        }
        if(filtVal.rating!=-1)
          {
            dt=dt.filter(i=>i.rating==filtVal.rating);            
          }
          SetDisplayData(dt);
      }

    },[filtVal]);
 //Slice - pagination
    const revList=displayData?.slice(pgStInd,pgEndInd+1).map(rev=>{
      
      const prName=Product.Products.find(i=>i.id==rev.selVal)?.name;

      return <div  key={rev.id} className="flex justify-center items-center w-full col-span-2"> 
         <ReviewCard styleCls={"hover:ring-2 hover:ring-gray-400"} >
             <div className="px-5 py-4">
                <input type="text" value={rev.id} hidden/>
                <p className="text-black font-semibold">{`Product:${prName}`}</p>
                <h2 onClick={()=>(onClickPopup(rev.id))} className="text-blue-500 hover:cursor-pointer semi-bold text-xl">{rev.name}</h2>
                <p className="text-base mt-3">{rev.review}</p>
                <p className="text-yellow-700">{`Rating:${rev.rating}`}</p>
            </div>
         </ReviewCard>
      </div>
    });

    const selectProductList = Product.Products.map(pr=>{
      return <option key={pr.id} value={pr.id}>{pr.name}</option>
    })

    return (
      <div>
        <Filters numbOfItems={numbOfItems} filtVal={filtVal} SetPgEndInd={SetPgEndInd} SetPgStInd={SetPgStInd} SetFiltVal={SetFiltVal} selectProductList={selectProductList}/>
        <Pagination stEndIndxSet={stEndIndxSet} lent={displayData.length} numbOfItems={numbOfItems}/>
         <div className="flex gap-5">
           <div className="grid gap-4 grid-cols-4    flex-initial w-full">
               {revList.length>0? (revList) : (<span className="font-bold justify-items-center">No items</span>)}
           </div>
         </div>
         {userDetailPopup && 
          <ModalPopUp closeFunc={onClickPopupClose}>
            <PopUpData revwPopData={revwPopData} Product={Product} />
          </ModalPopUp>}
      </div>
    )
  }
  
  export default ViewReview
  