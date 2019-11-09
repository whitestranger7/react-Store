import React, {Component} from 'react';

import './Items.css';
import Item from './Item/Item';
import Aux from '../AuxContainer';
import Navigation from './../Navigation/Navigation';

class Items extends Component {

    state = {
        posts: [
            {src: 'https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg',
             alt: 'Banana', price: 0.18},
            {src: 'https://www.freeiconspng.com/uploads/potato-png-32.png', 
             alt: 'Potato', price: 0.09},
            {src: 'http://icons.iconarchive.com/icons/google/noto-emoji-food-drink/1024/32365-cucumber-icon.png', 
             alt: 'Cucumber', price: 0.14},
            {src: 'https://img.pngio.com/cabbage-transparent-image-png-arts-cabbage-transparent-1000_849.png', 
             alt: 'Cabbage', price: 0.30},
            {src: 'https://images.vexels.com/media/users/3/149074/isolated/preview/a8b4e81a3ca6a6ac99171bba9f6a7905-parsley-herb-illustration-by-vexels.png', 
             alt: 'Parsley', price: 0.05},
            {src: 'http://atlas-content-cdn.pixelsquid.com/stock-images/pumpkin-L6vYY40-600.jpg', 
             alt: 'Pumpkin', price: 1.40},
            {src: 'http://www.pngmart.com/files/1/Tomato-Clip-Art-Free-PNG.png', 
             alt: 'Tomato', price: 0.16},
            {src: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', 
             alt: 'Onion', price: 0.13},
            {src: 'https://www.searchpng.com/wp-content/uploads/2019/01/Red-Chili-Pepper-Clipart-PNG-715x715.png', 
             alt: 'Pepper', price: 0.20},
            {src: 'http://www.pngnames.com/files/4/Carrot-PNG-Clipart.png', 
             alt: 'Carrot', price: 0.18},
            {src: 'https://www.wpclipart.com/food/vegetables/radish/radish.png', 
             alt: 'Radish', price: 0.22},
        ],
        checkoutItemsList: {
            items: [],
            length: null
        }
    }

    testClick = (el) => {
        const newBasket = [...this.state.checkoutItemsList.items];
        newBasket.push([el.alt, el.price]);
        this.setState({
          checkoutItemsList: {
              items: newBasket,
              length: newBasket.length
          }
        })
    }

    render() {
        
        const posts = this.state.posts.map((el, index) => {
            return <Item
            key={index} 
            src={el.src}
            alt={el.alt}
            addToBasket={this.testClick.bind(this, el)}
            price={`${el.price}$`}/>
        })

        return(
            <Aux>
                <Navigation items={this.state.checkoutItemsList.items}/>
                <main>
                    {posts}
                </main>
            </Aux>
        )
    }
}

export default Items;