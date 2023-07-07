import React from 'react';
import 'devextreme/dist/css/dx.light.css';
 import Menu, { Item } from 'devextreme-react/menu';

const onItemClick = (e) => {
    if (e.itemData.text) {
        console.log(e.itemData.text + ' has been clicked!');
    }
    else if (e.itemData.icon) {
        console.log(e.itemData.icon.charAt(0).toUpperCase() + e.itemData.icon.slice(1) + ' has been clicked!');
    }
}
 
function App() {
    return (
        <div>
            <div id="container">
                <Menu   onItemClick={onItemClick}>
                    <Item
                        icon="home"
                    >
                    </Item>
                    <Item
                        text="About"
                    >
                    </Item>
                         <Item
                        text="Products"
                    >
                        <Item
                            text="Product 1"
                        >
                        </Item>
                        <Item
                            text="Category"
                        >
                            <Item
                                text="Product 2"
                            >
                            </Item>
                            <Item
                                beginGroup={true}
                                text="Product 3"
                            >
                            </Item>
                            <Item
                                text="Product 4"
                            >
                            </Item>
                        </Item>
                        <Item
                            disabled={true}
                            text="Product 5"
                        >
                        </Item>
                    </Item>
                    <Item
                        icon="cart"
                    >
                    </Item>
                </Menu>
            </div>
        </div>
    );
}
 
export default App;
