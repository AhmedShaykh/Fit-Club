"use client";
import { FC } from 'react';
import CoreCourses from '@/Components/CoreCourses';
import AI from '@/Components/AI';

const Ai: FC = () => {
    return (
        <>
            <CoreCourses />
            <AI />
        </>
    )
};

export default Ai;