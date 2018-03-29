import React from "react";

class Button extends React.Component {

  render() {

    return (     
        <div>
         <button onClick={this.props.button}>ShowMore</button>        
       </div>   
      );
  }
}



export default Button;