import React from 'react';
import Navigation from './blocks/Navigation';
import Footer from './blocks/Footer'
import '../css/CV.scss'

function CV() {
  return (
    <div class="body">
      <Navigation></Navigation>
      <div id="cv">
        <div className="wrapper">
          <section className="intro">
            <header>
              <h2>CV</h2>
            </header>
          </section>
          <section className="resume_top">
            <header>
              <h2>Education</h2>
            </header>
            <div className="item">
              <h3>
                <a href="https://nthu-en.site.nthu.edu.tw/">National Tsing Hua University</a>
              </h3>
              <div className="right">
                <i>Sep. 2018 – June 2022</i>
              </div>
              <i>Bachelor of Science in Computer Science</i>
              <ul>
                <li>Overall GPA: 4.27 / 4.3</li>
                <li>Major GPA: 4.29 / 4.3</li>
                <li>Ranking: 1 / 142</li>
                <li>Academic Achievement Award (Spring 2019, Spring 2020, Fall 2020, Spring 2021)</li>
              </ul>
            </div>
          </section>
          <section className="resume">
            <header>
              <h2>Research Experience</h2>
            </header>
            <div className="item">
              <h3>
                <a href="https://www.mediatek.com/">MediaTek</a>
              </h3>
              <div className="right">
                <i>Jan. 2022 - Now</i>
              </div>
              <i>Research Intern in Intelligence Vision Processing team</i>
              <ul>
                <li>Research topic: Super-Resolution.</li>
              </ul>
            </div>
            <div className="item">
              <h3>
                <a href="http://elsalab.ai/about">ELSA Lab</a>
              </h3>
              <div className="right">
                <i>Jan. 2022 - Now</i>
              </div>
              <i>Undergraduate Research Assistant at National Tsing Hua University</i>
              <ul>
                <li>Research topic: Unsupervised Domain Adaptation & Model-Based Reinforcement Learning.</li>
              </ul>
            </div>
          </section>
          <section className="resume">
            <header>
              <h2>Work Experience</h2>
            </header>
            <div className="item">
              <h3>
                <a href="https://www.itri.org.tw/english/">Industrial Technology Research Institute</a>
              </h3>
              <div className="right">
                <i>July 2020 – Sep. 2020</i>
              </div>
              <i>Data Science Intern at <a href="https://www.itri.org.tw/english/Computational-Intelligence-Technology-Center?CRWP=617753153253043007">Computational Intelligence Technology Center</a></i>
              <ul>
                <li>Implement a data pipeline to preprocess and analyze data from an optoelectronic manufacturing factory.</li>
                <li>Perform feature engineering and build Machine Learning models to predict the factory's production quality.</li>
              </ul>
            </div>
          </section>
          <section className="resume">
            <header>
              <h2>Teaching Experience</h2>
            </header>
            <div className="item">
              <h3>
                <a href="https://nthu-en.site.nthu.edu.tw/">National Tsing Hua University</a>
              </h3>
              <div className="right">
                <i>Spring 2021</i>
              </div>
              <i>Teaching Assistant of Introduction to Programming</i>
              <ul>
                <li>Help the professor organize the curriculum and guide students in developing their coding ability in C++.</li>
                <li>Use English when tutoring because the course is offered in English.</li>
              </ul>
            </div>
          </section>
          <section className="resume">
            <header>
              <h2>Skills</h2>
            </header>
            <div className="item">
              <b>Programming Language: </b><i>C, C++, Python, Java, HTML, CSS, JavaScript</i>
            </div>
            <div className="item">
              <b>Software Frameworks & Tools: </b><i>React, Docker, Kubernetes, ROS</i>
            </div>
            <div className="item">
              <b>Data Science & Deep Learning: </b><i>SQL, Numpy, Pandas, Scikit-Learn, Tensorflow, PyTorch</i>
            </div>
            <div className="item">
              <b>Parallel Computing: </b><i>MPI, Pthread, OpenMP, CUDA</i>
            </div>
            <div className="item">
              <b>Language: </b><i>Mandarin(native), English(TOEFL 106/120, GRE 332/340)</i>
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
                <b><a href="https://eecs.site.nthu.edu.tw/p/403-1005-1425-1.php?Lang=zh-tw">Shun-I Chu and Zyxel Scholarship</a></b>
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
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default CV;
