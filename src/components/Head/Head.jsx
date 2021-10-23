import React from 'react';
import { createCn } from 'bem-react-classname';
import './Head.less';
import drop from '../../icons/drop.svg';

const cn = createCn('head');
const Head = () => {
    return (
        <div className={cn()}>
            <svg>
                <use xlinkHref={drop} />
            </svg>
                
                {/* <img src={drop}/> */}
            Moscow
        </div>
    )
};

export default Head;