/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href=""
                                className={classes.block}
                                target="_blank"
                            >
                                Eduardo S. Rocha
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://www.linkedin.com/in/eduardosrocha/"
                                className={classes.block}
                                target="_blank"
                            >
                                LinkedIn
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://www.behance.net/EddieStudioID"
                                className={classes.block}
                                target="_blank"
                            >
                                Behance
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://unsplash.com/photos/AMssSjUaTY4"
                                className={classes.block}
                                target="_blank"
                            >
                                Imagem de Fundo
                            </a>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>

                    Desenvolvido por Eduardo Rocha. Criado com{" "}
                    <a
                        href="https://material-ui.com/"
                        className={aClasses}
                        target="_blank"
                    >
                        {" "}Material Ui
                    </a>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};
