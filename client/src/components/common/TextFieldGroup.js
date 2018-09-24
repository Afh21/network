import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";

const TextFieldGroup = ({ id, name, placeholder, value, label, onChange }) => {
  return (
    <div>
      <FormItem label={label}>
        <Input
          id={id}
          name={name}
          defaultValue={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </FormItem>
    </div>
  );
};

TextFieldGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;

// El objetivo de este componente es reutilizarse para construir formularios,
// ya que estoy utilizando otro framework y no precisamente boostrap,
// impide que lo que utiliza el maestro del curso lo pueda usar.
// Toca investigar para poder aplicarlo.

// Solo construiré este componente para ambito académico y conceptual
