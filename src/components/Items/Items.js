import React, {Component} from 'react';

import './Items.css';
import Item from './Item/Item';
import Aux from '../AuxContainer';
import Navigation from './../Navigation/Navigation';
import axios from '../../init-firebase';


class Items extends Component {

    state = {
        posts: [],
        checkoutItemsList: {
            items: [],
            length: null
        },
    }

    componentDidMount() {
        axios.get('/posts.json')
            .then(resp => {
                let itemsList = [];
                for(let i of resp.data){
                    itemsList.push(i)
                };
                this.setState({
                    posts: itemsList
                })
        })
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