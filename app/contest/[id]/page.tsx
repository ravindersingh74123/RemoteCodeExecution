import { Contest } from "../../../components/Contest";
import { type Metadata } from "next";

// ✅ If you use dynamic metadata
export const dynamic = "force-dynamic";

type Props = {
  params: {
    id: string;
  };
};

export default async function ContestPage({ params }: Props) {
  if (!params?.id) {
    return <div>Contest doesn't exist...</div>;
  }

  return <Contest id={params.id} />;
}
