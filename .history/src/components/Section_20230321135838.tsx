import React from 'react'

export default function Section(props : any) {
  return (
    <div id={props.id}>
     <div className='px-8 py-10'>
    <h5 className='text-gray-500 uppercase'>my speciality</h5>
    <h1 className='uppercase text-4xl'>MY SKILLS</h1>
    <Divider/>

</div>
        {props.children}
    </div>
  )
}
