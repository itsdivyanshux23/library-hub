
import BookDetail from './BookDetail';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function BookPage({ params }: { params: { id: string } }) {
  return <BookDetail bookId={params.id} />;
}
