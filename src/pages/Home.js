import React from 'react';
import Banner from '../component/Banner';
import Login from '../component/Login';
import PostCards from '../component/PostCards';

import Header from '../LayOut/Header';

const Home = () => {
    
    return (
        <div>
            <Header/>

            <Banner/>
            <Login/>
            <PostCards/>
        </div>
    );
};

export default Home;