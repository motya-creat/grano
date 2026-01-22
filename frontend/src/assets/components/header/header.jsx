import React, { useEffect } from 'react'

import vectorIcon from '../../images/vector.png'
import telegramIcon from '../../images/telegram.png'


function Vector() {
    return (
        <div className='vector'>
            <img src={vectorIcon} alt="<>" />
        </div>
    )
}

function Header() {

    useEffect(() => {
        const handleScroll = () => {
            const firstHeaderEl = document.querySelector('.header-f');
            const secondHeaderEl = document.querySelector('.header-s')
            if (window.scrollY > 0 && !firstHeaderEl.classList.contains('header-out')) {
                firstHeaderEl.classList.add('header-out');
                secondHeaderEl.classList.add('header-s-out');
            } else if (window.scrollY === 0 && firstHeaderEl.classList.contains('header-out')) {
                firstHeaderEl.classList.remove('header-out');
                secondHeaderEl.classList.remove('header-s-out');

            }
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className="header-f d-flex">
                <div className="header-f__nav d-flex">
                    <div className="header-f__address d-flex">
                        <div className="header-f__address-item d-flex">
                            <div className="item__address d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
                                </svg>
                                <span>ул. Востания, 22</span>
                            </div>
                        </div>
                        <Vector />
                        <div className="header-f__address-item d-flex">
                            <div className="item__address d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                </svg>
                                <span>Ежедневно: c 9:00 до 23:00</span>
                            </div>
                        </div>
                    </div>
                    <div className="header-f__contacts d-flex">
                        <div className='header-f__contacts-item d-flex'>
                            <div className='item_contancts d-flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
                                </svg>
                                <span>+7 (933) 084-23-78</span>
                            </div>
                            <Vector />
                            <div className='item_contancts d-flex'>
                                <img src={telegramIcon} alt="telegram" />
                                <span>Telegram</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-s d-flex'>
                <div className="header-s__nav d-flex">
                    <div className="header-s__logo d-flex">
                        <div className="logo-text d-flex">
                            <span className=''>GRANO</span>
                            <span>Ресторан европейской кухни</span>
                        </div>
                    </div>
                    <div className="header-s__nav-menu d-flex">
                        <div className="menu d-flex">
                            <a href="#">ЗАКАЗАТЬ ДОСТАВКУ</a>
                            <a href="#">АКЦИИ</a>
                            <a href="#">МЕНЮ РЕСТОРАНА</a>
                            <a href="#">ПРОГРАММА ЛОЯЛЬНОСТИ</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header