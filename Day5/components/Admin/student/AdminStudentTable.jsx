import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Button } from '../../ui/button';
import { Plus } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';


const invoices = [
  {
    id : "1",
    name: "Sangamithra M",
    rollno:"727822TUCS201",
    email: "727822tucs201@skct.edu.in",
    password: "20",
  },
  {
    id : "2",
    name: "Sanjanashalini S",
    rollno:"727822TUCS202",
    email: "727822tucs202@skct.edu.in",
    password: "20",
  },
  {
    id : "3",
    name: "Sanjay R",
    rollno:"727822TUCS203",
    email: "727822tucs203@skct.edu.in",
    password: "20",
  },
  {
    id : "4",
    name: "Sanjeev K",
    rollno:"727822TUCS204",
    email: "727822tucs204@skct.edu.in",
    password: "20",
  },
  {
    id : "5",
    name: "Santhana Kumar A",
    rollno:"727822TUCS205",
    email: "727822tucs205@skct.edu.in",
    password: "20",
  },
  {
    id : "6",
    name: "Santhish V",
    rollno:"727822TUCS206",
    email: "727822tucs206@skct.edu.in",
    password: "20",
  },
  {
    id : "7",
    name: "Santhosh V",
    rollno:"727822TUCS207",
    email: "727822tucs207@skct.edu.in",
    password: "20",
  },
]

export function AdminStudentTable() {
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [open, setOpen] = useState(false)


  const togglePasswordVisibility = (id) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
<div className=" w-full flex justify-center items-center flex-row  ">
        <h1 className="w-1/2 ml-3 flex justify-start items-center  text-2xl  text-primary "> All Students</h1>
        <h1 className="w-1/2 mr-3 flex justify-end items-center text-primary ">
          {" "}
          Home &gt; Admin &gt; Student
        </h1>
      </div>
      <div className="w-full flex flex-row justify-end items-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className=" bg-green-600">
              <Plus className="h-10 w-10 mr-2" /> Add
            </Button>
          </SheetTrigger>
          <SheetContent>
            <AddStudent />
          </SheetContent>
        </Sheet>
      </div>
      <Table>
        <TableHeader>
          <TableRow className='w-full'>
            <TableHead className="text-2xl font-medium">S.no</TableHead>
            <TableHead className="text-2xl">Roll No</TableHead>
            <TableHead className="text-2xl">Name</TableHead>
            <TableHead className="text-2xl">Email</TableHead>
            <TableHead className="text-2xl">Password</TableHead>
            <TableHead className="text-2xl">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-small text-x">{invoice.id}</TableCell>
              <TableCell className="font-small text-x">{invoice.rollno}</TableCell>
              <TableCell className="font-small text-x">{invoice.name}</TableCell>
              <TableCell className="font-small text-x">{invoice.email}</TableCell>
              <TableCell className="text-x">
                {visiblePasswords[invoice.id] ? invoice.password : '••••••'}
                <button
                  onClick={() => togglePasswordVisibility(invoice.id)}
                  className="ml-2 text-blue-500"
                >
                  {visiblePasswords[invoice.id] ? 'Hide' : 'Show'}
                </button>
              </TableCell>
              <TableCell className="text-x flex gap-5">
                <Popover>
                  <PopoverTrigger>
                    {" "}
                    <Button className="bg-green-600">Edit</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <EditStudent />
                  </PopoverContent>
                </Popover>

                <Button className="bg-red-600">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter className='w-full'>
          <TableRow>
            <TableCell colSpan={4}>Total Number of Students</TableCell>
            <TableCell className="font-bold text-right">8</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
}

export default AdminStudentTable;
