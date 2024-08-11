import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "../ui/table"
  
  const invoices = [
    {
      id : "1",
      year: "2018",
      totalStudents: "168",
      totalTeachers: "20",
      totalRevenue: "560",
    },
    {
      id : "2",
      year: "2019",
      totalStudents: "300",
      totalTeachers: "27",
      totalRevenue: "875",
    },
    {
      id : "3",
      year: "2020",
      totalStudents: "350",
      totalTeachers: "30",
      totalRevenue: "900",
    },
    {
      id : "4",
      year: "2021",
      totalStudents: "490",
      totalTeachers: "36",
      totalRevenue: "960",
    },
    {
      id : "5",
      year: "2022",
      totalStudents: "600",
      totalTeachers: "50",
      totalRevenue: "1200",
    },
    {
      id : "6",
      year: "2023",
      totalStudents: "758",
      totalTeachers: "55",
      totalRevenue: "1500",
    },
    {
      id : "7",
      year: "2024",
      totalStudents: "899",
      totalTeachers: "60",
      totalRevenue: "1660",
    },
    
  ]
  
  export function AdminDashboardTable() {
    return (
      <div className=" w-3/4 flex justify-center items-center flex-col  ">
        <h1 className="text-3xl font-bold text-primary ">Annual Statistics</h1>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className='w-full'>
            <TableHead className=" text-2xl font-medium">S.no</TableHead>
            <TableHead className="text-2xl">Year</TableHead>
            <TableHead className="text-2xl">Students</TableHead>
            <TableHead className="text-2xl">Teachers</TableHead>
            <TableHead className="text-2xl ">Revenue</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-small text-xl">{invoice.id}</TableCell>
              <TableCell className="font-small text-xl">{invoice.year}</TableCell>
              <TableCell className="font-small text-xl">{invoice.totalStudents}</TableCell>
              <TableCell className="font-small text-xl">{invoice.totalTeachers}</TableCell>
              <TableCell className="text-xl ">${invoice.totalRevenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter  className='w-full'>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="font-bold text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    )
  }
  