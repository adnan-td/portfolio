import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { token } from "../../../lib/sanity.fetch";

const PreviewProvider = dynamic(() => import("../../components-blog/PreviewProvider"));

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {draftMode().isEnabled ? (
          <PreviewProvider token={token}>{children}</PreviewProvider>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
