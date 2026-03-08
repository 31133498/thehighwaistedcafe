# Email Setup Instructions

## To Enable Contact Form Emails:

1. **Sign up for Resend** (Free tier: 100 emails/day)
   - Go to: https://resend.com/signup
   - Verify your email

2. **Get API Key**
   - Go to: https://resend.com/api-keys
   - Click "Create API Key"
   - Copy the key

3. **Add to Vercel**
   - Go to your Vercel project settings
   - Click "Environment Variables"
   - Add:
     - Name: `RESEND_API_KEY`
     - Value: `your_api_key_here`
   - Click "Save"

4. **Verify Domain (Optional but recommended)**
   - In Resend dashboard, go to "Domains"
   - Add: `thehighwaistedcafe.com`
   - Add DNS records to Namecheap
   - Once verified, update actions.ts line 33:
     ```
     from: 'High Waisted Cafe <noreply@thehighwaistedcafe.com>',
     ```

5. **Redeploy**
   - Push any change to GitHub
   - Vercel will auto-deploy with new env variable

## Test the Form
After setup, submit a test message on your website. You'll receive it at info@HighWaistedCafe.com
