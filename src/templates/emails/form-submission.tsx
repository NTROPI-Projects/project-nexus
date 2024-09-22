import * as React from "react";
import { render, Section } from '@react-email/components';
import EmailLayout from './_components/email-layout';

const content = {
    padding: '40px 20px',
};

const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
};

interface FormSubmissionEmailProps {
    message: string;
}

export const FormSubmissionEmail = ({ message }: FormSubmissionEmailProps) => (
    <EmailLayout preview="Reset Password">
        <Section style={content}>
            <div dangerouslySetInnerHTML={{ __html: message }} />
        </Section>
    </EmailLayout>
);

FormSubmissionEmail.PreviewProps = {
    message: '',
} as FormSubmissionEmailProps;

export default FormSubmissionEmail;