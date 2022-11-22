import React from "react"

const ModelListCell = ({data}) => (
    data ?
        <td>{data.map(item => `${item['object_name']}, `)}</td>
        :
        <td/>
)

export default ModelListCell



