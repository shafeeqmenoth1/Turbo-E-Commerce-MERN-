import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function List() {

    const rows = [
        {
            id:11454,
            product: "Men Navy Blue Slim Fit",
            img: "https://m.media-amazon.com/images/I/91UFuodo53S._UL1500_.jpg",
            customer: "jhon smith",
            date: "Septembet 12",
            amount:699,
            method:"Cash on Delivery",
            status: "Approved"
        },
        {
            id:11454,
            product: "Men Navy Blue Slim Fit",
            img: "https://m.media-amazon.com/images/I/91UFuodo53S._UL1500_.jpg",
            customer: "jhon smith",
            date: "Septembet 12",
            amount:699,
            method:"Cash on Delivery",
            status: "Approved"
        },
        {
            id:21454,
            product: "Men Navy Blue Slim Fit",
            img: "https://m.media-amazon.com/images/I/91UFuodo53S._UL1500_.jpg",
            customer: "jhon smith",
            date: "Septembet 12",
            amount:699,
            method:"Cash on Delivery",
            status: "Approved"
        },
        {
            id:122454,
            product: "Men Navy Blue Slim Fit",
            img: "https://m.media-amazon.com/images/I/91UFuodo53S._UL1500_.jpg",
            customer: "jhon smith",
            date: "Septembet 12",
            amount:699,
            method:"Cash on Delivery",
            status: "Pending"
        },
        {
            id:142454,
            product: "Men Navy Blue Slim Fit",
            img: "https://m.media-amazon.com/images/I/91UFuodo53S._UL1500_.jpg",
            customer: "jhon smith",
            date: "Septembet 12",
            amount:699,
            method:"Cash on Delivery",
            status: "Pending"
        },
        {
            id:125454,
            product: "Men Navy Blue Slim Fit",
            img: "https://m.media-amazon.com/images/I/91UFuodo53S._UL1500_.jpg",
            customer: "jhon smith",
            date: "Septembet 12",
            amount:699,
            method:"Cash on Delivery",
            status: "Approved"
        },
    ]
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="TableCell">Tracking ID</TableCell>
          <TableCell className="TableCell">Product</TableCell>
          <TableCell className="TableCell">Customer</TableCell>
          <TableCell className="TableCell">Date</TableCell>
          <TableCell className="TableCell">Amount</TableCell>
          <TableCell className="TableCell">Payment Method</TableCell>
          <TableCell className="TableCell">Status</TableCell>
       
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          
          >
            <TableCell className="TableCell">{row.id}</TableCell>
            <TableCell className="TableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                </div>
            </TableCell>
            <TableCell className="TableCell">{row.customer}</TableCell>
            <TableCell className="TableCell">{row.date}</TableCell>
            <TableCell className="TableCell">{row.amount}</TableCell>
            <TableCell className="TableCell">{row.method}</TableCell>
            <TableCell className="TableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List