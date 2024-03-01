import React,{useContext} from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeLocation = (val) => {
        dispatch({
            type:"CHG_CURRENCY",
            payload:val,
        });
    };

    return (
        <div className="alert alert-secondary" style={{backgroundColor:"lightgreen",color:"white"}}>
            Currency
            {
                <select
                name="Currency"
                id="Currency"
                style={{backgroundColor:"lightgreen",color:"white",border:"none"}}
                onChange={(event) => changeLocation(event.target.value)}>
                <option value="$">$ Dollor</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
                </select>
            }
        </div>
    )
}

export default Currency;