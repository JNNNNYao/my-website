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
                <a href="https://github.com/JNNNNYao/ElonMA">ElonMA <FontAwesomeIcon icon={faShareAltSquare} size='sm'/></a>
              </h3>
              <i>Jun. 2022</i>
              <p>
                It is a trolling Discord bot that can receive the image of a person and swap his/her face with Elon Musk. Moreover, it can crawl Elon Musk's Twitter activities so that you won't miss any memes posted by Elon Musk. We deploy our bot and deep model on a private cluster using Kubernetes. Each module is connected using RabbitMQ. We use Keel and GitHub workflow to achieve continuous deployment.
              </p>
            </div>
            <div className="image-block">
              <img src={`${PUBLIC_URL}/project-elonma.png`} alt="" />
            </div>
          </section>
          <section className="project">
            <div className="item">
              <h3>
                <a href="https://aduda.engine210.site/">Sim-to-Real: ADUDA <FontAwesomeIcon icon={faShareAltSquare} size='sm'/></a>
              </h3>
              <i>Dec. 2021</i>
              <p>
                This work demonstrated the effectiveness of Unsupervised Domain Adaptation (UDA) and the Sim-to-Real setting with self-driving vehicle applications. We first improved the segmentation accuracy of the UDA Segmentation model with simple yet effective designs. Then, we trained RL agents in the simulator to control the vehicle with segmentation maps. Finally, we integrated the segmentation model, RL agent, and hardware devices (e.g., vehicle, camera, mobile computing platform) with ROS.
              </p>
            </div>
            <div className="image-block">
              <img src={`${PUBLIC_URL}/project-aduda.png`} alt="" />
            </div>
          </section>
          <section className="project">
            <div className="item">
              <h3>
                <a href="https://github.com/JNNNNYao/GNGAN-Tensorflow">GNGAN-Tensorflow <FontAwesomeIcon icon={faShareAltSquare} size='sm'/></a>
              </h3>
              <i>Dec. 2021</i>
              <p>
                Re-implementation of the ICCV 2021 paper "Gradient Normalization for Generative Adversarial Networks." The author proposed a gradient normalization method to alleviate the instability of training GANs. I trained it on DVM-CAR with a conditional setting so that the generative model can generate cars with specific brands. 
              </p>
            </div>
            <div className="image-block">
              <img src={`${PUBLIC_URL}/project-gngan.gif`} alt="" />
            </div>
          </section>
          <section className="project">
            <div className="item">
              <h3>
                <a href="https://github.com/JNNNNYao/Curiosity-Driven-Exploration-RL">Curiosity Driven Exploration RL <FontAwesomeIcon icon={faShareAltSquare} size='sm'/></a>
              </h3>
              <i>Apr. 2021</i>
              <p>
                Re-implementation of the ICML 2017 paper "Curiosity-driven Exploration by Self-supervised Prediction." To train an RL agent in a sparse reward setting, the author designed curiosity as an intrinsic reward signal that facilitates the exploration of RL agents.
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
