import { useState } from "react";
import './dashboard.css';

const Dashboard = () => {
    const [accountBalance, setAccountBalance] = useState(10000)
    const [popup, setPopup] = useState(false)
    const [inputValue, setInputValue] = useState({
        balance: "",
        expenses: "",
        transactionList: [],
        expenseList: []
    })
    const showPopup = () => {setPopup(!popup)}
    const submitHandler = (e) => {
        e.preventDefault();
        return;
    }
    // const date = new Date();
    // // const createTransactionList = () => {
    // //     const list = inputValue.transactionList
    // //     list.push([date, inputValue.balance])
    // // }
    const addMoney = () => {
        setAccountBalance (accountBalance + +inputValue)
        setInputValue({...inputValue, balance:""})
        showPopup()
    }
    const subtractMoney = () => {
        setAccountBalance (accountBalance - +inputValue)
        setInputValue({...inputValue, balance:""})
        showPopup()
    }
    const transferMoney = () => {
        setAccountBalance (accountBalance - +inputValue)
        setInputValue({...inputValue, balance:""})

    }
    const onTransactionHistory = () => {

    }
    const addExpense = () => {
        setAccountBalance (accountBalance - +inputValue)
        setInputValue({...inputValue, expenses:""})
        showPopup()

        const list = inputValue.expensesList;
        list.push([inputValue.balance, inputValue.expenses])
        
    }

    return (
        <div className="dashboard">
            <div className="dashboard_card">
                <div>Name</div>
                <div>Account Balance: {accountBalance}</div>
                <div>Card Number</div>
            </div>
            <div className="dashboard_banking">
                <button onClick={showPopup}>Withdraw</button>
                <button onClick={showPopup}>Deposit</button>
                <button onClick={showPopup}>Transfer</button>
                <button onClick={showPopup}>Transaction History</button>
            </div>
            <div className="dashboard_budget">
                <div>My Finances</div>
                <div>Bills Payment, Cost, Options</div>
                {/* {
                inputValue.expenseList.length ?
                inputValue.expenseList.map((value, index) => (
                        <div key={index} className='accountlist'>
                            <span>{value.inputValue.balance}</span>
                            <span>{value.inputValue.expenses}</span>
                        </div>
                        )
                ) : <span>No accounts created yet.</span>
            } */}
                <button onClick={showPopup}>Add Expenses</button>
            </div>
            <form onSubmit={submitHandler} className={popup ? 'dashboard_form active': 'dashboard_form'}>
                <input name="balance" type="number" value={inputValue.balance} onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={addMoney}>sige add ka</button>
                <button onClick={subtractMoney}>sige bawas ka</button>
                <button onClick={addExpense}>sige gastos pa</button>
                <input type="text" name="expense" value={inputValue.expenseList} />
            </form>
            <div>

            </div>
        </div>
    )
}

export default Dashboard;