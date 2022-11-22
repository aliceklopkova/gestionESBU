import React from 'react'

const TextCell = ({data}) => (
    data ?
        <td>{data}</td>
        :
        <td/>
)

export default TextCell