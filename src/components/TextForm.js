import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleDownClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const clearText = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const removeExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const copyText = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    
    return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black' }}>
        <form>
            <h1>{props.heading}</h1>
            <div className="form-group">
            <textarea className="form-control" value={text} onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#212529':'white' , color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-3" type='button' onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-1 my-3" type='button' onClick={handleDownClick}>Convert to lower case</button>
            <button className="btn btn-primary mx-1 my-3" type='button' onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-3" type='button' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-3" type='button' onClick={copyText}>Copy text</button>
        </form>
    </div>
    <div className="container" my-3 style={{color: props.mode === 'dark'?'white':'black' }}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
