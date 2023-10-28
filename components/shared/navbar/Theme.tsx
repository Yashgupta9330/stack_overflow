"use client";
import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { themes } from "@/constants";
import { MenubarItem } from "@radix-ui/react-menubar";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger
          className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:background-dark-200
       dark:data-[state=open]:bg-dark-200"
        >
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              className="active-theme"
              alt="sun"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              className="active-theme"
              alt="moon"
              width={20}
              height={20}
            />
          )}
        </MenubarTrigger>
        <MenubarContent>
          {themes.map((theme) => (
            <MenubarItem
              key={theme.value}
              className="dark:focus:background-dark-400 flex items-center gap-4 px-2.5 py-2"
              onClick={() => {
                setMode(theme.value);
                if(theme.value!=='system'){
                   localStorage.theme=theme.value;
                }
                else{
                  localStorage.removeItem('theme');
                }   
              }}
            >
              <Image
                src={theme.icon}
                alt={theme.label}
                width={16}
                height={16}
                className={`${mode === theme.value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  mode === theme.value
                    ? "text-primary-500"
                    : "text-dark-100_light900"
                }`}
              >
                {theme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
