import React from 'react';
import Navigation from './blocks/Navigation';
import Footer from './blocks/Footer'
import '../css/CV.scss'

const { PUBLIC_URL } = process.env;

function CV() {
  return (
    <div class="body">
      <Navigation></Navigation>
      <div id="cv">
        <div className="wrapper">
          <section className="intro">
            <header>
              <h2>Curriculum Vitae</h2>
            </header>
          </section>
          <section className="resume">
            <header>
              <h2>Education</h2>
            </header>
            <div className="image_and_item">
              <img src={`${PUBLIC_URL}/NTHU.jpeg`} alt="" />
              <div className="item">
                <div className="title_and_date">
                  <h3>
                    <a href="https://nthu-en.site.nthu.edu.tw/">National Tsing Hua University</a>
                  </h3>
                  <div>
                    <i>Sep. 2018 – June 2022</i>
                  </div>
                </div>
                <i>Bachelor of Science in Computer Science</i>
                <ul>
                  <li>GPA: 4.27 / 4.3</li>
                  <li>Ranking: 1 / 142</li>
                  <li>4 Academic Achievement Awards</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="resume">
            <header>
              <h2>Research Experience</h2>
            </header>
            <div className="image_and_item">
              <img src={`${PUBLIC_URL}/mediatek.png`} alt="" />
              <div className="item">
                <div className="title_and_date">
                  <h3>
                    <a href="https://www.mediatek.com/">MediaTek</a>
                  </h3>
                  <div>
                    <i>Jan. 2022 - Dec. 2022</i>
                  </div>
                </div>
                <i>Research Intern in Intelligence Vision Processing team</i>
                <ul>
                  <li>Research topic: Super-Resolution.</li>
                </ul>
              </div>
            </div>
            <div className="image_and_item">
              <img src={`${PUBLIC_URL}/elsalab.png`} alt="" />
              <div className="item">
                <div className="title_and_date">
                  <h3>
                    <a href="http://elsalab.ai/about">ELSA Lab</a>
                  </h3>
                  <div>
                    <i>Feb. 2021 - June 2022</i>
                  </div>
                </div>
                <i>Undergraduate Research Assistant at National Tsing Hua University</i>
                <ul>
                  <li>Research topic: Unsupervised Domain Adaptation & Model-Based Reinforcement Learning.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="resume">
            <header>
              <h2>Work Experience</h2>
            </header>
            <div className="image_and_item">
              <img src={`${PUBLIC_URL}/ITRI.jpeg`} alt="" />
              <div className="item">
                <div className="title_and_date">
                  <h3>
                    <a href="https://www.itri.org.tw/english/">Industrial Technology Research Institute</a>
                  </h3>
                  <div>
                    <i>July 2020 – Sep. 2020</i>
                  </div>
                </div>
                <i>Data Science Intern at <a href="https://www.itri.org.tw/english/Computational-Intelligence-Technology-Center?CRWP=617753153253043007">Computational Intelligence Technology Center</a></i>
                <ul>
                  <li>Implement a data pipeline to preprocess and analyze data from an optoelectronic manufacturing factory.</li>
                  <li>Perform feature engineering and build Machine Learning models to predict the factory's production quality.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="resume">
            <header>
              <h2>Teaching Experience</h2>
            </header>
            <div className="image_and_item">
              <img src={`${PUBLIC_URL}/NTHU.jpeg`} alt="" />
              <div className="item">
                <div className="title_and_date">
                  <h3>
                    <a href="https://nthu-en.site.nthu.edu.tw/">National Tsing Hua University</a>
                  </h3>
                  <div>
                    <i>Spring 2021</i>
                  </div>
                </div>
                <i>Teaching Assistant of Introduction to Programming</i>
                <ul>
                  <li>Help the professor organize the curriculum and guide students in developing their coding ability in C++.</li>
                  <li>Offer tutorial in English.</li>
                </ul>
              </div>
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
              <div className="title_and_date">
                <i>
                  <b><a href="http://www.ta-yung.com.tw/">Lin Hsiung Chen Memorial Scholarship</a></b>
                </i>
                <div>
                  <i>2021</i>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="title_and_date">
                <i>
                  <b><a href="https://eecs.site.nthu.edu.tw/p/403-1005-1425-1.php?Lang=zh-tw">Shun-I Chu and Zyxel Scholarship</a></b>
                </i>
                <div>
                  <i>2020</i>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="title_and_date">
                <i>
                  <b><a href="https://pan.itri.org.tw/awards/scholarship.aspx?nid=F1F97516C31E9D90">Pan Wen Yuan Foundation Scholarship</a></b>
                </i>
                <div>
                  <i>2020</i>
                </div>
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
