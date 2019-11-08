import React, {Component} from 'react';

import './Items.css';
import Item from './Item/Item';

class Items extends Component {

    state = {
        posts: [
            {src: 'http://www.starhub.com/content/dam/catalog/starhub-store-apple-iphone-11-purple-back.png',
             alt: 'IPhone 11', price: 1000},
            {src: 'https://cdn.pulse2.com/cdn/2019/07/Google-Pixel-3.png', 
             alt: 'Google Pixel 3', price: 450},
            {src: 'https://static.techspot.com/images2/news/bigimage/2019/10/2019-10-15-image-2.png', 
             alt: 'Google Pixel 4', price: 750},
            
        ]
    }

    testClickHandler = () => {
        
    }

    render() {

        const posts = this.state.posts.map((el, index) => {
            return <Item
            key={index} 
            src={el.src}
            alt={el.alt}
            price={`${el.price}$`}/>
        })

        return(
            <main>
                {posts}
            </main>
        )
    }
}

export default Items;