import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { CheckCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="container">
      <h1 className="mt-4 mb-10 font-bold leading-10 text-3xl text-center">
        Your Insurance Package
      </h1>
      <div className="flex flex-col gap-4">
        <div className="text-lg p-4 rounded-md shadow-sm border font-medium bg-shine">
          <p>
            <span className="font-bold">+10%</span> Discount!
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Healthcare{" "}
              <span className="text-sm font-normal float-end">$5/MO</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2 font-medium">
              <li className="flex gap-1 items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <p>Outpatient coverage</p>
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <p>Accident insurance</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link
              href="/app/package/healthcare"
              className="mx-auto font-extrabold text-blue-600"
            >
              <small>view</small>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Motorcycle{" "}
              <span className="text-sm font-normal float-end">$3/MO</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2 font-medium">
              <li className="flex gap-1 items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <p>Collision coverage</p>
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <p>Theft/fire coverage</p>
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <p>Breakdown assistance</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link
              href="/app/package/motorcycle"
              className="mx-auto font-extrabold text-blue-600"
            >
              <small>view</small>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
