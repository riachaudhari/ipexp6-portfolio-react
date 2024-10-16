import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaBootstrap } from 'react-icons/fa';

const Skills = () => {
  return (
    <div id="skills" className="w-full my-10 px-6 py-10 bg-white-100 text-[#001b5e]">
      <div className="max-w-[1200px] m-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <p className="mb-8">These are some of the technologies and tools I work with:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <FaHtml5 size={40} className="text-orange-600 mb-2" />
            <p>HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt size={40} className="text-blue-500 mb-2" />
            <p>CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare size={40} className="text-yellow-500 mb-2" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FaReact size={40} className="text-blue-600 mb-2" />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs size={40} className="text-green-600 mb-2" />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <FaBootstrap size={40} className="text-purple-600 mb-2" />
            <p>Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGitAlt size={40} className="text-red-600 mb-2" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
