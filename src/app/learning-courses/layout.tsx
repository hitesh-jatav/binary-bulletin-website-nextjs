import "@/styles/globals.css"; // Tailwind CSS imported here


export const metadata = {
  title: 'Learning Courses',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
