import Product from '../data/Product.json';

function SelectProductControl({classnm,selVal,chngFunc})
{

    const data=Product.Products;

    

    const prodList = data.map((prod)=>{
           return <option value={prod.id} id={prod.id} key={prod.id}>{prod.name}</option>
    });

    return <div>
            <select className={classnm} value={selVal} onChange={(e)=>chngFunc("selProd",e)}>
                <option value="-1" id="def" defaultChecked>--Select--</option>
                {prodList}
            </select>
        </div>
}
export default SelectProductControl