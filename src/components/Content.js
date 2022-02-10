import React from "react";
import useStyles from "../hooks/useStyles";
import { Grid, Container, Button } from "@material-ui/core";
import PrimaryCardVisitors from "./firstSection/PrimaryCardVisitors";
import PrimaryCardOrders from "./firstSection/PrimaryCardOrders";
import Configure from "./secondSection/Configure";
import Reviews from "./secondSection/Reviews";
import Invite from "./secondSection/Invite";
import CustomerSupport from "./secondSection/CustomerSupport";
import Exclusive from "./firstSection/Exclusive";
import Extensions from "./firstSection/Extensions";
import News from "./firstSection/News";
import PrimaryCard from "./firstSection/PrimaryCard";
import classNames from "classnames";

import {
  VisibilityOutlined,
  FormatListBulleted,
  BuildOutlined,
  StarOutlined,
  PeopleAltOutlined,
  HeadsetOutlined,
  ExtensionOutlined,
  EventNoteOutlined
} from "@material-ui/icons";

const Content = () => {
  const {
    content,
    container_1,
    container_2,
    primaryCard,
    FooterLinkSecondaryIcon,
    secondaryCard,
    cardFooterLink,
    cardHeaderIcon,
    FooterLinkSecondary,
    secondaryCardReviews,
    CustomerSupportCard,
    contactButton,
    Ext,
    newsCard
  } = useStyles();

  return (
    <Grid className={content} container direction="row" justifyContent="center">
      <Grid className={container_1} item xs={8}>
        <Grid container>
          <Grid item xs={6}>
            <PrimaryCard
              className={primaryCard}
              icon={<VisibilityOutlined className={cardHeaderIcon} />}
              heading="Visitors"
              content={<PrimaryCardVisitors />}
              footer="Do you want more visits? Contact us!"
              select="select"
              showIcon="show"
              footerLink={cardFooterLink}
            />
            <Exclusive className={primaryCard} />
          </Grid>
          <Grid item xs={6}>
            <PrimaryCard
              className={primaryCard}
              icon={<FormatListBulleted className={cardHeaderIcon} />}
              heading="Orders"
              content={<PrimaryCardOrders />}
              footer="10 free tips to increase your sales"
              select="select"
              footerLink={cardFooterLink}
            />
            <PrimaryCard
            style={{ height: "343px", padding: "30px 20px" }}
              className={classNames(secondaryCard, Ext)}
              icon={<ExtensionOutlined className={cardHeaderIcon} />}
              heading="Extensions Marketplace"
              content={<Extensions />}
              footer="Discover all extensions!"
              footerLink={cardFooterLink}
              showIcon="show"
            />
          </Grid>
          <Grid>
          <PrimaryCard
              className={newsCard}
              icon={<EventNoteOutlined className={cardHeaderIcon} />}
              heading="Latest news"
              content={<News />}
              headerLink='show'
            />
          </Grid>
          
        </Grid>
      </Grid>
      <Grid className={container_2} item xs={4}>
        <Grid container>
          <PrimaryCard
            className={secondaryCard}
            icon={<BuildOutlined className={cardHeaderIcon} />}
            heading="Configure your shop"
            content={<Configure />}
            footer="Complete the setup!"
            footerLink={FooterLinkSecondary}
            footerLinkIcon={FooterLinkSecondaryIcon}
            showIcon="show"
          />
          <PrimaryCard 
          className={secondaryCardReviews}
          icon={<StarOutlined className={cardHeaderIcon} style={{color: '#00C48C'}} />}
            heading="Trustpilot"
            content={<Reviews />}
            footer="Write a review on Trustpilot"
            footerLink={FooterLinkSecondary}
            footerLinkIcon={FooterLinkSecondaryIcon}
            showIcon="show"
            color='#00C48C'
          />
           <PrimaryCard
            height='231px'
            className={secondaryCard}
            icon={<PeopleAltOutlined className={cardHeaderIcon} />}
            heading="Invite friend"
            content={<Invite />}
            footer="Start inviting friends!"
            footerLink={FooterLinkSecondary}
            footerLinkIcon={FooterLinkSecondaryIcon}
            showIcon="show"
          />
          <PrimaryCard
            className={CustomerSupportCard}
            icon={<HeadsetOutlined className={cardHeaderIcon} />}
            heading="Customer Support"
            content={<CustomerSupport />}
            footer={<Button style={{backgroundColor: '#21B8F9', color: '#ffffff'}} className={contactButton} variant="contained">Contact us</Button>}
            footerLink={FooterLinkSecondary}
            footerLinkIcon={FooterLinkSecondaryIcon}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
