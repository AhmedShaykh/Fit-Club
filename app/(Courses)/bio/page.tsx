"use client";
import { FC } from 'react';
import CoreCourses from '@/Components/CoreCourses';
import BIO from '@/Components/BIO';

const Bio: FC = () => {
    return (
        <>
            <CoreCourses />
            <BIO />
        </>
    )
};

export default Bio;