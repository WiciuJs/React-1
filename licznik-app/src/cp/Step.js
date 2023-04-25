import React from "react";
import '../style cp/Step.css';

const Step = (props) => {

    let inputStep = null;

    return (
        <div className="step">
            Krok :
            <input className="stepCount" ref={(data) => { inputStep = data }} onChange={() => props.changeStep(inputStep)} type="number" id="number" min="1" />
        </div>
    );
}


export default Step;

