import * as React from 'react';
import {Checkbox} from "semantic-ui-react";
import {CheckboxProps} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
const styles = require('./index.scss');

interface Props extends CheckboxProps{}

export const CheckboxComponent = (props: Props) => {

        return(
              <Checkbox {...props}>
                  {props.children}
              </Checkbox>
        )
};
