import React,{useEffect, useState} from "react";

function Pagination({stEndIndxSet,lent,numbOfItems})
{   
    const [pgNo,SetPgNo]=useState(0);//selected page
    const [pgNumSt,SetPgNumSt]=useState(0); //start ind of page list

         //pagination-func

    const onClickPgChange=(i)=>
    {
      const start=i*numbOfItems;
      const end=start+(numbOfItems-1);
      
      SetPgNo(prev=>prev=i);
      stEndIndxSet(start,end);
    }
    const onCLickPgPrev=()=>{
      const p=pgNumSt-1;
      SetPgNumSt(prev=>prev=p);
      const start=p*numbOfItems;
      const end=start+(numbOfItems-1);
     
      SetPgNo(prev=>prev=p);
      stEndIndxSet(start,end);     
    }
     const onCLickPgNxt=()=>{
      const p=pgNumSt+1;
      SetPgNumSt(prev=>prev=p);

      const start=p*numbOfItems;
      const end=start+(numbOfItems-1);
      
      SetPgNo(prev=>prev=p);
      stEndIndxSet(start,end);
    }

    //----pgnation end

     const totalPages = Math.ceil(lent/numbOfItems);
    const pgNumb=[...Array(totalPages).keys()].map(i=>i+1);
    const isDisableLeftPg= (pgNo==0 || pgNumSt==0)?true:false;
    const isDisablerightPg=(totalPages-1==pgNo || pgNumSt==totalPages-3)?true:false;

    return <div>
        <div className="justify-items-center ">
        <div className="font-bold p-3">
          <button disabled={isDisableLeftPg} className="font-bold cursor-pointer" 
          onClick={()=>onCLickPgPrev()}>{"<-"}</button>

          {pgNumb.slice(pgNumSt,pgNumSt+3).map(i=>(
            <span className={`border-1 p-1 m-1 cursor-pointer ${i-1==pgNo?'border-blue-600':'border-black-400'}`} 
            onClick={()=>{onClickPgChange(i-1)}}>{i}</span>))}
         
          <button disabled={isDisablerightPg} className="font-bold cursor-pointer" 
          onClick={()=>onCLickPgNxt()}>{"->"}</button>
        
        </div>
        </div>
    </div>
}
export default Pagination