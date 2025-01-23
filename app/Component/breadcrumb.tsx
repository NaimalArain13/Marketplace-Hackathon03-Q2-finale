import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
function BreadCrumb({
  route1,
  route1Link,
  route2,
  route2Link,
  route3,
  route3Link,
}: {
  route1: string;
  route1Link?:string;
  route2?: string;
  route2Link?:string;
  route3?: string;
  route3Link?:string;
}) {
  return (
    <div className="hidden sm:flex">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={route1Link} className="font-bold">{route1}</BreadcrumbLink>
          </BreadcrumbItem>
          {route2 && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={route2Link} className="font-bold">{route2}</BreadcrumbLink>
              </BreadcrumbItem>
              </>
          )}
          {route3 && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={route3Link} className="font-bold">{route3}</BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;
