import React from "react";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  FormatListBulleted,
  PersonOutlined,
  BlurCircular,
  LocalShippingOutlined,
  AttachMoneyOutlined,
  BrushOutlined,
  CreditCardOutlined,
  SettingsInputSvideo,
  ExtensionOutlined,
  SettingsOutlined,
  ExitToApp,
  ExpandMore,
  ExpandLess,
} from "@material-ui/icons";

const useMenuItems = () => {
  return [
    {
      id: 1,
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      id: 2,
      text: "Catalogue",
      icon: <ShoppingCartOutlined />,
      downArrow: <ExpandMore />,
      upArrow: <ExpandLess />,
    },
    {
      id: 3,
      text: "Orders",
      icon: <FormatListBulleted />,
      notifications: 14
    },
    {
      id: 4,
      text: "Customers",
      icon: <PersonOutlined />,
    },
    {
      id: 5,
      text: "Marketing",
      icon: <BlurCircular />,
      downArrow: <ExpandMore />,
      upArrow: <ExpandLess />,
      data: [
        {
          id: 1,
          text: "Discount codes",
        },
        {
          id: 2,
          text: "Exit intent",
        },
        {
          id: 3,
          text: "Checkout Features",
        },
        {
          id: 4,
          text: "Post-purchase conversion",
        },
        {
          id: 5,
          text: "Cart abandonment",
        },
        {
          id: 6,
          text: "Timer checkout",
        },
        {
          id: 7,
          text: "Sell on Social",
        },
        {
          id: 8,
          text: "Special Offer",
        },
        {
          id: 9,
          text: "Seasonal Offer",
        },
      ],
    },
    {
      id: 6,
      text: "Delivery Options",
      icon: <LocalShippingOutlined />,
    },
    {
      id: 7,
      text: "Payment Options",
      icon: <AttachMoneyOutlined />,
    },
    {
      id: 8,
      text: "Store Design",
      icon: <BrushOutlined />,
    },
    {
      id: 9,
      text: "Subscription",
      icon: <CreditCardOutlined />,
    },
    {
      id: 10,
      text: "Integrations",
      icon: <SettingsInputSvideo />,
    },
    {
      id: 11,
      text: "Extensions",
      icon: <ExtensionOutlined />,
    },
    {
      id: 12,
      text: "Settings",
      icon: <SettingsOutlined />,
    },
    {
      id: 13,
      text: "Logout",
      icon: <ExitToApp />,
    },
  ];
};

export default useMenuItems;
