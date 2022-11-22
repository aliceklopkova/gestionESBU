import React, {useEffect, useState} from 'react';
import './Customformulario.css';
import CustomField from "./form/custom-field";
import {Box, Button, Grid, Stack} from "@mui/material";
import formFieldDescription from "../data/formFieldDescription";
import {Link, useLocation} from "react-router-dom";
import {useNavigate, useParams} from "react-router";


function CustomForm({fields, model, api}) {
    const location = useLocation()
    const [data, setData] = useState([])
    const [modData, setModData] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            api(id).get().then((items) => {
                if (items.status === 200) {
                    setModData(items.data)
                    setData(items.data)

                } else {
                    setModData("error")
                }
            })
        }
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        id ?
            api(id).update(data).then((res) => {
                console.log(res)
                navigate(`/${location.pathname.split("/")[1]}`)
                // return <Navigate replace to={`/${location.pathname.split("/")[1]}`}/>
            })
            :
            api().create(data).then((res) => {
                console.log(res)
                navigate(`/${location.pathname.split("/")[1]}`)
                // return <Navigate replace to={`/${location.pathname.split("/")[1]}`}/>
            })
    }
    return (
        <Box component="form" sx={{flexGrow: 1, padding: "50px", width: "100%"}} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {!id ?
                    fields.filter(field => field !== 'id').map((item) => (
                        <Grid xs={12} md={3} sm={6}>
                            <CustomField  {...formFieldDescription[item]} params={data} setParams={setData}
                                          sx={{width: "90%", margin: "15px 0"}}/>
                        </Grid>
                    ))
                    :
                    fields.filter(field => field !== 'id').map((key) => (
                        modData && modData[key] ?
                            <Grid xs={12} md={3} sm={6}>
                                <CustomField  {...formFieldDescription[key]} mod={true} setParams={setData}
                                              defaultValue={modData[key]} sx={{width: "90%", margin: "15px 0"}}/>
                            </Grid>
                            :
                            null
                    ))
                }
            </Grid>
            <Stack sx={{marginTop: "15px"}} direction="row" spacing={2}>
                <Button sx={{width: '100px'}} variant="contained" color="success" type="submit">Guardar</Button>
                <Link style={{textDecoration: "none"}} to={`/${location.pathname.split("/")[1]}`}>
                    <Button sx={{width: '100px'}} variant="contained" color="error" type="">Cancelar</Button>
                </Link>
            </Stack>
        </Box>

    );
}


export default CustomForm;