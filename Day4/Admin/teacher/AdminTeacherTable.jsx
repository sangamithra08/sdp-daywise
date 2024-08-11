import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../ui/button";

import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

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

import EditTeacher from "./EditTeacher";
import AddTeacher from "./AddTeacher";

const invoices = [
  {
    id: "1",
    name: "Sangamithra M",
    email: "727822tucs201@skct.edu.in",
    password: "20",
  },
  {
    id: "2",
    name: "Sanjanashalini S",
    email: "727822tucs202@skct.edu.in",
    password: "20",
  },
  {
    id: "3",
    name: "Sanjay R",
    email: "727822tucs203@skct.edu.in",
    password: "20",
  },
  {
    id: "4",
    name: "Sanjeev K",
    email: "727822tucs204@skct.edu.in",
    password: "20",
  },
  {
    id: "5",
    name: "Santhana Kumar A",
    email: "727822tucs205@skct.edu.in",
    password: "20",
  },
  {
    id: "6",
    name: "Santhish V",
    email: "727822tucs206@skct.edu.in",
    password: "20",
  },
  {
    id: "7",
    name: "Santhosh V",
    email: "727822tucs207@skct.edu.in",
    password: "20",
  },
];

export function AdminTeacherTable() {
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [open, setOpen] = useState(false);

  const togglePasswordVisibility = (id) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className=" w-7/8 flex justify-center items-center flex-col  ">
      <div className=" w-full flex justify-center items-center flex-row  ">
        <h1 className="w-1/2 ml-3 flex justify-start items-center  text-2xl  text-primary "> All Professors</h1>
        <h1 className="w-1/2 mr-3 flex justify-end items-center text-primary ">
          {" "}
          Home &gt; Admin &gt; Professor
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
            <AddTeacher />
          </SheetContent>
        </Sheet>
      </div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="w-full">
            <TableHead className=" text-2xl font-medium">S.no</TableHead>
            <TableHead className="text-2xl">Name</TableHead>
            <TableHead className="text-2xl">Email</TableHead>
            <TableHead className="text-2xl ">Password</TableHead>
            <TableHead className="text-2xl ">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-small text-x">{invoice.id}</TableCell>
              <TableCell className="font-small text-x">
                {invoice.name}
              </TableCell>
              <TableCell className="font-small text-x">
                {invoice.email}
              </TableCell>
              <TableCell className="text-x">
                {visiblePasswords[invoice.id] ? invoice.password : "••••••"}
                <button
                  onClick={() => togglePasswordVisibility(invoice.id)}
                  className="ml-2 text-blue-500"
                >
                  {visiblePasswords[invoice.id] ? "Hide" : "Show"}
                </button>
              </TableCell>{" "}
              <TableCell className="text-x flex gap-5">
                <Popover>
                  <PopoverTrigger>
                    {" "}
                    <Button className="bg-green-600">Edit</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <EditTeacher />
                  </PopoverContent>
                </Popover>

                <Button className="bg-red-600">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
