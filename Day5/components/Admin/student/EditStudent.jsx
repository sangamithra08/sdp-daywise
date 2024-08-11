import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
const EditStudent = () => {
  return (
    <div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="width">Name</Label>
            <Input id="width" placeholder="name" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="maxWidth">Email</Label>
            <Input
              id="maxWidth"
              placeholder="user@skct.edu.in"
              className="col-span-2 h-8"
            />
          </div>
          <div className="flex justify-center items-center">
            <Button className="bg-blue-400 ">Save changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
