import React from "react";
import ReactDOM  from "react-dom/client";
import logo from './assets/logo-2.webp';

/**using react.createElement */

/**const heading = React.createElement("h1",{},"hello");

const heading2 = React.createElement("h2",{},"everyone");

const heading3 = React.createElement("h2",{},"namaste");

const container = React.createElement("div",{},[heading,heading2,heading3]);

const root = ReactDOM.createRoot(document.getElementById("title"));
root.render(container);*/



/**using JSX 
const box = (
    <div>
        <h1>hello</h1>
        <h2>everyone</h2>
        <h3>namaste</h3>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("title"));
root.render(box);*/




/**using functional component */

/**const header = function() {
    return(
    <div>
        <h1>hello</h1>
        <h2>everyone</h2>
        <h3>namaste</h3>
    </div>
    ) 
}
const root = ReactDOM.createRoot(document.getElementById("title"));
root.render(header());*/



/** composition of component*/

/**const Stage = function(){
    <h1 id="x" key="h1">
    world
    </h1>
}

const HeaderComponent = () =>{
    return(
       
    <div>
    {Stage()}
        <h1>hello</h1>
        <h2>everyone</h2>
        <h3>namaste</h3>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("title"));
root.render(HeaderComponent());*/

/**header element from scratch */

const HeaderComponent = () =>{
    return(
 <div className ="header">

<div className="mainLogo">
<img src={logo} alt="logo" />
<span className="logoName"> Learn React with Gargi</span>
</div>

<div className="searchBar">
<input type="text" placeholder="search"/>
<button>Search</button>
</div>

<div className="user-icon">
<img src = "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-256.png"/>
</div>

</div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("title"));
root.render(HeaderComponent());