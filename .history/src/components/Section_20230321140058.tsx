import React from 'react'
import Divider from './UI/Divider'

export default function Section(props: any) {
  return (
    <div id={props.id}>
      {props.headTitle &&
        <div className='px-8 py-10'>
          <h5 className='text-gray-500 uppercase'>{props.headTitle}</h5>
          <h1 className='uppercase text-4xl'>{props.title}</h1>
          <Divider />

        </div>
    }
      {props.children}
    </div>
  )
}
