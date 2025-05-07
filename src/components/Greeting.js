import { useState } from "react";

const Greeting = () => {
    const [changedText, setChengedText] = useState(false);

    function handleClick(){
        setChengedText(true);
    }

    return(
        <div>
            <h2>Hello World!</h2>
            {!changedText && <p>It's good to see you!</p>}
            {changedText && <p>Changed!</p>}
            <button onClick={handleClick}>Changed Text!</button>
        </div>
    );
};

export default Greeting;