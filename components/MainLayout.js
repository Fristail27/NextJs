import Link from "next/link";
import Head from "next/head";
import React from "react";
import {LinearProgress} from "@material-ui/core";
import style from './../styles/stylex.module.css'

export default function MainLayout ({children, title = 'next app', isLoading, setIsLoading}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="next,javascript,react"/>
                <meta name="description" content="this is youtube tutorial"/>
                <meta charSet="utf-8"/>
            </Head>
            <nav>
                <Link onClick={() => setIsLoading(true)} href={"/"}><a onClick={() => setIsLoading(true)}>Home</a></Link>
                <Link onClick={() => setIsLoading(true)}  href={"/table"}><a onClick={() => setIsLoading(true)}>Table</a></Link>
                <Link href={"/posts"}><a>Posts</a></Link>
            </nav>
            {isLoading
                ? <>
                <LinearProgress />
                <LinearProgress   color="secondary" />
                </>
                : null
            }

            <main>
                {children}
            </main>
            <style jsx>{`
              nav {
                position: fixed;
                height: 60px;
                left: 0;
                top: 0;
                right: 0;
                background: darkblue;
                display: flex;
                justify-content: space-around;
                align-items: center;
              }

              nav a {
                color: white;
                text-decoration: none;
              }

              main {
                margin-top: 60px;
                padding: 1rem;
              }
            `}</style>
        </>
    )
}