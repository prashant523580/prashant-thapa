import React from 'react'
import Section from '../Section'

export default function SkillsComponent() {
  return (
   <Section
    id={"Skills"}
   >

<div className="flex items-center mb-5">
    <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">8.7</p>
    <p className="ml-2 font-medium text-gray-900 dark:text-white">Excellent</p>
    <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">376 reviews</p>
    <a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read all reviews</a>
</div>
<div className="gap-8 sm:grid sm:grid-cols-2">
    <div>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">HTML</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "89%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">CSS</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "70%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">JAVASCRIPT</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "80%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Bootstrap</dt>
            <dd className="flex items-center">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "60%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">5.4</span>
            </dd>
        </dl>
    </div>
    <div>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">TAILWINDCSS</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "80%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">REACT.JS</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "65%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">7.0</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">NEXT.JS</dt>
            <dd className="flex items-center">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "40%"}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
            </dd>
        </dl>
    </div>
</div>

   </Section>
  )
}
