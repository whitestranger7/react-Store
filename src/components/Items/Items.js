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