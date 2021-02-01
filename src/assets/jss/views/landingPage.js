import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        ...container
    },
    avatar: {
        height: 120,
        width: 120,
        margin: "0 auto 0"
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "0px",
        minHeight: "32px",
        color: "#FFFFFF",
        textDecoration: "none"
    },
    subtitle: {
        fontSize: "1.513rem",
        fontWeight: 'normal',
        maxWidth: "500px",
        margin: "0 auto 0"
    },
    bodyText: {
        fontWeight: 'normal',
        margin: '0 auto 0'
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    }
};

export default landingPageStyle;
