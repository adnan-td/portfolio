export default function Page({ params }: { params: { title: string } }) {
  return (
    <div>
      <h1>Hello Page {params.title}</h1>
    </div>
  );
}
