import React from 'react'
import { motion } from 'framer-motion'
import aws1 from "/Project/portfolio/Image/aws3.jpg"
import aws2 from "/Project/portfolio/Image/aws2.jpeg"

export const Achivment = () => {
    
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div id="tech" className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-10 mt-20 mb-20'>
            {/* Heading Section */}
            <motion.h1
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                className='text-4xl font-light text-white md:text-6xl text-center'>
                Achievements
            </motion.h1>

            <motion.h3
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                className='text-2xl font-light text-yellow-200 md:text-3xl text-center'>
                AWS DeepRacer Event - Humber College
            </motion.h3>

            {/* Content Section: Text and Images */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-white w-full px-4 md:px-16">

                {/* Text Section */}
                <motion.p 
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    className='flex-1 text-xl font-light md:text-xl text-teal-300 text-left md:text-left'>
                    In April, our team participated in the AWS DeepRacer event at Humber College, a thrilling competition that combined cutting-edge technology with innovative problem-solving. The event focused on training autonomous racing cars using reinforcement learning, providing participants with hands-on experience in machine learning and AI.
                    <br /><br />
                    Throughout the event, we collaborated closely, leveraging our collective skills in programming, data analysis, and strategy development. Our team utilized the AWS DeepRacer console to develop and optimize our racing model, experimenting with various hyperparameters and algorithms to enhance performance on the track.
                </motion.p>

                {/* Image Section */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-shrink-0 md:w-[300px] max-h-[250vh] rounded-2xl hover:scale-105 transition-all duration-300">
                    <img src={aws1} alt="AWS DeepRacer" className="w-full h-full object-cover rounded-2xl" />
                </motion.div>
            </div>

            {/* Second Row of Content */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-white w-full px-4 md:px-16">

                {/* Image Section */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-shrink-0 md:w-[300px] max-h-[250vh] rounded-2xl hover:scale-105 transition-all duration-300">
                    <img src={aws2} alt="AWS DeepRacer" className="w-full h-full object-cover rounded-2xl" />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    className="flex-1 text-xl font-light md:text-xl text-teal-300 text-left md:text-left">
                    <p>
                        After several intense rounds of racing, our team secured the first runner-up, showcasing our hard work, dedication, and ability to effectively apply theoretical knowledge in a practical setting. This achievement not only reinforced our understanding of machine learning principles but also fostered a strong sense of camaraderie among team members.
                        <br /><br />
                        The AWS DeepRacer event was an invaluable experience that inspired us to continue exploring the exciting world of AI and automation, pushing the boundaries of innovation in our future projects.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}