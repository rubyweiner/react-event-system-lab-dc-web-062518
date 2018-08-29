import React from 'react';

export default class KeyPad extends React.Component {
  handleInput = () => {console.log("Entering password...")}
  render() {
   return (
     <div>Password:
       <input type="password" onKeyUp={this.handleInput}/>
     </div>
   )
 }
}
