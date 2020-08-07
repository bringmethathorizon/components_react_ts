import * as React from 'react';
import { Pagination } from 'semantic-ui-react'
import {PaginationProps} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
const styles = require('./index.scss');

interface Props extends PaginationProps {}

export const PaginationComponent = (props: Props) => {

    return(
            <Pagination {...props}>
                {props.children}
            </Pagination>
    )
};
