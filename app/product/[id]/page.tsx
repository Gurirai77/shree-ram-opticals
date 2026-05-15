type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailsPage({
  params,
}: Props) {
  return (
    <div>
      Product ID: {params.id}
    </div>
  );
}