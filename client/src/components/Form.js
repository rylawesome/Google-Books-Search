import React from "react";

export function SearchBox(props) {
    return (
        <div className="form-group">
            <input type="search" className="form-control" {...props}/>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "left",}} className="btn btn-success">
            {props.children}
        </button>
    );
}