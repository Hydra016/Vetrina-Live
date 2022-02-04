import { makeStyles } from "@material-ui/core";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    drawer: {
      backgroundColor: "#87CEEB",
      // position: 'absolute',
      // overflow: 'hidden'
    },
    drawerPaper: {
      width: drawerWidth,
      // display: 'none'
    },
    contentShift: {
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easeing:theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    heading: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 20
      // border: '1px solid #000000',
    },
    headingText: {
      marginLeft: 20,
    },
    subheading: {
      color: "#21B8F9",
    },
    appBar: {
      width: '100%',
      backgroundColor: "white",
      borderBottom: "1px solid #d3d3d3",
      color: "#103B66",
      transition: theme.transitions.create(["margin", "width"], {
        easeing:theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
      // height: 20
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      backgroundColor: "white",
      borderBottom: "1px solid #d3d3d3",
      color: "#103B66",
      transition: theme.transitions.create(["margin", "width"], {
        easeing:theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    navbar_icon: {
      marginRight: 3,
    },
    navbar_link: {
      color: "#103B66",
      "&:hover": {
        color: "rgba(33,184,249,1)",
      },
    },
    listItemDiv: {},
    toolbar: theme.mixins.toolbar,
    dashboard: {
      flexGrow: 1,
    },
    links: {
      color: "#00000",
      "&:hover>*": {
        color: "#21B8F9",
        // borderLeft: '#87CEEB',
      },
    },
    ListItems: {
      fontFamily: "Noto+Sans",
    },
    extendedMenu: {
      borderTop: "1px solid  #d3d3d3",
      marginTop: 20,
      marginBottom: 30,
      paddingTop: 15,
    },
    nestedItems: {
      paddingLeft: theme.spacing(7),
      backgroundColor: "#E9F8FE",
    },
    notifications: {
      border: "1px solid #36CC96",
      backgroundColor: "#36CC96",
      color: "white",
      height: 20,
      width: 20,
      borderRadius: 500,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Noto Sans",
    },
    listItemText: {
      marginLeft: theme.spacing(-2),
    },
    nestedList: {},
    dropdown: {
      marginLeft: 10,
      marginRight: 15,
      marginBottom: 20,
    },
    dropdownHeading: {
      marginLeft: 10,
      marginBottom: 10,
    },
    mainMenu: {
      paddingBottom: 15,
    },
    //   page: {
    //     background: 'linear-gradient(#0da2ff, #cae8fe)',
    //     Width: '100%',
    //     height: 200,
    //     padding: theme.spacing(3),
    //     border: '1px solid #000000',
    // }
    page: {
      width: "100%",
      height: "100%",
      backgroundColor: "#E5E5E5",
      position: "relative",
      // border: '1px solid #000000'
      // padding: theme.spacing(3)
      transition: theme.transitions.create(["margin", "width"], {
        easeing:theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    container: {
      backgroundImage: "linear-gradient(to bottom, rgba(33,184,249,1), rgba(33,184,249,0.2))",
      fontFamily: "Source Sans Pro",
      Width: "100%",
      height: 250,
      padding: theme.spacing(3),
    },
    headerDetails: {
      marginTop: 25,
      alignItems: 'center',
      display: "flex",
      justifyContent: "space-between",
    },
    welcome: {
      // border: '1px solid #000000',
      color: "#ffffff",
      flexGrow: 1,
    },
    link: {
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      textDecoration: "underline",
    },
    link_text: {
      marginRight: 5,
    },
    container_1: {
      // border: '1px solid #000000',
      // display: 'flex'
    },
    container_2: {
      // border: '1px solid #000000'
    },
    primaryCard: {
      padding: 20,
      borderRadius: 10,
      color: "#103B66",
      // border: '1px solid #000000',
      height: "220px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      // width: 356,
      marginBottom: 30,
    },
    cardHeaderFirst: {
      display: "flex",
      alignItems: "center",
    },
    cardHeaderIcon: {
      marginRight: 10,
      fontSize: 35,
    },
    cardHeaderSecond: {
      display: "flex",
      alignItems: "center",
    },
    cardHeaderSelect: {
      outline: "none",
    },
    cardContent: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: -20,
    },
    inputLabel: {
      marginRight: 10,
    },
    cardFooterLink: {
      display: "flex",
      justifyContent: "space-between",
      color: "#21B8F9",
      textDecoration: "underline",
      fontFamily: "Noto Sans",
      width: "100%",
    },
    OrdersDetails: {
      color: "#6C7C8C",
    },
    secondaryCard: {
      padding: 20,
      borderRadius: 10,
      color: "#103B66",
      // border: '1px solid #000000',
      height: "289px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: 30,
    },
    FooterLinkSecondary: {
      display: "flex",
      color: "#21B8F9",
      textDecoration: "underline",
      fontFamily: "Noto Sans",
      width: "100%",
    },
    FooterLinkSecondaryIcon: {
      marginLeft: 10,
    },
    secondaryCardReviews: {
      padding: 20,
      borderRadius: 10,
      color: "#103B66",
      // border: '1px solid #000000',
      height: "232px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: 30,
      backgroundColor: "#000032",
      color: "#ffffff",
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
    customerSupportText: {
      marginLeft: 20,
    },
    CustomerSupportCard: {
      padding: 20,
      borderRadius: 10,
      color: "#103B66",
      // border: '1px solid #000000',
      height: "197px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: 30,
    },
    contactButton: {
      padding: 10,
      backgroundColor: "#21B8F9",
      width: "150px",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#08b0f8 ",
      },
    },
    ExclusiveImg: {
      width: 140,
      height: 280,
      marginLeft: 20,
    },
    ExclusivesContainer: {
      color: "#ffffff",
      padding: "30px 20px",
      backgroundColor: "#F3A35C",
      height: "343px",
      borderRadius: 10,
    },
    ExclusiveLink: {
      display: "flex",
      color: "#ffffff",
      textDecoration: "underline",
      marginTop: 20,
    },
    ExclusiveLinkIcon: {
      marginLeft: 20,
    },
    ExclusivesIcon: {
      color: "#ffffff",
      width: 150,
      "&:hover": {
        backgroundColor: "#000000",
      },
    },
    newsCard: {
      padding: 20,
      borderRadius: 10,
      color: "#103B66",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: 30,
    },
    newsCardContent: {
      marginTop: 20,
      marginBottom: 20,
    },
    newsLink: {
      marginTop: 10,
    },
    newsImg: {
      width: '140px',
      height: '140px'
    },
    newsItemContainer: {
      marginTop: 30,
      // maxWidth: 50,
      // border: '1px solid #000',
      display: "flex",
    },
    ExtensionsList: {
      marginRight: "60px",
      width: "170px",
      height: "170px",
      marginTop: 30,
      fontFamily: "Noto Sans",
    },
    WorldIcon: {
      fontSize: '150px',
      color: '#fff'
    },
    ExtensionsListOne: {
      color: '#fff',
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      width:"100%",
      height: '100%',
      borderRadius: 20
    },
    ExtensionsListTwo: {
      marginTop: -10,
    },
    ExtensionsListLink: {
      '&:hover': {
        textDecoration: 'none'
      }
    },
    header: {
      position: 'relative'
    },
    content: {
      backgroundColor: '',
      position: 'absolute',
      top: '75%',
    },
  };
});

export default useStyles;
