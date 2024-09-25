import React from 'react';

const Resumes = () => {
    const resumes = [
        {
            name: 'Динара Насырова',
            hash: 'dinara',
            post: 'Front-end разработчик',
            img: '/team-resume/img/dinara.webp',
            about: 'Я фронт-енд разработчик с опытом работы в создании интерактивных\n' +
                '                                                веб-приложений и пользовательских интерфейсов. Мои ключевые навыки\n' +
                '                                                включают\n' +
                '                                                работу с JavaScript, React, Next.js, Vue.js, Nuxt.js, HTML5, CSS3, а\n' +
                '                                                также\n' +
                '                                                современные инструменты для сборки проектов (Webpack, Vite).\n' +
                '                                                Имею опыт интеграции с API с помощью Axios, работы с Redux/MobX/Vuex для\n' +
                '                                                управления состоянием приложений, создания адаптивных и кросс-браузерных\n' +
                '                                                интерфейсов.\n' +
                '\n' +
                '                                                В своих проектах стремлюсь к чистому и понятному коду, уделяя особое\n' +
                '                                                внимание оптимизации производительности и юзабилити интерфейсов.',
            education: 'ТАТУ',
            experience: [
                'Школа программирования "ЮНИОРКОД" 2022-2023',
                'AI DEVELOPMENT GENERATION 2023-...'
            ],
            languages: [
                'Русский - С1',
                'Узбекский - B2',
                'Английский - B2',
            ],
            works: [
                {
                    name: 'AI DEVELOPMENT GENERATION',
                    link: 'https://ai-softdev.com/'
                },
                {
                    name: 'Sakura Travel',
                    link: 'https://sakura-travel.uz/'
                },
                {
                    name: 'Huquq kaliti',
                    link: 'https://huquq-kaliti.uz/'
                },
                {
                    name: 'ICM - interactiv istemol xaritasi',
                    link: 'https://pr.ai-softdev.com/'
                },
                {
                    name: 'Trip Zone',
                    link: 'https://tripzone.uz'
                },
                {
                    name: 'Ahmadov',
                    link: 'https://ahmadov.uz/'
                },
                {
                    name: 'Kristal Konserva',
                    link: 'https://konservi.uz/'
                },
                {
                    name: 'Angelvest',
                    link: 'https://angelvest.uz/'
                },
                {
                    name: 'Plus service',
                    link: 'https://plus-service.uz/'
                },
                {
                    name: 'Protect Me',
                    link: 'https://protect-me.uz/'
                },
                {
                    name: 'Agro Chem Solutions',
                    link: 'https://agro-chem.uz/'
                },
                {
                    name: 'Agro Tech Solutions',
                    link: 'https://agro-tech.uz/'
                },
                {
                    name: 'Cyber guardian',
                    link: 'https://cyber-guardian.uz/'
                },
                {
                    name: 'DKSP PLUS',
                    link: 'https://dksp-plus.uz/'
                },
                {
                    name: 'Beton Line',
                    link: 'https://beton-line.uz'
                },
                {
                    name: 'Fuel Energy',
                    link: 'https://fuel-energy.uz'
                },
                {
                    name: 'COMFORT MIKRO DRIVE SERVICE',
                    link: 'https://drive-service.uz'
                },
                {
                    name: 'Im&Kam',
                    link: 'https://imkam.uz/'
                },
                {
                    name: 'AiMedis',
                    link: 'https://medcare.ai-softdev.com'
                }
            ],
            stack: [
                'Vue.js',
                'React',
                'Nuxt',
                'Next.js',
                'Python',
                'C++',
                'Flutter',
            ]
        },
        {
            name: 'Григорьян Тигран',
            hash: 'tigran',
            post: 'Back-end разработчик',
            img: '/team-resume/img/tigran.webp',
            about: 'Я бэкэнд разработчик с опытом разработки серверной логики и API для масштабируемых веб-приложений. Основные технологии, с которыми я работаю, включают, Python, Django, Fast API, а также базы данных MySQL, PostgreSQL и MongoDB. Я специализируюсь на создании надёжных и производительных серверных решений, уделяя особое внимание безопасности, оптимизации запросов и масштабируемости системы.\n' +
                '\n' +
                'Уверенно использую REST и GraphQL для взаимодействия с клиентской частью, разрабатываю микросервисы и интегрирую внешние API. Имею опыт работы с Docker для контейнеризации приложений и CI/CD инструментами (например, Jenkins, GitLab CI) для автоматизации развёртывания.',
            education: 'ТАТУ, IT-academy STEP',
            experience: [
                'Школа программирования "ЮНИОРКОД" 2022-2023',
                'IT-academy STEP 2024-...',
                'AI DEVELOPMENT GENERATION 2023-...'
            ],
            languages: [
                'Русский - С1',
                'Узбекский - B2',
                'Английский - B2',
            ],
            works: [
                {
                    name: 'Beton Line',
                    link: 'beton-line.uz'
                },
                {
                    name: 'Sakura Travel',
                    link: 'https://sakura-travel.uz/'
                },
                {
                    name: 'Huquq kaliti',
                    link: 'https://huquq-kaliti.uz/'
                },
                {
                    name: 'Ahmadov',
                    link: 'https://ahmadov.uz/'
                },
                {
                    name: 'Im&Kam',
                    link: 'imkam.uz'
                },
                {
                    name: 'AiMedis',
                    link: 'medcare.ai-softdev.com'
                },
                {
                    name: 'DKSP PLUS',
                    link: 'https://dksp-plus.uz/'
                },
                {
                    name: 'MPS',
                    link: 'plus-service.uz'
                },
                {
                    name: 'Swiss Agro',
                    link: 'swissagrouz.com'
                }
            ],
            stack: [
                'Python',
                'Django',
                'Fast API',
                'PostgreSQL',
                'MongoDB',
                'Git',
                'GitLab',
                'Aiogram',
            ]
        },
        {
            name: 'Палазник Максим',
            hash: 'maxim',
            post: 'Front-end разработчик',
            img: '/team-resume/img/maxim.webp',
            about: 'Ищу позицию Junior Front-End разработчика, где я могу применить свои навыки в Vue и React(так же есть небольшие знание в Ruby on rails), а также опыт, полученный на стажировке в Itransition. Хоть у меня и нет опыта работы я готов это компенсировать работоспособностью, обучаемостью и нацеленностью на результат.',
            education: 'ТАТУ',
            experience: [
                'Нет опыта работы'
            ],
            languages: [
                'Русский - С1',
                'Узбекский - А1',
                'Английский - B2',
            ],
            works: [
                {
                    name: 'ItemVault',
                    link: 'https://flourishing-pithivier-3a8059.netlify.app/'
                },
                {
                    name: 'Киноафиша',
                    link: 'https://kinounofficialapi.netlify.app/'
                },
                {
                    name: 'D&M LEASING',
                    link: 'https://jovial-faloodeh-ace54b.netlify.app/'
                },
                {
                    name: 'Elfen Lied',
                    link: 'https://66cf007cf2aeb43b4abaed03--sprightly-nougat-ed2eed.netlify.app/'
                },
            ],
            stack: [
                'Vue.js',
                'React',
                'Ruby',
                'Git',
            ]
        },
        {
            name: 'Хайриддинов Жалолиддин',
            hash: 'jalol',
            post: 'Android-разработчик (Kotlin)',
            img: '/team-resume/img/jalol.webp',
            about: 'Ищу позицию Junior Android-разработчика, где я могу применить свои навыки в Kotlin и Retrofit (также есть базовые знания Coroutines и Unity), а также опыт, полученный в ходе учебных проектов и практики. Хоть у меня и нет коммерческого опыта, я готов компенсировать это трудолюбием, обучаемостью и стремлением к результатам',
            education: 'ТАТУ',
            experience: [
                "Kapital sug'urta (Стажёр) 2024 - ..."
            ],
            languages: [
                'Русский - С1',
                'Узбекский - C1',
                'Английский - B2',
            ],
            works: [
                {
                    name: 'Все проекты',
                    link: 'https://github.com/xJamsAL?tab=repositories'
                }
            ],
            stack: [
                'Kotlin',
                'XML',
                'Android',
                'Unity',
            ]
        },
        {
            name: 'Олимова Мухлиса',
            hash: 'muxlisa',
            post: 'Front-end разработчик',
            img: '/team-resume/img/muxlisa.webp',
            about: 'Специализируюсь на создалии динамичных и удобных веб-сайтов Имею опыт как во фронтенд-разработке (HTML, CSS, JavaScript). Создаю адаптивные и красивые интерфейсы, оптимизирую производительность сайтов. Обеспечиваю кроссбраузерную совместимость и решаю техничесше задачи Постоянно изучаіо новые веб-техналогии и следую современным тенденциям.',
            education: 'ТАТУ',
            experience: [
                "Преподоватепь по IT в Juniorcode 2022-2024",
                "IT Менеджер в InterContinental июнь 2023- сент 2023",
                "Преподоватепь в D:CODE март 2024- июнь 2024",
                "Преподоватепь по IT Mars IT май 2024- окт 2024",
            ],
            languages: [
                'Русский - С1',
                'Узбекский - C1',
                'Английский - B2',
            ],
            works: [
                {
                    name: 'Cozy House',
                    link: 'https://rolling-scopes-school.github.io/arkhipenka-JSFE2023Q1/Shelter/pages/main'
                }
            ],
            stack: [
                'HTML',
                'CSS',
                'JavaScript',
                'Vue.js'
            ]
        },
    ]
    return (
        <>
            {
                resumes.map((resume, index) => (
                    <section
                        id={resume.hash}
                        className={'border-b border-blue-500'}
                        key={index}
                    >
                        <div className="section main__section">
                            <div className="container">
                                <h1 className="main__title max_lg:leading-[120%]">
                                    {resume.name}
                                </h1>
                                <h2 className="main__subtitle">
                                    {resume.post}
                                </h2>
                                <div className="main__img">
                                    <img src={resume.img} alt={resume.name}/>
                                </div>
                            </div>
                        </div>
                        <div className="section data__section">
                            <div className="container">
                                <div className="data__inner max_lg:flex-col max_lg:gap-10">
                                    <div className="data__left">
                                        <div className="about" id="about">
                                            <h3 className="subtitle">Обо мне</h3>
                                            <p className="main__descr">
                                                {resume.about}
                                            </p>
                                        </div>
                                        <div className="education" id="education">
                                            <h3 className="subtitle">Образование</h3>
                                            <ol className="data__list">
                                                <li className="data__item">{resume.education}</li>
                                            </ol>
                                        </div>
                                        <div className="experience" id="experience">
                                            <h3 className="subtitle">Опыт работы:</h3>
                                            {
                                                resume.experience.map((experience, index) => (
                                                    <p key={index} className="main__descr">
                                                        {experience}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                        <div className="language" id="language">
                                            <h3 className="subtitle">Язык:</h3>
                                            <ul className="data__list">
                                                { resume.languages.map((language, lindex) => (
                                                    <li key={lindex} className={'data__item'}>
                                                        {language}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="works">
                                            <h3 className="subtitle">Работы:</h3>
                                            <ul className="data__list">
                                                { resume.works.map((work, windex) => (
                                                    <li key={windex} className="data__item">
                                                        <a
                                                            href={work.link}
                                                            className="work-item__link"
                                                            target={'_blank'}
                                                        >
                                                            {work.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="data__right">
                                        <h3 className="subtitle">Стэк:</h3>
                                        <ul className="skills__inner list__reset">
                                            {
                                                resume.stack.map((stack, sindex) => (
                                                    <li key={sindex} className="skills__item">
                                                        <h5 className="text-blue-400">
                                                            {stack}
                                                        </h5>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            }
        </>
    );
};

export default Resumes;