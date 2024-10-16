import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../utils/Data';

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState(SKILLS[0].category);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredSkills = SKILLS.find((skill) => skill.category === selectedCategory).skills;

  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      {/* Category Buttons */}
      <div className="flex gap-5 mb-5">
        {SKILLS.map((skillCategory) => (
          <button
            key={skillCategory.category}
            className={`px-4 py-2 text-white ${selectedCategory === skillCategory.category ? 'bg-blue-600' : 'bg-gray-600'}`}
            onClick={() => handleSelectCategory(skillCategory.category)}
          >
            {skillCategory.category}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {filteredSkills.map((skill, idx) => {
          const Icon = skill.icon; // Get the icon component from skill
          return (
            <motion.div
              key={idx}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]" style={{ color: skill.color || 'white' }}>
                <Icon className="text-[80px]" />
              </div>
              <p className="text-white">{skill.title}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
