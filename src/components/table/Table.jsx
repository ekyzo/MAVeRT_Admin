import "./table.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {

    const rows = [
      {
        id: 12313,
        type: "Full body",
        img: "https://media.istockphoto.com/id/912065944/vector/whatever-word-pink-sticker.jpg?s=612x612&w=0&k=20&c=t8tF9VkSO0D5qp2Og1ixWRd2HzGNFpUv8fEb5hRxV60=",
        customer: "John Smith",
        date: "1 maradj",
        time: 23234,
        method: "online",
        status: "Done",
      },
      {
        id: 12314,
        type: "Upper body",
        img: "https://media.istockphoto.com/id/912065944/vector/whatever-word-pink-sticker.jpg?s=612x612&w=0&k=20&c=t8tF9VkSO0D5qp2Og1ixWRd2HzGNFpUv8fEb5hRxV60=",
        customer: "Alice Johnson",
        date: "2 febraury",
        time: 12000,
        method: "credit",
        status: "Pending",
      },
      {
        id: 12315,
        type: "Walk",
        img: "https://media.istockphoto.com/id/912065944/vector/whatever-word-pink-sticker.jpg?s=612x612&w=0&k=20&c=t8tF9VkSO0D5qp2Og1ixWRd2HzGNFpUv8fEb5hRxV60=",
        customer: "Robert Miles",
        date: "13 janury",
        time: 8530,
        method: "paypal",
        status: "Incomplete",
      },
      {
        id: 12316,
        type: "Stability",
        img: "https://media.istockphoto.com/id/912065944/vector/whatever-word-pink-sticker.jpg?s=612x612&w=0&k=20&c=t8tF9VkSO0D5qp2Og1ixWRd2HzGNFpUv8fEb5hRxV60=",
        customer: "Emily Davis",
        date: "27 march",
        time: 4578,
        method: "cash",
        status: "Done",
      },
      {
        id: 12317,
        type: "Head movement",
        img: "https://media.istockphoto.com/id/912065944/vector/whatever-word-pink-sticker.jpg?s=612x612&w=0&k=20&c=t8tF9VkSO0D5qp2Og1ixWRd2HzGNFpUv8fEb5hRxV60=",
        customer: "Michael Lee",
        date: "5 april",
        time: 9999,
        method: "online",
        status: "Done",
      },
      {
        id: 12318,
        type: "Arm movement",
        img: "https://media.istockphoto.com/id/912065944/vector/whatever-word-pink-sticker.jpg?s=612x612&w=0&k=20&c=t8tF9VkSO0D5qp2Og1ixWRd2HzGNFpUv8fEb5hRxV60=",
        customer: "Samantha Ray",
        date: "18 may",
        time: 3021,
        method: "debit",
        status: "Pending",
      },
    ];
    return (
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Activity ID</TableCell>
              <TableCell className="tableCell">Exercise type</TableCell>
              <TableCell className="tableCell">User</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Duration (minutes)</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                    <div className="cellWrapper">
                        <img src={row.img} alt="" className="image"></img>
                        {row.type}
                    </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.time}</TableCell>
                <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default List
