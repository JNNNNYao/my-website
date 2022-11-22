import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../../css/Icons.scss';

function Icons() {
    return (
        <div className="icons">
            <a href="https://github.com/JNNNNYao/"><button><FontAwesomeIcon icon={faGithub} size='xs'/> Github</button></a>
            <a href="https://www.linkedin.com/in/MatthewYaoJN"><button><FontAwesomeIcon icon={faLinkedinIn} size='xs'/> LinkedIn</button></a>
            <a href="https://scholar.google.com.tw/citations?user=4mk_dZwAAAAJ&hl=zh-TW"><button><FontAwesomeIcon icon={faGraduationCap} size='xs'/> Google Scholar</button></a>
            <a href="mailto:matt1129yao@gmail.com"><button><FontAwesomeIcon icon={faEnvelope} size='xs'/> Email</button></a>
        </div>
    );
}

export default Icons;
