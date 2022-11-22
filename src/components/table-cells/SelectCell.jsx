import React from 'react'

const SelectCell = ({data, description}) => (
    data ?
        <td>{description.values[data]}</td>
        :
        <td/>
)

export default SelectCell