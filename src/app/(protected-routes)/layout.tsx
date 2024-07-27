export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthorized = true;
  if (!isAuthorized) return <main>you are unauthorized to see this page</main>;
  return <main>{children}</main>;
}
