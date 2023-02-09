import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import logo from "./img/tp-logo.png"



const config: DocsThemeConfig = {
  // logo:      <h1 size={"xl"} weight={"bolder"} >teacher</Text>
  // <Image src={logo} width={50} height={50} my={10} onClick={() => navigate("/landing")} />
  //   <Text size={"xl"} weight={"bolder"} >'s pet</h>,



  logo: 
  <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
    <strong style={{fontSize:  "20px"}}>teacher</strong>
    <Image src={logo} width={50} height={50} alt="Logo"/>
    <strong style={{fontSize:  "20px"}}>'s</strong>
    <strong style={{fontSize:  "20px", color: "orange", marginLeft: "10px"}}>academy</strong>
  </div>

    ,
  project: {
    link: 'https://github.com/DerekHsiehDev/TeachersPet-Academy',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/DerekHsiehDev/TeachersPet-Academy',
  footer: {
    text: 'TeachersPet Academy',
  },
  nextThemes: {
      defaultTheme: "light",
  },
  darkMode: false
}

export default config
