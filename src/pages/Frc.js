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
                        DÉVELOPPEUR FULLSTACK


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
                            Travaillant depuis au moins 8 ans en tant que développeur de solutions web, j'ai une vaste connaissance des projets MVC et de l'API Restfull. Développement de sites Web de portefeuille, application de streaming vidéo en direct et gamifiée, entre autres.    </h4>
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
                        Domaines d'expertise
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <InfoArea
                        title="FrontEnd"
                        description="Plus de 8 ans d'expérience de travail avec CSS, 6 ans avec bootstrap et les 4 dernières années de développement avec React + Material Ui Design. J'ai déjà une vaste expérience en développement axé sur le web, mais rien ne m'empêche d'explorer d'autres univers. J'accepte les défis"
                        icon={Web}
                        iconColor='primary'
                        vertical
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <InfoArea
                        title="BackEnd"
                        description="e développe principalement avec Javascript via l'interpréteur NodeJs. Cependant, je ne suis pas limité à cela. J'ai une aptitude totale à travailler avec d'autres langues, même si je suis moins familier. J'ai travaillé avec C, C #, C ++, Lua, ActionScript et Python. En cours de transition vers typeScript"
                        icon={Code}
                        iconColor='primary'
                        vertical
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <InfoArea
                        title="Design"
                        description="Je développe également des pièces créatives. Ce n'est plus mon objectif, mais je pense que c'est un bon différentiel pour composer l'équipe et casser une branche de temps en temps, si nécessaire. Je travaille avec Photoshop, Illustrator et des éditeurs vidéo. Voir de nombreux travaux sur: https://www.behance.net/EddieStudioID"
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
                        title="Entrer en contact"
                        description="N'oubliez pas de discuter avec moi. ceci est un bref résumé. Je suis la meilleure option pour composer votre équipe! Courriel: eduardo.srocha@hotmail.com"
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
                        La technologie
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
                    Méthodologies Agiles(Scrum) <ProgressLine level={85} />
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
                        Langues
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        Anglais
                    </Typography>
                    Conversation <ProgressLine level={85} />
                    L'écriture<ProgressLine level={60} />
                    En train de lire <ProgressLine level={70} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        français
                    </Typography>
                    Conversation <ProgressLine level={40} />
                    L'écriture<ProgressLine level={20} />
                    En train de lire  <ProgressLine level={30} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        allemand
                    </Typography>
                    Conversation <ProgressLine level={45} />
                    L'écriture <ProgressLine level={20} />
                    En train de lire  <ProgressLine level={35} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        Livres sterling
                    </Typography>
                    Alphabeto <ProgressLine level={100} />
                    Mots <ProgressLine level={20} />
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
                        Expérience
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant='body1'>
                        * Au cours de ma carrière, j'ai réalisé de nombreux projets. Développer Backend et FrontEnd, ainsi que la conception et les textes. J'ai mon propre CNPJ et jusqu'à présent j'ai travaillé sur des projets. Voici le lien des projets les plus complexes sur lesquels je travaille ou sur lesquels j'ai travaillé.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="subtitle1">
                        Top Streams
                    </Typography>
                    <Typography>
                        Description de l'application: TopsTreams est une application de diffusion dans laquelle un utilisateur est l'émetteur de la vidéo et les autres la regardent. L'Application est destinée aux joueurs de jeux de foot. L'application est déjà utilisée. Rendez visite à l'application guidée par moi! Contactez-nous pour organiser. eduardo.srocha@hotmail.com
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

                        Description de l'application: Simificados OAB est une application gamifiée, un blog et un e-commerce. Il en est au stade final de développement. Entrez dans Simulé et testez l'interaction. J'accepte les commentaires. Rendez visite à l'application guidée par moi! Contactez-nous pour organiser. eduardo.srocha@hotmail.com
                    </Typography>
                    <Link href="https://frontsimulados.rj.r.appspot.com/">
                        Simulados OAB
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="subtitle1">
                        Sites divers
                    </Typography>
                    <Typography>
                        Entrez les sites développés par moi.
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

                        Bénévolat
                    </Typography>
                    <Typography>
                        pprenez à connaître UFSM ABRAÇA. Projet dont j'ai été co-auteur. Voir l'article paru sur Globo à Rio Grande do Sul - Santa Maria. </Typography>
                    <Link href="http://g1.globo.com/rs/rio-grande-do-sul/videos/t/todos-os-videos/v/alunos-e-professores-da-ufsm-criam-projeto-e-ajudam-escolas-publicas-de-santa-maria/7244509/">

                        Nouvelles du Globe
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
                        Buts
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant='body2'>
                        Jusqu'à ce stade de ma vie, pour diverses raisons, j'ai vu l'entrepreneuriat comme un moyen d'étudier l'IS à l'UFSM à temps plein et de continuer à travailler sur le marché du travail en tant que développeur Web. Aujourd'hui, je peux me consacrer à un travail formel. J'ai une longue expérience en tant que développeur web et je peux contribuer efficacement à votre équipe. J'ai la capacité de me gérer, je suis concentré, j'assume des responsabilités sans crainte, je sais parler aux clients et je souhaite composer dans une équipe gérant ou gérée.  </Typography>
                    <Chip label="FullStack Pleno/Senior" style={{ margin: 5 }} />
                    <Chip label="FrontEnd Pleno/Senior" style={{ margin: 5 }} />
                    <Chip label="BackEnd Pleno/Senior" style={{ margin: 5 }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Chip color="secondary" label="Avec disponibilité pour voyager" style={{ margin: 5 }} />
                    <Chip color="secondary" label="Passionné par le développement d'applications à partir de zéro" style={{ margin: 5 }} />
                    <Chip color="secondary" label="Implémenteur d'API" style={{ margin: 5 }} />
                    <Chip color="secondary" label="Intention salariale de $8 000,00" style={{ margin: 5 }} />
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