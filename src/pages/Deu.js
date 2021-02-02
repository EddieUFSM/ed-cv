import React, { Fragment, useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton, Grid, Link, Avatar, Chip, ButtonBase, Tooltip } from "@material-ui/core"
import { LinkedIn, Code, Web, Edit, Mail } from '@material-ui/icons'
import Parallax from "components/Parallax/Parallax.js"
// nodejs library that concatenates classes
import classNames from "classnames"
import Footer from "components/Footer/Footer.js"
import img from "assets/img/pp.jpg"
import InfoArea from "components/InfoArea/InfoArea.js"
import styles from "assets/jss/views/landingPage.js"
import portuguese from 'assets/img/portuguese.png'
import english from 'assets/img/english.png'
import deutsche from 'assets/img/deutsche.png'
import french from 'assets/img/french.png'
import ProgressLine from "components/Progress/progressLine"

const useStylesMenu = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        transition: 'all 150ms ease 0s'
    },
    appBar: {
        backgroundColor: 'transparent',
        position: 'fixed',
        zIndex: 1100,
        paddingTop: 25,
        transition: 'all 150ms ease 0s'
    },
    active: {
        backgroundColor: '#212c6f',
        position: 'fixed',
        zIndex: 1100,
        transition: 'all 150ms ease 0s'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: 'auto',
        transition: 'all 150ms ease 0s'
    },
    title: {
        textTransform: 'uppercase',
        transition: 'all 150ms ease 0s'
    },
    link: {
        color: "#fff",
        transition: 'all 150ms ease 0s'
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },

}))

