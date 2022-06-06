import React from 'react';
import { createCn } from 'bem-react-classname';
import './MainConditionWrapper.less';
import windIcon from '../../icons/wind.svg';
import humidityIcon from '../../icons/drop.svg';
import pressureIcon from '../../icons/pressure.svg';
import MainConditionItem from '../MainConditionItem/MainConditionItem';

const ITEMS_DATA = [
    {icon: windIcon, unit:' км/ч', title: 'Скорость ветра'},
    {icon: humidityIcon, unit:' %', title: 'Влажность'},
    {icon: pressureIcon, unit:' мм.рт', title: 'Давление'},
];

const cn = createCn('main-condition-wrapper');
const MainConditionWrapper = ({ conditionData }) => {

    const renderItems = conditionData.map((item, index) => {
        const { icon, unit, title } = ITEMS_DATA[index];

        return (
            <React.Fragment key = {index + title}>
                <MainConditionItem icon={icon} value={item + unit} title={title}/>
            </React.Fragment>
        )
    })

    return (
        <div className={cn()}>
            <div className={cn('items')}>
                {renderItems}
            </div>
        </div>
    )
};

export default MainConditionWrapper;
