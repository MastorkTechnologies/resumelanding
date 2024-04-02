import ScriptFile from "@/assets/Script";
import "./globals.css";

export const metadata = {
  title: "Resume Craft",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
      <ScriptFile />
    </html>
  );
}
