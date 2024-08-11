import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { DollarSign, ShoppingBag, User, Users } from "lucide-react";
import { Table } from "../../components/ui/table";
import { AdminDashboardTable } from "../../components/Admin/AdminDashboardTable";
import BarChartsss from "../../components/Admin/BarChartsss";
import Piechartss from "../../components/Admin/Piechartss";
const AdminDashboard = () => {
  return (
    <>
      <div className="h-1/4 w-full  flex flex-row p-4 gap-4">
        <Card className="w-1/4 border border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">800</div>
          </CardContent>
        </Card>
        <Card className="w-1/4 border border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            <Users className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">692</div>
          </CardContent>
        </Card>
        <Card className="w-1/4 border border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Enrollments</CardTitle>
            <ShoppingBag className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1000</div>
          </CardContent>
        </Card>
        <Card className="w-1/4 border border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$100,00</div>
          </CardContent>
        </Card>
        {/* <Table /> */}
      </div>
      <div className="mt-4 flex justify-center items-center">
        <BarChartsss />
        <Piechartss />
        {/* <Linecharts /> */}
      </div>
      <div className="h-3/4 w-full flex justify-center items-center mt-6">
        <AdminDashboardTable />
      </div>
    </>
  );
};

export default AdminDashboard;
