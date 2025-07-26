import { Contest } from "../../../components/Contest";

export default function ContestPage({ params }: { params: { id: string } }) {
  if (!params?.id) {
    return <div>Contest doesn't exist...</div>;
  }

  return <Contest id={params.id} />;
}

// Optional: This forces the page to be dynamic (like getServerSideProps)
export const dynamic = "force-dynamic";
