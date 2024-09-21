import * as React from "react";
import { Tailwind, Font, Body, Container, Head, Html, Preview } from '@react-email/components';
import EmailHeader from './email-header';
import EmailFooter from './email-footer';

type EmailLayoutProps = {
  children: React.ReactNode;
  preview?: string;
};

export const EmailLayout = ({ children, preview }: EmailLayoutProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head>
            <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
                url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
                format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
            />
        </Head>
        <Preview>{preview}</Preview>
        <Body>
          <Container>
            <EmailHeader />
            {children}
            <EmailFooter />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailLayout;