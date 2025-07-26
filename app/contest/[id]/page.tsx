// app/contest/[id]/page.tsx
import { Contest } from "../../../components/Contest";

export const dynamic = "force-dynamic";

export default async function ContestPage(
  { params }: { params: { id: string } } // ← inline this, don’t alias it
) {
  if (!params?.id) {
    return <div>Contest doesn't exist...</div>;
  }

  return <Contest id={params.id} />;
}
