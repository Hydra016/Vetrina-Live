import React from "react";
import { Language, LocalAtm, Restaurant } from "@material-ui/icons";
import { Link } from "@material-ui/core";
import useStyles from "../../hooks/useStyles";
import HorizontalScroll from "react-scroll-horizontal";

const Extensions = () => {
  const {
    ExtensionsList,
    WorldIcon,
    ExtensionsListOne,
    ExtensionsListTwo,
    ExtensionsListText,
    ExtensionsListLink,
    horizontalList
  } = useStyles();
  return (
    // <div style={{ width: `500px`, height: `300px` }}>
    <div className={horizontalList}>
      {/* <HorizontalScroll style={{ display: "flex", alignItems: "center" }}> */}
      <HorizontalScroll>
        <div className={ExtensionsList}>
          <Link href="#" className={ExtensionsListLink}>
            <div
              className={ExtensionsListOne}
              style={{ backgroundColor: "#FFA26B" }}
            >
              <Language className={WorldIcon} />
            </div>
            <div className={ExtensionsListTwo}>
              <h3 className={ExtensionsListText}>Connect your own domain</h3>
            </div>
          </Link>
        </div>

        <div className={ExtensionsList}>
          <Link href="#" className={ExtensionsListLink}>
            <div
              className={ExtensionsListOne}
              style={{ backgroundColor: "#00C48C" }}
            >
              <div>
                <h1 style={{ fontSize: "70px" }}>+50</h1>
              </div>
            </div>
            <div className={ExtensionsListTwo}>
              <h3 className={ExtensionsListText}>50 Additional Products</h3>
            </div>
          </Link>
        </div>

        <div className={ExtensionsList}>
          <Link href="#" className={ExtensionsListLink}>
            <div
              className={ExtensionsListOne}
              style={{ backgroundColor: "#ff726f" }}
            >
              <LocalAtm className={WorldIcon} />
            </div>
            <div className={ExtensionsListTwo}>
              <h3 className={ExtensionsListText}>Increase your sales</h3>
            </div>
          </Link>
        </div>

        <div className={ExtensionsList}>
          <Link href="#" className={ExtensionsListLink}>
            <div
              className={ExtensionsListOne}
              style={{ backgroundColor: "#b19cd9" }}
            >
              <Restaurant className={WorldIcon} />
            </div>
            <div className={ExtensionsListTwo}>
              <h3 className={ExtensionsListText}>Improve your quality</h3>
            </div>
          </Link>
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default Extensions;
