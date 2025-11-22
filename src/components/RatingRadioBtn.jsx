function RatingRdioBtn({classNm, val,changRadFunc})
{
    
    return  <div className="flex space-x-5">
    <div>
            <label className="font-semibold p-2">1</label>
            <input className={classNm} type="radio" name="review" id="review_1" value={1} checked={val==1} onChange={(e)=>changRadFunc("ratingRad",e)}/>
        </div>
        <div>
            <label className="font-semibold p-2">2</label>
            <input className={classNm} type="radio" name="review" id="review_2" value={2} checked={val==2} onChange={(e)=>changRadFunc("ratingRad",e)}/>
        </div>
        <div>
            <label className="font-semibold p-2">3</label>
            <input className={classNm} type="radio" name="review" id="review_3" value={3} checked={val==3} onChange={(e)=>changRadFunc("ratingRad",e)}/>
        </div>
        <div>
            <label className="font-semibold p-2">4</label>
            <input className={classNm} type="radio" name="review" id="review_4" value={4} checked={val==4} onChange={(e)=>changRadFunc("ratingRad",e)}/>
        </div>
        <div>
            <label className="font-semibold p-2">5</label>
            <input className={classNm} type="radio" name="review" id="review_5" value={5} checked={val==5} onChange={(e)=>changRadFunc("ratingRad",e)}/>
    </div>
  </div>

}
export default RatingRdioBtn