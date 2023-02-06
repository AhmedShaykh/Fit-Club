"use client";
import { FC } from 'react';
import CoreCourses from '@/Components/CoreCourses';
import Blockchain from '@/Components/BlockChain';

const Wmd: FC = () => {
    return (
        <>
            <CoreCourses />
            <Blockchain />
        </>
    )
};

export default Wmd;