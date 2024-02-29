import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import AllocationForm from './AllocationForm';

const Budget = () => {
    const {dispatch, remaining, currency} = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const upperlimitvalue = 20000;

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && newBudget <= upperlimitvalue){
            dispatch({type: "SET_BUDGET", payload: newBudget});
        }else if ( newBudget > upperlimitvalue){
            alert("The value exceed remaining funds "+remaining);
        }else if (event.key === 'Enter' && budget-remaining > newBudget){
            alert("You cannot reduce the budget value lower than the spending")
        }
    };
    
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input required='required' type="number" step="10" value={newBudget} onChange={handleBudgetChange} onKeyDown={handleKeyDown}></input>
</div>
    );
};
export default Budget;