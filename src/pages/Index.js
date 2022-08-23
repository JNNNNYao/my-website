import React from 'react';
import Navigation from './blocks/Navigation';
import Icons from './blocks/Icons'
import Footer from './blocks/Footer'
import '../css/Index.scss'

const { PUBLIC_URL } = process.env;

function Index() {
  return (
    <div class="body">
        <Navigation></Navigation>
        <div id="index">
            <section className="intro">
                <img src={`${PUBLIC_URL}/me.png`} alt="" />
                <header>
                    <h2>Matthew Yao</h2>
                </header>
            </section>

            <section className="about">
                <h2>About</h2>
                <p>
                Hi, this is Matthew!
                I just received a bachelor's degree in Computer Science from National Tsing Hua University.
                I plan to study for a master's degree in the US, so now I'm preparing for the Fall 2023 application.
                Welcome to my website&#128526;
                </p>
            </section>
            <Icons></Icons>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Index;
