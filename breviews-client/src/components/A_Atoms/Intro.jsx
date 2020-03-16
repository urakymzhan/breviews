import React from 'react'
import { motion } from "framer-motion";


export default function Intro() {

    // animation variable
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <motion.div 
            className="intro"
            style={intro}
            initial="hidden"
            animate="visible"
            transition={{ duration: 5, times: [0, 0.2, 1] }}
            variants={variants}
            >  
            <h2 style={{marginBottom: "0.2em"}}>Not sure which bootcamp to choose?</h2>
            <p style={{marginTop: "0", color: "#fffbd7"}} >This platform will help you decide</p>   
        </motion.div>
    )
}

// STYLES:
const intro = {
    background: "rgb(255, 51, 0, 0.8)",
    width: "60%",
    margin: "20px auto",
    padding: "1%"
}
