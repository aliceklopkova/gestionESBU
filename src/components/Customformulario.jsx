import React, {useState, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom'
import './Customformulario.css';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import CampoFormulario from "./Campoformulario";
import AtributoTabla from "./Atributostabla";
import tableFieldDescription from "../data/tableFieldDescription";
import formFieldDescription from "../data/formFieldDescription";

function CustomForm({fields, model, api, modificar}) {
    const location = useLocation()
    const [data, setData] = useState([])
    const [modData, setModData] = useState([])
    const {id} = useParams()

    let count = 0;
    const caracter = "#";
    useEffect(() => {
        if (modificar) {
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
        modificar ?
            api(id).update(data).then((res) => (
                console.log(res)
            ))
            :
            api().create(data).then((res) => (
                console.log(res)
            ))
    }
    return (
        <div className={'Formsize'}>
            <Form onSubmit={handleSubmit}>
                {!modificar ? <div>
                    {fields.map((item) => (
                            <CampoFormulario key={item} campo={item} data={formFieldDescription[item]} setData={setData}/>
                        )
                    )}
                </div> : <div>
                    {fields.map((key) => (
                            <CampoFormulario key={key} campo={key} setData={setData}
                                             data={{...formFieldDescription[key], values: modData[key]}}/>
                        )
                    )}
                </div>}
                <div className={'Botonsubmit'}>
                    <Button style={{width: '100px'}} variant="success" type="submit">Guardar</Button>

                </div>
                <div className={'botondanger'}>
                    <Link to={`/${location.pathname.split("/")[1]}`}>
                     <Button style={{width: '100px'}} variant="danger" type="">Cancelar</Button>
                </Link>

                </div>

            </Form>
        </div>
    );
}


export default CustomForm;