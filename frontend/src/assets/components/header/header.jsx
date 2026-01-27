import React, { useEffect } from 'react'

import vectorIcon from '../../images/vector.png'

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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Telegram-alt SVG Icon</title><path fill="#fff" d="M21.945 2.765a1.552 1.552 0 0 0-1.572-.244L2.456 9.754a1.543 1.543 0 0 0 .078 2.884L6.4 13.98l2.095 6.926c.004.014.017.023.023.036a.486.486 0 0 0 .093.15a.49.49 0 0 0 .226.143c.01.004.017.013.027.015h.006l.003.001a.448.448 0 0 0 .233-.012c.008-.002.016-.002.025-.005a.495.495 0 0 0 .191-.122c.006-.007.016-.008.022-.014l3.013-3.326l4.397 3.405c.267.209.596.322.935.322c.734 0 1.367-.514 1.518-1.231L22.469 4.25a1.533 1.533 0 0 0-.524-1.486M9.588 15.295l-.707 3.437l-1.475-4.878l7.315-3.81l-4.997 4.998a.498.498 0 0 0-.136.253m8.639 4.772a.54.54 0 0 1-.347.399a.525.525 0 0 1-.514-.078l-4.763-3.689a.5.5 0 0 0-.676.06L9.83 19.07l.706-3.427l7.189-7.19a.5.5 0 0 0-.584-.797L6.778 13.054l-3.917-1.362A.526.526 0 0 1 2.5 11.2a.532.532 0 0 1 .334-.518l17.914-7.233a.536.536 0 0 1 .558.086a.523.523 0 0 1 .182.518z"/></svg>
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