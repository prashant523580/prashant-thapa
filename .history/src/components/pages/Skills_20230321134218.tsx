import React from 'react'
import Section from '../Section'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function SkillsComponent() {
  return (
   <Section
    id={"Skills"}
   >

<div>
    <h5 className='text-gray-300 uppercase'>my speciality</h5>
    <h1 className='uppercase'>MY SKILLS</h1>

</div>
<div className="flex items-center mb-5">
    <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">8.7</p>
    <p className="ml-2 font-medium text-gray-900 dark:text-white">Excellent</p>
    <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">376 reviews</p>
    <a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read all reviews</a>
</div>
<div className="gap-8 sm:grid sm:grid-cols-2 px-10 py-6">
    <div>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400"><HtmlIcon/> HTML</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "89%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400"><CssIcon/>CSS</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "70%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">7.0</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400"><JavascriptIcon/>JAVASCRIPT</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "80%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.0</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">BOOTSTRAP</dt>
            <dd className="flex items-center">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "60%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">6.0</span>
            </dd>
        </dl>
    </div>
    <div>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">TAILWINDCSS</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "63%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">6.3</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400"><GitHubIcon/>GITHub</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "63%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">6.3</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">REACT.JS</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "65%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">6.5</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">NEXT.JS</dt>
            <dd className="flex items-center">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "47%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">4.7</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">MONGODB</dt>
            <dd className="flex items-center">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "40%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">4.0</span>
            </dd>
        </dl>
    </div>
</div>

   </Section>
  )
}
