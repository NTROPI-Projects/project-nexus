import * as React from "react";
import { Section, Img } from '@react-email/components';
import { baseUrl } from "../_utilities/baseUrl";

export const EmailHeader = () => {
  return (
    <Section style={header}>
      <Img src={`${baseUrl}/static/nexus-studio-logo.png`} alt="Nexus Studio Logo" />
    </Section>
  );
};

export default EmailHeader;

const header = {
  backgroundColor: "#252f3d",
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
}