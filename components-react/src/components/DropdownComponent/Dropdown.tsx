import * as React from 'react';
import { Dropdown } from 'semantic-ui-react'
import {DropdownProps} from "semantic-ui-react";

interface Props extends DropdownProps {}

export const DropdownComponent = (props: Props) => {

    return(
        <Dropdown {...props}>
            {props.children}
        </Dropdown>
    )
};
