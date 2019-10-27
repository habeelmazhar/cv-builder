import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h4>{props.title}</h4>
            </div>
            <div className="card-body">
                {props.children}
            </div>
            <div className="card-footer">
                {props.footer}
            </div>
        </div>
    )
}