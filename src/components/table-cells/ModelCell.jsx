import React from "react"
import {TableCell} from "@mui/material";

const ModelCell = ({data}) => (
    data ?
        <td>{data['object_name']}</td>
        :
        <td/>
)

export default ModelCell