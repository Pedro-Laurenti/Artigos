'use client'

import Layout from "../layout";
import styles from "./studio.module.scss";

export default function Studio({ children }: { children: any; }) {

    return (
        <Layout>
            <div className={styles.styleStudio}>    
                {children}
            </div>
        </Layout>
    )

}