// app/contest/[id]/page.tsx
import { Contest } from "../../../components/Contest";

export const dynamic = "force-dynamic";

export default async function ContestPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params Promise
  const { id } = await params;

  if (!id) {
    return <div>Contest doesn't exist...</div>;
  }

  return <Contest id={id} />;
}