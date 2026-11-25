import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pageTitles: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Sruvora Infratech Pvt Ltd | Construction • Infrastructure • Landscaping',
    description: 'Turning blueprints into reality. Premier construction, infrastructure and landscaping company based in Bangalore, Karnataka.',
  },
  '/about': {
    title: 'About Us & Leadership | Sruvora Infratech Private Limited',
    description: 'Meet the executive leadership and civil engineering directors of Sruvora Infratech. Built on quality, safety, and sustainable execution.',
  },
  '/services': {
    title: 'Comprehensive Construction & Landscaping Services | Sruvora Infratech',
    description: 'Explore 12 specialized disciplines across residential construction, layout infrastructure, hardscape paving, softscape and water engineering.',
  },
  '/projects': {
    title: 'Execution Capabilities & Project Sectors | Sruvora Infratech',
    description: 'Verified technical competencies in civil superstructures, commercial hardscaping, automated irrigation, timber pergolas and estate landscapes.',
  },
  '/contact': {
    title: 'Contact Bangalore Office & Inquiries | Sruvora Infratech Pvt Ltd',
    description: 'Direct telephone, email and office coordinates in Bangalore Airport area. Request an integrated project estimate or site feasibility assessment.',
  },
}

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    const meta = pageTitles[pathname] || pageTitles['/']
    document.title = meta.title

    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', meta.description)
    }
  }, [pathname])

  return null
}
