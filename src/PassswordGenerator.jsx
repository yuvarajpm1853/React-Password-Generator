import {React, useState} from 'react';

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [upper, setUpper] = useState(true);
    const [lower, setLower] = useState(true);
    const [number, setNumber] = useState(true);
    const [symbol, setSymbol] = useState(true);
    const [password, setPassword] = useState("");

    const passwd_creation = ()=>{
        let charset =  "";
        let generate_passwd = ""
        let increment = 0
        if (lower || number || symbol || upper) {
            for (let i = 0; i < length; i+=increment) {
                increment = 0
                if(upper) {
                    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    let r = Math.floor(Math.random()*charset.length);
                    generate_passwd += charset[r];
                    increment++;
                }
                if(lower) {
                    charset = "abcdefghijklmnopqrstuvwxyz"
                    let r = Math.floor(Math.random()*charset.length);
                    generate_passwd += charset[r];
                    increment++;
                }
                if(number) {
                    charset = "0123456789"
                    let r = Math.floor(Math.random()*charset.length);
                    generate_passwd += charset[r];
                    increment++;
                }
                if(symbol) {
                    charset = `!@#$%^&*()-_=+[]{}|;:'",.<>?/`
                    let r = Math.floor(Math.random()*charset.length);
                    generate_passwd += charset[r];
                    increment++;
                }
            }
            setPassword(generate_passwd)
        }
    }

    const copyToClipboard = () => {
        // it makes to copy the password var into clipboard
        navigator.clipboard.writeText(password);
        alert("Password Copied")
    }
        return (
        <div className="password-generator">
            <h2>Strong Password Generator </h2>
            <div className="input-group">
                <label htmlFor="num">Password Length:</label>
                <input type="number" id="num" value={length} onChange={e=> setLength(parseInt(e.target.value))}/>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="upper" checked={upper} onChange={e=>setUpper(e.target.checked)}/>
                <label htmlFor="upper">Include Uppercase </label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="lower" checked={lower} onChange={e=>setLower(e.target.checked)}/>
                <label htmlFor="lower">Include Lowercase</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="numbers"  checked={number} onChange={e=>setNumber(e.target.checked)}/>
                <label htmlFor="numbers">Include Numbers</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="symbol" checked={symbol} onChange={e=>setSymbol(e.target.checked)}/>
                <label htmlFor="symbol">Include Symbol</label>
            </div>
            <button className="generate-btn" onClick={passwd_creation}>Generate Password</button>
            <div className="generate-password">
                <input type="text" readOnly value={password} />
                <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
            </div>
        </div>
    );
}

export default PasswordGenerator;