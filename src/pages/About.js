import React from 'react';
import Navigation from './blocks/Navigation';
import Footer from './blocks/Footer'
import '../css/About.scss'

const { PUBLIC_URL } = process.env;

function About() {
  const likes = ['Basketball (Lakers fan!)', 'Baseball', 'Soccer', 'Ski', 'Dogs', 'Killer Whale', 'Coffee', 'Coca-Cola'];
  return (
    <div class="body">
      <Navigation></Navigation>
      <div id="about">
        <div className="wrapper">
          <section className="intro">
            <header>
              <h2>About me</h2>
            </header>
            <img src={`${PUBLIC_URL}/me_about.png`} alt="" />
            <p>
              Hi, this is Matthew!
              I just received a bachelor's degree in Computer Science from National Tsing Hua University.
              I plan to study for a master's degree in the US, so now I'm preparing for the Fall 2023 application.
            </p>
          </section>
          <section className="interest">
            <header>
              <h2>I like</h2>
            </header>
            <ul>
              {likes.map((value, index) => { return <li>{value}</li> })}
            </ul>
          </section>
          <section className="resume">
            <header>
              <h2>Education</h2>
            </header>
            <div className="item">
              <h3>
                <a href="https://www.nthu.edu.tw/">National Tsing Hua University</a>
              </h3>
              <div className="right">
                <i>Sep. 2018 – Jun. 2022</i>
              </div>
              <i>B.S in Computer Science</i>
              <ul>
                <li>Overall GPA: 4.27 / 4.30</li>
                <li>Ranking: 4 / 178</li>
                <li>Academic Excellence Award (Spring 2019, Spring 2020, Fall 2020, Spring 2021)</li>
              </ul>
            </div>
          </section>
          <section className="resume">
            <header>
              <h2>Experience</h2>
            </header>
            <div className="item">
              <h3>
                <a href="https://www.mediatek.tw/">MediaTek</a>
              </h3>
              <div className="right">
                <i>Jan. 2022 - Now</i>
              </div>
              <i>Research Intern in Intelligence Vision Processing team</i>
              <ul>
                <li>Research on Super-Resolution</li>
              </ul>
            </div>
            <div className="item">
              <h3>
                <a href="https://www.nthu.edu.tw/">National Tsing Hua University</a>
              </h3>
              <div className="right">
                <i>Spring 2021</i>
              </div>
              <i>Teaching Assistant of Introduction to Programming</i>
              <ul>
                <li>Help organizing the curriculum and answering students' questions.</li>
                <li>The course is offered in English.</li>
              </ul>
            </div>
            <div className="item">
              <h3>
                <a href="https://www.itri.org.tw/">Industrial Technology Research Institute</a>
              </h3>
              <div className="right">
                <i>Jul. 2020 – Sep. 2020</i>
              </div>
              <i>Data Science Intern at Computational Intelligence Technology Center</i>
              <ul>
                <li>Analyze data provided by industrial factory.</li>
                <li>Predict the quality of production using Machine Learning.</li>
                <li>Using tools like Numpy, Pandas, Scikit-Learn, Matplotlib, etc</li>
              </ul>
            </div>
          </section>
          <section className="resume">
            <header>
              <h2>Honor</h2>
            </header>
            <div className="item">
              <i>
                <b><a href="http://www.ta-yung.com.tw/">Lin Hsiung Chen Memorial Scholarship</a></b>
              </i>
              <div className="right">
                <i>2021</i>
              </div>
            </div>
            <div className="item">
              <i>
                <b><a href="https://eecs.site.nthu.edu.tw/p/403-1005-1425-1.php?Lang=zh-tw">Zhu Shun Yi He Qin Scholarship</a></b>
              </i>
              <div className="right">
                <i>2020</i>
              </div>
            </div>
            <div className="item">
              <i>
                <b><a href="https://pan.itri.org.tw/awards/scholarship.aspx?nid=F1F97516C31E9D90">Pan Wen Yuan Foundation Scholarship</a></b>
              </i>
              <div className="right">
                <i>2020</i>
              </div>
            </div>
          </section>
          <section className="resume">
            <header>
              <h2>Skills</h2>
            </header>
            <div className="item">
              <b>Programming: </b><i>Python, C/C++, HTML/CSS, JavaScript</i>
            </div>
            <div className="item">
              <b>Software Frameworks: </b><i>React, Node.js</i>
            </div>
            <div className="item">
              <b>Data Science: </b><i>Numpy, Pandas, Matplotlib, Scikit-Learn</i>
            </div>
            <div className="item">
              <b>Deep Learnings: </b><i>Tensorflow, Keras, PyTorch</i>
            </div>
            <div className="item">
              <b>Parallel Computing: </b><i>MPI, Pthread, OpenMP, CUDA</i>
            </div>
            <div className="item">
              <b>English: </b><i>TOEFL 106</i>
            </div>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
