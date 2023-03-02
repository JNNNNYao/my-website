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
                <p>
                Hi, this is Matthew! Welcome to my website.
                I am a research intern at <a href='https://www.mediatek.com/'>MediaTek</a>, mentored by <a href='https://scholar.google.com.tw/citations?user=EPYQ48sAAAAJ&hl=zh-TW'>Yi-Chen Lo</a>, <a href='https://github.com/roytseng-tw'>Roy Tseng</a>, and <a href='https://scholar.google.com.tw/citations?user=FK1RcpoAAAAJ&hl=zh-TW'>Chia-Che Chang</a>. My research interests lie in the fields of learning with limited data, low-level vision, and implicit neural representation.
                I received a B.S. degree in Computer Science from <a href='https://nthu-en.site.nthu.edu.tw/'>National Tsing Hua University</a>, advised by <a href='http://elsalab.ai/about'>Prof. Chun-Yi Lee</a>.
                Currently, I am applying for Fall 2023 graduate programs in the U.S.
                </p>
            </section>
            <Icons></Icons>
            <section className="news">
                <h3>News</h3>
                <ul>
                  <li>2023.02 One paper accepted by CVPR. Many thanks to my partners, mentors, and advisor!</li>
                </ul>
            </section>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Index;
