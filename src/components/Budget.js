import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, remaining, currency, expenses } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (event.target.value > 20000) {
            alert("The value cannot exceed remaining funds " + currency + remaining);
            return;
        } else if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        setNewBudget(event.target.value);
    };

    useEffect(() => {
        dispatch({
            type: "SET_BUDGET",
            payload: newBudget,
        });
    }, [newBudget, dispatch]);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input required='required' type="number" min="0" max="20000" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;