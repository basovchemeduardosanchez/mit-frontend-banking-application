import React, { useContext, useState } from 'react';
import { UserContext, Card } from './context';

export function Deposit(){
    const context = useContext(UserContext);
    const [ status, setStatus ] = useState( '' );
    const [ balance, setBalance ] = useState( context.users[0].balance );
    const [ amount, setAmount ] = useState( '' );
    const [ isDepositEnabled, setIsDepositEnabled ] = useState( false );

    function isAmountValid( pAmount = amount ){
        return !!pAmount && !isNaN(pAmount) && pAmount > 0;
    }

    function handleDeposit(){
        setStatus( '' );
        if ( !isAmountValid() ) {
            setStatus( 'Error: The amount is invalid' );
            return;
        }

        const newBalance = balance + parseFloat( amount );
        context.users[0].balance = newBalance;
        setBalance( newBalance );
    }
    function handleAmountChange( pEvent ){
        const newAmount = pEvent.currentTarget.value;
        setAmount( newAmount );
        setIsDepositEnabled( newAmount !== '' );
    }

    return (
        <>
            <h1>Deposit</h1>
            <Card
                txtcolor="black"
                status={ status }
                body={
                    <>
                        <div className='form-group'>
                            Balance: <span style={ { fontWeight: 'bold' } }>{balance}</span><br/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="amount">Deposit Amount</label>
                            <input className='form-control' id="amount" type="text" value={amount} onInput={handleAmountChange}></input>
                        </div>
                        <button className='btn btn-primary' type='button' onClick={handleDeposit} { ...{ disabled: isDepositEnabled ? null : 'disabled' } }>Deposit</button>
                    </>
                }
            ></Card>
        </>
    );
}
