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
                        FULLSTACK-ENTWICKLER
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
                            Ich arbeite seit mindestens 8 Jahren als Entwickler von Weblösungen und habe umfangreiche Kenntnisse in MVC-Projekten und API Restfull. Entwicklung von Portfolio-Websites, Gamified, Live-Video-Streaming-Anwendung, unter anderem.    </h4>
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
                        Fachgebiete
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <InfoArea
                        title="FrontEnd"
                        description="Über 8 Jahre Erfahrung in der Arbeit mit CSS, 6 Jahre mit Bootstrap und die letzten 4 Jahre mit React + Material Ui Design. Ich habe bereits umfangreiche Erfahrung in der Entwicklung, die sich auf das Web konzentriert, aber nichts hindert mich daran, andere Universen zu erkunden. Ich nehme Herausforderungen an."
                        icon={Web}
                        iconColor='primary'
                        vertical
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <InfoArea
                        title="BackEnd"
                        description="Ich entwickle hauptsächlich mit Javascript über den NodeJs-Interpreter. Darauf bin ich jedoch nicht beschränkt. Ich bin vollkommen in der Lage, mit anderen Sprachen zu arbeiten, obwohl ich weniger vertraut bin. Ich habe mit C, C #, C ++, Lua, ActionScript und Python gearbeitet. Beim Übergang zu TypeScript"
                        icon={Code}
                        iconColor='primary'
                        vertical
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <InfoArea
                        title="Design"
                        description="Ich entwickle auch kreative Stücke. Es ist nicht mehr mein Fokus, aber ich glaube, es ist ein guter Unterschied, das Team zusammenzustellen und bei Bedarf von Zeit zu Zeit einen Zweig zu brechen. Ich arbeite mit Photoshop, Illustrator und Video-Editoren. Ausführliche Arbeiten finden Sie unter: https://www.behance.net/EddieStudioID"
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
                        title="In Kontakt kommen"
                        description="Vergiss nicht mit mir zu plaudern. Dies ist eine kurze Zusammenfassung. Ich bin die beste Option, um Ihr Team zusammenzustellen! E-Mail: eduardo.srocha@hotmail.com"
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
                        Technologie
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
                    Agile Methoden <ProgressLine level={85} />
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
                        Sprachen
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        Englisch
                    </Typography>
                    Konversation <ProgressLine level={85} />
                    Schreiben <ProgressLine level={60} />
                    lesen <ProgressLine level={70} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        Französisch
                    </Typography>
                    Konversation <ProgressLine level={40} />
                    Schreiben <ProgressLine level={20} />
                    lesen <ProgressLine level={30} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        Deutsche
                    </Typography>
                    Konversation <ProgressLine level={45} />
                    Schreiben <ProgressLine level={20} />
                    lesen <ProgressLine level={35} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        Zeichensprache(LIBRA)
                    </Typography>
                    Alphabeto <ProgressLine level={100} />
                    Wörter <ProgressLine level={20} />
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
                        Erfahrung
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant='body1'>
                        * In meiner Karriere habe ich viele Projekte durchgeführt. Entwicklung von Backend und FrontEnd sowie von Design und Texten. Ich habe mein eigenes CNPJ und habe bisher an Projekten gearbeitet. Unten finden Sie Links zu den komplexesten Projekten, an denen ich arbeite oder an denen ich gearbeitet habe.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="subtitle1">
                        Top Streams
                    </Typography>
                    <Typography>
                        APP-Beschreibung: TopsTreams ist eine Broadcaster-Anwendung, bei der ein Benutzer das Video überträgt und die anderen es ansehen. Die Anwendung ist für Spieler von Fußballspielen gedacht. Die Anwendung wird bereits verwendet. Besuchen Sie die von mir geleitete Bewerbung! Kontaktieren Sie uns, um dies zu arrangieren. eduardo.srocha@hotmail.com
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

                        APP Beschreibung: Simificados OAB ist eine gamifizierte App, ein Blog und ein E-Commerce. Es befindet sich in der letzten Entwicklungsphase. Geben Sie die Simulation ein und testen Sie die Interaktion. Ich akzeptiere Feedbacks. Besuchen Sie die von mir geleitete Bewerbung! Kontaktieren Sie uns, um dies zu arrangieren. eduardo.srocha@hotmail.com
                    </Typography>
                    <Link href="https://frontsimulados.rj.r.appspot.com/">
                        Simulados OAB
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="subtitle1">
                        Verschiedene Websites
                    </Typography>
                    <Typography>
                        Geben Sie die von mir entwickelten Websites ein.
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

                        Freiwilligenarbeit
                    </Typography>
                    <Typography>
                        Lernen Sie UFSM ABRAÇA kennen. Projekt, an dem ich mitautor war. Siehe den Artikel, der auf Globo in Rio Grande do Sul - Santa Maria veröffentlicht wurde. </Typography>
                    <Link href="http://g1.globo.com/rs/rio-grande-do-sul/videos/t/todos-os-videos/v/alunos-e-professores-da-ufsm-criam-projeto-e-ajudam-escolas-publicas-de-santa-maria/7244509/">
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
                        Tore
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant='body2'>
                        Bis zu diesem Zeitpunkt in meinem Leben sah ich Unternehmertum aus verschiedenen Gründen als einen Ausweg, um SI an der UFSM in Vollzeit zu studieren und weiterhin als Webentwickler auf dem Arbeitsmarkt zu arbeiten. Heute kann ich mich einem formellen Job widmen. Ich habe eine lange Erfahrung als Webentwickler und kann effektiv zu Ihrem Team beitragen. Ich habe die Fähigkeit, mich selbst zu verwalten, ich bin konzentriert, ich übernehme Verantwortung ohne Angst, ich weiß, wie man mit Kunden spricht, und ich möchte in einem Team komponieren, das verwaltet oder verwaltet wird.   </Typography>
                    <Chip label="FullStack Pleno/Senior" style={{ margin: 5 }} />
                    <Chip label="FrontEnd Pleno/Senior" style={{ margin: 5 }} />
                    <Chip label="BackEnd Pleno/Senior" style={{ margin: 5 }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Chip color="secondary" label="Mit Verfügbarkeit zu reisen" style={{ margin: 5 }} />
                    <Chip color="secondary" label="Leidenschaft für die Entwicklung von Anwendungen von Grund auf neu" style={{ margin: 5 }} />
                    <Chip color="secondary" label="API-Implementierer" style={{ margin: 5 }} />
                    <Chip color="secondary" label="Gehaltsabsicht ab $8,000.00" style={{ margin: 5 }} />
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