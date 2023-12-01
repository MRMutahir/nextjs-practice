"use client"

import React from 'react'

function page(props) {
  return (
    <div>{props.params.username}</div>
  )
}

export default page