"use client";
import React from "react";
import Link from "next/link";
import Search from "./Search";
import CategoryDropDown from "./CategoryDropDown";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

function Nav() {
  return (
    <Navbar className="bg-blue-800 " fluid>
      <Navbar.Brand href="/">
        <img
          src="/images/logo.png"
          className="mr-3 h-12 sm:w-40 sm:h-16"
          alt="Logo"
        />
      </Navbar.Brand>
      <div>
        <Search />
      </div>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className="!text-white hover:!text-orange-500"
          href="/"
          active
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          className="text-white hover:!text-orange-500"
          href="/about"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          className="text-white hover:!text-orange-500"
          href="/favorites"
        >
          Favorites
        </Navbar.Link>
        <Navbar.Link className="text-white hover:!text-orange-500" href="cart">
          Cart
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
