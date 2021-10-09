import React from "react";
import Learn from "../components/learn";
import Bootcamps from "../components/bootcamps";
import Teach from "../components/teach";
import Clarification from "../components/clarification";
import Banner from "../components/banner";

const Home = () => {
    return (
        <div className='home'>
            <Banner />
            <Learn />
            <Bootcamps />
            <Teach />
            <Clarification />
        </div>
    );
};

export default Home;
