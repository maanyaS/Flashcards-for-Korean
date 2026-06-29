import { useState } from "react";

const Flashcard = (props) => {
    const [flipped, setFlipped] = useState(false);
    const updateFlipped= () => {
        setFlipped(!flipped)
    }

    return(
        <div className={`FlashcardText ${props.color}`} onClick={updateFlipped}>
            <h3>{flipped ? props.description : props.title}</h3>
        </div>
    )
}
export default Flashcard;