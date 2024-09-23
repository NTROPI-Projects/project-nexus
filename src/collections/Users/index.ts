import type { CollectionConfig, PayloadRequest } from 'payload'

import { authenticated } from '../../access/authenticated'
import ResetPasswordEmail from '@/templates/emails/reset-password';
import { render } from '@react-email/components';
import { User } from '@/payload-types';

interface GenerateEmailHTMLParams {
  req: PayloadRequest;
  token: string;
  user: User;
}

interface GenerateEmailSubjectParams {
  req: PayloadRequest,
  user: User
}

const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: {
    tokenExpiration: 7 * 60 * 60 * 24, // 7 days
    cookies: {
      sameSite:
        process.env.NODE_ENV === 'production' && !process.env.DISABLE_SECURE_COOKIE
          ? 'None'
          : undefined,

      secure:
        process.env.NODE_ENV === 'production' && !process.env.DISABLE_SECURE_COOKIE
          ? true
          : undefined,

      domain: process.env.COOKIE_DOMAIN,
    },
    forgotPassword: {
      generateEmailSubject: ({ req, user }: GenerateEmailSubjectParams) => {
        return `Reset your password for ${user?.name}`
      },
      generateEmailHTML: async ({ req, token, user }: GenerateEmailHTMLParams) => {
        return render(ResetPasswordEmail({ token }), { pretty: true })
      },
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}

export default Users
