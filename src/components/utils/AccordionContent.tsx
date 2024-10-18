"use client"
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// Define the interface for props
interface AccordionContentProps {
  title: string;
  content: React.ReactNode;
}

export function AccordionContent(props: AccordionContentProps) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} className="text-left"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <AccordionHeader onClick={() => handleOpen(1)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {props.title}
        </AccordionHeader>
        <AccordionBody>
          {props.content}
        </AccordionBody>
      </Accordion>
    </>
  );
}
