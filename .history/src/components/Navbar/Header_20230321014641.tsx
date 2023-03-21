import { EmailOutlined, LocationOnOutlined, PhoneOutlined } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.scss";
export default class Header extends React.Component{
    render(): React.ReactNode {

        
        return(
            <div className={styles.header}
            style={{
                // height: this.state.scroll === 0 ? "75px" : "0",
                // top: this.state.scroll === 0 ? "-305px" : "0"
            }}
        >
            <div className={styles.logo}>
                {/* <img src="/logo.png" alt="logo" width={200} height={150} /> */}
                <Link href={"/"}>
                <h1>PT</h1>
                </Link>
            </div>
            <div className={styles.contact_container}>
                <div className={styles.contact}>
                    <LocationOnOutlined />
                    <div className="info">
                        <h1>Address</h1>
                        <p>Nepalgunj Banke</p>
                    </div>
                </div>
                <div className={styles.contact}>
                    <PhoneOutlined />
                    <div className="info">
                        <h1>Phone</h1>
                        <Link href={"tel:+9779816514719"}>9816514719</Link>
                    </div>
                </div>
                <div className={styles.contact}>
                    <EmailOutlined />
                    <div className="info">
                        <h1>Email</h1>
                        <Link href={"mailto: prashant.thapa62758@gmail.com"} className="lowercase">prashant.thapa62758@gmail.com</Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}