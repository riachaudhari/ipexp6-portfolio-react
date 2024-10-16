import React from 'react'
import ProjectsItem from './ProjectsItem'
import bikebuyersExcel from '../assets/bikebuyersExcel.jpeg'
import CovidDataAnalysis from '../assets/CovidDataAnalysis.jpeg'
import CreditCardDashboard from '../assets/CreditCardDashboard.jpeg'
import TataDataVisualization from '../assets/TataDataVisualization.jpeg'

const Projects = () => {
    return (
      <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Have a look at some of the latest projects that I have worked on!</p>
        <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectsItem 
            img={CreditCardDashboard} 
            title='Credit Card Financial Dashboard' 
            link='https://github.com/riachaudhari/Credit_Card_Financial_Dashboard.git'
          />
          <ProjectsItem 
            img={CovidDataAnalysis} 
            title='Covid Data Analysis' 
            link='https://github.com/riachaudhari/Covid-Data-Analysis-Project.git'
          />
          <ProjectsItem 
            img={bikebuyersExcel} 
            title='Bike Buyers Excel' 
            link='https://github.com/riachaudhari/Bike-Buyers-Excel-Dashboard.git'
          />
          <ProjectsItem 
            img={TataDataVisualization} 
            title='Tata Data Visualization' 
            link='https://github.com/riachaudhari/Tata-Data-Visualization-.git'
          />
        </div>
      </div>
    );
  }
  
  export default Projects;
