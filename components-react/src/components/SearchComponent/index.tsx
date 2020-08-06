import * as React from 'react';
import {InputComponent} from '../InputComponent'
const styles = require('./index.scss');

interface Props {
    placeholder: string,
    // value: string,
    onEnter?: () => void
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchComponent = (props: Props) => {

    const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if(event.key === 'Enter' && props.onEnter){
                props.onEnter()
        }
    };

    return(
        <div className={styles.input}
             onKeyPress={onKeyPress}>
            <InputComponent
                placeholder={props.placeholder}
                // value={props.value}
                onChange={props.onChange}/>
        </div>
    )
};
