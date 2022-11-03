import '../App.css'
import patternDividerMobile from "../images/pattern-divider-mobile.svg"
import patternDividerDesktop from "../images/pattern-divider-desktop.svg"

function cardAdvice(props) {
    return (
        <div className="card-advice">
            <h6>ADVICE #{props.id}</h6>
            <p>{props.advice}</p>
            <div className="pattern-divider">
                <img className='mobile' src={patternDividerMobile} alt="" />
                <img className='desktop' src={patternDividerDesktop} alt="" />
            </div>
        </div>
    )
}

export default cardAdvice;