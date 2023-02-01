import './dashboard.css'
import { AiOutlineClose } from "react-icons/ai";
import  { useState } from "react"


function CardDetails({balance}) {
    return (
        <>
            <div className="card_content">
                <div>Name</div>
                <div>Total Balance: {balance}</div>
                <div>Card Number</div>
            </div>   
        </>
    )
}

function BankButtons({showPopup}) {
    return (
        <>
            <div>
                <button onClick={() => showPopup('Withdraw')} className='bank_buttons'>Withdraw</button>
                <button onClick={() => showPopup('Deposit')} className='bank_buttons'>Deposit</button>
                <button onClick={() => showPopup('Transfer')} className='bank_buttons'>Transfer</button>
            </div>
        </>
    )
}

function TransactionHistory(props) {
    const { history } = props
    console.log(history)
    return (
        <>
            <div>Transaction History</div>
            <div className='transaction_table'>
                <div className='transaction_content'>No.</div>
                <div className='transaction_content'>Date</div>
                <div className='transaction_content'>Type of transaction</div>
                <div className='transaction_content'>Amount</div>
            </div>
                {
                history.length ?
                history.map((txn, index) => (
                        <div key={index} className='accountlist'>
                            <span>{txn.number}</span> 
                            <span>{txn.date}</span>                           
                            <span>{txn.transaction}</span>
                            <span>{txn.amount}</span>
                        </div>
                        )
                ) : <span>No transactions yet.</span>
            }
        </>
    )
}

function BudgetApp({showPopup}) {
    return (
        <>
            <div>Budget App</div>
            <button onClick={() => showPopup('Expenses')} className='bank_buttons'>Add Expenses</button>
        </>
    )
}

function BudgetHistory(props) {
    const { history2 } = props
    return (
        <>
            <div>Budget History</div>
            <div className='transaction_table'>
                <div className='transaction_content'>No.</div>
                <div className='transaction_content'>Date</div>
                <div className='transaction_content'>Name of expense</div>
                <div className='transaction_content'>Amount</div>
            </div>
            {
                history2.length ?
                history2.map((txn, index) => (
                        <div key={index} className='accountlist'>
                            <span>{txn.number}</span> 
                            <span>{txn.date}</span>                           
                            <span>{txn.transaction}</span>
                            <span>{txn.amount}</span>
                        </div>
                        )
                ) : <span>No expenses yet.</span>
            }
        </>
    )
}

function PopupWindow(props) {
    const {popup, showPopup, txn, amount, expenses, onInputValue, onExpenseValue} = props
    const submitHandler = (e) => {
        e.preventDefault();
        return;
    }
    return (
        <>
            <div className={popup ? 'form_popup active' : 'form_popup'}>
                <div className='form_content'>
                    <form onSubmit={submitHandler} id="form">
                        <AiOutlineClose onClick={showPopup} className='close_btn'/>
                        <h3>Type of Transaction</h3>
                        <label>Amount:</label>
                        <input onChange={onInputValue} value={amount} type="number" name='amount'/>
                        <label>Name of Expense: </label>
                        <input type="text" name='expenses' onChange={onExpenseValue} value={expenses}/>
                        <input onClick={txn} id="submit" type='submit' />
                    </form>
                </div>
            </div>
        </>
    )
}

function Practice() {
    const [popup, setPopup] = useState(false)
    const [balance, setBalance] = useState(10000)
    const [transactionType, setTransactionType] = useState("")
    const [history, setHistory] = useState([])
    const [history2, setHistory2] = useState([])
    const [inputValue, setInputValue] = useState({
        amount: "",
        expenses: ""
    })
    const date = new Date().toUTCString()

    const onInputValue = (e) => {
        setInputValue({...inputValue,
                amount: e.target.value}
        )
    }
    const onExpenseValue = (e) => {
        setInputValue({...inputValue, expenses:e.target.value})
    }
    const showPopup = (txnType) => {
        setPopup(!popup)
        setTransactionType(txnType)
    }
    const addMoney = () => {
        setBalance (balance + +inputValue.amount)
        setInputValue({...inputValue, amount:""})
        showPopup()
        setHistory(oldHistory => [...oldHistory, {
            number: oldHistory.length + 1,
            date: date,
            transaction: transactionType,
            amount: inputValue.amount
        }])
    }
    const subtractMoney = () => {
        setBalance (balance - +inputValue.amount)
        setInputValue({...inputValue, amount:""})
        showPopup()
        setHistory(oldHistory => [...oldHistory, {
            number: oldHistory.length + 1,
            date: date,
            transaction: transactionType,
            amount: inputValue.amount
        }])
    }
    const addExpense = () => {
        setBalance (balance - +inputValue.amount)
        setInputValue({...inputValue, amount:"", expenses:""})
        showPopup()
        setHistory2(oldHistory2 => [...oldHistory2, {
            number: oldHistory2.length+1,
            date: date,
            transaction: inputValue.expenses,
            amount: inputValue.amount
        }])
    }

    const txn = () => {
        switch(transactionType) {
            case "Deposit":
                addMoney();
                break;
            case "Withdraw":
                subtractMoney();
                break;
            case "Transfer":
                // For adding
                break;
            case "Expenses":
                addExpense();
                break;
            default:
        }
    }
    return(
        <main className='dashboard_content'>
            <CardDetails balance={balance}/>
            <BankButtons showPopup={showPopup} />
            <TransactionHistory history={history} amount={inputValue.amount}/>
            <BudgetApp showPopup={showPopup} />
            <BudgetHistory history2={history2} amount={inputValue.amount} />
            <PopupWindow popup={popup} txn={txn} onExpenseValue={onExpenseValue} showPopup={showPopup} amount={inputValue.amount} expenses={inputValue.expenses} onInputValue={onInputValue} />
        </main>
    )
}

export default Practice;