const useStyles = makeStyles(styles);
const TopBar = (props) => {
    const classes = useStylesMenu();
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
            if (currentPosition > scrollTop) {
                // downscroll code
                setScrolling(true);
            } else {
                // upscroll code
                setScrolling(false);
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <div className={classes.root}>
            <AppBar position="static" className={scrolling ? classes.active : classes.appBar} elevation={0}>
                <Toolbar >
                    <Code />
                    <Typography className={classes.title}>
                        FullStack Developer
                    </Typography>
                    <div className={classes.menuButton}>
                        <Tooltip title="Português" placement="top-start">
                            <ButtonBase href='/' style={{ width: 32, height: 20, margin: 'auto 10px' }}>
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url(${portuguese})`,
                                    }}
                                />
                            </ButtonBase>
                        </Tooltip>
                        <Tooltip title="English" placement="top-start">
                            <ButtonBase href='/eng' style={{ width: 32, height: 20, margin: 'auto 10px' }}>
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url(${english})`,
                                    }}
                                />
                            </ButtonBase>
                        </Tooltip>
                        <Tooltip title="Deutsche" placement="top-start">
                            <ButtonBase href='/deu' style={{ width: 32, height: 20, margin: 'auto 10px' }}>
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url(${deutsche})`,
                                    }}
                                />
                            </ButtonBase>
                        </Tooltip>
                        <Tooltip title="
français" placement="top-start">
                            <ButtonBase href='/frc' style={{ width: 32, height: 20, margin: 'auto 10px' }}>
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url(${french})`,
                                    }}
                                />
                            </ButtonBase>
                        </Tooltip>


                        <IconButton color="inherit" aria-label="menu" href="https://www.linkedin.com/in/eduardosrocha/">
                            <LinkedIn />
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
        </div>

    )
}
const Header = (props) => {
    const classes = useStyles()
    return (
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
            <div className={classes.container}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <Avatar src={img} variant='circular' className={classes.avatar} />
                        <h2 className={classes.subtitle}>Eduardo S. Rocha</h2>
                        <h1 className={classes.title}>FullStack Dev.</h1>

                        <h4 className={classes.bodyText}>
                            Working for at least 8 years as a developer of web solutions, I have a vast knowledge in MVC projects and API Restfull. Development of website portfolio, gamification, application of live video transmission, among others.
                        </h4>
                        <br />

                    </Grid>
                </Grid>
            </div>
        </Parallax>

    )
}
const BodyPage = (props) => {
    const classes = useStyles();
    return (
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
                <Goals />
                <Abilities />
                <Softwares />
                <Languages />
                <XP />
                <Contact />
            </div>
        </div>
    )
}
const useStylesSection = makeStyles({
    section: {
        color: "#000",
        paddingTop: 50,
        paddingBottom: 50
    }
})
const Abilities = () => {
    const classes = useStylesSection();
    return (
        <div className={classes.section}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h4">
                        Áreas de atuação
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <InfoArea
                        title="FrontEnd"
                        description="Over 8 years of experience working with CSS, 6 years with bootstrap and the last 4 years developing with React + Material Ui Design. I already have extensive experience in development focused on the web, but nothing prevents me from exploring other universes. I accept challenges."
                        icon={Web}
                        iconColor='primary'
                        vertical
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <InfoArea
                        title="BackEnd"
                        description="I develop mainly with Javascript through the NodeJs interpreter. However, I am not limited to that. I have complete aptitude to work with other languages, despite being less familiar. I've worked with C, C #, C ++, Lua, ActionScript and Python. In the process of transition to typeScript and NextJs"
                        icon={Code}
                        iconColor='primary'
                        vertical
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <InfoArea
                        title="Design"
                        description="I also develop creative pieces. It is no longer my focus, but I believe it is a good differential to compose the team and break a branch from time to time, when necessary. I work with Photoshop, Illustrator and video editors. See extensive works at: https://www.behance.net/EddieStudioID"
                        icon={Edit}
                        iconColor='primary'
                        vertical
                    />
                </Grid>
            </Grid>
        </div>
    );
}
const Contact = () => {
    const classes = useStylesSection()
    return (
        <div className={classes.section}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <InfoArea
                        title="contact me"
                        description="Don't forget to chat with me. this is a brief summary. I am the best option to compose your team! Email: eduardo.srocha@hotmail.com"
                        icon={Mail}
                        iconColor='primary'
                        vertical
                    />
                </Grid>
            </Grid>

        </div>
    )
}
const Softwares = () => {
    const classes = useStylesSection()
    return (
        <div className={classes.section}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h4">
                        Technologies
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    NodeJs <ProgressLine level={98} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    Google Cloud <ProgressLine level={80} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    HTML <ProgressLine level={95} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    CSS <ProgressLine level={95} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    Javascript <ProgressLine level={100} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    Metodologias Ágeis <ProgressLine level={85} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    PMBOK <ProgressLine level={75} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    Photoshop <ProgressLine level={100} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    Illustrator <ProgressLine level={100} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    ReactJS <ProgressLine level={100} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    typeScript <ProgressLine level={55} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    C <ProgressLine level={70} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    Lua <ProgressLine level={70} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    C# <ProgressLine level={60} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    C++ <ProgressLine level={60} />
                </Grid>

                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    Python <ProgressLine level={60} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    NextJs <ProgressLine level={30} />
                </Grid>

            </Grid>
        </div>

    )
}
const Languages = () => {
    const classes = useStylesSection();
    return (
        <div className={classes.section}>

            <Grid container>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="h4">
                        Languages
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        English
                    </Typography>
                    Conversation <ProgressLine level={85} />
                    Writing <ProgressLine level={60} />
                    Reading <ProgressLine level={70} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        French
                    </Typography>
                    Conversation <ProgressLine level={40} />
                    Writing <ProgressLine level={20} />
                    Reading <ProgressLine level={30} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        Germany
                    </Typography>
                    Conversation <ProgressLine level={45} />
                    Writing <ProgressLine level={20} />
                    Reading <ProgressLine level={35} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        Brazilian sign language
                    </Typography>
                    alphabet <ProgressLine level={100} />
                    signs <ProgressLine level={20} />
                </Grid>


            </Grid>
        </div>
    );
}
const XP = () => {
    const classes = useStylesSection();
    return (
        <div className={classes.section}>

            <Grid container>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="h4">
                        Expirience
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant='body1'>
                        * In my career, I carried out many projects. Developing Backend and FrontEnd, as well as Design and texts.
                        I have my own CNPJ and so far I have worked on projects.
                        Here is the link of the most complex projects that I'm working on or that I've worked on.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="subtitle1">
                        Top Streams
                    </Typography>
                    <Typography>
                        APP description: TopsTreams is a Broadcaster Application where one user is the transmitter of the video and the others watch it. The Application is intended for players of footbal games. The application is already in use.
                        Pay a visit to the application guided by me! Contact us to arrange. eduardo.srocha@hotmail.com
                    </Typography>
                    <Link href="https://login.topstream.app/">
                        Topstreams APP
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="subtitle1">
                        Simulados OAB
                    </Typography>
                    <Typography>

                        APP description: Simulados OAB is a gamified app, a blog and an e-commerce. It is in the final stage of development. Enter the Simulated and test the interaction. I accept Feedbacks.
                        Pay a visit to the application guided by me! Contact us to arrange. eduardo.srocha@hotmail.com
                    </Typography>
                    <Link href="https://frontsimulados.rj.r.appspot.com/">
                        Simulados OAB
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="subtitle1">
                        Other Websites
                    </Typography>
                    <Typography>
                        Visit some of websites developed by me.
                    </Typography>
                    <Link href="http://e-resultmais.com/">
                        Result+ {" "}
                    </Link>
                    <Link href="https://www.embleartes.com.br/">
                        Embleartes{" "}
                    </Link>
                    <Link href="https://www.contadorpopular.com.br" >
                        Contador Popular{" "}
                    </Link>
                    <Link href="https://www.kifesta.ind.br/">
                        Kifesta {" "}
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="subtitle1">

                        Volunteer work
                    </Typography>
                    <Typography>
                        Get to know UFSM ABRAÇA. Project to which I was co-author. See the article that came out on Globo in Rio Grande do Sul - Santa Maria. (In Portuguese) </Typography>
                    <Link href="https://encurtador.com.br/qtwQ9">

                        Globe News
                    </Link>
                </Grid>
            </Grid>
        </div >
    );
}
const Goals = () => {
    const classes = useStylesSection();
    return (
        <div className={classes.section}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="h4">
                        Objective
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant='body2'>
                        Until that moment in my life for various reasons I saw in entrepreneurship a way out to study SI at UFSM full time and continue working as a web developer.
                        Today I can dedicate myself to a formal job. I have a long experience as a web developer and I can contribute effectively to your team. I have the ability to manage myself, I am focused, I assume responsibilities without fear, I know how to talk to clients and I want to compose in a team managing or being managed.
                     </Typography>
                    <Chip label="FullStack Pleno/Senior" style={{ margin: 5 }} />
                    <Chip label="FrontEnd Pleno/Senior" style={{ margin: 5 }} />
                    <Chip label="BackEnd Pleno/Senior" style={{ margin: 5 }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Chip color="secondary" label="availability to travel" style={{ margin: 5 }} />
                    <Chip color="secondary" label="Passionate about developing applications from scratch" style={{ margin: 5 }} />
                    <Chip color="secondary" label="API implementer" style={{ margin: 5 }} />
                    <Chip color="secondary" label="Salary intention from $8,000.00" style={{ margin: 5 }} />
                </Grid>
            </Grid>
        </div >
    );
}
export default function Home(props, ref) {

    const [scrolling, setScrolling] = useState(false);

    return (
        <Fragment>
            <TopBar scrolling={scrolling} />
            <Header />
            <BodyPage />
            <Footer />
        </Fragment>
    )
}