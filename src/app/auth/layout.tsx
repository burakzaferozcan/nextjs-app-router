export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <footer className="bg-red-500 fixed bottom-0  right-0">
        this is logo
      </footer>
    </main>
  );
}
