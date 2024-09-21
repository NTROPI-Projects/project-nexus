import * as React from "react";
import { Link, Section, Text, Hr } from '@react-email/components';

export const EmailFooter = () => {
  return (
    <>
      <Section className="bg-[#252f3d] px-3 py-2 font-medium leading-4 text-white">
        <Text className="text-white text-center">
          <Link href="https://nexusstudios.eu">nexusstudios.eu</Link>
        </Text>
      </Section>

      <Hr style={footerDivider} />

      <Text className='text-center'>
        Powered by <Link href="https://cgowt.com">CGOWT</Link>
      </Text>
    </>
  );
};

export default EmailFooter;

const footerDivider = {
  margin: "30px 0",
  borderColor: "#d6d8db",
};