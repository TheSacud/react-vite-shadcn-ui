import React from "react";
import { Link } from "react-router-dom";
import { Menu, Package2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import { useAuth } from '@/context/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b border-gray-200 bg-transparent px-4 md:px-6 backdrop-blur-md">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <Package2 className="h-6 w-6" />
          <span>NextGenTale</span>
        </Link>
        <Link
          to="/case-studies"
          className="text-gray-900 dark:text-gray-100 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
        >
          Case Studies
        </Link>
        <Link
          to="/blog"
          className="text-gray-900 dark:text-gray-100 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
        >
          Blog
        </Link>
        <Link
          to="/about"
          className="text-gray-900 dark:text-gray-100 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
        >
          About
        </Link>
        <Link
          to="/company"
          className="text-gray-900 dark:text-gray-100 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
        >
          Company
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span>NextGenTale</span>
            </Link>
            <Link
              to="/case-studies"
              className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Case Studies
            </Link>
            <Link
              to="/blog"
              className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
            >
              About
            </Link>
            <Link
              to="/company"
              className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Company
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="ml-auto flex items-center space-x-4">
        <Input
          type="search"
          placeholder="Search..."
          className="w-full max-w-xs md:max-w-sm bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-gray-500"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">
              <User className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {isAuthenticated ? (
              <>
                <DropdownMenuItem asChild>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/support">Support</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  Logout
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem asChild>
                  <Link to="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/register">Register</Link>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;