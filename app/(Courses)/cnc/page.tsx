"use client";
import { FC } from 'react';
import CoreCourses from '@/Components/CoreCourses';
import CNC from '@/Components/CNC';

const Cnc: FC = () => {
    return (
        <>
            <CoreCourses />
            <CNC />
        </>
    )
};

export default Cnc;