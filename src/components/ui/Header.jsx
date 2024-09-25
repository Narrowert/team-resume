import React from 'react';

const Header = () => {
    const links = [
        {
            name: 'Динара',
            link: '#dinara'
        },
        {
            name: 'Тигран',
            link: '#tigran'
        },
        {
            name: 'Джалол',
            link: '#jalol'
        },
        {
            name: 'Максим',
            link: '#maxim'
        },
        {
            name: 'Мухлиса',
            link: '#muxlisa'
        }
    ]
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list list__reset max_sm:grid max_sm:grid-cols-2">
                    {
                        links.map((link, index) => (
                            <li
                                key={index}
                                className="nav-list__item text-center max_sm:!mr-0"
                            >
                                <a href={link.link} className="nav-item__link">
                                    {
                                        link.name
                                    }
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;