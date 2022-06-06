import React from 'react';
import { createCn } from 'bem-react-classname';
import './MainConditionItem.less';

const cn = createCn('main-condition-item');
const MainConditionItem = ({ icon, value, title }) => {

    return (
        <div className={cn()}>
            <img className={cn('icon')} src={icon} alt='' />
                <div className={cn('value')}>{value}</div>
                <div className={cn('title')}>{title}</div>
        </div>
    )
};

export default MainConditionItem;
