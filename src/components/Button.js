import './Button.css';

function Button({ children, ...rest}) {
    console.log(rest);
    return (
        <div>
            <button 
                {...rest} 
                type="button"
                style={{backgroundColor: `${rest.bgcolor}`}}
            >{ children }</button>
        </div>
    )
}

export default Button;