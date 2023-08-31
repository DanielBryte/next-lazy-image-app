import './globals.css'


export const metadata = {
  title: 'Next Lazy Loading',
  description: 'A Next Image Lazy Loading Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
