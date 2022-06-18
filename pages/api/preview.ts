import type { NextApiRequest, NextApiResponse } from 'next'

import { getPageBySlug } from '../../services'

// A simple example for testing it manually from your browser.
// If this is located at pages/api/preview.js, then
// open /api/preview from your browser.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== 'secret' || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPageBySlug would implement the required fetching logic to the headless CMS
  const sanitizedSlug = Array.isArray(req.query.slug)
    ? `/${req.query.slug.join('/')}`
    : req.query.slug

  const result = await getPageBySlug(sanitizedSlug)

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!result) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.redirect(result.slug)
}
