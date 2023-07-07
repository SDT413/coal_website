import React from 'react';
import './Header.css';
import phoneIcon from '../../../assets/images/phone.png';

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'opacity-container'}>
            <p className={'header-phone'}><img className={'header-phone-logo'} src={phoneIcon} alt={'phone'}/> +380 99 99999999</p>
            </div>]
            <div className={'opacity-container-right'}>
                <p className={'header-phone'}>У нас лучшие цены оптом!</p>
            </div>
        </div>
    );
};

export default Header;