export default async function Home({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {`Blog page ${params.slug}`}
    </main>
  );
}
