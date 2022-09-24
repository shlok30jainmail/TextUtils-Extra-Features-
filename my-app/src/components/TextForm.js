import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    // start making 5 button function 
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text); // use to print the data in a console(of textarea present data)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase", "success");
    }
    const handleLowClick = () => {
        // console.log("Lowercase was clicked" + text); // use to print the data in a console(of textarea present data)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase", "success");

    }

    const handleClearClick = () => {
        // console.log("Clear text clicked" + text); // use to print the data in a console(of textarea present data)
        let newText = "";
        setText(newText);
        props.showAlert("Clear all text", "success");

    }
    const handleSpaceClick = () => {
        // console.log("Clear extra Space letter and words clicked" + text); // use to print the data in a console(of textarea present data)
        // let newText = text.split(" ").join("");
        let newText = text.split(/[ ]+/).join(" ");

        setText(newText);
        props.showAlert("Clear all Extra Spaces", "success");

    }
    const handleLineClick = () => {
        // console.log("Clear Line Space between letter and words clicked" + text); // use to print the data in a console(of textarea present data)
        let newText = text.replace(/(\r\n|\n|\r)/gm,"");
        setText(newText);
        props.showAlert("Clear all Extra Spaces Lines", "success");

    }
    const handleCopy = () => {
        // console.log("Clear Line Space between letter and words clicked" + text); // use to print the data in a console(of textarea present data)
       let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        // setText(newText);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success");

    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    //  text = "hi"; // wrong way to change or update the text we use setText funtion
    // setText("new text")// correct way to change or update the text we use setText funtion
    return (
        <>
        <div className= "container">
            <h1 className ="mb-4">{props.heading} </h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example text</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark' ? '#374983' : 'white' , color:  props.mode=== 'dark' ? 'white' : 'black'}} id="myBox" rows="8" ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear All Data</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleSpaceClick}>Remove Extra Spaces</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLineClick}> Line Space Remover</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text</button>





        </div>

        <div className= "container my-3">
            <h2>Your text summery</h2>
           <p>{text.split(" ").filter((element)=>{return element.length!==0}).length } words and {text.length} characters</p>
           <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
           <h2>Previews</h2>
           <p>{text.length > 0 ? text : "Nothing to preview here " }</p>

        </div>
        </>
    )
}
