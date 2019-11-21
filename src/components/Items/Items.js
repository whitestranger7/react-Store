import React, {Component} from 'react';

import './Items.css';

import Item from './Item/Item';
import Aux from '../AuxContainer';
import Navigation from './../Navigation/Navigation';
import axios from '../../init-firebase';
import Popup from './Popup/Popup';


class Items extends Component {

    state = {
        posts: [],
        checkoutItemsList: {
            items: [],
            length: null
        },
        popupItem: {
            display: false,
            el: null,
            info: null
        }
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

    addToBasket = (el) => {
        const newBasket = [...this.state.checkoutItemsList.items];
        newBasket.push([el.alt, el.price]);
        this.setState({
          checkoutItemsList: {
              items: newBasket,
              length: newBasket.length
          }
        })
    }

    popupHandler = () => {
        this.setState({
            popupItem: {
                display: false,
                el: null,
                info: null
            }
        })
    }


    popupItemWindow = (el) => {
        this.setState({
            popupItem: {
                display: true,
                el: el,
            }
        })
    }

    render() {
        
        const posts = this.state.posts.map((el, index) => {
            return <Item
            key={index} 
            src={el.src}
            alt={el.alt}
            addToBasket={this.addToBasket.bind(this, el)}   
            popupItemWindow={this.popupItemWindow.bind(this, el)}
            price={`${el.price}$`}/>
        })

        let popup = null;
        if(this.state.popupItem.display){
            popup = (<Popup 
                popupContainerHandler={this.popupHandler} 
                src={this.state.popupItem.el.src} 
                info={this.state.popupItem.el.info} 
                price={this.state.popupItem.el.price} 
                addToBasket={this.addToBasket.bind(this, this.state.popupItem.el)}/>)
        }

        return(
            <Aux>
                <Navigation items={this.state.checkoutItemsList.items}/>
                <main>
                    {popup}
                    {posts}
                </main>
            </Aux>
        )
    }
}

export default Items;