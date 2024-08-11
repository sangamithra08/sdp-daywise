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
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

import Categories from "../../../pages/Shared/Categories";
import { Button } from "../../ui/button";
import { Plus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import EditCourse from "./EditCourse";
import AddCourse from "./AddCourse";

export function AdminCourseTable() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className=" w-full flex justify-center items-center flex-row  ">
        <h1 className="w-1/2 ml-3 flex justify-start items-center  text-2xl  text-primary "> All Courses</h1>
        <h1 className="w-1/2 mr-3 flex justify-end items-center text-primary ">
          {" "}
          Home &gt; Admin &gt; Course
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
            <AddCourse />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex justify-center items-center">
        <Table>
          <TableHeader>
            <TableRow className="w-full">
              <TableHead className="text-2xl font-medium">S.no</TableHead>
              <TableHead className="text-2xl">Title</TableHead>
              <TableHead className="text-2xl">Category</TableHead>
              <TableHead className="text-2xl">Duration</TableHead>
              <TableHead className="text-2xl">Reviews</TableHead>
              <TableHead className="text-2xl">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Categories.map((category, index) => (
              <TableRow key={category.id}>
                <TableCell className="font-small text-x">{index + 1}</TableCell>
                <TableCell className="font-small text-x">
                  {category.title}
                </TableCell>
                <TableCell className="font-small text-x">
                  {category.Category}
                </TableCell>
                <TableCell className="font-small text-x">
                  {category.durationhrs} hrs {category.durationmins} mins
                </TableCell>
                <TableCell className="text-x">{category.reviews}</TableCell>
                <TableCell className="text-x flex gap-5">
                  <Popover>
                    <PopoverTrigger>
                      {" "}
                      <Button className="bg-green-600">Edit</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <EditCourse />
                    </PopoverContent>
                  </Popover>

                  <Button className="bg-red-600">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AdminCourseTable;
