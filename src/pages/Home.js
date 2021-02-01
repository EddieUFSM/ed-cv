import React, { Fragment, useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Grid, Link, Avatar, Chip } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { Menu, LinkedIn, Code, Web, Edit, Mail } from '@material-ui/icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import Parallax from "components/Parallax/Parallax.js"
// nodejs library that concatenates classes
import classNames from "classnames"
import Footer from "components/Footer/Footer.js"
import img from "assets/img/pp.jpg"
import InfoArea from "components/InfoArea/InfoArea.js"
import styles from "assets/jss/views/landingPage.js"
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
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
            <div className={classes.container}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <Avatar src={img} variant='circular' className={classes.avatar} />
                        <h2 className={classes.subtitle}>Eduardo S. Rocha</h2>
                        <h1 className={classes.title}>FullStack Dev.</h1>

                        <h4 className={classes.bodyText}>
                            Atuando há pelo menos 8 anos como desenvolvedor de soluções web, tenho um
                            vasto conhecimento em projetos MVC e API Restfull. Desenvolvimento de Site portfólio, gamificado, aplicação de transmissão de
                            vídeos ao vivo, dentre outros.
                        </h4>
                        <br />
                        <Button
                            variant='outlined'
                            size="large"
                            target="_blank"
                            color='primary'
                            variant='contained'
                        >
                            Saiba Mais
                        </Button>
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
                        description="Mais de 8 anos de experiencia trabalhando com CSS, 6 anos com bootstrap e os ultimos 4 anos desenvolvendo com React + Material Ui Design. Já tenho larga experiencia no desenvolvimento focado na web, mas nada impede de explorar outros universos. Aceito desafios."
                        icon={Web}
                        iconColor='primary'
                        vertical
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <InfoArea
                        title="BackEnd"
                        description="Desenvolvo principalmente com Javascript através do interpretador NodeJs. Contudo não estou limitado a isso. Tenho total aptidão para trabalhar com outras linguagens, apesar de ter menos familiaridade. Já trabelhei com C, C#, C++, Lua, ActionScript e Python. Em processo de transição para typeScript"
                        icon={Code}
                        iconColor='primary'
                        vertical
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <InfoArea
                        title="Design"
                        description="Desenvolvo também peças criativas. Não é mais meu foco, mas acredito ser um bom diferencial para compor o time e quebrar um galho de vez enquando, quando necessário. Trabalho com Photoshop, Illustrator e editores de vídeos. Veja alargeuns trabalhos em: https://www.behance.net/EddieStudioID"
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
                        title="Entrem em contato"
                        description="Não deixe de bater um papo comigo. este é um breve resumo. Sou a melhor opção para compor sua equipe! E-mail: eduardo.srocha@hotmail.com"
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
                        Tecnologias
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
                        Linguas
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        Inglês
                    </Typography>
                    Conversação <ProgressLine level={85} />
                    Escrita <ProgressLine level={60} />
                    Leitura <ProgressLine level={70} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        Francês
                    </Typography>
                    Conversação <ProgressLine level={40} />
                    Escrita <ProgressLine level={30} />
                    Leitura <ProgressLine level={20} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        Alemão
                    </Typography>
                    Conversação <ProgressLine level={45} />
                    Escrita <ProgressLine level={30} />
                    Leitura <ProgressLine level={20} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={{ padding: 20 }}>
                    <Typography style={{ padding: 20 }}>
                        Libras
                    </Typography>
                    Alphabeto <ProgressLine level={100} />
                    Palavras <ProgressLine level={20} />
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
                        Experiência
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant='body1'>
                        *Em minha trajetória, realizei muitos projetos. Desenvolvendo Backend e FrontEnd, além de Design e textos.
                        Tenho meu próprio CNPJ e Até o momento trabelhei por projetos.
                        Segue aqui o Link dos projetos mais complexos que estou trabalhando ou que Trabalhei.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="subtitle1">
                        Top Streams
                    </Typography>
                    <Typography>
                        Descrição do APP: TopsTreams é um Aplicativo de Broadcaster onde um usuário é o transmissor do vídeo e os demais assistem. O Aplicativo se destina a apostadores de jogos de footbal. A aplicação já se encontra em uso.
                        Faça uma visita a aplicação guiada por mim! Entre em contato para marcarmos. eduardo.srocha@hotmail.com
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
                        Descrição do APP: Simulados OAB é um app gamificado, um blog e um e-commerce. Ele se encontra em fase final de desenvolvimento. Entre no Simulado e teste a interação. Aceito Feedbacks.
                        Faça uma visita a aplicação guiada por mim! Entre em contato para marcarmos. eduardo.srocha@hotmail.com
                    </Typography>
                    <Link href="https://frontsimulados.rj.r.appspot.com/">
                        Simulados OAB
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant="subtitle1">
                        Sites Diversos
                    </Typography>
                    <Typography>
                        Entre nos sites desenvolvidos por mim.
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
                        Trabalho Voluntário
                    </Typography>
                    <Typography>
                        Conheça o UFSM ABRAÇA. Projeto ao qual fui coautor. Veja a matéria que saiu na Globo do Rio Grande do Sul - Santa Maria.
                    </Typography>
                    <Link href="https://encurtador.com.br/qtwQ9">
                        Matéria Globo
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
                        Objetivos
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Typography variant='body2'>
                        Até esse momento da minha vida por motivos diversos vi no empreendedorismo uma saída para cursar SI na UFSM em período integral e continuar atuando no mercado de trabalho como Desenvolvedor web.
                        Hoje posso me dedicar a um emprego formal. Tenho Longa experiência como desenvolvedor Web e posso contribuir de maneira efetiva a sua equipe. Tenho a habilidade de me auto gerenciar, sou focado, assumo responsabilidades sem medo, sei falar com clientes e quero compor em uma equipe a gerenciando ou sendo gerenciado.
                    </Typography>
                    <Chip label="FullStack Pleno/Senior" style={{ margin: 5 }} />
                    <Chip label="FrontEnd Pleno/Senior" style={{ margin: 5 }} />
                    <Chip label="BackEnd Pleno/Senior" style={{ margin: 5 }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <Chip color="secondary" label="Com Disponibilidade para viajar" style={{ margin: 5 }} />
                    <Chip color="secondary" label="Apaixonado por desenvolver aplicações do zero" style={{ margin: 5 }} />
                    <Chip color="secondary" label="implementador de APIs" style={{ margin: 5 }} />
                </Grid>
            </Grid>
        </div >
    );
}
export default function Home(props, ref) {
    const history = useHistory()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
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