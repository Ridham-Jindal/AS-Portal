// components/Sidebar.js
"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Sidebar.css';

const Sidebar = () => {
    const router = useRouter();

    return (
        <div className='sidebar'>
            <nav>
                <ul>
                    <li className={router.pathname == "/dashboard" ? styles.active : ""}>
                        <Link href="/alumni/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li className={router.pathname == "/events" ? styles.active : ""}>
                        <Link href="/alumni/Events">
                            Events
                        </Link>
                    </li>
                    <li className={router.pathname == "/community" ? styles.active : ""}>
                        <Link href="/alumni/community">
                            Community
                        </Link>
                    </li>
                    <li className={router.pathname == "/profile" ? styles.active : ""}>
                        <Link href="/alumni/profile">
                            Profile
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
