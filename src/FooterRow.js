import React from 'react'
import "./FooterRow.css"

function FooterRow({title, list}) {
    
    return (
        <div className="footerRow">
            <div className="footerRow_heading">
                <h3>{title}</h3>
            </div>
            <div className="footerRow_list">
                {list.map( item => <p><small>{item}</small></p>)}
            </div>
        </div>
    )
}

export default FooterRow;
