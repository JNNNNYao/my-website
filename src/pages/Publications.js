import React from 'react';
import Navigation from './blocks/Navigation';
import Footer from './blocks/Footer'
import '../css/Publications.scss'

const { PUBLIC_URL } = process.env;

function Publications() {
  return (
    <div class="body">
      <Navigation></Navigation>
      <div id="publications">
        <div className="wrapper">
          <section className="intro">
            <h2>Publications</h2>
          </section>
          <section className="publication">
            <div className="item">
              <h3>
                Local Implicit Normalizing Flow for Arbitrary-Scale Image Super-Resolution
              </h3>
              <p><i><b><u>Jie-En Yao</u></b>, Li-Yuan Tsao, Yi-Chen Lo, Roy Tseng, Chia-Che Chang, Chun-Yi Lee</i></p>
              <p><i>IEEE Conf. on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2023</i></p>
              <p><a href='https://arxiv.org/abs/2303.05156'>arXiv</a></p>
            </div>
            <div className="image-block">
              <img src={`${PUBLIC_URL}/LINF.png`} alt="" />
            </div>
          </section>
          <section className="publication">
            <div className="item">
              <h3>
                ELDA: Using Edges to Have an Edge on Semantic Segmentation Based UDA
              </h3>
              <p><i>Ting-Hsuan Liao, Huang-Ru Liao, <b><u>Jie-En Yao</u></b>, Shan-Ya Yang, Li-Yuan Tsao, Hsu-Shen Liu, Bo-Wun Cheng, Chen-Hao Chao, Chia-Che Chang, Yi-Chen Lo, Chun-Yi Lee</i></p>
              <p><i>British Machine Vision Conf. (<b>BMVC</b>), 2022</i></p>
              <p><a href='https://arxiv.org/abs/2211.08888'>arXiv</a> / <a href='https://github.com/TingHLiao/ELDA'>code</a></p>
            </div>
            <div className="image-block">
              <img src={`${PUBLIC_URL}/Pub-ELDA.png`} alt="" />
            </div>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Publications;
