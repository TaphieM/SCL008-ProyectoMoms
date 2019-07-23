/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import ComponentVisualSelect from '../components/componentVisualSelect';
import ComponentVisualInput from '../components/componentVisualInput';
import ComponentVisualTextArea from '../components/componentVisualTextArea';
import ComponentVisualButton from '../components/componentVisualButton';
import { FirebaseContext } from '../data/firebase';
import './css/templateForm.css';


const selectFile = require('../data/informationSelect');

class templateForm extends Component {
  constructor(props) {
    super(props);
    this.sendToDataBase = this.sendToDataBase.bind(this);
  }

  sendToDataBase() {
    this.props.sendToDataBase();
  }

  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => (
          <section className="templateform">
            <h3>Nueva oferta Laboral</h3>
            <h5>Volver</h5>
            <Form>
              <ComponentVisualInput message="Nombre del cargo " className="col-xs-12" validate={this.validateName} />
              <ComponentVisualSelect message="Flexibilidad otorgada " className="col-xs-12" options={selectFile.flexibilidad} />
              <ComponentVisualSelect message="Idioma " className="col-xs-12" options={selectFile.idioma} />
              <ComponentVisualSelect message="Nivel " className="col-xs-6" options={selectFile.nivel} />
              <ComponentVisualSelect message="Carrera " className="col-xs-6" options={selectFile.carrera} />
              <ComponentVisualSelect message="Nivel de estudios " className="col-xs-12" options={selectFile.nivelEstudios} />
              <ComponentVisualSelect message="Años de experiencia " className="col-xs-12" options={selectFile.experiencia} />
              <ComponentVisualSelect message="Rango de sueldo estimado " className="col-xs-12" options={selectFile.rangoSueldo} />
              <ComponentVisualTextArea message="Descripción del cargo" className="col-xs-12" />
              <ComponentVisualTextArea message="Tareas claves:" className="col-xs-12" />
              <ComponentVisualTextArea message="Educación adicional:" className="col-xs-12" />
              <ComponentVisualButton
                type="submit"
                name="Crear postulación"
                className="btn_appealcreate"
                buttonOnClick={(evt) => {
                  this.sendToDataBase(evt);
                }}
              />
            </Form>
          </section>
        )}

      </FirebaseContext.Consumer>
    );
  }
}

export default templateForm;
