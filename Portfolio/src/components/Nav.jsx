import React from "react";
import '../App.css'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const Nav = () => {
  return (
    <>
    <div className="flex justify-around bg-violet-900 text-white h-20 items-center font-medium text-lg">
      <div className="text-2xl fomt-mono bg-black bg-opacity-10 h-15  p-4 rounded m-2">PAYAL SHARMA</div>
      <div className="bg-white p-4 bg-opacity-5 rounded ">
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Tech Stack</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Achievements</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
     
    </div>
    <div>
    {/* <ChakraProvider>
      <FAQ />
     </ChakraProvider> */}
    </div>
    
   
    </>
  );
};

export default Nav;
