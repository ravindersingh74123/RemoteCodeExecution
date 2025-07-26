import { Contest } from "../../../components/Contest";
import { type FC } from "react";

interface ContestPageProps {
  params: {
    id: string;
  };
}

const ContestPage: FC<ContestPageProps> = ({ params }) => {
  const { id } = params;

  if (!id) {
    return <div>Contest doesn't exist...</div>;
  }

  return <Contest id={id} />;
};

export default ContestPage;

export const dynamic = "force-dynamic";
