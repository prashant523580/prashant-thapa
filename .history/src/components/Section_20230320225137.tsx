import React from 'react'

export default function Section(props : any) {
  return (
    <div id={props.id}>
        {props.children}
    </div>
  )
}
