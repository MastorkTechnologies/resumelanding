import "./globals.css";

export const metadata = {
  title: "Resume Shaper",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
