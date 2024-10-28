import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import '../Styles/AdminFooter.css'
export default function Footer(){
    return (        
        <div className="Footer">
            <div className="contact">
                <span>Contact Us : </span><br />
                Phone : 1224333343 <br /> Email : ekart@gmail.com
            </div>
            <div className="connect">
                <FacebookIcon/><InstagramIcon/><XIcon/><YouTubeIcon/>
            </div>
        </div>
)
}