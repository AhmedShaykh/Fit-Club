"use client";
import { FC } from "react";
import CoreCourses from "@/Components/CoreCourses";
import Blockchain from "@/Components/BlockChain";
import AI from "@/Components/AI";
import CNC from "@/Components/CNC";
import IOT from "@/Components/IOT";
import BIO from "@/Components/BIO";
import Auto from "@/Components/Auto";

const Courses: FC = () => {
    return (
        <>
            <CoreCourses />
            <AI />
            <Blockchain />
            <CNC />
            <IOT />
            <Auto />
            <BIO />
        </>
    )
};

export default Courses;