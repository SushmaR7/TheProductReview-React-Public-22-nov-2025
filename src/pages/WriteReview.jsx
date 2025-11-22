import React, { useEffect, useState } from "react";
import classNames from 'classnames';
import SelectProductControl from "../components/SelectProductControl";
import RatingRdioBtn from "../components/RatingRadioBtn";
import api from '../api/api';
import ModalPopUp from "../components/ModalPopUp";
import axios from "axios";

function WriteReview() {

    const defaultFormData={
      selVal:-1,
      name:"",
      email:"",
      phone:"",
      review:"",
      rating:0
    }

    const [formData,SetFormData]=useState(defaultFormData);
    //popUpRelated..
    const [msgSaveSuccess,SetMsgSaveSuccess]=useState("Saved Successfully..");
    const [showSavePopup,setShowSavePopUp]= useState(false);
    const onClickPopupClose=()=>{
      setShowSavePopUp(false);
    };
//..
const chngInpt=(type,event)=>{
  switch(type){
    case "ratingRad":{
      //change radio button-rating 
      const frm={...formData,rating:event.target.value};
      SetFormData(frm);
    }; break;
    case "nameInp":{
      //change radio button-rating 
      const frm={...formData,name:event.target.value};
      SetFormData(frm);
    };break;
    case "emailInp":{
      //change radio button-rating 
      const frm={...formData,email:event.target.value};
      SetFormData(frm);
    };break;
    case "reviewInp":{
      //change radio button-rating 
      const maxlenOfChars=500;
      let text=event.target.value;
      let len = maxlenOfChars-text.length;

      const frm={...formData,review:text};
      
      SetnumbCharsRvw(p=>len);
      SetFormData(frm);
    };break;
    case "phoneInp":{
      //change radio button-rating 
      const frm={...formData,phone:event.target.value};
      SetFormData(frm);
    };break;
    case "selProd":{
      //change select product 
      const frm={...formData,selVal:event.target.value};
      SetFormData(frm);
    };break;
  }
}
//error validation management..
const [errMsg,SetErrMsg]=useState({
        errProd:"",
        errRating:"",
        errPhone:"",
        errEmail:""
});

  const [numbCharsRvw,SetnumbCharsRvw]=useState(500);
   const chkValidations=()=>
   {
    
    let err=false;
      if(formData.selVal == -1)
      {
        SetErrMsg((er)=>({...er,errProd:"Select Product is required"})); 
        err=true;
      }
      if(formData.rating == 0)
      {
        SetErrMsg((er)=>({...er,errRating:"Rating is required"}));
        err=true;
      }

      if(formData.phone!=""){
        const phPattern = /^([0-9]{10})$/;
        if(!phPattern.test(formData.phone))
        {
          SetErrMsg((er)=>({...er,errPhone:"Phone number invalid,10 digits required."}))
          err=true;
        }
      }
      if(formData.email!="")
      {
        const emPattern =/^[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if(!emPattern.test(formData.email))
        {
          SetErrMsg((er)=>({...er,errEmail:"invalid email.."}))
          err=true;
        }
      }
     return err;
   }
    const subFrm=(e)=>{
       e.preventDefault();
       const isEr=chkValidations();
       if(!isEr){
        /*  //with api
       api.post('/reviews',formData)
      .then(response=>
      {
        if(response.status==201)
        {
          window.alert("Saved Successfully..");
        }
      }
      )
      .catch(err=>{
        window.alert("Save unsuccessfull, please try again..");
        console.log(err);
      });*///
      //without api --local storage
      let dat = JSON.parse(localStorage.getItem("data"));
      let dt=dat?dat:[];
      localStorage.setItem("data",JSON.stringify([...dt,formData]));
      window.alert("Saved Successfully..");
      console.log("the stored local data is..")
      console.log(JSON.parse(localStorage.getItem("data")));
      //----
      SetFormData(defaultFormData);
      SetErrMsg((er)=>({errProd:"",errRating:""}));
    }
    else{
      window.alert("form submission unsuccessfull !!.. errors..")
    }
    }

    const inptClass=classNames('w-full', 'p-3','border', 'border-gray-300', 'rounded-md','shadow-sm', 'focus:outline-none', 'focus:ring-2', 
      'focus:ring-blue-500', 'focus:border-blue-500');
    const radioBtnClass=classNames('focus:ring-2', 'focus:ring-blue-500', 'focus:border-blue-500');
    const lblClass=classNames('mb-2', 'text-gray-700', 'font-semibold');

    

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <form onSubmit={subFrm} className="min-h-screen">
              <div className="mb-4 w-[700px]">
                  <label className={lblClass}>Product</label><span className="text-red-700">*</span><span className={lblClass}>:</span>
                  <SelectProductControl classnm={inptClass} selVal={formData.selVal} chngFunc={chngInpt}/>
              </div>
              {/** Error message for product */}
              {
                errMsg.errProd && <p className="text-red-700">{errMsg.errProd}</p>
              }
              <div className="mb-4 w-[700px]">
                  <label className={lblClass}>Name: </label>
                  <input className={inptClass} type="text" id="name" value={formData.name} onChange={(e)=>{chngInpt("nameInp",e)}}/>
              </div>
              {/** Error message for name */}
              <div className="mb-4 w-[700px]">
                  <label className={lblClass}>Email: </label>
                  <input className={inptClass} type="text" id="email" value={formData.email} onChange={(e)=>chngInpt("emailInp",e)}/>
                  {/** Error message for email */}
                  {
                    errMsg.errEmail && <p className="text-red-700">{errMsg.errEmail}</p>
                  }
              </div>
              {/** Error message for email */}
              <div className="mb-4 w-[700px]">
                <label className={lblClass}>Phone:</label>
                <input className={inptClass} type="text" id="phone" value={formData.phone} onChange={(e)=>chngInpt("phoneInp",e)}/>
              </div>
              {/** Error message for phone */}
              {
                errMsg.errPhone && <p className="text-red-700">{errMsg.errPhone}</p>
              }
              {/** Error message for phone */}
              <div className="mb-4 w-[700px]">
                <label className={lblClass}>Review:</label>
                <textarea className={inptClass} type="text" maxLength={500} id="review" rows={4} value={formData.review} onChange={(e)=>chngInpt("reviewInp",e)}/>
                <div className="justify-items-end text-gray-500 font-bold"><p>{`${numbCharsRvw} Charectors left`}</p></div>
              </div>
              
              {/** Error message for review */}
              <div className="mb-4 w-[700px]">
                    <label className={lblClass}>Rating</label><span className="text-red-700">*</span><span className={lblClass}>:</span>
                    <RatingRdioBtn classNm={radioBtnClass} val={formData.rating} changRadFunc={chngInpt}/>
              </div>
              {/** Error message for rating */}
              {
                errMsg.errRating && <p className="text-red-700">{errMsg.errRating}</p>
              }
<br/>
          <button type="submit"  className="w-full p-3 bg-blue-500 text-white rounded-md hover:cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
          </form>
          {/*showSavePopup && (<ModalPopUp closeFunc={onClickPopupClose}>
                <div>
                  {msgSaveSuccess}
                </div>
            </ModalPopUp>)*/}
      </div>
    )
  }
  
  export default WriteReview
  