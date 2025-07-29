/* eslint-disable no-unused-vars */
import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ( { type }) => {

    let data;

    //temporary 
    const amount = 100;
    const diff = 20;

    switch (type) {
      case "user":
        data = {
          title: "USERS",
          isMoney: false,
          link: "See all users",
          icon: (
            <PersonOutlinedIcon
              className="icon"
              style={{ color: "#1E3A8A", backgroundColor: "#E0F2FE" }}
            />
          ),
        };
        break;
      case "order":
        data = {
          title: "ORDERS",
          isMoney: false,
          link: "View all orders",
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{ color: "#B45309", backgroundColor: "#FEF3C7" }}
            />
          ),
        };
        break;
      case "earning":
        data = {
          title: "EARNINGS",
          isMoney: true,
          link: "View net earnings",
          icon: (
            <MonetizationOnOutlinedIcon
              className="icon"
              style={{ color: "#047857", backgroundColor: "#D1FAE5" }}
            />
          ),
        };
        break;
      case "balance":
        data = {
          title: "BALANCE",
          isMoney: true,
          link: "See details",
          icon: (
            <AccountBalanceWalletOutlinedIcon
              className="icon"
              style={{ color: "#7C3AED", backgroundColor: "#EDE9FE" }}
            />
          ),
        };
        break;
      default:
        break;
    }


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "RM"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget
