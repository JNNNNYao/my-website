import React from 'react';
import Navigation from './blocks/Navigation';
import Footer from './blocks/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAltSquare } from '@fortawesome/free-solid-svg-icons/faShareAltSquare';
import '../css/Projects.scss'

const { PUBLIC_URL } = process.env;

function Projects() {
  return (
    <div class="body">
      <Navigation></Navigation>
      <div id="projects">
        <div className="wrapper">
          <section className="intro">
            <h2>Projects</h2>
          </section>
          <section className="project">
            <div className="item">
              <h3>
                ElonMA <a href="https://github.com/JNNNNYao/ElonMA"><FontAwesomeIcon icon={faShareAltSquare} size='s'/></a>
              </h3>
              <i>Jun. 2022</i>
              <p>
                It is a trolling Discord bot that can receive the image of a person and swap his/her face with Elon Musk. Moreover, it can crawl Elon Musk's Twitter activities so that you won't miss any memes posted by Elon Musk. We deploy our bot and deep model on a private cluster using Kubernetes. We use Keel and GitHub workflow to achieve continuous deployment.
              </p>
            </div>
            <div className="image-block">
              <img src={`${PUBLIC_URL}/project-elonma.png`} alt="" />
            </div>
          </section>
          <section className="project">
            <div className="item">
              <h3>
                Sim-to-Real: ADUDA <a href="https://aduda.engine210.site/"><FontAwesomeIcon icon={faShareAltSquare} size='s'/></a>
              </h3>
              <i>Dec. 2021</i>
              <p>
                This work targeted the techniques of Unsupervised Domain Adaptation (UDA) for semantic segmentation. We first improve the segmentation accuracy of the UDA Segmentation model. Then we prove its effectiveness in real applications by building an autonomous driving pipeline.
              </p>
            </div>
            <div className="image-block">
              <img src={`${PUBLIC_URL}/project-aduda.png`} alt="" />
            </div>
          </section>
          <section className="project">
            <div className="item">
              <h3>
                GNGAN-Tensorflow <a href="https://github.com/JNNNNYao/GNGAN-Tensorflow"><FontAwesomeIcon icon={faShareAltSquare} size='s'/></a>
              </h3>
              <i>Dec. 2021</i>
              <p>
                Re-implementation of the ICCV 2021 paper "Gradient Normalization for Generative Adversarial Networks." The author proposed a gradient normalization method to alleviate the instability of training process GANs. I trained it on DVM-CAR with a conditional setting so that the generative model can generate cars with specific brands. 
              </p>
            </div>
            <div className="image-block">
              <img src={`${PUBLIC_URL}/project-gngan.gif`} alt="" />
            </div>
          </section>
          <section className="project">
            <div className="item">
              <h3>
                Curiosity Driven Exploration RL <a href="https://github.com/JNNNNYao/Curiosity-Driven-Exploration-RL"><FontAwesomeIcon icon={faShareAltSquare} size='s'/></a>
              </h3>
              <i>Apr. 2021</i>
              <p>
                Re-implementation of the ICML 2017 paper "Curiosity-driven Exploration by Self-supervised Prediction." To train an RL agent in a sparse reward setting, the author designed curiosity as an intrinsic reward signal that can enable the RL agent's exploration.
              </p>
            </div>
            <div className="image-block">
              <img src={`${PUBLIC_URL}/project-curiosity.gif`} alt="" />
            </div>
          </section>
          <section className="project">
            <div className="item">
              <h3>
                Checkbox
              </h3>
              <i>Jun. 2020</i>
              <p>
                It is an Android App that aims to help a person or a team organize their to-do list. We build the App with React Native, Expo, and AWS Elastic Beanstalk.
              </p>
            </div>
            <div className="image-block">
              <img src={`${PUBLIC_URL}/project-checkbox.png`} alt="" />
            </div>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Projects;
