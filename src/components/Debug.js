import React from 'react'
import useForm from '../hooks/useForm'

export default () => {
  const { meta, fields, values, cleanValues } = useForm()
  return (
    <>
      <h5>Meta</h5>
      <pre>{ JSON.stringify(meta, null, 2) }</pre>
      <h5>Fields</h5>
      <pre>{ JSON.stringify(fields, null, 2) }</pre>
      <h5>Clean Values</h5>
      <pre>{ JSON.stringify(cleanValues, null, 2) }</pre>
      <h5>Values</h5>
      <pre>{ JSON.stringify(values, null, 2) }</pre>
    </>
  )
}
