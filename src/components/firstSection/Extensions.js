import React from "react";
import { ExtensionOutlined, ArrowForward, Language, LocalAtm, Restaurant } from "@material-ui/icons";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import useStyles from "../../hooks/useStyles";
import HorizontalScroll from "react-scroll-horizontal";

const Extensions = () => {
  const {
    cardHeaderFirst,
    cardHeaderIcon,
    secondaryCard,
    FooterLinkSecondary,
    FooterLinkSecondaryIcon,
    ExtensionsList,
    WorldIcon,
    ExtensionsListOne,
    ExtensionsListTwo,
    ExtensionsListText,
    ExtensionsListLink
  } = useStyles();
  return (
    <Container>
      <Card
        elevation={3}
        style={{ height: "343px", padding: "30px 20px" }}
        className={secondaryCard}
      >
        <Grid container>
          <Grid item xs>
            <div className={cardHeaderFirst}>
              <ExtensionOutlined className={cardHeaderIcon} />
              <Typography variant="h5">
                <b>Extensions Marketplace</b>
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div style={{ width: `500px`, height: `300px` }}>
          <HorizontalScroll style={{ display: "flex", alignItems: "center" }}>
            <div className={ExtensionsList}>
              <Link href="#" className={ExtensionsListLink}>
                <div
                  className={ExtensionsListOne}
                  style={{ backgroundColor: "#FFA26B" }}
                >
                  <Language className={WorldIcon} />
                </div>
                <div className={ExtensionsListTwo}>
                  <h3 className={ExtensionsListText}>
                    Connect your own domain
                  </h3>
                </div>
              </Link>
            </div>

            <div className={ExtensionsList}>
              <Link href="#" className={ExtensionsListLink}>
                <div 
                  className={ExtensionsListOne}
                  style={{ backgroundColor: "#00C48C" }}>
                    <div>
                    <h1 style={{fontSize: '70px'}}>+50</h1>
                    </div>
                </div>
                <div className={ExtensionsListTwo}>
                  <h3 className={ExtensionsListText}>
                  50 Additional Products 
                  </h3>
                </div>
              </Link>
            </div>

            <div className={ExtensionsList}>
              <Link href="#" className={ExtensionsListLink}>
                <div 
                  className={ExtensionsListOne}
                  style={{ backgroundColor: "#ff726f" }}>
                    <LocalAtm className={WorldIcon}  />
                </div>
                <div className={ExtensionsListTwo}>
                  <h3 className={ExtensionsListText}>
                  Increase your sales
                  </h3>
                </div>
              </Link>
            </div>

            <div className={ExtensionsList}>
              <Link href="#" className={ExtensionsListLink}>
                <div 
                className={ExtensionsListOne}
                style={{ backgroundColor: "#b19cd9" }}>
                  <Restaurant className={WorldIcon} />
                </div>
                <div className={ExtensionsListTwo}>
                  <h3 className={ExtensionsListText}>
                    Improve your quality
                  </h3>
                </div>
              </Link>
            </div>
          </HorizontalScroll>
        </div>
        <Grid container>
          <Link className={FooterLinkSecondary} href="#">
            <Typography>Discover all extensions!</Typography>
            <ArrowForward className={FooterLinkSecondaryIcon} />
          </Link>
        </Grid>
      </Card>
    </Container>
  );
};

export default Extensions;
