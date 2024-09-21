import * as React from "react";
import { Text, Section, Heading, Button } from '@react-email/components';
import EmailLayout from './_components/email-layout';

const content = {
    padding: '40px 20px',
};

const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
};

interface ResetPasswordEmailProps {
    token: string;
}

export const ResetPasswordEmail = ({ token }: ResetPasswordEmailProps) => (
    <EmailLayout preview="Reset Password">
        <Section style={content}>
            <Heading as="h1" className="mt-0">
                Reset Your Password
            </Heading>
            <Text style={paragraph}>
                You are receiving this because you (or someone else) has requested to reset the password for
                your account.{' '}
            </Text>
            <Button
                href={`http://localhost:3000/admin/reset/${token}`}
                style={{ backgroundColor: '#252f3d', color: '#fff', padding: '10px 20px' }}
            >
                Reset your password
            </Button>
        </Section>
    </EmailLayout>
);

ResetPasswordEmail.PreviewProps = {
    token: '6377f4c0adf223b79c3e674c649f6f438153952d',
} as ResetPasswordEmailProps;

export default ResetPasswordEmail;