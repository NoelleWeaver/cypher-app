import React from 'react';
import Cypher from '../components/cypher';
import './css/index.css';
import { FaArrowLeft } from "react-icons/fa";

function Cipher() {
    let info = {
    }    
    return (
        <>
            <a href="/"><FaArrowLeft /></a>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <Cypher  />
            </div>
        </>
    );
}

export default Cipher;