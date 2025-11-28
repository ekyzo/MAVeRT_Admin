/* eslint-disable no-unused-vars */
import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DirectionsWalkOutlinedIcon from '@mui/icons-material/DirectionsWalkOutlined';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; 
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
      case "exercise":
        data = {
          title: "EXERCISES",
          isMoney: false,
          link: "View all exercises",
          icon: (
            <DirectionsWalkOutlinedIcon
              className="icon"
              style={{ color: "#B45309", backgroundColor: "#FEF3C7" }}
            />
          ),
        };
        break;
      case "time":
        data = {
          title: "DURATION",
          isMoney: true,
          link: "View exercise duration",
          icon: (
            <AccessTimeOutlinedIcon
              className="icon"
              style={{ color: "#047857", backgroundColor: "#D1FAE5" }}
            />
          ),
        };
        break;
      /*case "balance":
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
        break;*/
      default:
        break;
    }


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
        {amount}
          {data.isMoney && " minutes"}
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
