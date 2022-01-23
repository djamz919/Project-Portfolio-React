import React from 'react';

function Header(props) {
    const {
        setAboutMeSelected,
        setProjectsSelected,
        setSkillsSelected,
        contactSelected,
        setContactSelected,
    } = props;

    return (
        <header className="flex-row px-1">
            <h1>
                <a data-testid="link" href="/">
                    Daryll Munoz
                </a>
            </h1>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" onClick={() => {
                            setContactSelected(false);
                            setAboutMeSelected(true);
                            setProjectsSelected(false);
                            setSkillsSelected(false);
                        }}>
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="projects" onClick={() => {
                            setContactSelected(false);
                            setAboutMeSelected(false);
                            setProjectsSelected(true);
                            setSkillsSelected(false);
                        }}>
                            Projects
                        </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="skills" onClick={() => {
                            setContactSelected(false);
                            setAboutMeSelected(false);
                            setProjectsSelected(false);
                            setSkillsSelected(true);
                        }}>
                            Skills
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setContactSelected(true);
                            setAboutMeSelected(false);
                            setProjectsSelected(false);
                            setSkillsSelected(false);
                        }}>
                            Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
