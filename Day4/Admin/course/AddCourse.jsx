import React from 'react'
import { Label } from '../../ui/label'
import { Input } from '../../ui/input'
import {
    SheetDescription,
    SheetHeader,
    SheetFooter,
    SheetClose,
    SheetTitle
  } from "../../ui/sheet"
import { Button } from '../../ui/button'

const AddCourse = () => {
  return (
    <div>
      <SheetHeader>
          <SheetTitle>Add Course</SheetTitle>
          <SheetDescription>
             Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="name"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Category
            </Label>
            <Input id="email"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Duration
            </Label>
            <Input id="email"  className="col-span-3" />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Reviews
            </Label>
            <Input id="email"  className="col-span-3" />
          </div> */}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
    </div>
  )
}

export default AddCourse
