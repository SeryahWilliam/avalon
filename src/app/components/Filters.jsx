"use client";
import { Button, Drawer, Checkbox, Label, RangeSlider } from "flowbite-react";
import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";

function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button
        className="ml-5"
        color="light"
        pill
        onClick={() => setIsOpen(true)}
      >
        Filters
      </Button>
      <Drawer open={isOpen} onClose={handleClose} className="w-[25rem]">
        <Drawer.Header>
          <div className="flex items-center space-x-2">
            <BsFilter className="text-xl" />
            <span>Filters</span>
          </div>
        </Drawer.Header>
        <Drawer.Items>
          <div className="p-4 space-y-4">
            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-semibold">Category</h3>
              <div className="flex flex-col space-y-2">
                <Checkbox id="handmade" label="Handmade" />
                <Checkbox id="vintage" label="Vintage" />
                <Checkbox id="craftSupplies" label="Craft Supplies" />
                <Checkbox id="jewelry" label="Jewelry" />
                <Checkbox id="clothing" label="Clothing" />
                <Checkbox id="homeDecor" label="Home Decor" />
                <Checkbox id="art" label="Art" />
                <Checkbox id="toys" label="Toys" />
              </div>
            </div>

            {/* Subcategory Filter */}
            <div>
              <h3 className="text-lg font-semibold">Subcategory</h3>
              <div className="flex flex-col space-y-2">
                <Checkbox id="accessories" label="Accessories" />
                <Checkbox id="bags" label="Bags" />
                <Checkbox id="knitwear" label="Knitwear" />
                <Checkbox id="pottery" label="Pottery" />
                <Checkbox id="prints" label="Prints" />
                <Checkbox id="stationery" label="Stationery" />
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="text-lg font-semibold">Price Range</h3>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="priceRange">Price Range: $10 - $1000</Label>
                <RangeSlider
                  id="priceRange"
                  min={10}
                  max={1000}
                  defaultValue={50}
                />
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <h3 className="text-lg font-semibold">Rating</h3>
              <div className="flex flex-col space-y-2">
                <Checkbox id="rating1" label="1 Star & Up" />
                <Checkbox id="rating2" label="2 Stars & Up" />
                <Checkbox id="rating3" label="3 Stars & Up" />
                <Checkbox id="rating4" label="4 Stars & Up" />
                <Checkbox id="rating5" label="5 Stars" />
              </div>
            </div>

            {/* Apply Filters Button */}
            <Button className="mt-4 bg-blue-800 hover:bg-blue-900 text-white">
              Apply Filters
            </Button>
          </div>
        </Drawer.Items>
      </Drawer>
    </div>
  );
}

export default Filters;
