import React from 'react'; 
import 'devextreme/dist/css/dx.light.css';
 import Button from 'devextreme-react/button';

const sayHelloWorld = () => {
    alert('Hello this is DevExpress Tutorial');
  } 

export default function Clickme() {
    
  return (
    <Button
    text="Click me"
    onClick={sayHelloWorld}
/>
  )
}
