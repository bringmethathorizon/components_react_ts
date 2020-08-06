import * as React from 'react';
import {Checkbox} from "semantic-ui-react";
import {CheckboxProps} from "semantic-ui-react";
const styles = require('./index.scss');

interface Props extends CheckboxProps{}

export const CheckboxComponent = (props: Props) => {

        return(
              <Checkbox {...props}>
                  {props.children}
              </Checkbox>
        )
};
