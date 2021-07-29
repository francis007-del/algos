import react from 'react';
import './../button/button.scss';
const Button=({children,inverted,...otherProps})=>{
    return(
     <button className={`custom-button ${inverted?'inverted':''}`} {...otherProps}>
       {children}
     </button>
    );
}
export default Button;