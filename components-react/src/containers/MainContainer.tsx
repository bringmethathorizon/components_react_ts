import * as React from 'react';
import {PaginationComponent} from "../components/PaginationComponent";
import {CheckboxComponent} from "../components/CheckboxComponent";

export const MainContainer = () => {
    return(
        <div>
            <PaginationComponent
                totalPages={20}
                boundaryRange={2}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={'<'}
                lastItem={'>'}
                siblingRange={1}
                prevItem={'Prev'}
                nextItem={'Next'}
            />
        </div>
    )
};
