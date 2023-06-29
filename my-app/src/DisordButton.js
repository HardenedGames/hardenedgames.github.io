/* React Component Version */
import React from "react";
import DisordJoinBannerImage from './Images/JoinDiscordBanner.png'

const DiscordButton = () => (
  <a
    href='https://discord.gg/ObscureDepths'
    style={{
      color: "white",
      fontWeight: "bold",
      borderRadius: 8,
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none"
    }}
  >
    <img src={DisordJoinBannerImage} />
  </a>
);

export default DiscordButton;