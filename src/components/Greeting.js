import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
    const [changedText, setChengedText] = useState(false);

    function handleClick(){
        setChengedText(true);
    }

    return(
        <div>
            <h2>Hello World!</h2>
            {/* qui non c'è bisogno di impostare un test specifico per questo compoentne in quanto si occuppa solo di renderizzare un testo */}
            {/* se invece gestiva uno stato o un compoenente più complesso e c'era qualche cosa da testare andava fatto */}
            {!changedText && <Output>It's good to see you!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={handleClick}>Changed Text!</button>
        </div>
    );
};

export default Greeting;