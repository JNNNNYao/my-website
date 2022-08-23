import React from 'react';
import { motion } from 'framer-motion';
import '../css/Loading.scss';

function Loading() {
  return (
    <div class="body">
        <motion.div
            className="motion"
            initial={{ scale: 0 }}
            animate={{ rotate: 180, scale: 1 }}
            transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            repeat: 'Infinity',
            repeatType: 'reverse',
            }}
        />
    </div>
  );
}

export default Loading;
