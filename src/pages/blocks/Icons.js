import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import '../../css/Icons.scss';

function Icons() {
    return (
        <div className="icons">
            <ul>
                <li key="Github">
                    <a href="https://github.com/JNNNNYao/"><FontAwesomeIcon icon={faGithub}/></a>
                </li>
                <li key="LinkedIn">
                    <a href="https://www.linkedin.com/in/MatthewYaoJN"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                </li>
                <li key="Email">
                    <a href="mailto:matt1129yao@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
                </li>
            </ul>
        </div>
    );
}

export default Icons;
