"use client";
import { Button, Drawer } from "flowbite-react";
import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";

function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <div>
      <Button className="ml-5" color="light" pill onClick={() => setIsOpen(true)}>
        Filters
      </Button>
      <Drawer open={isOpen} onClose={handleClose} className="w-[25rem]">
        <Drawer.Header title="Filters" titleIcon={BsFilter} />
        <Drawer.Items></Drawer.Items>
      </Drawer>
    </div>
  );
}

export default Filters;
