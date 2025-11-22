function ModalPopUp({closeFunc,children,isDisplay}){

    console.log("popup triggered..");

    return <div style={{display:isDisplay}} className="fixed inset-40 bg-gray-500/60  flex justify-center items-center">
    <div className="bg-white rounded-lg p-4 max-w-xl w-full"> 
        {children}
        <button className="bg-blue-500 w-[400px] text-white" onClick={closeFunc}>close</button>
    </div>
   </div>
}
export default ModalPopUp;
