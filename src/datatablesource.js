export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Sknow",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 45,
  },
  {
    id: 2,
    username: "jdoe",
    img: "https://img.freepik.com/free-photo/young-sensitive-man-thinking_23-2149459722.jpg?semt=ais_hybrid&w=740",
    status: "inactive",
    email: "jdoe@example.com",
    age: 34,
  },
  {
    id: 3,
    username: "emilyw",
    img: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI",
    status: "active",
    email: "emily.watson@gmail.com",
    age: 29,
  },
  {
    id: 4,
    username: "tmiller",
    img: "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",
    status: "pending",
    email: "t.miller@yahoo.com",
    age: 41,
  },
  {
    id: 5,
    username: "srahman",
    img: "https://t4.ftcdn.net/jpg/03/96/16/79/360_F_396167959_aAhZiGlJoeXOBHivMvaO0Aloxvhg3eVT.jpg",
    status: "active",
    email: "s.rahman@outlook.com",
    age: 27,
  },
  {
    id: 6,
    username: "karim88",
    img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
    status: "inactive",
    email: "karim88@gmail.com",
    age: 38,
  },
  {
    id: 7,
    username: "laurag",
    img: "https://t4.ftcdn.net/jpg/03/76/47/81/360_F_376478182_yPuPo2qi6rYcu9ilwGWR6gQ7QBBC8Isw.jpg",
    status: "active",
    email: "laura.garcia@example.com",
    age: 31,
  },
  {
    id: 8,
    username: "mchan",
    img: "https://cdn.pixabay.com/photo/2022/05/24/17/04/face-7218927_640.jpg",
    status: "active",
    email: "mchan@hotmail.com",
    age: 36,
  },
  {
    id: 9,
    username: "zeynep.k",
    img: "https://cdn.pixabay.com/photo/2023/06/07/07/13/woman-8046433_1280.jpg",
    status: "inactive",
    email: "zeynep.kayra@gmail.com",
    age: 26,
  },
];