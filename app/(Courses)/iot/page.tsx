"use client";
import { FC } from 'react';
import CoreCourses from '@/Components/CoreCourses';
import IOT from '@/Components/IOT';

const Iot: FC = () => {
    return (
        <>
            <CoreCourses />
            <IOT />
        </>
    )
};

export default Iot;