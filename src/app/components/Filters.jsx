"use client";
import { Button, Drawer, Checkbox, Label, RangeSlider } from "flowbite-react";
import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import useCategories from "../hooks/useCategories";

function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const { categories, status } = useCategories();
  const [priceRange, setPriceRange] = useState(50);

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
                {status === "loading" && <p>Loading categories...</p>}
                {status === "failed" && <p>Failed to load categories</p>}
                {status === "succeeded" && categories.length === 0 && (
                  <p>No categories found.</p>
                )}
                {status === "succeeded" &&
                  categories.map((category) => (
                    <div key={category._id} className="flex items-center">
                      <Checkbox
                        id={category._id}
                        name={category._id}
                        className="mr-2"
                      />
                      <Label htmlFor={category._id}>{category.name}</Label>
                    </div>
                  ))}
              </div>
            </div>

            {/* Subcategory Filter */}
            <div>
              <h3 className="text-lg font-semibold">Subcategory</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="accessories"
                    name="accessories"
                    className="mr-2"
                  />
                  <Label htmlFor="accessories">Accessories</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="bags" name="bags" className="mr-2" />
                  <Label htmlFor="bags">Bags</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="knitwear" name="knitwear" className="mr-2" />
                  <Label htmlFor="knitwear">Knitwear</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="pottery" name="pottery" className="mr-2" />
                  <Label htmlFor="pottery">Pottery</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="prints" name="prints" className="mr-2" />
                  <Label htmlFor="prints">Prints</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="stationery"
                    name="stationery"
                    className="mr-2"
                  />
                  <Label htmlFor="stationery">Stationery</Label>
                </div>
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="text-lg font-semibold">Price Range</h3>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="priceRange">Price Range: ${priceRange}</Label>
                <RangeSlider
                  id="priceRange"
                  min={10}
                  max={1000}
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                />
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <h3 className="text-lg font-semibold">Rating</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Checkbox id="rating1" name="rating1" className="mr-2" />
                  <Label htmlFor="rating1">1 Star & Up</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="rating2" name="rating2" className="mr-2" />
                  <Label htmlFor="rating2">2 Stars & Up</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="rating3" name="rating3" className="mr-2" />
                  <Label htmlFor="rating3">3 Stars & Up</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="rating4" name="rating4" className="mr-2" />
                  <Label htmlFor="rating4">4 Stars & Up</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="rating5" name="rating5" className="mr-2" />
                  <Label htmlFor="rating5">5 Stars</Label>
                </div>
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
