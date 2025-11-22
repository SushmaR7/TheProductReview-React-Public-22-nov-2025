import React,{useEffect, useState} from "react";
import classNames from 'classnames';
function Filters({selectProductList,SetPgEndInd,SetPgStInd,numbOfItems,SetFiltVal,filtVal})
{
     const classNameForFilters=classNames( 'bg-white',
       'border', 'border-gray-300', 'rounded-md',
        'shadow-sm', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-600', 'focus:border-blue-500',
      'hover:ring-blue-300','hover:ring-2');
    
    const classNameForFiltersLbl=classNames('font-semibold','text-white');

    return  (
    <div id="filtersContainer" className="bg-black flex items-center gap-3">
        <h1 className="text-white font-bold min-h-8 p-1">Filters</h1>
        <div className="flex items-center">
            <label className={classNameForFiltersLbl} htmlFor="reviewValFilter">Review value : </label>
            <select id="reviewValFilter" value={filtVal.rating} 
            onChange={(e)=>{SetFiltVal((s)=>({...s,rating:e.target.value}));SetPgStInd(0);SetPgEndInd(numbOfItems-1)}} className={classNameForFilters}>
              <option value={-1} defaultChecked>--Review Value--</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
        </div>
        <div className="flex items-center">
            <label className={classNameForFiltersLbl} htmlFor="productFilter">Product : </label>
            <select id="productFilter" className={classNameForFilters} value={filtVal.product} 
            onChange={(e)=>{SetFiltVal((s)=>({...s,product:e.target.value}));SetPgStInd(0);SetPgEndInd(numbOfItems-1)}}>
              <option defaultChecked value={-1}>--Product--</option>
              {selectProductList}
            </select>
        </div>
      </div>
    )
      
}
export default Filters;