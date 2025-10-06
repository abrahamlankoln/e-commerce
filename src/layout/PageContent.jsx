export default function PageContent({ children }) {
  return (
    <main className="flex flex-col p-4 md:p-8">
      {children}
    </main>
  );
}
